
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="pt-32 text-center text-white min-h-screen">
                <h1 className="text-2xl font-display">Artículo no encontrado</h1>
                <Link to="/blog" className="text-accent-gold hover:underline mt-4 inline-block">Volver al blog</Link>
            </div>
        );
    }

    const relatedProducts = products.filter(p => post.relatedProductIds.includes(p.id));

    return (
        <div className="min-h-screen text-text-main pb-32 font-body">
            {/* HERO SYSTEM: BLOG POST */}
            <section className="relative min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#240b36]/70 via-[#1a0b2e]/60 to-[#11001C]"></div>
                
                <div className="relative z-10 max-w-[1280px] w-full px-6 lg:px-12 text-center flex flex-col items-center gap-8 animate-fade-in-up">
                    <div className="space-y-6">
                        <span className="text-accent-gold uppercase font-bold tracking-[0.4em] text-[10px] md:text-xs">{post.category} · {post.date}</span>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-light text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                            {post.title}
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-purple-100 font-light italic leading-relaxed drop-shadow-md">
                            {post.subtitle}
                        </p>
                        <div className="flex items-center justify-center gap-8 pt-4 text-sm text-purple-300 font-medium">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-accent-gold text-base">person</span>
                                Por {post.author}
                            </div>
                            <div className="hidden sm:flex items-center gap-2">
                                <span className="material-symbols-outlined text-accent-gold text-base">schedule</span>
                                8 min de lectura
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                <nav className="flex items-center gap-2 text-sm text-purple-400">
                    <Link to="/" className="hover:text-white transition">Inicio</Link>
                    <span>/</span>
                    <Link to="/blog" className="hover:text-white transition">Blog</Link>
                    <span>/</span>
                    <span className="text-purple-200 truncate opacity-60">{post.title}</span>
                </nav>
            </div>

            {/* Main Content */}
            <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
                <div className="space-y-10 text-lg md:text-xl leading-relaxed text-purple-100 font-light">
                    {post.content.map((block, idx) => {
                        switch (block.type) {
                            case 'paragraph':
                                return (
                                    <p key={idx} className="mb-6 last:mb-0" dangerouslySetInnerHTML={{ __html: block.text || '' }} />
                                );
                            case 'heading':
                                return (
                                    <h2 key={idx} className="text-3xl md:text-4xl font-display font-light text-accent-gold pt-12 pb-4 border-b border-purple-500/20 mb-8">
                                        {block.text}
                                    </h2>
                                );
                            case 'quote':
                                return (
                                    <div key={idx} className="relative py-10 px-8 md:px-16 my-12 text-center bg-card-purple rounded-3xl border border-purple-500/20 italic text-2xl text-white font-display shadow-lg">
                                        <span className="material-symbols-outlined absolute top-4 left-4 text-accent-gold opacity-30 text-6xl select-none">format_quote</span>
                                        {block.text}
                                    </div>
                                );
                            case 'list':
                                return (
                                    <ul key={idx} className="space-y-6 my-10 pl-4 md:pl-8">
                                        {block.items?.map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <span className="flex-shrink-0 size-2 rounded-full bg-accent-gold mt-2.5"></span>
                                                <span dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                );
                            case 'box':
                                return (
                                    <div key={idx} className="bg-purple-900/20 border border-purple-500/30 p-8 md:p-12 rounded-[2.5rem] my-12 shadow-2xl backdrop-blur-sm">
                                        <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display">
                                            <span className="material-symbols-outlined text-accent-gold text-2xl self-center">magic_button</span>
                                            {block.title}
                                        </h4>
                                        <ul className="space-y-5">
                                            {block.items?.map((item, i) => (
                                                <li key={i} className="flex gap-4 items-start text-base md:text-lg">
                                                    <span className="material-symbols-outlined text-accent-gold mt-1 text-xl">star</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            case 'warning':
                                return (
                                    <div key={idx} className="bg-red-900/20 border border-red-500/30 p-8 rounded-3xl my-16 flex gap-6 italic text-sm md:text-base text-red-200 leading-relaxed items-start">
                                        <span className="material-symbols-outlined shrink-0 text-red-400 text-2xl mt-0.5">info</span>
                                        <p>{block.text}</p>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>

                {/* Final CTAs */}
                <div className="mt-24 flex flex-col items-center p-16 bg-gradient-to-br from-[#1A0B2E] to-[#11001C] border border-purple-500/20 rounded-[3.5rem] text-center shadow-3xl">
                    <span className="material-symbols-outlined text-6xl text-accent-gold mb-6 animate-pulse-slow">self_improvement</span>
                    <h3 className="text-3xl md:text-4xl font-display mb-6">¿Sientes que es tu momento de sanar?</h3>
                    <p className="text-purple-200 mb-10 max-w-xl text-lg font-light leading-relaxed font-body">
                        Inicia tu proceso de transformación con una sesión privada. Paola te guiará para redescubrir tu equilibrio natural y soberanía energética.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                        <a 
                            href="https://cal.com" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 bg-gold-gradient text-deep-purple px-10 py-5 rounded-full font-bold hover:shadow-lg transition shadow-md flex items-center justify-center gap-3 group"
                        >
                            Reservar sesión
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">event_available</span>
                        </a>
                        <Link 
                            to="/services" 
                            className="flex-1 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition flex items-center justify-center"
                        >
                            Ver servicios
                        </Link>
                    </div>
                </div>
            </article>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32 border-t border-purple-500/10 mt-12">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
                        <h2 className="text-3xl md:text-4xl font-display font-light text-white text-center md:text-left">
                            Potencia tu proceso con <span className="font-bold italic text-accent-gold">Nuestros Productos</span>
                        </h2>
                        <Link to="/store" className="text-sm text-accent-gold hover:text-white transition-all font-bold uppercase tracking-widest flex items-center gap-2 group font-body">
                            Explorar tienda
                            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogPost;
