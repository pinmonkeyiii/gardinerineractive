import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-primary text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">B. Cole Gardiner</h1>
            <nav className="space-x-4">
                <Link to="/" className="hover:text-accent">Home</Link>
                <Link to="/about" className="hover:text-accent">About</Link>
                <Link to="/portfolio" className="hover:text-accent">Portfolio</Link>
                <Link to="/blog" className="hover:text-accent">Blog</Link>
                <Link to="/contact" className="hover:text-accent">Contact</Link>
            </nav>
        </header>
    );
}