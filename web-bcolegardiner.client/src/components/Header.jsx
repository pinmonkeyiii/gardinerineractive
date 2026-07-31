import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const linkBase = "text-sm font-medium text-slate-700 hover:text-slate-950";
    const linkActive = "text-sm font-bold text-slate-950";

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <NavLink to="/" className="text-base font-bold text-slate-950">B. Cole Gardiner</NavLink>
                <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Main navigation">
                    <NavLink to="/" end className={({ isActive }) => isActive ? linkActive : linkBase}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? linkActive : linkBase}>About</NavLink>
                    <NavLink to="/heart-of-the-loom" className={({ isActive }) => isActive ? linkActive : linkBase}>Books</NavLink>
                    <NavLink to="/lexoria" className={({ isActive }) => isActive ? linkActive : linkBase}>Lexoria</NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? linkActive : linkBase}>Portfolio</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? linkActive : linkBase}>Blog</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? linkActive : linkBase}>Contact</NavLink>
                </nav>
            </div>
        </header>
    );
}
