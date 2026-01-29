
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => setStatus('success'), 1500);
    };

    const faqs = [
        { q: "¿Cómo sé qué terapia elegir?", a: "Te recomendamos iniciar con una sesión de Liberación Emocional si sientes pesadez mental, o Biomagnetismo si buscas equilibrio físico. Si buscas un cambio de realidad profundo, la Mesa Cuántica es tu mejor opción." },
        { q: "¿Cómo se realizan las sesiones?", a: "Nuestras sesiones son 100% online a través de Google Meet. Recibirás un enlace de acceso privado tras confirmar tu reserva." },
        { q: "¿Qué sucede después de agendar?", a: "Recibirás un email de confirmación inmediato con los detalles de tu cita, instrucciones de preparación y tu enlace exclusivo de Google Meet." }
    ];

    const steps = [
        { icon: 'calendar_month', title: 'Reserva tu espacio', desc: 'Elige el día y la hora que mejor se adapte a tu ritmo actual.' },
        { icon: 'mail', title: 'Recibe tu guía', desc: 'Te llegará un kit digital de preparación y tu enlace de Google Meet.' },
        { icon: 'auto_awesome', title: 'Inicia tu proceso', desc: 'Conéctate a la sesión y comienza tu viaje de transformación.' }
    ];

    return (
        <div className="min-h-screen">
            {/* HERO SYSTEM: CONTACT (Energy Hands Image) */}
            <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1514356877083-29913123891c?auto=format&fit=crop&q=80&w=2400"
                        alt="Sanación Holística - Manos y Energía"
                        className="w-full h-full object-cover object-center scale-105"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#240b36]/70 via-[#1a0b2e]/60 to-[#11001C]"></div>
                </div>
                
                <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8 animate-fade-in-up">
                    {/* Eyebrow & Profile Info */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="size-24 md:size-32 rounded-full border-2 border-accent-gold/50 overflow-hidden shadow-[0_0_30px_rgba(252,211,77,0.3)] p-1 bg-purple-900/50 backdrop-blur-sm">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-QD0vld2EIk5wxhSzhVN0V4QPPdC79U5jl7y7hXaEwWGBsKObGnDIs_QhCoCf2rajQpeb8yX2etC2fMDrHAG0LTWPfumCjnCDB_9SO1m2Gp9VdKIX56bDUiTyK-lUupzeQDitBjqA3RaMto9T9TFF_mBFQGWr3ropPnvdmxV1pcenDjnSWCZFHmKpSTg47D3zGOK4TfAeeTaix59UxbNpOvOiAUpYElmQ0gEjh4Le03BIGp0zBXbgOU__7OzyPvHRZ4K2uSj-mTIR" 
                                alt="Paola Morote" 
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <span className="text-accent-gold uppercase font-bold tracking-[0.4em] text-[10px] md:text-xs">Paola Morote · Acompañamiento Profesional</span>
                    </div>

                    {/* Title Section */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-[1.05] tracking-tight">
                            Diseña tu nueva <br/>
                            <span className="font-bold italic text-purple-200">Realidad Energética</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-purple-100/90 font-light leading-relaxed font-body">
                            No estás aquí por casualidad. Iniciemos juntos un sistema de transformación profunda basado en metodología, claridad y soporte profesional de alto nivel.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-5 mt-4 w-full sm:w-auto">
                        <a 
                            href="https://cal.com" 
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-gold-gradient text-deep-purple px-10 py-5 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105 shadow-md flex items-center justify-center gap-3"
                        >
                            Agenda tu sesión ahora
                            <span className="material-symbols-outlined">event_available</span>
                        </a>
                        <Link 
                            to="/services" 
                            className="px-10 py-5 rounded-full border border-purple-200/20 text-white font-bold text-lg hover:bg-white/5 backdrop-blur-md transition-all flex items-center justify-center"
                        >
                            Explorar Metodologías
                        </Link>
                    </div>
                </div>
            </section>

            {/* Platform & Methodology Authority */}
            <section className="py-32 px-6 lg:px-12 bg-[#11001C]">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-display font-light mb-6">Un Sistema Diseñado para tu <span className="text-accent-gold italic font-bold">Evolución</span></h2>
                        <p className="text-purple-300 max-w-2xl mx-auto font-light text-lg font-body">Aunque Aura es un proyecto joven, está construido sobre una metodología sólida de acompañamiento real y diseño de experiencias de transformación.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card-purple p-12 rounded-[2.5rem] border border-purple-500/10 hover:border-accent-gold/40 transition-all text-center group">
                            <div className="size-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-accent-gold/20 transition-colors">
                                <span className="material-symbols-outlined text-3xl text-accent-gold">video_chat</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-display">Google Meet</h3>
                            <p className="text-purple-200/80 font-light leading-relaxed font-body">Conéctate vía Google Meet desde cualquier lugar. Tecnología simple y segura para tu privacidad absoluta.</p>
                        </div>
                        <div className="bg-card-purple p-12 rounded-[2.5rem] border border-purple-500/10 hover:border-accent-gold/40 transition-all text-center group">
                            <div className="size-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-accent-gold/20 transition-colors">
                                <span className="material-symbols-outlined text-3xl text-accent-gold">account_tree</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-display">Proceso Estructurado</h3>
                            <p className="text-purple-200/80 font-light leading-relaxed font-body">No dejamos nada al azar. Cada sesión sigue un sistema riguroso de diagnóstico, intervención y anclaje.</p>
                        </div>
                        <div className="bg-card-purple p-12 rounded-[2.5rem] border border-purple-500/10 hover:border-accent-gold/40 transition-all text-center group">
                            <div className="size-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-accent-gold/20 transition-colors">
                                <span className="material-symbols-outlined text-3xl text-accent-gold">verified_user</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-display">Acompañamiento</h3>
                            <p className="text-purple-200/80 font-light leading-relaxed font-body">Te entregamos claridad y herramientas prácticas para que tú seas el protagonista de tu propia sanación.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works - Visual Flow */}
            <section className="py-32 px-6 lg:px-12 max-w-[1280px] mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-display font-light">Cómo funciona tu <span className="font-bold italic text-accent-gold">Transformación</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-purple-500/10 -z-10"></div>
                    
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="size-20 rounded-full bg-purple-900 border border-purple-500/30 flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-transform ring-4 ring-[#11001C]">
                                <span className="material-symbols-outlined text-3xl text-accent-gold">{step.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-display">{step.title}</h3>
                            <p className="text-purple-200/80 font-light max-w-[280px] leading-relaxed font-body">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials - Authority Section */}
            <section className="py-32 bg-[#1A0B2E]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-display mb-4">Experiencias Reales</h2>
                            <p className="text-purple-300 font-light text-lg font-body">Nuestra metodología de acompañamiento genera resultados tangibles en la vida de nuestros consultantes.</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="size-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </div>
                            <div className="size-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-card-purple p-12 rounded-[3rem] text-left border border-purple-500/10 relative group hover:border-accent-gold/30 transition-all">
                            <span className="material-symbols-outlined text-6xl absolute top-8 right-8 text-purple-500/20 select-none transition-colors group-hover:text-accent-gold/20">format_quote</span>
                            <p className="text-xl italic text-purple-100 mb-10 font-light leading-relaxed font-body">"Aura me ha dado una estructura para entender mi propia energía. Paola no solo escucha, sino que aplica un sistema que realmente mueve las cosas."</p>
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500"></div>
                                <div>
                                    <p className="font-bold text-white font-display">Lucía M.</p>
                                    <p className="text-xs text-purple-400 uppercase tracking-widest font-body">Lima, Perú</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card-purple p-12 rounded-[3rem] text-left border border-purple-500/10 relative group hover:border-accent-gold/30 transition-all">
                            <span className="material-symbols-outlined text-6xl absolute top-8 right-8 text-purple-500/20 select-none transition-colors group-hover:text-accent-gold/20">format_quote</span>
                            <p className="text-xl italic text-purple-100 mb-10 font-light leading-relaxed font-body">"La sesión por Google Meet fue súper cómoda y profesional. Sentí el cambio de frecuencia desde los primeros 20 minutos de la Mesa Cuántica."</p>
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-gradient-to-br from-accent-gold to-yellow-200"></div>
                                <div>
                                    <p className="font-bold text-white font-display">Javier R.</p>
                                    <p className="text-xs text-purple-400 uppercase tracking-widest font-body">Barcelona, España</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Conversion Block */}
            <section className="py-32 px-6 lg:px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div className="space-y-12">
                    <div>
                        <h2 className="text-4xl font-display mb-6">¿Tienes alguna duda?</h2>
                        <p className="text-purple-200 font-light text-lg font-body">Estamos aquí para aclararlas y acompañarte en cada paso de tu proceso.</p>
                    </div>
                    <div className="space-y-8">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-purple-500/20 pb-8 group">
                                <h4 className="text-lg font-bold mb-3 flex items-center gap-3 group-hover:text-accent-gold transition-colors cursor-pointer font-display">
                                    <span className="material-symbols-outlined text-sm text-accent-gold">help</span>
                                    {faq.q}
                                </h4>
                                <p className="text-purple-300 font-light leading-relaxed font-body">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-10 bg-purple-900/20 rounded-[2.5rem] border border-purple-500/30">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-2xl text-green-400 self-center">shield_check</span>
                            <h4 className="text-xl font-bold font-display">Garantía de Valor Aura</h4>
                        </div>
                        <p className="text-purple-200 font-light leading-relaxed italic font-body">Nuestra metodología está diseñada para generar impacto real. Si en los primeros 15 minutos de la sesión sientes que no estamos conectando con tu necesidad, finalizamos el encuentro y te reembolsamos el 100%.</p>
                    </div>
                </div>

                <div className="sticky top-32 bg-gradient-to-br from-[#1A0B2E] to-[#11001C] p-12 lg:p-16 rounded-[4rem] border border-purple-500/20 shadow-3xl text-center">
                    <div className="size-20 bg-accent-gold/20 text-accent-gold rounded-full flex items-center justify-center mx-auto mb-10 animate-pulse">
                        <span className="material-symbols-outlined text-4xl">calendar_add_on</span>
                    </div>
                    <h3 className="text-4xl font-display mb-6">Tu momento es <span className="text-accent-gold italic">ahora</span></h3>
                    <p className="text-purple-200 mb-12 font-light leading-relaxed text-lg font-body">El universo premia la acción consciente. Reserva tu espacio exclusivo y recibe tu enlace de Google Meet al instante.</p>
                    
                    <a 
                        href="https://cal.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full bg-gold-gradient text-deep-purple py-6 rounded-full font-bold text-xl hover:shadow-xl transition-all shadow-lg flex items-center justify-center gap-3 group"
                    >
                        Agendar Mi Espacio
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">chevron_right</span>
                    </a>
                    
                    <div className="mt-10 flex items-center justify-center gap-4 text-[11px] text-purple-400 uppercase tracking-[0.2em] font-bold font-body">
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm text-green-500">lock</span>
                            Pago Seguro
                        </div>
                        <div className="w-1 h-1 bg-purple-500/30 rounded-full"></div>
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm text-blue-400">videocam</span>
                            Google Meet
                        </div>
                    </div>
                </div>
            </section>

            {/* Secondary Form for Product Queries */}
            <section className="py-32 bg-[#11001C] border-t border-purple-500/10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 font-display">Preguntas sobre productos</h2>
                    <p className="text-purple-300 mb-16 font-light text-lg font-body">Si tienes dudas sobre nuestras velas, sprays o kits holísticos, escríbenos y te guiaremos personalmente.</p>
                    
                    {status === 'success' ? (
                        <div className="p-16 bg-green-500/10 rounded-[3rem] border border-green-500/20 text-center animate-fade-in">
                            <span className="material-symbols-outlined text-5xl text-green-400 mb-6">check_circle</span>
                            <h3 className="text-2xl font-bold font-display">¡Mensaje recibido!</h3>
                            <p className="text-purple-200 mt-4 font-body">Paola o alguien del equipo te responderá en menos de 24 horas.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-purple-400 ml-4 font-bold font-body">Nombre</label>
                                    <input required type="text" name="name" placeholder="Tu Nombre completo" onChange={handleChange} className="w-full bg-purple-500/5 border border-purple-500/20 rounded-2xl p-5 outline-none focus:border-accent-gold transition text-white" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-purple-400 ml-4 font-bold font-body">Email</label>
                                    <input required type="email" name="email" placeholder="tu@email.com" onChange={handleChange} className="w-full bg-purple-500/5 border border-purple-500/20 rounded-2xl p-5 outline-none focus:border-accent-gold transition text-white" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest text-purple-400 ml-4 font-bold font-body">Consulta</label>
                                <textarea required name="message" placeholder="¿En qué podemos ayudarte?" onChange={handleChange} className="w-full bg-purple-500/5 border border-purple-500/20 rounded-2xl p-5 outline-none focus:border-accent-gold transition h-40 resize-none text-white"></textarea>
                            </div>
                            <button type="submit" disabled={status === 'submitting'} className="w-full bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 py-5 rounded-2xl font-bold transition flex items-center justify-center gap-3 text-white">
                                {status === 'submitting' ? 'Enviando...' : 'Enviar consulta rápida'}
                                <span className="material-symbols-outlined text-lg">send</span>
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Contact;
