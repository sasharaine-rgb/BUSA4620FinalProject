"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contactPage">
      <section className="contactHero" aria-label="Contact Banff Hikes">
        <div className="contactWrap">
          <Link className="contactBack" href="/">
            ← Back home
          </Link>
          <h1 className="contactTitle">Get in Touch</h1>
          <p className="contactSub">
            Trail suggestions, questions, or a hike you think should be featured? Send it through.
          </p>
          <form
            className="contactCard"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for reaching out!");
            }}
          >
            <label className="contactLabel">
              Your name
              <input
                className="contactInput"
                type="text"
                name="name"
                placeholder="Jane Smith"
                required
              />
            </label>
            <label className="contactLabel">
              Email address
              <input
                className="contactInput"
                type="email"
                name="email"
                placeholder="jane@example.com"
                required
              />
            </label>
            <label className="contactLabel">
              Message
              <textarea
                className="contactTextarea"
                name="message"
                placeholder="Tell me what you're looking for…"
                rows={5}
                required
              />
            </label>
            <button className="contactBtn" type="submit">
              Send message →
            </button>
            <p className="contactFine">
              I'll get back to you within a couple of days.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}