
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todo');

    // Extract unique categories
    const categories = ['Todo', ...Array.from(new Set(blogPosts.map(p => p.category)))];

    // Filter posts based on category
    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchCategory = selectedCategory === 'Todo' || post.category === selectedCategory;
            return matchCategory;
        });
    }, [selectedCategory]);

    return (
        <div className="min-h-screen">
            {/* HERO SYSTEM: BLOG (Floating Books/Wisdom Image) */}
            <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
                <img
                    src="/assets/images/hero_blog.jpg"
                    alt="Sabiduría para tu Alma - Libros Flotantes y Magia"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Overlay oscuro degradado */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#240b36]/70 via-[#1a0b2e]/60 to-[#11001C]"></div>

                <div className="relative z-10 max-w-[1280px] w-full px-6 lg:px-12 text-center flex flex-col items-center gap-6 animate-fade-in-up">
                    <div className="space-y-4">
                        <span className="text-accent-gold uppercase font-bold tracking-[0.4em] text-[10px] md:text-xs">Crónicas de Evolución y Conciencia</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-[1.1] tracking-tight text-glow">
                            Sabiduría para <br /><span className="font-bold italic text-purple-200">tu Alma</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-purple-100/90 font-light leading-relaxed font-body">
                            Profundiza en las artes de la sanación, entiende la ciencia de la energía y descubre guías prácticas para navegar tu despertar espiritual.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Bar - Simplified */}
            <div className="sticky top-[80px] z-40 border-b border-purple-500/10 bg-[#11001C]/90 py-4 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
                    <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition whitespace-nowrap font-body ${selectedCategory === cat
                                        ? 'bg-purple-900/50 text-white shadow-lg border border-purple-500/50'
                                        : 'bg-purple-500/5 text-purple-300 hover:bg-purple-500/10 hover:text-white border border-purple-500/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group flex flex-col bg-card-purple rounded-[2.5rem] overflow-hidden border border-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20"
                            >
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] to-transparent opacity-60"></div>
                                    <span className="absolute bottom-4 left-4 bg-purple-900/60 backdrop-blur-md border border-purple-500/20 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 mb-4 text-xs text-purple-400 font-medium uppercase tracking-wider font-body">
                                        <span>{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-display font-light text-white mb-4 group-hover:text-accent-gold transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-purple-200/70 text-sm leading-relaxed mb-8 flex-1 line-clamp-3 font-light font-body">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:translate-x-2 transition-transform font-body">
                                        Leer más
                                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card-purple rounded-3xl border border-purple-500/10">
                        <span className="material-symbols-outlined text-6xl text-purple-800 mb-4">article</span>
                        <h3 className="text-xl text-white font-bold mb-2 font-display">No hay artículos</h3>
                        <button onClick={() => setSelectedCategory('Todo')} className="mt-6 px-6 py-2 bg-white text-deep-purple rounded-full font-bold hover:bg-gray-200">
                            Ver todo el blog
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Blog;
