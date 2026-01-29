
import React from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { Link, useNavigate } from 'react-router-dom';

// Helper to calculate discount percentage
const getDiscountPercentage = (price: string, original: string): number => {
    const p = parseFloat(price.replace('$', ''));
    const o = parseFloat(original.replace('$', ''));
    if (isNaN(p) || isNaN(o) || o === 0) return 0;
    return Math.round(((o - p) / o) * 100);
};

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    
    const hasVariants = product.variants && product.variants.length > 0;
    const isSale = !!product.originalPrice;
    const discount = isSale && product.originalPrice ? getDiscountPercentage(product.price, product.originalPrice) : 0;

    const handleAction = (e: React.MouseEvent) => {
        e.preventDefault(); 
        e.stopPropagation();

        if (!product.inStock) return;

        if (hasVariants) {
            navigate(`/product/${product.id}`);
        } else {
            addToCart(product);
        }
    };

    const displayImage = product.images && product.images.length > 0 ? product.images[0] : product.image;

    // --- BADGE LOGIC ---
    let badgeLabel = null;
    let badgeStyle = "";

    if (isSale && discount > 0) {
        badgeLabel = `-${discount}%`;
        badgeStyle = "bg-red-500/90 text-white shadow-lg border-red-500/20";
    } else {
        const label = product.tag || product.category;
        if (label) {
            badgeLabel = label;
            const isPromoTag = label.toLowerCase().includes('oferta') || label.includes('%');
            badgeStyle = isPromoTag 
                ? "bg-red-500/20 text-red-200 border-red-500/20" 
                : "bg-accent-gold/20 text-accent-gold border-accent-gold/20 backdrop-blur-md";
        }
    }

    return (
        <Link to={`/product/${product.id}`} className={`block group relative flex flex-col overflow-hidden rounded-[2rem] bg-card-purple transition-all duration-500 border border-purple-500/10 h-full ${product.inStock ? 'hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(126,34,206,0.3)] hover:border-purple-500/30' : 'opacity-70 grayscale-[0.5]'}`}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#11001C]">
                {badgeLabel && (
                    <div className="absolute left-5 top-5 z-10">
                        <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${badgeStyle}`}>
                            {badgeLabel}
                        </span>
                    </div>
                )}
                
                {!product.inStock && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                        <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl">Agotado</span>
                    </div>
                )}

                <div className="absolute right-5 top-5 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="flex size-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-accent-gold hover:text-black transition-colors">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                </div>
                
                <img 
                    alt={product.name} 
                    className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-110" 
                    src={displayImage}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="flex flex-1 flex-col p-6 lg:p-8">
                <div className="mb-4">
                    <p className="text-[10px] text-accent-gold font-bold uppercase tracking-[0.2em] mb-2">{product.category}</p>
                    <h3 className="text-xl font-display font-medium text-white group-hover:text-accent-gold transition-colors mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-purple-200/70 line-clamp-2 font-body font-light leading-relaxed">{product.description}</p>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-purple-500/10">
                    <div className="flex flex-col">
                        {isSale && (
                            <span className="text-[10px] text-purple-300/50 line-through mb-0.5 font-body">{product.originalPrice}</span>
                        )}
                        <span className={`text-xl font-bold tracking-tight font-body ${isSale ? 'text-red-300' : 'text-white'}`}>
                            {product.price}
                        </span>
                    </div>
                    
                    {product.inStock && (
                        hasVariants ? (
                            <button 
                                onClick={handleAction}
                                className="px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold uppercase tracking-widest text-white transition hover:bg-accent-gold hover:text-deep-purple hover:border-accent-gold z-20"
                            >
                                Opciones
                            </button>
                        ) : (
                            <button 
                                onClick={handleAction}
                                className="flex size-12 items-center justify-center rounded-full bg-gold-gradient text-deep-purple transition hover:scale-110 hover:shadow-[0_0_20px_rgba(252,211,77,0.4)] active:scale-95 z-20"
                            >
                                <span className="material-symbols-outlined text-[24px]">add</span>
                            </button>
                        )
                    )}
                </div>
            </div>
        </Link>
    );
};
