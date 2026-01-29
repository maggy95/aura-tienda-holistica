
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    
    // Find product or default to first one
    const product = products.find(p => p.id === Number(id)) || products[0];

    // States for interaction
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [selectedVariant, setSelectedVariant] = useState<string | null>(
        product.variants ? product.variants[0].options[0] : null
    );
    const [quantity, setQuantity] = useState(1);
    const [openAccordion, setOpenAccordion] = useState<string>('description');
    const [showStickyBar, setShowStickyBar] = useState(false);

    // Filter related products (simple logic: exclude current, take 4)
    const relatedProducts = useMemo(() => {
        return products.filter(p => p.id !== product.id).slice(0, 4);
    }, [product.id]);

    // Track recently viewed
    useEffect(() => {
        const saved = localStorage.getItem('aura_recently_viewed');
        let list: number[] = [];
        if (saved) {
            try { list = JSON.parse(saved); } catch(e) {}
        }
        // Add current ID to front, unique, limit to 8
        const newList = [product.id, ...list.filter(item => item !== product.id)].slice(0, 8);
        localStorage.setItem('aura_recently_viewed', JSON.stringify(newList));
    }, [product.id]);

    // Sale Calculations
    const isSale = !!product.originalPrice;
    const calculateDiscount = () => {
        if (!product.originalPrice) return 0;
        const p = parseFloat(product.price.replace('$', ''));
        const o = parseFloat(product.originalPrice.replace('$', ''));
        return Math.round(((o - p) / o) * 100);
    };
    const discountPercent = calculateDiscount();

    // --- BADGE LOGIC (Unified with PLP) ---
    // Rule: Single Badge. Priority: Discount > Tag.
    let mainBadge = null;
    let mainBadgeStyle = "";

    if (isSale && discountPercent > 0) {
        mainBadge = `-${discountPercent}%`;
        mainBadgeStyle = "bg-red-500/90 text-white shadow-xl";
    } else if (product.tag) {
        mainBadge = product.tag;
        mainBadgeStyle = "bg-accent-gold/20 backdrop-blur-md text-accent-gold border border-accent-gold/20";
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedImage(product.images ? product.images[0] : product.image);
        setSelectedVariant(product.variants ? product.variants[0].options[0] : null);
        setQuantity(1);
    }, [id, product]);

    // Handle scroll for sticky bar
    useEffect(() => {
        const handleScroll = () => {
            setShowStickyBar(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleAddToCart = () => {
        if (product.variants && !selectedVariant) {
            alert("Por favor selecciona una variante.");
            return;
        }
        addToCart(product, selectedVariant || undefined);
        for(let i=1; i<quantity; i++) {
             addToCart(product, selectedVariant || undefined);
        }
    };

    const toggleAccordion = (section: string) => {
        setOpenAccordion(openAccordion === section ? '' : section);
    };

    return (
        <div className="min-h-screen text-text-main pt-24 pb-32">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
                <nav className="flex items-center gap-2 text-sm text-purple-300 font-body">
                    <Link to="/store" className="hover:text-white transition-colors">Tienda</Link>
                    <span>/</span>
                    <span className="text-white font-medium">{product.name}</span>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
                    
                    {/* LEFT COLUMN: GALLERY */}
                    <div className="flex flex-col gap-6">
                        <div className="aspect-[4/5] w-full bg-card-purple rounded-[2rem] overflow-hidden border border-purple-500/10 relative group">
                            <img 
                                src={selectedImage} 
                                alt={product.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                             {mainBadge && (
                                <span className={`absolute top-6 left-6 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold ${mainBadgeStyle}`}>
                                    {mainBadge}
                                </span>
                            )}
                        </div>
                        {product.images && product.images.length > 0 && (
                            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                                {product.images.map((img, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setSelectedImage(img)}
                                        className={`size-20 lg:size-24 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                                            selectedImage === img 
                                            ? 'border-accent-gold opacity-100' 
                                            : 'border-transparent opacity-60 hover:opacity-100'
                                        }`}
                                    >
                                        <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: DETAILS */}
                    <div className="relative">
                        <div className="lg:sticky lg:top-24 space-y-8">
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-display font-light text-white mb-2 leading-tight">
                                    {product.name}
                                </h1>
                                <p className="text-xl text-purple-200 font-light font-body">{product.subtitle}</p>
                                
                                <div className="mt-6 flex flex-col items-start gap-1">
                                    {isSale ? (
                                        <div className="flex items-center gap-4">
                                            <span className="text-3xl font-bold text-red-300 tracking-tight font-body">{product.price}</span>
                                            <span className="text-xl text-purple-300/50 line-through decoration-purple-300/30 font-body">{product.originalPrice}</span>
                                            <span className="text-sm font-medium text-green-300 bg-green-900/30 px-2 py-0.5 rounded border border-green-500/20">
                                                Ahorra {discountPercent}%
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="text-3xl font-bold text-accent-gold tracking-tight font-body">{product.price}</div>
                                    )}
                                    {isSale && (
                                        <div className="flex items-center gap-2 text-xs text-red-300 mt-1 animate-pulse">
                                            <span className="material-symbols-outlined text-sm">timer</span>
                                            Oferta por tiempo limitado
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="h-px bg-purple-500/10 w-full"></div>

                            {product.benefits && (
                                <div className="flex flex-wrap gap-4">
                                    {product.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-purple-200 font-body">
                                            <span className="material-symbols-outlined text-accent-gold text-lg">check_circle</span>
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {product.variants && product.variants.map((variant, vIdx) => (
                                <div key={vIdx}>
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-purple-300 mb-3 font-body">
                                        {variant.name}: <span className="text-white">{selectedVariant}</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {variant.options.map((option, oIdx) => (
                                            <button
                                                key={oIdx}
                                                onClick={() => setSelectedVariant(option)}
                                                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all border font-body ${
                                                    selectedVariant === option
                                                    ? 'bg-purple-600 border-purple-500 text-white'
                                                    : 'bg-transparent text-purple-300 border-purple-500/20 hover:border-accent-gold hover:text-white'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <div className="flex items-center bg-[#1A0B2E] border border-purple-500/20 rounded-full px-4 h-14">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-purple-300 hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">remove</span>
                                        </button>
                                        <span className="w-12 text-center font-bold text-lg text-white font-body">{quantity}</span>
                                        <button onClick={() => setQuantity(quantity + 1)} className="text-purple-300 hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                    </div>
                                    <button onClick={handleAddToCart} className="flex-1 bg-gold-gradient text-deep-purple h-14 rounded-full font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                        <span>Añadir al Carrito</span>
                                        <span className="material-symbols-outlined">shopping_bag</span>
                                    </button>
                                </div>
                                <button className="w-full bg-purple-500/10 border border-purple-500/20 text-white h-14 rounded-full font-bold text-lg hover:bg-purple-500/20 transition-colors">
                                    Comprar Ahora
                                </button>
                            </div>

                            <div className="border-t border-purple-500/10 pt-2 space-y-2">
                                <AccordionItem title="Descripción" isOpen={openAccordion === 'description'} onClick={() => toggleAccordion('description')}>
                                    {product.longDescription || product.description}
                                </AccordionItem>
                                <AccordionItem title="Tiempo de Envío" isOpen={openAccordion === 'shipping'} onClick={() => toggleAccordion('shipping')}>
                                    Envío gratuito en pedidos superiores a $75. Procesamos los pedidos en 24-48 horas laborables. Entrega estimada: 3-5 días hábiles.
                                </AccordionItem>
                                <AccordionItem title="Recomendaciones" isOpen={openAccordion === 'recommendations'} onClick={() => toggleAccordion('recommendations')}>
                                    {product.recommendations || "Combina este producto con una intención clara y un espacio tranquilo para maximizar sus beneficios."}
                                </AccordionItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Section */}
            <div className="border-t border-purple-500/10 bg-[#1A0B2E] py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-display text-white mb-10 text-center">Te puede interesar</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.map(related => (
                            <div key={related.id} className="group flex flex-col">
                                <Link to={`/product/${related.id}`} className="block overflow-hidden rounded-2xl bg-card-purple aspect-[4/5] relative mb-4 border border-purple-500/10">
                                    <img src={related.image} alt={related.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </Link>
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-white font-medium text-lg font-display">{related.name}</h3>
                                    <p className="font-bold text-accent-gold mb-3 font-body">{related.price}</p>
                                    <Link to={`/product/${related.id}`} className="w-full py-2 border border-purple-500/20 rounded-lg text-sm text-purple-200 hover:bg-white hover:text-deep-purple transition-colors text-center block mt-auto font-body uppercase tracking-wider">
                                        Ver detalles
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sticky Bottom Bar */}
            <div className={`fixed bottom-0 left-0 w-full bg-[#1A0B2E] border-t border-purple-500/10 p-4 z-40 transform transition-transform duration-300 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    <div className="hidden md:flex items-center gap-4">
                        <div className="size-12 rounded-lg overflow-hidden bg-purple-900 border border-purple-500/20">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm font-display">{product.name}</h4>
                            <p className="text-xs text-purple-300 font-body">{selectedVariant || "Variante estándar"}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 flex-1 md:flex-none justify-end">
                        <div className="flex items-center bg-[#11001C] border border-purple-500/20 rounded-full px-3 h-10">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-purple-300 hover:text-white px-2">-</button>
                            <span className="w-8 text-center font-bold text-sm text-white font-body">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="text-purple-300 hover:text-white px-2">+</button>
                        </div>
                        <button onClick={handleAddToCart} className="flex-1 md:w-auto px-6 py-3 bg-gold-gradient hover:scale-105 text-deep-purple font-bold rounded-full shadow-lg transition-transform active:scale-95 text-sm whitespace-nowrap">
                            Añadir - {product.price}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AccordionItem: React.FC<{ title: string, isOpen: boolean, onClick: () => void, children: React.ReactNode }> = ({ title, isOpen, onClick, children }) => (
    <div className="border-b border-purple-500/10">
        <button onClick={onClick} className="w-full py-4 flex items-center justify-between text-left hover:text-accent-gold transition-colors">
            <span className="font-bold font-body">{title}</span>
            <span className="material-symbols-outlined text-purple-300">{isOpen ? 'remove' : 'add'}</span>
        </button>
        {isOpen && <div className="pb-6 text-purple-200/80 leading-relaxed text-sm animate-fade-in font-body">{children}</div>}
    </div>
);

export default ProductDetail;
