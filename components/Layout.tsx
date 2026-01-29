
import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ChatBot from './ChatBot';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [recentlyViewed, setRecentlyViewed] = useState<number[]>([]);
    const [upsellExpanded, setUpsellExpanded] = useState(true);
    
    const { 
        totalItems, 
        isCartOpen, 
        setIsCartOpen, 
        cart, 
        totalPrice 
    } = useCart();

    useEffect(() => {
        const saved = localStorage.getItem('aura_recently_viewed');
        if (saved) {
            try {
                setRecentlyViewed(JSON.parse(saved));
            } catch (e) {
                console.error("Error parsing recently viewed", e);
            }
        }
    }, [location.pathname]);

    const upsellProducts = useMemo(() => {
        const cartIds = cart.map(item => item.id);
        const available = products.filter(p => !cartIds.includes(p.id));
        const recentlyViewedProducts = available.filter(p => recentlyViewed.includes(p.id));
        const cartCategories = Array.from(new Set(cart.map(item => item.category)));
        const cartIntentions = Array.from(new Set(cart.map(item => item.intention).filter(Boolean)));
        
        const relatedProducts = available.filter(p => 
            !recentlyViewed.includes(p.id) && 
            (cartCategories.includes(p.category) || (p.intention && cartIntentions.includes(p.intention)))
        );

        return [...recentlyViewedProducts, ...relatedProducts, ...available]
            .filter((p, index, self) => self.findIndex(t => t.id === p.id) === index)
            .slice(0, 4);
    }, [cart, recentlyViewed]);

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <div className="min-h-screen flex flex-col font-display overflow-x-hidden">
            <header className="sticky top-0 z-50 border-b border-purple-500/10 bg-[#11001C]/80 backdrop-blur-md">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                    <Link to="/" className="flex items-center gap-4 cursor-pointer group">
                        <div className="flex size-8 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold transition-all group-hover:bg-accent-gold/20 border border-accent-gold/30">
                            <span className="material-symbols-outlined text-[20px]">self_improvement</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-widest text-text-main group-hover:text-accent-gold transition-colors">AURA</h2>
                    </Link>
                    
                    <nav className="hidden md:flex items-center gap-10">
                        <Link to="/" className={`text-sm font-light tracking-wide transition-colors hover:text-accent-gold ${location.pathname === '/' ? 'text-accent-gold' : 'text-purple-200'}`}>Inicio</Link>
                        <Link to="/store" className={`text-sm font-light tracking-wide transition-colors hover:text-accent-gold ${location.pathname === '/store' ? 'text-accent-gold' : 'text-purple-200'}`}>Productos</Link>
                        <Link to="/services" className={`text-sm font-light tracking-wide transition-colors hover:text-accent-gold ${location.pathname === '/services' ? 'text-accent-gold' : 'text-purple-200'}`}>Servicios</Link>
                        <Link to="/blog" className={`text-sm font-light tracking-wide transition-colors hover:text-accent-gold ${location.pathname.startsWith('/blog') ? 'text-accent-gold' : 'text-purple-200'}`}>Blog</Link>
                        <Link to="/contact" className={`text-sm font-light tracking-wide transition-colors hover:text-accent-gold ${location.pathname === '/contact' ? 'text-accent-gold' : 'text-purple-200'}`}>Contacto</Link>
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link to="/account" className="hidden sm:flex size-10 items-center justify-center rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-200 transition-transform hover:scale-105 hover:bg-purple-800/50 hover:text-white hover:border-accent-gold/50">
                            <span className="material-symbols-outlined text-[20px]">person</span>
                        </Link>
                        <button 
                            onClick={() => setIsCartOpen(true)}
                            className="relative flex size-10 items-center justify-center rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-200 transition-transform hover:scale-105 hover:bg-purple-800/50 hover:text-white hover:border-accent-gold/50"
                        >
                            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                            {totalItems > 0 && (
                                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-accent-gold text-deep-purple text-[10px] font-bold shadow-lg">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button 
                            className="md:hidden flex size-10 items-center justify-center rounded-full bg-transparent text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined text-[24px]">menu</span>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-[#1A0B2E] border-b border-purple-500/20 p-4 flex flex-col gap-4 shadow-2xl backdrop-blur-xl">
                         <Link to="/" className="text-purple-100 p-2 hover:bg-purple-900/20 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
                         <Link to="/store" className="text-purple-100 p-2 hover:bg-purple-900/20 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Productos</Link>
                         <Link to="/services" className="text-purple-100 p-2 hover:bg-purple-900/20 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
                         <Link to="/blog" className="text-purple-100 p-2 hover:bg-purple-900/20 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                         <Link to="/contact" className="text-purple-100 p-2 hover:bg-purple-900/20 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
                         <Link to="/account" className="text-purple-100 p-2 hover:bg-purple-900/20 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Mi Cuenta</Link>
                    </div>
                )}
            </header>

            {isCartOpen && (
                <div className="fixed inset-0 z-[60] flex justify-end">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
                    <div className="relative w-full max-w-5xl bg-[#1A0B2E] border-l border-purple-500/20 h-full shadow-2xl flex animate-slide-in-right overflow-hidden">
                        
                        {/* LEFT: UPSELL (Intelligent & Collapsible) */}
                        <div className={`hidden md:flex flex-col border-r border-purple-500/10 bg-[#11001C] transition-all duration-500 overflow-hidden ${upsellExpanded ? 'w-[45%] opacity-100' : 'w-0 opacity-0'}`}>
                            <div className="p-8 h-full overflow-y-auto no-scrollbar">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-lg font-display text-text-main flex items-center gap-2">
                                        <span className="material-symbols-outlined text-accent-gold">magic_button</span>
                                        Sugerencias para ti
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 gap-8">
                                    {upsellProducts.map(product => (
                                        <div key={product.id} className="scale-95 transition-transform hover:scale-100">
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: CART CONTENT */}
                        <div className="flex-1 flex flex-col w-full md:w-[55%] bg-[#1A0B2E]">
                            <div className="flex items-center justify-between p-6 border-b border-purple-500/10">
                                <div className="flex items-center gap-4">
                                    <button 
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-purple-300 hover:text-white flex items-center justify-center p-2 rounded-full hover:bg-white/5"
                                    >
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                    <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
                                        Carrito ({totalItems})
                                    </h2>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button 
                                        onClick={() => setUpsellExpanded(!upsellExpanded)}
                                        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/20 text-xs font-bold text-purple-200 hover:text-white hover:bg-purple-800/50 transition-all"
                                    >
                                        <span className="material-symbols-outlined text-sm">{upsellExpanded ? 'visibility_off' : 'auto_awesome'}</span>
                                        {upsellExpanded ? 'Ocultar recomendaciones' : 'Ver recomendaciones'}
                                    </button>
                                    <button onClick={() => setIsCartOpen(false)} className="text-purple-300 hover:text-white p-2">
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center opacity-50 text-purple-300">
                                        <span className="material-symbols-outlined text-6xl mb-4">shopping_basket</span>
                                        <p>Tu cesta está vacía</p>
                                    </div>
                                ) : (
                                    cart.map((item) => (
                                        <CartItemRow key={`${item.id}-${item.selectedVariant}`} item={item} />
                                    ))
                                )}
                            </div>

                            {cart.length > 0 && (
                                <div className="p-6 border-t border-purple-500/10 bg-[#150524]">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-purple-300">Total</span>
                                        <span className="text-2xl font-bold text-accent-gold font-body">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Link 
                                            to="/cart"
                                            onClick={() => setIsCartOpen(false)}
                                            className="py-4 rounded-full border border-purple-500/30 text-purple-200 font-bold transition-all hover:bg-purple-500/10 flex items-center justify-center"
                                        >
                                            Ver Carrito
                                        </Link>
                                        <button onClick={handleCheckout} className="py-4 rounded-full bg-gold-gradient text-deep-purple font-bold shadow-lg shadow-accent-gold/20 transition-all hover:scale-105 flex items-center justify-center gap-2">
                                            <span>Pagar</span>
                                            <span className="material-symbols-outlined">lock</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <main className="flex-grow pt-0 z-10">{children}</main>
            <ChatBot />

            <footer className="border-t border-purple-500/10 bg-[#0f0518] pt-16 pb-8 z-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-accent-gold text-[24px]">self_improvement</span>
                                <span className="text-lg font-bold text-white">AURA</span>
                            </div>
                            <p className="text-sm text-purple-300 font-body leading-relaxed">Tu espacio sagrado digital para el crecimiento personal y el bienestar holístico.</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4">Menú</h3>
                            <ul className="space-y-2 text-sm text-purple-300 font-body">
                                <li><Link className="hover:text-accent-gold transition-colors" to="/">Inicio</Link></li>
                                <li><Link className="hover:text-accent-gold transition-colors" to="/store">Productos</Link></li>
                                <li><Link className="hover:text-accent-gold transition-colors" to="/services">Servicios</Link></li>
                                <li><Link className="hover:text-accent-gold transition-colors" to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4">Soporte</h3>
                            <ul className="space-y-2 text-sm text-purple-300 font-body">
                                <li><Link className="hover:text-accent-gold transition-colors" to="/contact">Contacto</Link></li>
                                <li><Link className="hover:text-accent-gold transition-colors" to="/account">Mi Cuenta</Link></li>
                                <li><a className="hover:text-accent-gold transition-colors" href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
                            <ul className="space-y-2 text-sm text-purple-300 font-body">
                                <li><a className="hover:text-accent-gold transition-colors" href="#">Privacidad</a></li>
                                <li><a className="hover:text-accent-gold transition-colors" href="#">Términos</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-purple-500/10 pt-8 text-center text-xs text-purple-400 font-body">
                        © 2024 Aura Tienda Holística. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
            
            {/* Attribution Bar */}
            <div className="w-full h-10 bg-[#0a0310] flex items-center justify-center border-t border-purple-500/5 z-30">
                <p className="text-[10px] text-purple-400 flex items-center gap-1 font-body tracking-wider uppercase">
                    Hecho con <span className="material-symbols-outlined text-[12px] text-red-400/80">favorite</span> Booster Perú
                </p>
            </div>
        </div>
    );
};

const CartItemRow: React.FC<{ item: any }> = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();
    return (
        <div className="flex gap-4 bg-purple-500/5 p-4 rounded-xl border border-purple-500/10 group hover:border-purple-500/30 transition-colors">
            <div className="size-16 rounded-lg overflow-hidden bg-[#11001C] shrink-0 border border-purple-500/10">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-sm font-medium text-white line-clamp-1">{item.name}</h3>
                        {item.selectedVariant && <p className="text-[10px] text-purple-300 font-body">{item.selectedVariant}</p>}
                    </div>
                    <button onClick={() => removeFromCart(item.id, item.selectedVariant)} className="text-purple-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold text-accent-gold font-body">{item.price}</span>
                    <div className="flex items-center gap-2 bg-[#11001C]/60 rounded-lg px-2 py-1 border border-purple-500/10">
                        <button onClick={() => updateQuantity(item.id, -1, item.selectedVariant)} className="text-purple-300 hover:text-white text-xs">-</button>
                        <span className="text-xs w-3 text-center text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1, item.selectedVariant)} className="text-purple-300 hover:text-white text-xs">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
