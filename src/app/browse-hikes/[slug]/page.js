import { HIKES } from '../../data/hikes';
import Image from 'next/image';
import Link from 'next/link';

export default function HikeDetailPage({ params }) {
  const hike = HIKES.find((h) => h.slug === params.slug);

  if (!hike) {
    return (
      <main className="cinePage">
        <div className="cineWrap">
          <h1>Hike Not Found</h1>
          <Link href="/browse-hikes">← Back to Browse Hikes</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cinePage">
      <div className="cineWrap">
        <section className="cineHero" aria-label={hike.name}>
          <div
            className="cineHeroImg"
            style={{ backgroundImage: `url(${hike.image})` }}
          />
          <div className="cineHeroShade" />
          <div className="cineHeroInner">
            <p className="cineKicker">{hike.difficulty.toUpperCase()} HIKE</p>
            <h1 className="cineTitle">{hike.name}</h1>
            <p className="cineSub">{hike.summary}</p>
            <div className="metaRow" style={{marginTop: '18px'}}>
              <span className="metaPill">{hike.distanceKm} km</span>
              <span className="metaPill">{hike.elevationM} m</span>
              <span className="metaPill">{hike.timeHours}h</span>
              {hike.parking && <span className="metaPill">Parking: {hike.parking}</span>}
            </div>
          </div>
        </section>
        <section className="hikeDetailSection">
          <h2 className="hikeDetailH2">Trail Details</h2>
          <p className="hikeDetailDesc">{hike.description || 'No additional details provided.'}</p>
          <Link href="/browse-hikes" className="hikeBackBtn">← Back to Browse Hikes</Link>
        </section>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return HIKES.map((h) => ({ slug: h.slug }));
}
