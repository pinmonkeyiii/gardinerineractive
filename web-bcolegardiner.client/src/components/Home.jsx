import React from "react";
import authorPhoto from "../assets/author-photo.png"; // Add your photo in src/assets/
import Newsletter from "./Newsletter";

export default function Home() {
    return (
        <section className="text-center py-16">
            <img src={authorPhoto} alt="Author" className="mx-auto rounded-full w-48 h-48 object-cover mb-6" />
            <h2 className="text-3xl font-bold mb-2">Crafting Code by Day, Worlds by Night.</h2>
            <p className="text-lg text-gray-700">Software Development Manager & Aspiring Author of YA Fiction and Horror</p>
            <Newsletter />
        </section>
    );
}