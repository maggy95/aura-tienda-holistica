
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Store from './pages/Store';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

const App: React.FC = () => {
    return (
        <UserProvider>
            <CartProvider>
                <HashRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/store" element={<Store />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/account" element={<Account />} />
                        </Routes>
                    </Layout>
                </HashRouter>
            </CartProvider>
        </UserProvider>
    );
};

export default App;
