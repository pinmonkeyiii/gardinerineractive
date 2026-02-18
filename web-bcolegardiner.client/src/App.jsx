import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";

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
                        <Route path="/lettriis/privacy" element={<Privacy />} />"
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;