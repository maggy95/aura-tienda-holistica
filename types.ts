
export interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
    isTyping?: boolean;
}

export interface VideoGenerationState {
    status: 'idle' | 'checking-key' | 'generating' | 'complete' | 'error';
    videoUrl?: string;
    error?: string;
    progressMessage?: string;
}

export interface Product {
    id: number;
    name: string;
    subtitle?: string;
    description: string;
    price: string;
    originalPrice?: string;
    image: string;
    images?: string[];
    tag?: string;
    category: string;
    intention?: string;
    inStock: boolean;
    longDescription?: string;
    burnTime?: string;
    waxType?: string;
    wick?: string;
    notes?: {
        title: string;
        desc: string;
        icon: string;
    }[];
    ritual?: {
        step: number;
        title: string;
        desc: string;
    }[];
    reviews?: {
        id: string;
        author: string;
        text: string;
    }[];
    variants?: {
        name: string;
        options: string[];
    }[];
    benefits?: string[];
    recommendations?: string;
}

export interface CartItem extends Product {
    quantity: number;
    selectedVariant?: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    duration: string;
    type: string;
    image: string;
    guide: string;
    guideImage: string;
}

export interface Order {
    id: string;
    date: string;
    status: 'Procesando' | 'Enviado' | 'Entregado';
    items: CartItem[];
    total: number;
    shippingAddress: string;
}

export interface Appointment {
    id: string;
    serviceName: string;
    date: string;
    time: string;
    status: 'Confirmada' | 'Pendiente' | 'Realizada';
    guideName: string;
    image: string;
}

export interface UserProfile {
    name: string;
    email: string;
    phone: string;
    address: string;
}

// --- BLOG TYPES ---

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    excerpt: string;
    category: string;
    contentType: 'Artículo' | 'Guía' | 'Terapia';
    author: string;
    date: string;
    image: string;
    content: BlogContentBlock[];
    relatedProductIds: number[];
}

export interface BlogContentBlock {
    type: 'paragraph' | 'heading' | 'list' | 'box' | 'warning' | 'quote';
    title?: string;
    text?: string;
    items?: string[];
}
