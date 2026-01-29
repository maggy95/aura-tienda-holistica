
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Services: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, [hash]);
    // Single Therapist Profile
    const therapist = {
        name: "Paola Morote",
        role: "Terapeuta Holística & Guía Espiritual",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-QD0vld2EIk5wxhSzhVN0V4QPPdC79U5jl7y7hXaEwWGBsKObGnDIs_QhCoCf2rajQpeb8yX2etC2fMDrHAG0LTWPfumCjnCDB_9SO1m2Gp9VdKIX56bDUiTyK-lUupzeQDitBjqA3RaMto9T9TFF_mBFQGWr3ropPnvdmxV1pcenDjnSWCZFHmKpSTg47D3zGOK4TfAeeTaix59UxbNpOvOiAUpYElmQ0gEjh4Le03BIGp0zBXbgOU__7OzyPvHRZ4K2uSj-mTIR",
        bookingUrl: "https://cal.com"
    };

    const testimonials = [
        {
            name: "Sofia Rodriguez",
            service: "Mesa Cuántica",
            text: "La sesión con Paola cambió mi perspectiva por completo. Sentí una ligereza inmediata y una claridad mental que no había experimentado en años.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPXGCm7xMbmDv0bFAXmtDzIO01DPZmeWspuvlA2yQzNKb-H9o6I13n9pfJ-DxlJh9-_5RujR8MaXJZ7NttGKqG4Gkf3vqh7aohGx65URgLNGIUEfxLiiRhwjwrpsLTtSGGdrAkxOPJ7JSuSaEWKQDRyPTtVdGLSUhk2Fhd18lz1oTMOyd2wIwcrejzxChL3rXEtcOHNr1f974e7ae_ssPn3X15LDZeKV5z6oFn7c7zE98LT98smb-0BqnG9fyunTT2i8heWX1-A_tb"
        },
        {
            name: "Marco Torres",
            service: "EFT Tapping",
            text: "Increíble cómo una técnica tan sencilla puede liberar tanta tensión. Paola tiene una energía muy acogedora que te hace sentir seguro al instante.",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200"
        },
        {
            name: "Lucía Méndez",
            service: "Biomagnetismo",
            text: "Llevaba meses con fatiga crónica. Después de dos sesiones, mi vitalidad volvió. Es medicina del futuro aplicada con amor.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        },
        {
            name: "Carmen Vega",
            service: "Registros Akáshicos",
            text: "Obtuve respuestas que mi alma necesitaba escuchar. Fue una experiencia profundamente conmovedora y reveladora.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* HERO SYSTEM: SERVICES */}
            <section className="relative min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
                <img
                    src="/assets/images/hero_services.jpg"
                    alt="Servicios de Sanación"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#240b36]/70 via-[#1a0b2e]/60 to-[#11001C]"></div>

                <div className="relative z-10 max-w-[1280px] w-full px-6 lg:px-12 text-center flex flex-col items-center gap-8 animate-fade-in-up">
                    <div className="space-y-4">
                        <span className="text-accent-gold uppercase font-bold tracking-[0.4em] text-[10px] md:text-xs">Espacio Sagrado de Transformación</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-[1.1] tracking-tight text-glow">
                            Renueva tu <br /><span className="font-bold italic text-purple-200">Energía Vital</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-purple-100/90 font-light leading-relaxed font-body">
                            Un refugio consciente donde la sabiduría ancestral y las metodologías modernas convergen para restaurar tu equilibrio y elevar tu frecuencia personal.
                        </p>
                    </div>
                    <div>
                        <a
                            href={therapist.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold-gradient text-deep-purple px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105 shadow-md flex items-center justify-center gap-3"
                        >
                            Reservar Sesión
                            <span className="material-symbols-outlined">event_available</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Container */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col gap-12 lg:gap-20">
                {/* Service 1: EFT */}
                <article id="liberacion-emocional" className="group relative transition-all duration-700 rounded-[3rem] p-6 lg:py-16 lg:px-[72px] bg-card-purple border border-purple-500/10 hover:shadow-2xl hover:shadow-purple-900/10 animate-fade-in-up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 flex flex-col gap-6">
                            <div className="flex items-center gap-3 text-accent-gold mb-2">
                                <span className="material-symbols-outlined">psychology</span>
                                <span className="text-sm font-bold uppercase tracking-widest font-body">Equilibrio Mental</span>
                            </div>
                            <h2 className="text-4xl font-display font-light text-white leading-tight">
                                Liberación Emocional <strong className="font-bold text-purple-300">(EFT)</strong>
                            </h2>
                            <p className="text-purple-200/80 text-lg leading-relaxed font-light font-body">
                                Una técnica poderosa de "tapping" que combina la psicología moderna con los principios de la acupuntura china. Libera bloqueos energéticos y traumas emocionales profundos permitiendo que la energía fluya libremente por tus meridianos.
                            </p>

                            {/* Ritual Box */}
                            <div className="mt-4 p-6 rounded-2xl glass-panel border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
                                <h4 className="text-white font-medium mb-3 flex items-center gap-2 font-display">
                                    <span className="material-symbols-outlined text-accent-gold text-xl">self_improvement</span>
                                    Ritual de Preparación
                                </h4>
                                <p className="text-sm text-purple-300 leading-relaxed font-body">
                                    Antes de la sesión, requerimos 5 minutos de silencio absoluto y una hidratación consciente. Trae contigo una intención clara sobre la emoción que deseas transmutar.
                                </p>
                            </div>

                            {/* Therapist & CTA */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4 pt-6 border-t border-purple-500/20">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-cover bg-center border-2 border-purple-500/50" style={{ backgroundImage: `url("${therapist.image}")` }}></div>
                                    <div>
                                        <p className="text-xs text-purple-300 uppercase tracking-wide font-body">Guiado por</p>
                                        <p className="text-sm font-bold text-white font-display">{therapist.name}</p>
                                    </div>
                                </div>
                                <a
                                    href={therapist.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sm:ml-auto w-full sm:w-auto px-8 h-12 rounded-full bg-purple-600/80 hover:bg-purple-500 text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span>Reservar con {therapist.name.split(' ')[0]}</span>
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="order-1 lg:order-2 relative group-hover:transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <div className="relative w-full aspect-[4/5] lg:aspect-square bg-cover bg-center rounded-[3rem] overflow-hidden shadow-2xl border border-purple-500/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn50rKrptOTqsdjQk5BPJVVLTsChFkCj4zDlmz_9q58-kyY4QKvMrZDHe8pDUUDWN2O6rP7l1dt-fNr82vTtG-bbCK4pGOt1HfaX3qSY5wYqA6JI_cxz_O_jY2UUtlv53itu6lmw68hy2FkAbsWQOOtYSzMRvR00A3e5rJzDSwKKOHHu_aRqho3qORa24_JBbBe5H0gtv6rLNbPoD2SUgmmaZYWotUm95CohPw6mfMLnPfBCpfl9s5oZK8xWttrgJEsMV55Le4s--x")' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E]/80 to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Service 2: Biomagnetismo */}
                <article id="biomagnetismo" className="group relative transition-all duration-700 rounded-[3rem] p-6 lg:py-16 lg:px-[72px] bg-card-purple border border-purple-500/10 hover:shadow-2xl hover:shadow-purple-900/10 animate-fade-in-up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Section (Left on Desktop) */}
                        <div className="relative group-hover:transform group-hover:translate-y-[-10px] transition-transform duration-700 ease-out">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <div className="relative w-full aspect-[4/5] lg:aspect-square bg-cover bg-center rounded-[3rem] overflow-hidden shadow-2xl border border-purple-500/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPprJmbtB6gY7TKwg-SU1gw7ip5e5kGRvJE9ntN2lptVUQLv88ijeRv9LQhd58CB3dq9IlPAqcHiqzGA8GjsBvm37_fhBIGQO9zESo8yTebBRH1hrAmjyZZtPobrFcWsLh33wv0KBV3qP7OM4LOGln8edwt9oEQVuXSx4zaqLTMQjLu3A969N2aatUvfBFzVrmO3L1mzlm9r_29GjLJiA8c_LA8FSxz2SkJm0893wgfshIsoW6eVg_9TBD2VMjJtH4In57iiiXgf3_")' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E]/80 to-transparent opacity-60"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3 text-accent-gold mb-2">
                                <span className="material-symbols-outlined">iron</span>
                                <span className="text-sm font-bold uppercase tracking-widest font-body">Salud Física</span>
                            </div>
                            <h2 className="text-4xl font-display font-light text-white leading-tight">
                                Biomagnetismo <strong className="font-bold text-purple-300">Holístico</strong>
                            </h2>
                            <p className="text-purple-200/80 text-lg leading-relaxed font-light font-body">
                                Restablece el equilibrio del pH interno mediante el uso de campos magnéticos de intensidad media. Esta terapia neutraliza patógenos y disfunciones orgánicas, devolviendo al cuerpo su capacidad natural de autosanación.
                            </p>

                            {/* Ritual Box */}
                            <div className="mt-4 p-6 rounded-2xl glass-panel border border-purple-500/20 bg-gradient-to-bl from-purple-500/5 to-transparent">
                                <h4 className="text-white font-medium mb-3 flex items-center gap-2 font-display">
                                    <span className="material-symbols-outlined text-accent-gold text-xl">checkroom</span>
                                    Ritual de Preparación
                                </h4>
                                <p className="text-sm text-purple-300 leading-relaxed font-body">
                                    Es esencial asistir con ropa cómoda, preferiblemente de algodón y sin metales. Evita comidas pesadas dos horas antes para facilitar el rastreo energético.
                                </p>
                            </div>

                            {/* Therapist & CTA */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4 pt-6 border-t border-purple-500/20">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-cover bg-center border-2 border-purple-500/50" style={{ backgroundImage: `url("${therapist.image}")` }}></div>
                                    <div>
                                        <p className="text-xs text-purple-300 uppercase tracking-wide font-body">Guiado por</p>
                                        <p className="text-sm font-bold text-white font-display">{therapist.name}</p>
                                    </div>
                                </div>
                                <a
                                    href={therapist.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sm:ml-auto w-full sm:w-auto px-8 h-12 rounded-full bg-purple-600/80 hover:bg-purple-500 text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span>Reservar con {therapist.name.split(' ')[0]}</span>
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Service 3: Mesa Cuántica */}
                <article id="mesa-cuantica" className="group relative transition-all duration-700 rounded-[3rem] p-6 lg:py-16 lg:px-[72px] bg-card-purple border border-purple-500/10 hover:shadow-2xl hover:shadow-purple-900/10 animate-fade-in-up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 flex flex-col gap-6">
                            <div className="flex items-center gap-3 text-accent-gold mb-2">
                                <span className="material-symbols-outlined">all_inclusive</span>
                                <span className="text-sm font-bold uppercase tracking-widest font-body">Alineación Energética</span>
                            </div>
                            <h2 className="text-4xl font-display font-light text-white leading-tight">
                                Mesa <strong className="font-bold text-purple-300">Cuántica</strong>
                            </h2>
                            <p className="text-purple-200/80 text-lg leading-relaxed font-light font-body">
                                Una tecnología espiritual avanzada que trabaja a través de la radiónica y la geometría sagrada. Realinea tu campo vibracional a través de múltiples dimensiones para manifestar cambios en tu realidad física y espiritual.
                            </p>

                            {/* Ritual Box */}
                            <div className="mt-4 p-6 rounded-2xl glass-panel border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
                                <h4 className="text-white font-medium mb-3 flex items-center gap-2 font-display">
                                    <span className="material-symbols-outlined text-accent-gold text-xl">light_mode</span>
                                    Ritual de Preparación
                                </h4>
                                <p className="text-sm text-purple-300 leading-relaxed font-body">
                                    Define una intención clara y poderosa para la sesión. Escríbela en papel y medita sobre ella durante 10 minutos antes de comenzar el proceso cuántico.
                                </p>
                            </div>

                            {/* Therapist & CTA */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4 pt-6 border-t border-purple-500/20">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-cover bg-center border-2 border-purple-500/50" style={{ backgroundImage: `url("${therapist.image}")` }}></div>
                                    <div>
                                        <p className="text-xs text-purple-300 uppercase tracking-wide font-body">Guiado por</p>
                                        <p className="text-sm font-bold text-white font-display">{therapist.name}</p>
                                    </div>
                                </div>
                                <a
                                    href={therapist.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sm:ml-auto w-full sm:w-auto px-8 h-12 rounded-full bg-purple-600/80 hover:bg-purple-500 text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span>Reservar con {therapist.name.split(' ')[0]}</span>
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="order-1 lg:order-2 relative group-hover:transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-accent-gold/50 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <div className="relative w-full aspect-[4/5] lg:aspect-square bg-cover bg-center rounded-[3rem] overflow-hidden shadow-2xl border border-purple-500/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrbCwWWyoMIttFwIzvyYDDayOEKky83AER9_O6nQZVLx6IyzJvN6gyeS38_pNk0_ct17neLvRzEUWDUW1xPEYWN85pA2jycskiZO4qv5hIm47vlwktQ6yc6UqYoqJEi-gflpO5py-SpkA2Y8YY63HHIVfLQGt6eGc0r31lgBisKk1apatb-Y-ngnDqdkcbpr5N6nTqHi205xE_T7NHyoMwz8MTn0QavznnUSBTkKHGolJ6K-9y4A5SN51_wYsnLbRoROUT_0Oz_JVk")' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E]/80 to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            {/* Testimonial Grid Section */}
            <section className="w-full bg-[#1A0B2E] border-t border-purple-500/10 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="material-symbols-outlined text-5xl text-purple-500/30 mb-4">format_quote</span>
                        <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-4">Voces del <span className="font-bold text-accent-gold">Santuario</span></h2>
                        <p className="text-purple-300 max-w-2xl mx-auto font-body">Historias reales de transformación y sanación vividas por nuestra comunidad.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="bg-card-purple border border-purple-500/10 p-8 rounded-3xl relative hover:bg-[#240b36] transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="size-14 rounded-full bg-purple-900 overflow-hidden shrink-0">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg font-display">{testimonial.name}</h4>
                                        <p className="text-accent-gold text-sm font-medium uppercase tracking-wide font-body">{testimonial.service}</p>
                                    </div>
                                </div>
                                <p className="text-purple-200 italic text-lg leading-relaxed font-body">
                                    "{testimonial.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
