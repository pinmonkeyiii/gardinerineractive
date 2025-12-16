import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", hp: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            setStatus(result.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Error submitting form. Please try again.   " + error);
        }
    };

    return (
        <section className="max-w-lg mx-auto py-12 px-4">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="sr-only" aria-hidden="true">
                    <label htmlFor="hp">Leave this field empty</label>
                    <input
                        id="hp"
                        name="hp"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                        value={formData.hp || ""}
                        onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                    />
                </div>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded p-2" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded p-2" required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded p-2" rows="5" required />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-accent">Send Message</button>
            </form>
            {status && <p className="mt-4 text-gray-700">{status}</p>}
        </section>
    );
}