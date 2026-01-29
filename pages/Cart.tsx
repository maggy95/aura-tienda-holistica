
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Cart: React.FC = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart, updateQuantity, totalPrice, totalOriginalPrice, totalDiscount } = useCart();

    const shippingCost = totalPrice > 75 ? 0 : 5.00;
    const finalTotal = totalPrice + shippingCost;

    const crossSellProducts = useMemo(() => {
        return products.filter(p => !cart.some(c => c.id === p.id)).slice(0, 4);
    }, [cart]);

    if (cart.length === 0) {
        return (
            <div className="pt-32 pb-20 min-h-screen text-white px-6 text-center">
                <span className="material-symbols-outlined text-6xl text-purple-700 mb-6">shopping_bag</span>
                <h1 className="text-3xl font-display mb-4">Tu carrito está vacío</h1>
                <p className="text-purple-300 mb-8 font-body">Parece que aún no has encontrado tu objeto de poder.</p>
                <Link to="/store" className="bg-gold-gradient text-deep-purple px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
                    Volver a la Tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h1 className="text-4xl font-display font-light mb-12">Tu Carrito de Compras</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart List */}
                    <div className="flex-1 space-y-6">
                        <div className="bg-card-purple border border-purple-500/10 rounded-2xl overflow-hidden">
                            <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_0.5fr] gap-4 p-4 border-b border-purple-500/10 text-sm text-purple-300 uppercase tracking-wider font-body">
                                <div>Producto</div>
                                <div className="text-center">Cantidad</div>
                                <div className="text-right">Precio</div>
                                <div></div>
                            </div>
                            {cart.map((item) => {
                                const isSale = !!item.originalPrice;
                                return (
                                    <div key={`${item.id}-${item.selectedVariant}`} className="p-4 border-b border-purple-500/5 last:border-0 grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_0.5fr] gap-4 items-center">
                                        <div className="flex gap-4">
                                            <Link to={`/product/${item.id}`} className="size-24 rounded-xl overflow-hidden bg-purple-900/50 shrink-0 border border-purple-500/20">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </Link>
                                            <div>
                                                <Link to={`/product/${item.id}`} className="font-bold text-lg hover:text-accent-gold transition font-display">{item.name}</Link>
                                                {item.selectedVariant && <p className="text-sm text-purple-300 font-body">{item.selectedVariant}</p>}
                                                {isSale && (
                                                    <span className="inline-block mt-1 text-xs font-bold text-red-300 bg-red-900/20 px-2 py-0.5 rounded font-body">
                                                        Oferta
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-center">
                                            <div className="flex items-center bg-[#11001C]/60 rounded-lg border border-purple-500/20 px-2 py-1">
                                                <button onClick={() => updateQuantity(item.id, -1, item.selectedVariant)} className="px-2 text-purple-300 hover:text-white">-</button>
                                                <span className="w-8 text-center text-sm font-body">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1, item.selectedVariant)} className="px-2 text-purple-300 hover:text-white">+</button>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            {isSale && <p className="text-sm text-purple-300/50 line-through font-body">{item.originalPrice}</p>}
                                            <p className={`font-bold text-lg ${isSale ? 'text-red-300' : 'text-accent-gold'} font-body`}>{item.price}</p>
                                        </div>

                                        <div className="text-right">
                                            <button onClick={() => removeFromCart(item.id, item.selectedVariant)} className="text-purple-400 hover:text-red-400 transition-colors">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="w-full lg:w-[380px]">
                        <div className="bg-card-purple border border-purple-500/10 rounded-2xl p-6 sticky top-24">
                            <h2 className="text-xl font-bold mb-6 font-display">Resumen del Pedido</h2>
                            <div className="space-y-4 text-sm text-purple-200 font-body">
                                <div className="flex justify-between">
                                    <span>Subtotal (Precio Original)</span>
                                    <span>${totalOriginalPrice.toFixed(2)}</span>
                                </div>
                                {totalDiscount > 0 && (
                                    <div className="flex justify-between text-green-300">
                                        <span>Descuentos</span>
                                        <span>-${totalDiscount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span>Envío</span>
                                    <span>{shippingCost === 0 ? "Gratis" : `$${shippingCost.toFixed(2)}`}</span>
                                </div>
                                <div className="pt-4 border-t border-purple-500/20 flex justify-between text-lg font-bold text-white">
                                    <span>Total Final</span>
                                    <span className="text-accent-gold">${finalTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => navigate('/checkout')}
                                className="w-full mt-8 py-4 bg-gold-gradient text-deep-purple font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 hover:scale-[1.02]"
                            >
                                <span>Finalizar Compra</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cross Sell */}
                <div className="mt-24 border-t border-purple-500/10 pt-12">
                    <h2 className="text-2xl font-display mb-8">También te podría interesar</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {crossSellProducts.map((p) => {
                             const isSale = !!p.originalPrice;
                             return (
                                <Link key={p.id} to={`/product/${p.id}`} className="group block bg-card-purple rounded-2xl p-4 border border-purple-500/5 hover:border-purple-500/20 transition">
                                    <div className="aspect-square rounded-xl overflow-hidden mb-4 relative bg-[#11001C]">
                                        <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                        {isSale && (
                                            <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Oferta</span>
                                        )}
                                    </div>
                                    <h3 className="font-medium text-white group-hover:text-accent-gold transition font-display">{p.name}</h3>
                                    <div className="flex items-center gap-2 font-body">
                                         <p className={`text-sm ${isSale ? 'text-red-300 font-bold' : 'text-purple-300'}`}>{p.price}</p>
                                         {isSale && <p className="text-xs text-purple-300/50 line-through">{p.originalPrice}</p>}
                                    </div>
                                </Link>
                             );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
