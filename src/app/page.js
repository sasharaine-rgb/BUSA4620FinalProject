import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="page" id="top">
      <section className="hero" aria-label="Explore Banff hikes">
        <div className="bg" role="img" aria-label="Mount Smutwood background" />
        <div className="overlay" />

        <div className="cardWrap">
          <div className="card">
            <p className="kicker">BANFF HIKES</p>

            <h1 className="title">Find Your Perfect Banff Hike</h1>

            <p className="subtitle">
              Curated trails. Minimal planning. Maximum views.
            </p>

            <p className="trustLine">
              Distance • Elevation • Time • Parking • Seasonal notes
            </p>

            <div className="pills" role="group" aria-label="Choose a difficulty">
  <Link className="pill" href="/easy-hikes">Easy</Link>
  <Link className="pill" href="/moderate-hikes">Moderate</Link>
  <Link className="pill" href="/hard-hikes">Hard</Link>
</div>


          </div>
        </div>

      </section>
    </main>
  );
}
