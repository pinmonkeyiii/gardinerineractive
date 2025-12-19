import React from "react";
import authorPhoto from "/public/author-photo.png";

export default function About() {
    return (
        <section className="max-w-3xl mx-auto py-12 px-4">
            <img
                src={authorPhoto}
                alt="Author"
                className="h-48 w-48 rounded-full object-cover shadow-sm"
            />
            <h2 className="text-2xl font-bold mb-4">About B. Cole Gardiner</h2>
            <p className="mb-4">
                B. Cole Gardiner is a software development manager by day and a storyteller by night. Based in Clearfield, Utah, he lives with his vibrant and ever-growing household of children, pets, and the ever-present family member or friend. His love for fantasy, mystery, and technology fuels his writing, where he explores the intersection of magic and modernity.
            </p>
            <p className="mb-4">
                <em>Threads of Elseron: The Heart of the Loom – The Shadow Code Rises</em> is his debut novel, the first in a series that blends spellcraft with circuitry, memory with identity, and ancient secrets with futuristic threats.
            </p>
            <p>
                When he’s not writing or wrangling code, Cole can be found reading epic fantasy, tinkering with new tech, or dreaming up the next twist in Elseron’s ever-expanding tapestry.
            </p>
        </section>
    );
}