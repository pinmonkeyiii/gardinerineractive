import React from "react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white text-center p-4">
            <p>&copy; {new Date().getFullYear()} B. Cole Gardiner. All rights reserved.</p>
        </footer>
    );
}