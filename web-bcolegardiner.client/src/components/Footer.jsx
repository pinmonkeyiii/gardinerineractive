import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-primary px-4 py-5 text-center text-slate-900">
            <p>&copy; {new Date().getFullYear()} B. Cole Gardiner. All rights reserved.</p>
            <p className="mt-2 text-sm text-slate-900/90">As an Amazon Associate I earn from qualifying purchases.</p>
            <Link to="/privacy" className="mt-2 inline-block underline hover:opacity-90">
                Privacy Policy
            </Link>
            <p className="mt-2 text-sm">
                Author:{" "}
                <a
                    href="mailto:pinmonkeyiii@gmail.com"
                    className="underline hover:opacity-90"
                >
                    pinmonkeyiii@gmail.com
                </a>
                <br />
                Gardiner Interactive:{" "}
                <a
                    href="mailto:brandon@gardinerinteractive.com"
                    className="underline hover:opacity-90"
                >
                    brandon@gardinerinteractive.com
                </a>
            </p>
        </footer>
    );
}
