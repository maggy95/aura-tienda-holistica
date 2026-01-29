
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { createChatSession } from '../services/geminiService';
import { GenerateContentResponse } from '@google/genai';

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'model', text: '¡Hola! Soy tu guía espiritual Aura. ¿En qué puedo ayudarte hoy para elevar tu energía?' }
    ]);
    const [input, setInput] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const chatSessionRef = useRef<any>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    useEffect(() => {
        if (!chatSessionRef.current) {
            chatSessionRef.current = createChatSession();
        }
    }, []);

    const handleSend = async () => {
        if (!input.trim() || isThinking) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: input
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsThinking(true);

        try {
            const resultStream = await chatSessionRef.current.sendMessageStream({ message: userMsg.text });
            
            let fullText = '';
            const modelMsgId = (Date.now() + 1).toString();
            
            // Add placeholder for model message
            setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '', isTyping: true }]);

            for await (const chunk of resultStream) {
                const c = chunk as GenerateContentResponse;
                const text = c.text;
                if (text) {
                    fullText += text;
                    setMessages(prev => prev.map(msg => 
                        msg.id === modelMsgId 
                        ? { ...msg, text: fullText, isTyping: false } 
                        : msg
                    ));
                }
            }
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { 
                id: Date.now().toString(), 
                role: 'model', 
                text: 'Lo siento, mis energías están un poco bajas en este momento. Por favor intenta de nuevo.' 
            }]);
        } finally {
            setIsThinking(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-card-purple rounded-2xl border border-purple-500/20 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up backdrop-blur-xl">
                    <div className="bg-purple-900/30 p-4 border-b border-purple-500/10 flex justify-between items-center backdrop-blur-md">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent-gold">magic_button</span>
                            <span className="font-display font-bold text-white">Guía Aura</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-purple-300 hover:text-white">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/20">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-3 text-sm font-body ${
                                    msg.role === 'user' 
                                    ? 'bg-purple-600 text-white rounded-tr-none' 
                                    : 'bg-[#11001C]/60 text-purple-100 rounded-tl-none border border-purple-500/10'
                                }`}>
                                    {msg.text}
                                    {msg.isTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-accent-gold animate-pulse align-middle"></span>}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 bg-[#11001C]/80 border-t border-purple-500/10">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Pregunta al universo..."
                                className="flex-1 bg-white/5 border border-purple-500/20 rounded-full px-4 py-2 text-sm text-white focus:ring-1 focus:ring-accent-gold focus:border-accent-gold outline-none transition font-body placeholder-purple-400/50"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={isThinking || !input.trim()}
                                className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors"
                            >
                                <span className="material-symbols-outlined text-[20px]">send</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-deep-purple shadow-[0_0_20px_rgba(252,211,77,0.4)] transition-all duration-300 hover:scale-105 overflow-hidden"
                aria-label="Abrir chat"
            >
                <span className="material-symbols-outlined text-[28px] leading-none select-none">{isOpen ? 'close' : 'chat_spark'}</span>
                
                {!isOpen && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-white opacity-20 blur-lg animate-pulse-slow"></span>
                )}
            </button>
        </div>
    );
};

export default ChatBot;
