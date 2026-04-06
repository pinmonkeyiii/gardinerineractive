import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-primary text-white text-center p-4">
            <p>&copy; {new Date().getFullYear()} B. Cole Gardiner. All rights reserved.</p>
            <a href="/privacy" className="underline hover:opacity-90">
                Privacy Policy
            </a>
        </footer>
    );
}