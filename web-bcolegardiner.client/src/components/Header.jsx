import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
    ["/", "Home", true], ["/about", "About"], ["/heart-of-the-loom", "Books"],
    ["/lettriis", "Lettriis"], ["/lexoria", "Lexoria"], ["/naughty-list", "Naughty List"],
    ["/portfolio", "Portfolio"], ["/blog", "Blog"], ["/contact", "Contact"],
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    React.useEffect(() => { setOpen(false); }, [location.pathname]);
    const linkBase = "text-sm font-medium text-slate-700 hover:text-slate-950";
    const linkActive = "text-sm font-bold text-slate-950";
    const navLinks = links.map(([to, label, end]) => (
        <NavLink key={to} to={to} end={!!end} onClick={() => setOpen(false)}
            className={({ isActive }) => isActive ? linkActive : linkBase}>{label}</NavLink>
    ));
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3">
                <div className="flex items-center justify-between gap-4 lg:hidden">
                    <NavLink to="/" className="text-base font-bold text-slate-950">B. Cole Gardiner</NavLink>
                    <button type="button" aria-expanded={open} aria-controls="mobile-site-navigation"
                        aria-label={open ? "Close navigation" : "Open navigation"}
                        onClick={() => setOpen(value => !value)}
                        className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900">
                        {open ? "Close ✕" : "Menu ☰"}
                    </button>
                </div>
                {open && <nav id="mobile-site-navigation" className="mt-3 grid grid-cols-2 gap-4 border-t border-slate-200 py-3 lg:hidden" aria-label="Mobile navigation">{navLinks}</nav>}
                <div className="hidden items-center justify-between gap-4 lg:flex">
                    <NavLink to="/" className="shrink-0 text-base font-bold text-slate-950">B. Cole Gardiner</NavLink>
                    <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Main navigation">{navLinks}</nav>
                </div>
            </div>
        </header>
    );
}
