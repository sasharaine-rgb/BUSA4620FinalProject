import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="page" id="top">
      <section className="hero" aria-label="Explore Banff hikes">
        <div className="bg" role="img" aria-label="Banff mountain background" />
        <div className="overlay" />
        <div className="cardWrap">
          <p className="kicker">Banff National Park</p>
          <h1 className="title">Find Your Perfect Banff Hike</h1>
          <p className="subtitle">
            Curated trails. Minimal planning. Maximum views.
          </p>
          <p className="trustLine">
            Distance&nbsp;·&nbsp;Elevation&nbsp;·&nbsp;Time&nbsp;·&nbsp;Parking&nbsp;·&nbsp;Seasonal notes
          </p>
          <div className="pills" role="group" aria-label="Choose a difficulty">
            <Link className="pill" href="/easy-hikes">🌿&nbsp; Easy</Link>
            <Link className="pill" href="/moderate-hikes">🏔&nbsp; Moderate</Link>
            <Link className="pill" href="/hard-hikes">⛰&nbsp; Hard</Link>
          </div>
        </div>
      </section>
    </main>
  );
}