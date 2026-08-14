import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

const amazonLinkClass = "font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900";

export default function FantasyInfluenceBooksArticle() {
    const title = "6 Books That Helped Shape Me as a Fantasy Author";
    const description = "Six books that shaped B. Cole Gardiner as a reader and fantasy author, from Woof! and Harry Potter to Eragon, Coraline, Fablehaven, and The Island of Shadows.";
    const path = "/blog/books-that-shaped-me-as-a-fantasy-author";

    return (
        <>
            <Seo
                title={title}
                description={description}
                path={path}
                type="article"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: title,
                    description,
                    author: {
                        "@type": "Person",
                        name: "B. Cole Gardiner",
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "Gardiner Interactive",
                    },
                    mainEntityOfPage: `https://gardinerinteractive.com${path}`,
                }}
            />

            <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
                <Link to="/blog" className="mb-6 inline-block text-sm font-semibold text-blue-700 hover:underline">
                    &larr; Back to Blog
                </Link>

                <header className="mb-8 border-b border-slate-200 pb-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Books &amp; Writing</p>
                    <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">{title}</h1>
                </header>

                <div className="space-y-6 text-lg leading-8 text-slate-700">
                    <p>Every writer has stories that stay with them.</p>
                    <p>Sometimes it&apos;s a book you discover at exactly the right age. Sometimes it&apos;s a world so convincing that you find yourself wondering whether it might exist somewhere beyond the edges of your own. And sometimes it&apos;s simply a story that makes you think, <em>I want to create something like this someday.</em></p>
                    <p>As I&apos;ve worked on <em>Threads of Elseron</em> and my other stories, I&apos;ve started recognizing pieces of the books I&apos;ve loved throughout my life in the things I enjoy creating myself.</p>
                    <p>These aren&apos;t necessarily what I&apos;d call the six greatest fantasy books ever written. They aren&apos;t even all traditional fantasy.</p>
                    <p>They&apos;re simply six books that mattered to me.</p>
                    <p>Some helped make me a reader. Others changed how I thought about fantasy, characters, magic, or worldbuilding. And one helped remind me that you don&apos;t have to be a famous author to put the story you want to tell out into the world.</p>
                    <p>Here are six books that helped shape my imagination as a fantasy author.</p>

                    <aside className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-base leading-7 text-amber-950">
                        <strong>Affiliate Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. Some links below are affiliate links, which means I may earn a commission from qualifying purchases at no additional cost to you.
                    </aside>

                    <section className="space-y-5 pt-4">
                        <h2 className="text-3xl font-bold text-slate-900">1. <em>Woof!</em> by Allan Ahlberg</h2>
                        <p><em>Woof!</em> is one of the first books I remember reading and truly enjoying. I first discovered it when I was around eight or nine years old, sometime around 1989, and it may be one of the books most responsible for turning me into a reader.</p>
                        <p>The story follows a boy who, for reasons he doesn&apos;t understand, suddenly transforms into a dog. The transformations seem to happen at random, and they can go both ways. One moment he&apos;s a boy and the next he&apos;s a dog—with all the intelligence of a boy but suddenly having to navigate the world on four legs. He has to stay out of trouble, keep his parents from discovering what&apos;s happening, and somehow be prepared to change back at any moment.</p>
                        <p>That premise fascinated me as a kid. It took an ordinary world and introduced one impossible thing into it, then explored all the adventures and problems that followed.</p>
                        <p>By the end of the story, his dog form even plays a part in saving his little sister. She eventually gets a dog of her own, and the mysterious transformations stop. I&apos;ve always liked the lingering question that leaves behind: could his little sister somehow have been responsible for what was happening all along?</p>
                        <p>Whatever the answer, I loved this book. I read it over and over again—so many times that I eventually wore the cover off my copy.</p>
                        <p>Looking back, I don&apos;t see a direct line from <em>Woof!</em> to the stories I&apos;m currently sharing as B. Cole Gardiner, but its influence is there. I can especially see some of its DNA in <em>The Salt Witches Cookbook</em>, and I wouldn&apos;t be surprised if more of that childhood fascination with ordinary people encountering impossible things finds its way into future stories.</p>
                        <p>For me, <em>Woof!</em> isn&apos;t simply a book I recommend.</p>
                        <p>It&apos;s one of the books that helped make me want to keep reading in the first place.</p>
                        <p><a className={amazonLinkClass} href="https://amzn.to/4qBG1c5" target="_blank" rel="sponsored noopener noreferrer">View <em>Woof!</em> on Amazon</a> <span className="text-sm italic text-slate-500">(paid link)</span></p>
                    </section>

                    <hr className="border-slate-200" />
                    <section className="space-y-5">
                        <h2 className="text-3xl font-bold text-slate-900">2. <em>Harry Potter and the Sorcerer&apos;s Stone</em> by J.K. Rowling</h2>
                        <p>If I had to point to the single biggest influence on my <em>Threads of Elseron</em> series, it would probably be <em>Harry Potter</em>.</p>
                        <p>I didn&apos;t discover <em>Harry Potter and the Sorcerer&apos;s Stone</em> as a child. I was already in my early twenties when either my sister or my mom—I honestly can&apos;t remember which—suggested that I read it.</p>
                        <p>So I did.</p><p>And I couldn&apos;t put it down.</p>
                        <p>I finished the entire book that first night. I&apos;ve returned to Harry&apos;s world many times since, rereading the books at least once a year for much of the time since I first discovered them.</p>
                        <p>What fascinated me most wasn&apos;t simply the magic. It was how naturally the magical and ordinary worlds existed alongside one another.</p>
                        <p>The story made the wizarding world feel less like a fairy tale and more like an account of something that might actually be happening just beyond our sight. Maybe there really was another world hidden inside our own, complete with its own schools, communities, traditions, conflicts, and history—and most of us Muggles simply never got to know about it.</p>
                        <p>That idea stuck with me.</p>
                        <p>Years later, when I began thinking about what would eventually become <em>Threads of Elseron</em>, I wanted to write something that allowed me to lean into subjects I already loved rather than constantly worrying about whether I&apos;d researched every real-world detail correctly.</p>
                        <p>Magic gave me that freedom.</p>
                        <p>And the kind of magic I had fallen in love with through <em>Harry Potter</em>—magic that could exist alongside the recognizable world rather than replacing it—became one of the biggest influences on what I wanted to create.</p>
                        <p><em>Threads of Elseron</em> has become its own world, with its own characters, rules, mysteries, and mythology. But when I look back at what first made me want to tell a story in which magic could feel like something real, <em>Harry Potter and the Sorcerer&apos;s Stone</em> is impossible for me to overlook.</p>
                        <p><a className={amazonLinkClass} href="https://amzn.to/4hvAhhp" target="_blank" rel="sponsored noopener noreferrer">View <em>Harry Potter and the Sorcerer&apos;s Stone</em> on Amazon</a> <span className="text-sm italic text-slate-500">(paid link)</span></p>
                    </section>

                    <hr className="border-slate-200" />
                    <section className="space-y-5">
                        <h2 className="text-3xl font-bold text-slate-900">3. <em>Eragon</em> by Christopher Paolini</h2>
                        <p>I discovered <em>Eragon</em> sometime in the mid-2000s, while I was waiting for the next <em>Harry Potter</em> book to arrive.</p>
                        <p>I was looking for something new to read in the meantime, and <em>Eragon</em> was recommended to me. I picked up a copy to see what I thought—and ended up enjoying it immensely.</p>
                        <p>One of the things I particularly liked was how the story began.</p>
                        <p>Eragon isn&apos;t introduced as a great warrior or someone destined to save the world. He&apos;s a boy living an ordinary life whose circumstances suddenly pull him into something much larger. What begins relatively simply gradually transforms him into a reluctant hero carrying responsibilities he never expected to have.</p>
                        <p>That kind of journey has always appealed to me.</p>
                        <p>I also liked the way the story established its villains. There was a powerful enemy looming in the distance, but the danger didn&apos;t have to remain distant. Other antagonists could bring that villainy much closer to the characters, giving the heroes immediate threats to face while something much larger waited beyond them.</p>
                        <p>As the story grew, so did the conflict. There were twists, discoveries, new dangers, and an eventual confrontation that felt like the culmination of everything that had been building along the way.</p>
                        <p>When I look at <em>Threads of Elseron</em>, I can see just how much some of those ideas stayed with me.</p>
                        <p>Lena Rivera begins as an ordinary person who is pulled into circumstances she never expected and forced to become something more. Viron Kael represents the larger threat hanging over the story, while Marcus can bring that threat much closer—giving the villainy a face the characters can encounter directly.</p>
                        <p>Those characters and their world are my own, but some of the storytelling ideas that helped shape them can be traced back to books I loved reading.</p>
                        <p>For me, <em>Eragon</em> was one of those books.</p>
                        <p>I originally picked it up simply because I needed something to read while waiting for another <em>Harry Potter</em>.</p>
                        <p>Instead, I found another fantasy story that would eventually help influence one of my own.</p>
                        <p><a className={amazonLinkClass} href="https://amzn.to/3U1ZJ4k" target="_blank" rel="sponsored noopener noreferrer">View <em>Eragon</em> on Amazon</a> <span className="text-sm italic text-slate-500">(paid link)</span></p>
                    </section>

                    <hr className="border-slate-200" />
                    <section className="space-y-5">
                        <h2 className="text-3xl font-bold text-slate-900">4. <em>Coraline</em> by Neil Gaiman</h2>
                        <p>Unlike most of the books on this list, I actually discovered <em>Coraline</em> through the movie first.</p>
                        <p>I&apos;d been a fan of Tim Burton&apos;s films for years. I enjoyed their unusual visual style and the way they could offer something darker, stranger, and simply different from much of mainstream entertainment. Although <em>Coraline</em> isn&apos;t a Tim Burton film, its visual style was similar enough to immediately catch my attention.</p>
                        <p>By that point, my children were also old enough that <em>Coraline</em> gave us something a little darker and more grown-up that we could still reasonably enjoy together. My daughter, in particular, fell in love with the movie.</p>
                        <p>Of course, by then I was an avid reader, which meant discovering that the movie was based on a book left me with only one reasonable course of action:</p>
                        <p>I needed to read the book.</p>
                        <p>I found a copy at the library and finished it within a day or two.</p>
                        <p>What I loved was the imagery and the way the story breaks away from the ordinary world into something that initially seems magical and fascinating, but becomes increasingly unsettling the deeper Coraline ventures into it.</p>
                        <p>It was fantasy, but it wasn&apos;t afraid to be scary.</p>
                        <p>That combination appealed to another side of me as a reader because fantasy has never been the only genre I&apos;ve enjoyed. I&apos;ve also had a long-standing love of horror, and <em>Coraline</em> sits wonderfully in that space between the two.</p>
                        <p>It can be imaginative and fun one moment, creepy and disturbing the next.</p>
                        <p>And sometimes that&apos;s exactly what I want from a story.</p>
                        <p>Looking back, I think <em>Coraline</em> reinforced something important for me as both a reader and a writer: fantasy doesn&apos;t have to remain safely inside one particular box. A magical world can also be frightening. Wonder and danger can exist beside one another. A story can borrow from fantasy, horror, adventure, and other genres without needing to surrender its identity.</p>
                        <p>Sometimes the most interesting worlds are the ones that become just a little uncomfortable to explore.</p>
                        <p><a className={amazonLinkClass} href="https://amzn.to/4gedILK" target="_blank" rel="sponsored noopener noreferrer">View <em>Coraline</em> on Amazon</a> <span className="text-sm italic text-slate-500">(paid link)</span></p>
                    </section>

                    <hr className="border-slate-200" />
                    <section className="space-y-5">
                        <h2 className="text-3xl font-bold text-slate-900">5. <em>Fablehaven</em> by Brandon Mull</h2>
                        <p><em>Fablehaven</em> is a much more recent discovery for me.</p>
                        <p>I&apos;d heard about the series for quite some time, but for some reason I&apos;d gotten the impression that it was intended for much younger readers. Because of that, I kept passing it by without ever giving it a chance.</p>
                        <p>Eventually, my daughter read it—and loved it enough that she gave me a copy so I would finally read it myself.</p>
                        <p>I&apos;m glad she did.</p>
                        <p>My wife and I ended up reading it together, and before long we were completely invested in the story. One book wasn&apos;t enough. We had to get the sequels and keep going.</p>
                        <p>What made the experience even better was being able to share it as a family. Instead of simply finishing a book and moving on, we could talk about the characters, creatures, mysteries, and everything happening in this hidden world together.</p>
                        <p>And that hidden world was probably what captured my imagination most.</p>
                        <p>I loved the idea that this enormous magical world could exist right alongside our own without most people ever knowing it was there. It&apos;s an idea that also fascinated me in <em>Harry Potter</em>, and <em>Fablehaven</em> approached it in another way that strongly influenced what I eventually wanted to do with <em>Threads of Elseron</em>.</p>
                        <p>I was also fascinated by the sheer amount of lore Brandon Mull brought into the series. Rather than limiting the world to a handful of invented creatures, <em>Fablehaven</em> draws on mythical creatures and legends from many different traditions. It made exploring the world feel like constantly discovering something new.</p>
                        <p>Most importantly for me as a writer, though, the world felt believable.</p>
                        <p>I could picture it.</p>
                        <p>The places, creatures, rules, and dangers became vivid enough in my imagination that the hidden world didn&apos;t feel like something merely described on a page. It felt like somewhere I could actually visit.</p>
                        <p>When I began creating the world behind <em>Threads of Elseron</em>, that&apos;s something I wanted for my own stories: a magical world hidden within the familiar one, rich enough in history and lore that readers could imagine it continuing to exist even after they closed the book.</p>
                        <p><em>Fablehaven</em> reminded me just how much I love discovering worlds like that—and how much I wanted to create one of my own.</p>
                        <p><a className={amazonLinkClass} href="https://amzn.to/45x3ZLJ" target="_blank" rel="sponsored noopener noreferrer">View <em>Fablehaven</em> on Amazon</a> <span className="text-sm italic text-slate-500">(paid link)</span></p>
                    </section>

                    <hr className="border-slate-200" />
                    <section className="space-y-5">
                        <h2 className="text-3xl font-bold text-slate-900">6. <em>The Island of Shadows (The Falling of Forever)</em></h2>
                        <p><em>The Island of Shadows</em> has a different connection to me than the other books on this list because I happen to know its author. He&apos;s married to my cousin.</p>
                        <p>But what makes that connection particularly interesting is something neither of us initially knew.</p>
                        <p>At around the same time, we had both independently decided to start creating things. We were writing books—and, strangely enough, both working on mobile games as well. Neither of us realized the other was doing it until we started posting about our projects on Facebook.</p>
                        <p>That made reading <em>The Island of Shadows</em> especially interesting for me.</p>
                        <p>The story has a feel that reminds me of older fantasy adventures. There are touches of magic, folklore, and the kind of old tales and legends that make me think of books like <em>The Hobbit</em>. At the same time, it follows its own story and gradually builds a world of magic and adventure around its characters.</p>
                        <p>But there was something else about reading it that appealed to me.</p>
                        <p>It felt like an author&apos;s book.</p>
                        <p>There was a sense that I was reading the story its author wanted to put on the page—not simply a story designed around what someone else thought should be there.</p>
                        <p>As someone beginning my own journey as an author, I could relate to that.</p>
                        <p>There&apos;s something exciting about creating a world of your own, deciding what belongs in it, and then having the courage to put that world in front of other people. At roughly the same time I was trying to figure out how to do that myself, someone in my extended family was independently doing much the same thing.</p>
                        <p>So <em>The Island of Shadows</em> earns its place on this list for a slightly different reason than books like <em>Harry Potter</em>, <em>Fablehaven</em>, or <em>Eragon</em>.</p>
                        <p>Those books helped shape some of the things I love about fantasy.</p>
                        <p><em>The Island of Shadows</em> also reminded me that you don&apos;t have to be one of the world&apos;s best-known authors to create something, put it out into the world, and say:</p>
                        <p><strong>This is the story I wanted to tell.</strong></p>
                        <p>For a fledgling author trying to do exactly that, there&apos;s something inspiring about it.</p>
                        <p><a className={amazonLinkClass} href="https://amzn.to/4hT7lAf" target="_blank" rel="sponsored noopener noreferrer">View <em>The Island of Shadows (The Falling of Forever)</em> on Amazon</a> <span className="text-sm italic text-slate-500">(paid link)</span></p>
                    </section>

                    <hr className="border-slate-200" />
                    <section className="space-y-5">
                        <h2 className="text-3xl font-bold text-slate-900">The Stories We Read Become Part of the Stories We Tell</h2>
                        <p>Looking at these six books together, I can see a pattern I probably wouldn&apos;t have recognized when I first read them.</p>
                        <p>As a child, <em>Woof!</em> showed me how much fun it could be when something impossible suddenly intruded on an ordinary life.</p>
                        <p><em>Harry Potter</em> showed me a magical world that could exist right beside our own.</p>
                        <p><em>Eragon</em> showed me the journey of an ordinary person being pulled toward becoming a hero, with distant threats made immediate through the villains standing in the hero&apos;s path.</p>
                        <p><em>Coraline</em> reminded me that fantasy could cross into darker territory and become frightening without losing its sense of wonder.</p>
                        <p><em>Fablehaven</em> showed me another hidden magical world—one overflowing with creatures, mythology, rules, history, and lore—and gave me the added pleasure of discovering that world with my family.</p>
                        <p>And <em>The Island of Shadows</em> arrived at a time when I was beginning to do something different:</p>
                        <p>I wasn&apos;t only reading other people&apos;s worlds anymore.</p>
                        <p>I was trying to build one of my own.</p>
                        <p>I don&apos;t think writers necessarily sit down and consciously assemble their stories from the books they&apos;ve read. I certainly didn&apos;t begin <em>Threads of Elseron</em> with a checklist of things I wanted to borrow from my favorite authors.</p>
                        <p>But stories leave fingerprints on us.</p>
                        <p>The things that fascinated us as children can still fascinate us decades later. The worlds we wanted to disappear into can influence the worlds we eventually create. And sometimes we don&apos;t recognize those connections until we stop and look backward.</p>
                        <p>I&apos;m still discovering exactly what kind of author B. Cole Gardiner will become.</p>
                        <p>But I know some of the books that helped get me here.</p>
                        <p>And these six are among them.</p>
                        <p className="pt-4">— <strong>B. Cole Gardiner</strong><br /><em className="text-base">Author of the Threads of Elseron series</em></p>
                    </section>
                </div>
            </article>
        </>
    );
}
