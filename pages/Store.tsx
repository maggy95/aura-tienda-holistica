
import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { products } from '../data/products';

// Helper to parse price for filtering
const parsePrice = (priceStr: string): number => {
    return parseFloat(priceStr.replace('S/', '').replace(',', '').trim());
};

const Store: React.FC = () => {
    // --- FILTER STATES ---
    const [selectedCategory, setSelectedCategory] = useState<string>('Todo');
    const [selectedIntention, setSelectedIntention] = useState<string>('Todas');
    const [onlyInStock, setOnlyInStock] = useState(false);
    const [priceRange, setPriceRange] = useState<number>(300); // Max price slider
    const [showFilters, setShowFilters] = useState(false);

    // Derived Lists for Filters
    const categories = ['Todo', ...Array.from(new Set(products.map(p => p.category)))];
    const intentions = ['Todas', ...Array.from(new Set(products.map(p => p.intention || ''))).filter(i => i !== '')];

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchCategory = selectedCategory === 'Todo' || product.category === selectedCategory;
            const matchIntention = selectedIntention === 'Todas' || product.intention === selectedIntention;
            const matchStock = !onlyInStock || product.inStock;
            const price = parsePrice(product.price);
            const matchPrice = price <= priceRange;

            return matchCategory && matchIntention && matchStock && matchPrice;
        });
    }, [selectedCategory, selectedIntention, onlyInStock, priceRange]);

    const handleReset = () => {
        setSelectedCategory('Todo');
        setSelectedIntention('Todas');
        setOnlyInStock(false);
        setPriceRange(300);
    };

    return (
        <div className="min-h-screen">
            {/* HERO SYSTEM: STORE (Sacred Altar Image) */}
            <div className="relative min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
                <img
                    src="/assets/images/hero_store.jpg"
                    alt="Altar Sagrado - Cristales, Velas y Sahumerio"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Heavy purple/black overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#240b36]/70 via-[#1a0b2e]/60 to-[#11001C]"></div>

                <div className="relative z-10 max-w-[1280px] w-full px-6 lg:px-12 text-center flex flex-col items-center gap-6 animate-fade-in-up">
                    <div className="space-y-4">
                        <span className="text-accent-gold uppercase font-bold tracking-[0.4em] text-[10px] md:text-xs">Curaduría de Objetos de Poder</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-[1.1] tracking-tight">
                            Colección <span className="font-bold italic text-purple-200">Sagrada</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-purple-100/90 font-light leading-relaxed font-body">
                            Herramientas energéticas seleccionadas a mano para elevar tu vibración, proteger tu espacio y manifestar tus intenciones más profundas.
                        </p>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-[80px] z-40 border-b border-purple-500/10 bg-[#11001C]/90 py-4 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                    {/* Categories (Horizontal Scroll) */}
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

                    {/* Filter Toggle */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border transition font-body ${showFilters ? 'bg-white text-deep-purple border-white' : 'bg-transparent text-white border-purple-500/20 hover:bg-purple-500/10'
                            }`}
                    >
                        <span className="material-symbols-outlined text-[18px]">tune</span>
                        Filtros
                    </button>
                </div>

                {/* Expanded Filters */}
                {showFilters && (
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6 pb-2 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-card-purple p-6 rounded-2xl border border-purple-500/10">
                            {/* Intention */}
                            <div>
                                <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-3 font-display">Intención</h4>
                                <div className="flex flex-wrap gap-2">
                                    {intentions.map(int => (
                                        <button
                                            key={int}
                                            onClick={() => setSelectedIntention(int)}
                                            className={`px-3 py-1 rounded-lg text-xs font-medium border transition ${selectedIntention === int
                                                ? 'bg-purple-600/50 border-purple-500 text-white'
                                                : 'border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-500/50'
                                                }`}
                                        >
                                            {int}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-3 font-display">
                                    Precio Máximo: <span className="text-white">S/ {priceRange}</span>
                                </h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="500"
                                    step="10"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full h-2 bg-purple-900/50 rounded-lg appearance-none cursor-pointer accent-accent-gold"
                                />
                                <div className="flex justify-between text-xs text-purple-400 mt-2 font-body">
                                    <span>S/ 0</span>
                                    <span>S/ 500+</span>
                                </div>
                            </div>

                            {/* Availability & Reset */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-3 font-display">Disponibilidad</h4>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition ${onlyInStock ? 'bg-purple-600 border-purple-500' : 'border-purple-500/30 group-hover:border-purple-400'}`}>
                                            {onlyInStock && <span className="material-symbols-outlined text-xs text-white">check</span>}
                                        </div>
                                        <input type="checkbox" className="hidden" checked={onlyInStock} onChange={() => setOnlyInStock(!onlyInStock)} />
                                        <span className="text-sm text-purple-200 group-hover:text-white font-body">Solo en stock</span>
                                    </label>
                                </div>
                                <button onClick={handleReset} className="self-end text-xs text-red-400 hover:text-red-300 underline mt-4 font-body">
                                    Limpiar Filtros
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Product Grid */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 pb-24">
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-purple-300 text-sm font-body">Mostrando {filteredProducts.length} productos</p>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card-purple rounded-3xl border border-purple-500/10">
                        <span className="material-symbols-outlined text-6xl text-purple-800 mb-4">filter_list_off</span>
                        <h3 className="text-xl text-white font-bold mb-2 font-display">Sin resultados</h3>
                        <p className="text-purple-300 font-body">Intenta ajustar tus filtros para encontrar lo que buscas.</p>
                        <button onClick={handleReset} className="mt-6 px-6 py-2 bg-white text-deep-purple rounded-full font-bold hover:bg-gray-200">
                            Ver todos los productos
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Store;
