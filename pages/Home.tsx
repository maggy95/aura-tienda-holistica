
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { blogPosts } from '../data/blogPosts';
import { ProductCard } from '../components/ProductCard';

const Home: React.FC = () => {
    const featuredProducts = [products[1], products[0], products[2], products[7], products[3], products[4]];
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scroll = (direction: 'left' | 'right') => {
        if (!carouselRef.current) return;
        const scrollAmount = 350;
        carouselRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current && !isDragging) {
                const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
                if (carouselRef.current.scrollLeft >= maxScroll - 10) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scroll('right');
                }
            }
        }, 6000);
        return () => clearInterval(interval);
    }, [isDragging]);

    const intentions = [
        { name: 'Amor Propio', icon: 'favorite', desc: 'Sana tu corazón', color: 'text-pink-300' },
        { name: 'Protección', icon: 'shield', desc: 'Escudo energético', color: 'text-purple-300' },
        { name: 'Abundancia', icon: 'diamond', desc: 'Atrae prosperidad', color: 'text-amber-300' },
        { name: 'Calma', icon: 'spa', desc: 'Paz mental', color: 'text-blue-300' },
        { name: 'Limpieza', icon: 'air', desc: 'Purifica espacios', color: 'text-gray-300' },
        { name: 'Intuición', icon: 'visibility', desc: 'Despertar espiritual', color: 'text-indigo-300' },
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[100px]"></div>
            </div>

            <div className="relative z-10 flex flex-col">
                {/* 1. HERO SYSTEM: Luminous Figure (Transformation) */}
                <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end lg:items-center">
                    {/* Background Image: Corrected Human Figure with Chakras/Geometry */}
                    <img
                        src="/assets/images/hero_main.png"
                        alt="Figura humana luminosa con geometría sagrada"
                        className="absolute inset-0 h-full w-full object-cover object-center z-0"
                    />

                    {/* Cinematic Overlays */}
                    {/* Desktop: Gradient from Left to focus attention on text without blocking center figure */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#05010a] via-[#11001C]/60 to-transparent z-10 hidden lg:block"></div>

                    {/* Mobile: Gradient from Bottom to support the floating card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05010a] via-[#11001C]/50 to-transparent z-10 lg:hidden"></div>

                    {/* Radial Vignette: Darken edges, keep center luminous */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_120%)] opacity-70 z-10 mix-blend-multiply"></div>

                    {/* Content Container */}
                    <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-16 h-full flex flex-col justify-end lg:justify-center pb-12 lg:pb-0">
                        {/* Grid to control placement: Text left, Center Empty */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

                            {/* Text Block: Left Aligned on Desktop, Bottom Card on Mobile */}
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">

                                <div className="bg-black/30 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:p-0 max-w-xl w-full">
                                    <span className="text-accent-gold uppercase font-bold tracking-[0.4em] text-[10px] md:text-xs drop-shadow-md border border-accent-gold/40 px-4 py-2 rounded-full bg-black/40 mb-6 inline-block">
                                        Santuario Holístico
                                    </span>

                                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-light text-white leading-[1.05] tracking-tight mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                                        Eleva tu <br />
                                        <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-gold to-yellow-200 drop-shadow-[0_0_25px_rgba(252,211,77,0.3)] text-glow">
                                            Energía Vital
                                        </span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-purple-100 font-light leading-relaxed font-body drop-shadow-lg mb-8 lg:max-w-md">
                                        Conecta con tu esencia a través de geometría sagrada, cristaloterapia y guías espirituales para tu evolución.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                                        <Link to="/services" className="bg-accent-gold text-[#1a0b2e] px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(252,211,77,0.5)] hover:scale-105 hover:bg-white transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/50">
                                            Reservar Sesión
                                            <span className="material-symbols-outlined">event_available</span>
                                        </Link>
                                        <Link to="/store" className="px-10 py-4 rounded-full bg-white/10 border border-white/30 text-white font-bold text-lg hover:bg-white/20 backdrop-blur-md transition-all flex items-center justify-center shadow-lg shadow-black/50">
                                            Explorar Tienda
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column is intentionally empty to let the Luminous Figure shine */}
                            <div className="hidden lg:block"></div>
                        </div>
                    </div>
                </section>

                {/* 2. INTRODUCCIÓN (Imagen + Texto) */}
                <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src="/assets/images/intro_altar.png" alt="Altar Holístico" className="relative rounded-[3rem] w-full aspect-square object-cover shadow-2xl border border-purple-500/10" />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-display font-light text-white leading-tight">
                                Descubre tu <br /> <span className="font-bold italic text-purple-200">Camino Interior</span>
                            </h2>
                            <p className="text-purple-200/80 text-lg font-light leading-relaxed font-body">
                                En Aura creemos que cada persona lleva dentro las respuestas que busca. Nuestro propósito es acompañarte en ese viaje de autoconocimiento, ofreciéndote las herramientas y la guía espiritual que necesitas para conectar con tu esencia.
                            </p>
                            <p className="text-purple-200/60 text-base font-light font-body">
                                Somos un espacio donde la energía fluye, donde lo místico se encuentra con lo cotidiano. Aquí encontrarás desde lecturas de tarot hasta cristales y productos holísticos seleccionados para elevar tu vibración.
                            </p>
                            <div className="pt-4">
                                <Link to="/contact" className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 text-accent-gold font-bold px-8 py-4 rounded-full hover:bg-purple-800/50 transition-all shadow-lg hover:text-white">
                                    Contáctanos ahora
                                    <span className="material-symbols-outlined">arrow_right_alt</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CATEGORÍAS / INTENCIONES (Interactivo) */}
                <section className="py-32 bg-[#1A0B2E] relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(216,180,254,0.05)_0%,transparent_70%)]"></div>
                    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                        <div className="mb-16">
                            <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">auto_awesome</span>
                            <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-4">Explora por <span className="font-bold italic text-purple-200">Intención</span></h2>
                            <p className="text-purple-300/80 max-w-xl mx-auto font-light font-body">Encuentra exactamente lo que tu alma necesita en este momento.</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                            {intentions.map((intent) => (
                                <Link to="/store" key={intent.name} className="group flex flex-col items-center justify-center p-8 bg-purple-500/5 border border-purple-500/10 rounded-3xl transition-all hover:bg-purple-500/10 hover:border-purple-500/30 hover:-translate-y-2 backdrop-blur-sm">
                                    <span className={`material-symbols-outlined text-4xl mb-4 group-hover:scale-125 transition-transform ${intent.color}`}>{intent.icon}</span>
                                    <h3 className="text-white font-bold mb-1 font-display">{intent.name}</h3>
                                    <p className="text-[10px] text-purple-300 uppercase tracking-widest font-body">{intent.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. SERVICIOS / TERAPIAS */}
                <section className="py-32 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6">Terapias de <span className="font-bold italic text-accent-gold">Sanación Profunda</span></h2>
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto opacity-50"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <ServiceCardSimple
                            image="/assets/images/service_emotional.png"
                            title="Liberación Emocional"
                            desc="Libera bloqueos emocionales y traumas para recuperar tu equilibrio interior y vivir con claridad."
                        />
                        <ServiceCardSimple
                            image="/assets/images/service_biomagnetism.png"
                            title="Biomagnetismo"
                            desc="Terapia con imanes que equilibra tu energía y trata malestares físicos y emocionales desde su origen."
                        />
                        <ServiceCardSimple
                            image="/assets/images/service_quantum.png"
                            title="Mesa Cuántica Energética"
                            desc="Limpieza energética profunda que armoniza tus chakras y transforma tu ser en todos los niveles."
                        />
                    </div>
                </section>

                {/* 5. CTA BANNER (Central Action) */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-900/20"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-display font-light text-white drop-shadow-2xl">
                            ¿Lista para comenzar <br /> <span className="font-bold text-accent-gold">tu Sanación?</span>
                        </h2>
                        <p className="text-purple-200 text-lg font-light max-w-2xl mx-auto font-body">
                            El universo te trajo hasta aquí por una razón. Da el siguiente paso hacia tu transformación personal y espiritual.
                        </p>
                        <a href="https://cal.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-gold-gradient text-deep-purple font-bold px-12 py-5 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(252,211,77,0.3)]">
                            Contactar Ahora
                        </a>
                    </div>
                </section>

                {/* 6. CARRUSEL PRODUCTOS */}
                <section className="py-32 bg-[#1A0B2E]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-16 flex flex-col items-center text-center">
                            <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-4">Eleva tu <span className="font-bold italic text-purple-200">Vibración</span></h2>
                            <p className="text-purple-300/80 max-w-xl font-light font-body">Productos holísticos auténticos que acompañan tu camino de sanación y crecimiento personal.</p>
                        </div>

                        <div className="relative group">
                            <div
                                ref={carouselRef}
                                className={`no-scrollbar -mx-6 flex gap-8 overflow-x-auto px-6 pb-12 sm:mx-0 sm:px-0 scroll-smooth select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                                onMouseDown={handleMouseDown}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseUp}
                                onMouseMove={handleMouseMove}
                            >
                                {featuredProducts.map((product) => (
                                    <div key={product.id} className="min-w-[280px] sm:min-w-[320px] h-full">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center gap-2 mt-8">
                                <button onClick={() => scroll('left')} className="size-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-white hover:bg-purple-500/20 transition">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button onClick={() => scroll('right')} className="size-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-white hover:bg-purple-500/20 transition">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. PROCESO (Cómo funciona) */}
                <section className="py-32 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-24">
                            <span className="material-symbols-outlined text-accent-gold mb-4 text-4xl">timeline</span>
                            <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-4">Tu Viaje <span className="font-bold italic text-purple-200">Espiritual</span></h2>
                            <p className="text-purple-300 font-light font-body">Descubre el proceso de transformación en 4 pasos conscientes.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                            {/* Connector Lines (Desktop) */}
                            <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent z-0"></div>

                            <JourneyStep number={1} title="Agenda tu Cita" desc="Elige el servicio que resuene con tu energía actual." icon="calendar_today" />
                            <JourneyStep number={2} title="Sesión Privada" desc="Conéctate con nuestros guías en un espacio seguro." icon="video_camera_front" />
                            <JourneyStep number={3} title="Recibe tu Plan" desc="Obtén claridad y herramientas prácticas para tu día a día." icon="menu_book" />
                            <JourneyStep number={4} title="Transformación" desc="Aplica la sabiduría recibida y eleva tu realidad." icon="self_improvement" />
                        </div>
                    </div>
                </section>

                {/* 8. TESTIMONIOS */}
                <section className="py-32 bg-[#1A0B2E]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-display font-light text-white mb-4">Voces del Santuario</h2>
                            <p className="text-purple-300/80 font-light max-w-2xl mx-auto leading-relaxed font-body">Lo que nuestra comunidad dice sobre su experiencia en el espacio Aura.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <TestimonialCard
                                text="Los cristales que adquirí han transformado la energía de mi hogar. El asesoramiento fue profesional y personalizado, quedé muy satisfecha."
                                author="Elena García"
                                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
                            />
                            <TestimonialCard
                                text="Una experiencia transformadora. La conexión espiritual que logré en las sesiones superó todas mis expectativas. Totalmente recomendado."
                                author="Carlos Ruiz"
                                image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200"
                            />
                        </div>
                    </div>
                </section>

                {/* 9. BLOG / SABIDURÍA */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                            <div>
                                <h2 className="text-4xl font-display font-light text-white">Sabiduría para <span className="font-bold italic text-accent-gold">tu Alma</span></h2>
                                <p className="text-purple-300 mt-2 font-light font-body">Guías prácticas sobre tarot, cristales y rituales energéticos.</p>
                            </div>
                            <Link to="/blog" className="text-accent-gold hover:text-white transition font-medium flex items-center gap-2 font-body uppercase text-sm tracking-widest">
                                Ver todo el blog <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogPosts.slice(0, 3).map((post) => (
                                <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col bg-purple-500/5 rounded-[2rem] overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] text-accent-gold font-bold uppercase tracking-widest bg-accent-gold/10 px-3 py-1 rounded-full">{post.category}</span>
                                            <span className="text-xs text-purple-300">{post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight font-display">{post.title}</h3>
                                        <p className="text-sm text-purple-200/70 line-clamp-2 font-light font-body">{post.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. COMUNIDAD / INSTAGRAM */}
                <section className="py-32 bg-[#1A0B2E]">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <span className="material-symbols-outlined text-pink-300 text-4xl mb-4">favorite</span>
                        <h2 className="text-4xl font-display font-light text-white mb-6">Únete a la <span className="font-bold italic text-purple-200">Comunidad</span></h2>
                        <p className="text-purple-300 max-w-xl mx-auto mb-12 font-light font-body">Sigue nuestro viaje diario en Instagram. Inspiración, tips y momentos de magia.</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {[
                                '/assets/images/intro_altar.png',
                                '/assets/images/product_candle.png',
                                '/assets/images/service_quantum.png',
                                '/assets/images/service_emotional.png',
                                '/assets/images/service_biomagnetism.png',
                                '/assets/images/hero_main.png'
                            ].map((src, i) => (
                                <a href="#" key={i} className="aspect-square bg-purple-500/5 rounded-2xl overflow-hidden group cursor-pointer border border-purple-500/10 relative block">
                                    <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                        <span className="material-symbols-outlined text-white text-3xl">open_in_new</span>
                                    </div>
                                    <img
                                        src={src}
                                        alt="Instagram post"
                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                                    />
                                </a>
                            ))}
                        </div>
                        <div className="mt-12">
                            <a href="#" className="inline-flex items-center gap-2 text-white border border-purple-500/30 px-8 py-3 rounded-full hover:bg-white hover:text-deep-purple transition-all font-medium font-body uppercase text-xs tracking-widest">
                                <span className="material-symbols-outlined">add_circle</span>
                                Seguir @aura_holistica
                            </a>
                        </div>
                    </div>
                </section>

                {/* 11. NEWSLETTER */}
                <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#1A0B2E] to-[#11001C] border-t border-purple-500/10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-display font-light text-white">Suscríbete para recibir <br /> <span className="font-bold italic text-accent-gold">luz en tu bandeja</span></h2>
                        <p className="text-purple-300 font-light font-body">Recibe meditaciones exclusivas, descuentos lunares y novedades del santuario.</p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-purple-500/5 p-2 rounded-full border border-purple-500/20 backdrop-blur-md">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="flex-1 bg-transparent border-none rounded-full px-6 py-3 text-white placeholder-purple-400/50 focus:ring-0 outline-none font-body"
                            />
                            <button className="bg-gold-gradient text-deep-purple font-bold px-10 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all shadow-md">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

const ServiceCardSimple: React.FC<{ image: string, title: string, desc: string }> = ({ image, title, desc }) => (
    <div className="group bg-card-purple rounded-[2.5rem] overflow-hidden border border-purple-500/10 flex flex-col h-full hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20">
        <div className="aspect-[4/3] overflow-hidden relative">
            <img src={image} alt={title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] to-transparent opacity-60"></div>
        </div>
        <div className="p-10 flex flex-col flex-1 text-center relative">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-gold transition-colors font-display">{title}</h3>
            <p className="text-purple-200/70 font-light leading-relaxed mb-8 flex-1 font-body">{desc}</p>
            <Link to="/services" className="inline-block py-3 px-8 bg-purple-500/10 border border-purple-500/20 text-white rounded-full font-bold hover:bg-accent-gold hover:text-deep-purple transition-all font-body text-sm uppercase tracking-wider">
                Ver más
            </Link>
        </div>
    </div>
);

const JourneyStep: React.FC<{ number: number, title: string, desc: string, icon: string }> = ({ number, title, desc, icon }) => (
    <div className="flex flex-col items-center text-center relative z-10 group">
        <div className="size-20 rounded-full bg-[#1A0B2E] border border-purple-500/20 flex items-center justify-center mb-6 shadow-xl shadow-purple-900/30 group-hover:border-accent-gold/50 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
            <span className="material-symbols-outlined text-3xl text-purple-300 group-hover:text-accent-gold transition-colors z-10">{icon}</span>
            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="bg-card-purple p-8 rounded-3xl border border-purple-500/10 w-full hover:border-purple-500/30 transition-all min-h-[180px] flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-2 font-display"><span className="text-accent-gold">{number}.</span> {title}</h3>
            <p className="text-sm text-purple-200/70 font-light leading-relaxed font-body">{desc}</p>
        </div>
    </div>
);

const TestimonialCard: React.FC<{ text: string, author: string, image: string }> = ({ text, author, image }) => (
    <div className="bg-card-purple border border-purple-500/10 p-10 rounded-[3rem] relative group hover:bg-[#2B124C] transition-colors">
        <span className="material-symbols-outlined text-4xl text-purple-500/30 absolute top-8 right-8 group-hover:text-accent-gold/40 transition-colors">format_quote</span>
        <p className="text-purple-200 italic text-lg leading-relaxed mb-8 relative z-10 font-body">"{text}"</p>
        <div className="flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden bg-purple-900 border-2 border-purple-500/20">
                <img src={image} alt={author} className="w-full h-full object-cover" />
            </div>
            <div>
                <p className="text-white font-bold font-display">{author}</p>
                <div className="flex text-accent-gold text-xs">
                    {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-[14px] fill-1">star</span>)}
                </div>
            </div>
        </div>
    </div>
);

export default Home;
