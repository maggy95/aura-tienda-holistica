
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

type Tab = 'orders' | 'appointments' | 'profile';

const Account: React.FC = () => {
    const { user, orders, appointments, isLoggedIn, login, logout } = useUser();
    const [activeTab, setActiveTab] = useState<Tab>('orders');
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication logic
        if (email && password) {
            login(email);
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="pt-32 pb-20 min-h-screen text-white relative overflow-hidden">
                {/* Background Art */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                     <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"></div>
                     <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-md mx-auto px-6 relative z-10">
                    <div className="bg-card-purple border border-purple-500/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
                        <div className="text-center mb-8">
                            <span className="material-symbols-outlined text-5xl text-accent-gold mb-4">account_circle</span>
                            <h1 className="text-3xl font-display font-light text-white">
                                {isRegistering ? 'Crear Cuenta' : 'Iniciar Sesión'}
                            </h1>
                            <p className="text-purple-300 mt-2 text-sm font-body">
                                {isRegistering ? 'Únete a nuestra comunidad holística.' : 'Accede a tus pedidos y citas.'}
                            </p>
                        </div>

                        <form onSubmit={handleAuth} className="space-y-4">
                            {isRegistering && (
                                <div>
                                    <label className="text-xs uppercase font-bold text-purple-400 mb-1 block font-body">Nombre</label>
                                    <input type="text" className="w-full bg-[#11001C] border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-accent-gold outline-none transition" placeholder="Tu nombre" />
                                </div>
                            )}
                            <div>
                                <label className="text-xs uppercase font-bold text-purple-400 mb-1 block font-body">Email</label>
                                <input 
                                    type="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#11001C] border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-accent-gold outline-none transition" 
                                    placeholder="tu@email.com" 
                                />
                            </div>
                            <div>
                                <label className="text-xs uppercase font-bold text-purple-400 mb-1 block font-body">Contraseña</label>
                                <input 
                                    type="password" 
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#11001C] border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-accent-gold outline-none transition" 
                                    placeholder="••••••••" 
                                />
                            </div>
                            
                            <button className="w-full py-3 mt-4 bg-gold-gradient hover:scale-[1.02] text-deep-purple font-bold rounded-xl transition-all shadow-lg">
                                {isRegistering ? 'Registrarse' : 'Entrar'}
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm font-body">
                            <button 
                                onClick={() => setIsRegistering(!isRegistering)}
                                className="text-purple-300 hover:text-white transition-colors"
                            >
                                {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* User Header */}
                <div className="flex items-center gap-6 mb-12 animate-fade-in">
                    <div className="size-20 rounded-full bg-purple-500/10 flex items-center justify-center text-accent-gold border border-purple-500/20">
                        <span className="material-symbols-outlined text-4xl">person</span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-display font-light">Hola, <span className="font-bold text-white">{user.name.split(' ')[0]}</span></h1>
                        <p className="text-purple-300 font-body">Bienvenido a tu espacio personal.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Nav */}
                    <div className="w-full lg:w-64 shrink-0">
                        <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar font-body">
                            <button 
                                onClick={() => setActiveTab('orders')}
                                className={`px-6 py-3 rounded-xl text-left font-medium transition whitespace-nowrap ${activeTab === 'orders' ? 'bg-card-purple border border-purple-500/20 text-white' : 'text-purple-300 hover:text-white hover:bg-purple-500/10'}`}
                            >
                                Mis Pedidos
                            </button>
                            <button 
                                onClick={() => setActiveTab('appointments')}
                                className={`px-6 py-3 rounded-xl text-left font-medium transition whitespace-nowrap ${activeTab === 'appointments' ? 'bg-card-purple border border-purple-500/20 text-white' : 'text-purple-300 hover:text-white hover:bg-purple-500/10'}`}
                            >
                                Mis Citas
                            </button>
                            <button 
                                onClick={() => setActiveTab('profile')}
                                className={`px-6 py-3 rounded-xl text-left font-medium transition whitespace-nowrap ${activeTab === 'profile' ? 'bg-card-purple border border-purple-500/20 text-white' : 'text-purple-300 hover:text-white hover:bg-purple-500/10'}`}
                            >
                                Datos Personales
                            </button>
                            <button 
                                onClick={logout}
                                className="px-6 py-3 rounded-xl text-left font-medium text-red-300 hover:bg-red-900/20 transition whitespace-nowrap"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 bg-card-purple border border-purple-500/10 rounded-2xl p-6 min-h-[500px]">
                        
                        {/* ORDERS TAB */}
                        {activeTab === 'orders' && (
                            <div className="space-y-6 animate-fade-in">
                                <h2 className="text-2xl font-bold mb-6 font-display">Historial de Pedidos</h2>
                                {orders.length === 0 ? (
                                    <div className="text-center py-12 text-purple-300 font-body">
                                        <p>No tienes pedidos recientes.</p>
                                        <button onClick={() => navigate('/store')} className="mt-4 text-accent-gold hover:underline">Ir a comprar</button>
                                    </div>
                                ) : (
                                    orders.map(order => (
                                        <div key={order.id} className="bg-[#11001C]/50 border border-purple-500/10 rounded-xl p-6">
                                            <div className="flex flex-wrap justify-between items-center mb-4 pb-4 border-b border-purple-500/10 gap-4">
                                                <div>
                                                    <p className="text-xs text-purple-400 uppercase font-body">Orden</p>
                                                    <p className="font-bold text-white font-body">#{order.id}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-purple-400 uppercase font-body">Fecha</p>
                                                    <p className="text-purple-200 font-body">{order.date}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-purple-400 uppercase font-body">Total</p>
                                                    <p className="text-accent-gold font-bold font-body">${order.total.toFixed(2)}</p>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold font-body ${
                                                    order.status === 'Entregado' ? 'bg-green-900/30 text-green-300' : 'bg-blue-900/30 text-blue-300'
                                                }`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className="space-y-3">
                                                {order.items.map((item, idx) => (
                                                    <div key={idx} className="flex gap-4 items-center">
                                                        <div className="size-12 bg-[#1A0B2E] rounded-lg overflow-hidden border border-purple-500/10">
                                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div className="font-body">
                                                            <p className="text-sm font-medium text-white">{item.name}</p>
                                                            <p className="text-xs text-purple-400">{item.selectedVariant} x{item.quantity}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}

                        {/* APPOINTMENTS TAB */}
                        {activeTab === 'appointments' && (
                            <div className="space-y-6 animate-fade-in">
                                <h2 className="text-2xl font-bold mb-6 font-display">Mis Citas</h2>
                                {appointments.length === 0 ? (
                                    <div className="text-center py-12 text-purple-300 font-body">
                                        <p>No tienes citas agendadas.</p>
                                        <button onClick={() => navigate('/services')} className="mt-4 text-accent-gold hover:underline">Ver Servicios</button>
                                    </div>
                                ) : (
                                    appointments.map(apt => (
                                        <div key={apt.id} className="flex flex-col md:flex-row gap-6 bg-[#11001C]/50 border border-purple-500/10 rounded-xl p-6">
                                            <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden bg-[#1A0B2E] shrink-0 border border-purple-500/10">
                                                <img src={apt.image} alt={apt.serviceName} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-bold text-white font-display">{apt.serviceName}</h3>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold font-body ${
                                                        apt.status === 'Confirmada' ? 'bg-green-900/30 text-green-300' : 
                                                        apt.status === 'Realizada' ? 'bg-gray-700/50 text-gray-400' : 'bg-yellow-900/30 text-yellow-300'
                                                    }`}>
                                                        {apt.status}
                                                    </span>
                                                </div>
                                                <p className="text-purple-300 text-sm mb-4 font-body">Guía: {apt.guideName}</p>
                                                <div className="flex gap-6 text-sm text-purple-200 font-body">
                                                    <div className="flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-accent-gold text-base">calendar_today</span>
                                                        {apt.date}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-accent-gold text-base">schedule</span>
                                                        {apt.time}
                                                    </div>
                                                </div>
                                                {apt.status === 'Confirmada' && (
                                                    <div className="mt-4 flex gap-3">
                                                        <button className="px-4 py-2 border border-purple-500/20 rounded-lg text-sm hover:bg-purple-500/10 transition text-purple-200 font-body">Reprogramar</button>
                                                        <button className="px-4 py-2 bg-purple-600/30 text-purple-200 hover:bg-purple-600/50 rounded-lg text-sm transition font-body border border-purple-500/30">Unirse a la llamada</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}

                        {/* PROFILE TAB */}
                        {activeTab === 'profile' && (
                            <div className="space-y-6 animate-fade-in max-w-lg font-body">
                                <h2 className="text-2xl font-bold mb-6 font-display">Datos Personales</h2>
                                <div>
                                    <label className="text-xs text-purple-400 block mb-1 uppercase">Nombre Completo</label>
                                    <input value={user.name} readOnly className="w-full bg-[#11001C] border border-purple-500/10 rounded-lg p-3 text-purple-300 cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="text-xs text-purple-400 block mb-1 uppercase">Email</label>
                                    <input value={user.email} readOnly className="w-full bg-[#11001C] border border-purple-500/10 rounded-lg p-3 text-purple-300 cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="text-xs text-purple-400 block mb-1 uppercase">Teléfono</label>
                                    <input defaultValue={user.phone} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition" />
                                </div>
                                <div>
                                    <label className="text-xs text-purple-400 block mb-1 uppercase">Dirección Predeterminada</label>
                                    <input defaultValue={user.address} className="w-full bg-[#11001C] border border-purple-500/20 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition" />
                                </div>
                                <button className="bg-white text-deep-purple px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition">
                                    Guardar Cambios
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
