
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, variant?: string) => void;
    removeFromCart: (productId: number, variant?: string) => void;
    updateQuantity: (productId: number, delta: number, variant?: string) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    totalOriginalPrice: number;
    totalDiscount: number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper to parse string price to number (e.g., "$35.00" -> 35.00)
const parsePrice = (priceStr: string): number => {
    const num = parseFloat(priceStr.replace('S/', '').replace(',', '').trim());
    return isNaN(num) ? 0 : num;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('aura_cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem('aura_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product, variant?: string) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id && item.selectedVariant === variant);
            if (existing) {
                return prev.map(item =>
                    (item.id === product.id && item.selectedVariant === variant)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1, selectedVariant: variant }];
        });
        setIsCartOpen(true); // Open cart when adding
    };

    const removeFromCart = (productId: number, variant?: string) => {
        setCart(prev => prev.filter(item => !(item.id === productId && item.selectedVariant === variant)));
    };

    const updateQuantity = (productId: number, delta: number, variant?: string) => {
        setCart(prev => prev.map(item => {
            if (item.id === productId && item.selectedVariant === variant) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = cart.reduce((sum, item) => {
        return sum + (parsePrice(item.price) * item.quantity);
    }, 0);

    const totalOriginalPrice = cart.reduce((sum, item) => {
        // Use originalPrice if available, otherwise use price (no discount)
        const itemOriginal = item.originalPrice ? parsePrice(item.originalPrice) : parsePrice(item.price);
        return sum + (itemOriginal * item.quantity);
    }, 0);

    const totalDiscount = totalOriginalPrice - totalPrice;

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice,
            totalOriginalPrice,
            totalDiscount,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
