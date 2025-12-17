import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const linkBase =
        "text-sm font-medium text-slate-700 hover:text-slate-900";

    const linkActive =
        "text-sm font-semibold text-slate-900";

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                <h1 className="text-base font-semibold text-slate-900">
                    B. Cole Gardiner
                </h1>

                <nav className="flex items-center gap-5">
                    <NavLink to="/" end className={({ isActive }) => (isActive ? linkActive : linkBase)}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? linkActive : linkBase)}>About</NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? linkActive : linkBase)}>Portfolio</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? linkActive : linkBase)}>Blog</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? linkActive : linkBase)}>Contact</NavLink>
                </nav>
            </div>
        </header>
    );
}