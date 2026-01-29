
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { Order } from '../types';

const steps = ['Información', 'Envío', 'Pago', 'Confirmación'];

const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const { cart, totalPrice, totalOriginalPrice, totalDiscount, clearCart } = useCart();
    const { addOrder } = useUser();

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        address: '', city: '', zip: '', country: 'España',
        cardNumber: '', expiry: '', cvv: ''
    });

    const [orderId, setOrderId] = useState<string>('');

    const shippingCost = totalPrice > 300 ? 0 : 15.00;
    const finalTotal = totalPrice + shippingCost;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handlePlaceOrder = () => {
        // Simulate processing
        const newOrderId = `ORD-${Math.floor(Math.random() * 100000)}`;
        setOrderId(newOrderId);

        const newOrder: Order = {
            id: newOrderId,
            date: new Date().toLocaleDateString(),
            status: 'Procesando',
            items: [...cart],
            total: finalTotal,
            shippingAddress: `${formData.address}, ${formData.city}`
        };

        addOrder(newOrder);
        clearCart();
        nextStep(); // Go to confirmation
    };

    if (cart.length === 0 && currentStep !== 3) {
        return (
            <div className="pt-32 min-h-screen text-center px-4 text-purple-200">
                <p className="mb-4">Tu carrito está vacío.</p>
                <Link to="/store" className="text-accent-gold hover:underline">Ir a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Steps Indicator */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-4">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex items-center">
                                <div className={`flex items-center justify-center size-8 rounded-full text-xs font-bold ${idx <= currentStep ? 'bg-accent-gold text-deep-purple' : 'bg-purple-500/10 text-purple-400'
                                    }`}>
                                    {idx + 1}
                                </div>
                                <span className={`ml-2 text-sm ${idx <= currentStep ? 'text-white' : 'text-purple-400'} hidden sm:block font-body`}>{step}</span>
                                {idx < steps.length - 1 && <div className="w-8 h-px bg-purple-500/20 mx-4 hidden sm:block"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Form Area */}
                    <div className="flex-1 bg-card-purple border border-purple-500/10 rounded-2xl p-6 md:p-8">
                        {currentStep === 0 && (
                            <div className="space-y-6 animate-fade-in font-body">
                                <h2 className="text-2xl font-bold mb-6 font-display">Información de Contacto</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="text-xs text-purple-300 block mb-1">Nombre</label>
                                        <input required name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="text-xs text-purple-300 block mb-1">Apellidos</label>
                                        <input required name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-purple-300 block mb-1">Email</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                </div>
                                <div>
                                    <label className="text-xs text-purple-300 block mb-1">Teléfono</label>
                                    <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                </div>
                            </div>
                        )}

                        {currentStep === 1 && (
                            <div className="space-y-6 animate-fade-in font-body">
                                <h2 className="text-2xl font-bold mb-6 font-display">Dirección de Envío</h2>
                                <div>
                                    <label className="text-xs text-purple-300 block mb-1">Dirección</label>
                                    <input required name="address" value={formData.address} onChange={handleChange} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-purple-300 block mb-1">Ciudad</label>
                                        <input required name="city" value={formData.city} onChange={handleChange} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                    </div>
                                    <div>
                                        <label className="text-xs text-purple-300 block mb-1">Código Postal</label>
                                        <input required name="zip" value={formData.zip} onChange={handleChange} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-purple-300 block mb-1">País</label>
                                    <select name="country" value={formData.country} onChange={handleChange} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition text-white">
                                        <option value="España">España</option>
                                        <option value="México">México</option>
                                        <option value="Argentina">Argentina</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="space-y-6 animate-fade-in font-body">
                                <h2 className="text-2xl font-bold mb-6 font-display">Método de Pago</h2>
                                <div className="p-4 bg-[#11001C] border border-accent-gold/50 rounded-xl mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-accent-gold">credit_card</span>
                                    <span>Tarjeta de Crédito / Débito</span>
                                </div>
                                <div>
                                    <label className="text-xs text-purple-300 block mb-1">Número de Tarjeta</label>
                                    <input required name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="0000 0000 0000 0000" className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-purple-300 block mb-1">Expira (MM/YY)</label>
                                        <input required name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                    </div>
                                    <div>
                                        <label className="text-xs text-purple-300 block mb-1">CVV</label>
                                        <input required name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 outline-none focus:border-accent-gold transition" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="text-center py-12 animate-fade-in">
                                <div className="size-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                                </div>
                                <h2 className="text-3xl font-display text-white mb-2">¡Pedido Confirmado!</h2>
                                <p className="text-purple-300 mb-6 font-body">Tu orden #{orderId} ha sido procesada correctamente.</p>
                                <p className="text-sm text-purple-400 mb-8 font-body">Hemos enviado un email de confirmación a {formData.email}.</p>
                                <Link to="/account" className="inline-block bg-gold-gradient text-deep-purple px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
                                    Ver mis Pedidos
                                </Link>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        {currentStep < 3 && (
                            <div className="flex justify-between mt-8 pt-8 border-t border-purple-500/10">
                                {currentStep > 0 ? (
                                    <button onClick={prevStep} className="text-purple-400 hover:text-white flex items-center gap-2 font-body">
                                        <span className="material-symbols-outlined">arrow_back</span> Atrás
                                    </button>
                                ) : (
                                    <div></div>
                                )}
                                <button
                                    onClick={currentStep === 2 ? handlePlaceOrder : nextStep}
                                    className="bg-gold-gradient hover:scale-105 text-deep-purple px-8 py-3 rounded-full font-bold shadow-lg transition flex items-center gap-2"
                                >
                                    {currentStep === 2 ? 'Pagar y Finalizar' : 'Siguiente'}
                                    <span className="material-symbols-outlined">{currentStep === 2 ? 'check' : 'arrow_forward'}</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right: Summary (Sidebar) */}
                    {currentStep < 3 && (
                        <div className="w-full lg:w-[350px]">
                            <div className="bg-card-purple border border-purple-500/10 rounded-2xl p-6 sticky top-24">
                                <h3 className="text-lg font-bold mb-4 border-b border-purple-500/10 pb-2 font-display">Tu Pedido</h3>
                                <div className="space-y-4 max-h-[300px] overflow-y-auto mb-4 pr-2 custom-scrollbar">
                                    {cart.map(item => {
                                        const isSale = !!item.originalPrice;
                                        return (
                                            <div key={`${item.id}-${item.selectedVariant}`} className="flex gap-3">
                                                <div className="size-16 rounded-lg bg-purple-900/50 overflow-hidden shrink-0 border border-purple-500/10">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 font-body">
                                                    <p className="text-sm font-medium text-white">{item.name}</p>
                                                    <p className="text-xs text-purple-300">{item.selectedVariant} x{item.quantity}</p>
                                                    {isSale && <span className="text-[10px] bg-red-900/40 text-red-300 px-1 rounded">Oferta</span>}
                                                </div>
                                                <div className="text-sm font-bold text-purple-200 font-body">
                                                    {item.price}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="space-y-2 text-sm text-purple-300 border-t border-purple-500/10 pt-4 font-body">
                                    <div className="flex justify-between">
                                        <span>Subtotal (Precio Original)</span>
                                        <span>S/ {totalOriginalPrice.toFixed(2)}</span>
                                    </div>
                                    {totalDiscount > 0 && (
                                        <div className="flex justify-between text-green-300">
                                            <span>Descuentos</span>
                                            <span>-S/ {totalDiscount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between">
                                        <span>Envío</span>
                                        <span>{shippingCost === 0 ? "Gratis" : `S/ ${shippingCost.toFixed(2)}`}</span>
                                    </div>
                                    <div className="flex justify-between text-white font-bold text-lg pt-2">
                                        <span>Total Final</span>
                                        <span className="text-accent-gold">S/ {finalTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
