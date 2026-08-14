import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

export default function Blog() {
    return (
        <>
            <Seo
                title="Blog"
                description="Writing notes, reading influences, creative projects, and updates from B. Cole Gardiner."
                path="/blog"
            />
            <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
                <h1 className="mb-3 text-4xl font-bold text-slate-900">Blog</h1>
                <p className="mb-10 text-lg leading-8 text-slate-600">
                    Notes on writing, books, creativity, and the stories and projects I&apos;m building.
                </p>

                <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Books &amp; Writing</p>
                    <h2 className="mb-3 text-2xl font-bold text-slate-900">
                        <Link to="/blog/books-that-shaped-me-as-a-fantasy-author" className="hover:text-blue-700">
                            6 Books That Helped Shape Me as a Fantasy Author
                        </Link>
                    </h2>
                    <p className="mb-5 leading-7 text-slate-600">
                        Six books that stayed with me as a reader and helped shape the way I think about fantasy, characters, magic, worldbuilding, and creating stories of my own.
                    </p>
                    <Link
                        to="/blog/books-that-shaped-me-as-a-fantasy-author"
                        className="font-semibold text-blue-700 hover:underline"
                    >
                        Read article &rarr;
                    </Link>
                </article>
            </section>
        </>
    );
}
