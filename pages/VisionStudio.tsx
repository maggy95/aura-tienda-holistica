import React, { useState, useRef } from 'react';
import { generateVeoVideo } from '../services/geminiService';

const VisionStudio: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState("");
    const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
    const [status, setStatus] = useState<'idle' | 'generating' | 'complete' | 'error'>('idle');
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState("");
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setVideoUrl(null);
                setStatus('idle');
            };
            reader.readAsDataURL(file);
        }
    };

    const checkAndGenerate = async () => {
        if (!selectedImage) return;
        setErrorMsg("");

        // Check for API Key first (Paid feature)
        try {
            const hasKey = await (window as any).aistudio.hasSelectedApiKey();
            if (!hasKey) {
                await (window as any).aistudio.openSelectKey();
                // Assume success after opening key selection as per instructions
            }
            
            // Proceed to generate
            setStatus('generating');
            // Extract base64 raw string
            const base64Data = selectedImage.split(',')[1];
            
            const url = await generateVeoVideo(base64Data, prompt, aspectRatio);
            setVideoUrl(url);
            setStatus('complete');

        } catch (err: any) {
            console.error(err);
            if (err.message?.includes("Requested entity was not found")) {
                 // Try one more time to prompt key, as it might be invalid
                 await (window as any).aistudio.openSelectKey();
                 setErrorMsg("La clave API era inválida. Por favor, selecciona una nueva e intenta de nuevo.");
            } else {
                 setErrorMsg("Error al manifestar tu visión. Por favor intenta de nuevo.");
            }
            setStatus('error');
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-deep-black bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbpzgvn22h1embmCXXDt7LP-I9CQOaV7wGmH6KPLbd6sW4EwFjyk4kVD8_FwCwtO1BX7nXGvmTAbbcaz63F13-tF9Ib-i_ELvOUgTKFWy3Of_OfOH7hfie31HURdqMuC9dyzB9dublv2_8sEHksJcjXW5A8D6f83KKW6g6ZgxGWwt5WdiMkKdjwRsgLjIILaCoe1W_G8jW2HaI460wp2fX2JFjAYZUfmy3SINDplD48K3-ZNvlNOjwAGvNde2e0KM1giksmuDeHjbv')] bg-cover bg-fixed">
            <div className="absolute inset-0 bg-[#030302]/90 backdrop-blur-sm"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 flex flex-col items-center">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/30 text-xs font-bold tracking-wide uppercase text-accent-gold mb-4">
                        <span className="material-symbols-outlined text-sm">auto_awesome</span>
                        Beta
                    </span>
                    <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-4">
                        Vision <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-200">Studio</span>
                    </h1>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        Sube una imagen de tu tablero de visión o un momento especial, y deja que nuestra IA mística le dé vida y movimiento.
                    </p>
                </div>

                <div className="w-full bg-[#1a161c]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Input Section */}
                        <div className="flex flex-col gap-6">
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className={`aspect-video w-full rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${selectedImage ? 'border-primary/50 bg-[#0e0c0f]' : 'border-white/20 hover:border-accent-gold/50 hover:bg-white/5'}`}
                            >
                                {selectedImage ? (
                                    <img src={selectedImage} alt="Preview" className="h-full w-full object-contain rounded-2xl" />
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-4xl text-gray-500 mb-2">add_photo_alternate</span>
                                        <span className="text-sm text-gray-400">Sube tu imagen (JPG/PNG)</span>
                                    </>
                                )}
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    className="hidden" 
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Intención (Prompt)</label>
                                <textarea 
                                    className="w-full bg-[#0e0c0f] border border-white/10 rounded-xl p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary text-sm resize-none h-24"
                                    placeholder="Describe cómo quieres que cobre vida esta imagen (ej: movimiento suave de agua, partículas de luz flotando...)"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-4">
                                <label className={`flex-1 cursor-pointer border rounded-xl p-3 flex items-center justify-center gap-2 transition-all ${aspectRatio === '16:9' ? 'border-accent-gold bg-accent-gold/10 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}>
                                    <input type="radio" name="ar" className="hidden" checked={aspectRatio === '16:9'} onChange={() => setAspectRatio('16:9')} />
                                    <span className="material-symbols-outlined">landscape</span>
                                    <span className="text-sm font-medium">16:9</span>
                                </label>
                                <label className={`flex-1 cursor-pointer border rounded-xl p-3 flex items-center justify-center gap-2 transition-all ${aspectRatio === '9:16' ? 'border-accent-gold bg-accent-gold/10 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}>
                                    <input type="radio" name="ar" className="hidden" checked={aspectRatio === '9:16'} onChange={() => setAspectRatio('9:16')} />
                                    <span className="material-symbols-outlined">portrait</span>
                                    <span className="text-sm font-medium">9:16</span>
                                </label>
                            </div>

                            <button 
                                onClick={checkAndGenerate}
                                disabled={!selectedImage || status === 'generating'}
                                className={`w-full py-4 rounded-full font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all ${!selectedImage || status === 'generating' ? 'bg-gray-600 cursor-not-allowed opacity-50' : 'bg-gradient-to-r from-primary to-accent hover:scale-[1.02]'}`}
                            >
                                {status === 'generating' ? (
                                    <>
                                        <span className="animate-spin material-symbols-outlined">progress_activity</span>
                                        Manifestando...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">movie_filter</span>
                                        Generar Video
                                    </>
                                )}
                            </button>
                            {errorMsg && <p className="text-red-400 text-xs text-center">{errorMsg}</p>}
                            <p className="text-[10px] text-center text-gray-500">
                                * Requiere una clave API con facturación habilitada (GCP).
                                <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="text-primary hover:underline ml-1">Más info</a>
                            </p>
                        </div>

                        {/* Output Section */}
                        <div className="flex flex-col items-center justify-center bg-[#0e0c0f] rounded-2xl border border-white/5 min-h-[300px] relative overflow-hidden">
                            {status === 'idle' && !videoUrl && (
                                <div className="text-center p-8 opacity-40">
                                    <span className="material-symbols-outlined text-6xl mb-4">play_circle</span>
                                    <p className="text-sm">Tu manifestación aparecerá aquí</p>
                                </div>
                            )}
                            
                            {status === 'generating' && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/80 backdrop-blur-sm p-8 text-center">
                                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6"></div>
                                    <h3 className="text-xl font-light text-white mb-2 animate-pulse">Tejiendo sueños...</h3>
                                    <p className="text-sm text-gray-400">Esto puede tomar un par de minutos.</p>
                                </div>
                            )}

                            {videoUrl && (
                                <video 
                                    src={videoUrl} 
                                    controls 
                                    autoPlay 
                                    loop 
                                    className="w-full h-full object-contain rounded-xl"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionStudio;