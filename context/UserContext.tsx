
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Order, Appointment, UserProfile } from '../types';

interface UserContextType {
    user: UserProfile;
    orders: Order[];
    appointments: Appointment[];
    isLoggedIn: boolean;
    login: (email: string) => void;
    logout: () => void;
    addOrder: (order: Order) => void;
    updateProfile: (data: Partial<UserProfile>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock Initial Data
const INITIAL_USER: UserProfile = {
    name: "Sofia Rodriguez",
    email: "sofia.r@ejemplo.com",
    phone: "+34 600 000 000",
    address: "Calle Velázquez 12, Madrid"
};

const INITIAL_APPOINTMENTS: Appointment[] = [
    {
        id: "appt_1",
        serviceName: "Liberación Emocional (EFT)",
        date: "2023-11-15",
        time: "10:00 AM",
        status: "Realizada",
        guideName: "Paola Morote",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-QD0vld2EIk5wxhSzhVN0V4QPPdC79U5jl7y7hXaEwWGBsKObGnDIs_QhCoCf2rajQpeb8yX2etC2fMDrHAG0LTWPfumCjnCDB_9SO1m2Gp9VdKIX56bDUiTyK-lUupzeQDitBjqA3RaMto9T9TFF_mBFQGWr3ropPnvdmxV1pcenDjnSWCZFHmKpSTg47D3zGOK4TfAeeTaix59UxbNpOvOiAUpYElmQ0gEjh4Le03BIGp0zBXbgOU__7OzyPvHRZ4K2uSj-mTIR"
    },
    {
        id: "appt_2",
        serviceName: "Lectura de Registros Akáshicos",
        date: "2023-12-20",
        time: "16:30 PM",
        status: "Confirmada",
        guideName: "Paola Morote",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnCLps-3-Osx1irlw7DkowUUyp5pSDh919dgP2wNRi-6KselmnPxS50bKu06F30JEzzY9g6ydfQzU61Lr3eFvaHlwSE6v4iwJULU790OgMgnaYturEbHX_HD_hIS9ny58ojFw1gx45jxTku3BFxmjXkSO0E1nMHINxaR4t7X_sYCXPofUiWnQ28FUqFusUs6uqlm1TxKTKYSuvDpASS5gMRGRU2Ctr93R6pPnTS7UWQ2ZfIxhpXq0pQ1bvsualIWjCkTbNjAeiIzHn"
    }
];

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserProfile>(INITIAL_USER);
    const [orders, setOrders] = useState<Order[]>([]);
    const [appointments, setAppointments] = useState<Appointment[]>(INITIAL_APPOINTMENTS);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Load from local storage on mount (simulating database)
    useEffect(() => {
        const savedOrders = localStorage.getItem('aura_orders');
        const authStatus = localStorage.getItem('aura_auth');
        
        if (savedOrders) {
            try {
                setOrders(JSON.parse(savedOrders));
            } catch(e) { console.error(e); }
        }

        if (authStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    // Save orders when changed
    useEffect(() => {
        if(orders.length > 0) {
            localStorage.setItem('aura_orders', JSON.stringify(orders));
        }
    }, [orders]);

    const login = (email: string) => {
        // Mock login
        setIsLoggedIn(true);
        setUser(prev => ({ ...prev, email }));
        localStorage.setItem('aura_auth', 'true');
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('aura_auth');
    };

    const addOrder = (order: Order) => {
        setOrders(prev => [order, ...prev]);
    };

    const updateProfile = (data: Partial<UserProfile>) => {
        setUser(prev => ({ ...prev, ...data }));
    };

    return (
        <UserContext.Provider value={{
            user,
            orders,
            appointments,
            isLoggedIn,
            login,
            logout,
            addOrder,
            updateProfile
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
