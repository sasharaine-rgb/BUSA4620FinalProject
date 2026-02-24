"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contactPage">
      <section className="contactHero" aria-label="Contact Banff Hikes">
        <div className="contactWrap">
          <Link className="contactBack" href="/">← Back home</Link>

          <h1 className="contactTitle">Contact</h1>
          <p className="contactSub">
            Questions, trail suggestions, or a hike you think should be featured? Send it through.
          </p>

          <form
  className="contactCard"
  onSubmit={(e) => {
    e.preventDefault();
    alert("Thanks! (This form is a demo — I can connect it to email next.)");
  }}
>

            <label className="contactLabel">
              Your name
              <input className="contactInput" type="text" name="name" placeholder="" required />
            </label>

            <label className="contactLabel">
              Email
              <input className="contactInput" type="email" name="email" placeholder="" required />
            </label>

            <label className="contactLabel">
              Message
              <textarea
                className="contactTextarea"
                name="message"
                placeholder="Tell me what you’re looking for…"
                rows={6}
                required
              />
            </label>

            <button className="contactBtn" type="submit">
              Send message
            </button>

            <p className="contactFine">
              
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
