import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import LettriisPreregister from "./components/LettriisPreregister";
import HeartOfTheLoom from "./components/HeartOfTheLoom";
import Lexoria from "./components/Lexoria";
import ShipThatEatsSecrets from "./components/ShipThatEatsSecrets";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-50 text-primary">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy" element={<Privacy />} /> 
                        <Route path="/lettriis/privacy" element={<Privacy />} />
                        <Route path="/lettriis" element={<LettriisPreregister />} />
                        <Route path="/lettriis/preregister" element={<LettriisPreregister />} />
                        <Route path="/heart-of-the-loom" element={<HeartOfTheLoom />} />
                        <Route path="/books/heart-of-the-loom" element={<HeartOfTheLoom />} />
                        <Route path="/lexoria" element={<Lexoria />} />
                        <Route path="/games/lexoria" element={<Lexoria />} />
                        <Route path="/the-ship-that-eats-secrets" element={<ShipThatEatsSecrets />} />
                        <Route path="/books/the-ship-that-eats-secrets" element={<ShipThatEatsSecrets />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;