"use client";

import React from 'react';
import Link from 'next/link';
import { HIKES } from '../data/hikes';

export default function HardHikesPage() {
  const hikes = HIKES.filter((h) => h.difficulty === 'hard');
  const featured = hikes[0];
  const rest = hikes.slice(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.cineHeroImg');
      if (!hero) return;
      const scrolled = window.scrollY;
      hero.style.setProperty('--parallax', `${scrolled * 0.22}px`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="cinePage">
      <div className="cineWrap">
        <section className="cineHero" aria-label="Hard hikes hero">
          <div
            className="cineHeroImg"
            style={{ backgroundImage: `url(/images/northernlights.jpeg)` }}
          />
          <div className="cineHeroShade" />
          <div className="cineHeroFade" />
          <div className="cineHeroInner">
            <p className="cineKicker">BANFF HIKES</p>
            <h1 className="cineTitle">Hard Banff Hikes</h1>
            <p className="cineSub">
              Big days, big views. Start early — mountain conditions matter.
            </p>

            <nav className="cineNav" aria-label="Difficulty pages">
              <Link className="cinePill" href="/easy-hikes">Easy</Link>
              <Link className="cinePill" href="/moderate-hikes">Moderate</Link>
              <Link className="cinePill cinePillActive" href="/hard-hikes">Hard</Link>
            </nav>
          </div>
        </section>

        <section className="cineSection" aria-label="Featured hard hike">
          <div className="cineSectionHeader">
            <h2 className="cineH2">Featured pick</h2>
            <p className="cineHint">Earn the summit.</p>
          </div>

          {featured ? (
            featured.slug === 'tent-ridge-kananaskis' ? (
              <Link href="/tent-ridge-hike" className="featureCard" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="featureImg" style={{ backgroundImage: `url(${featured.image})` }} />
                <div className="featureBody">
                  <h3 className="featureTitle">{featured.name}</h3>
                  <div className="metaRow">
                    <span className="metaPill">{featured.distanceKm} km</span>
                    <span className="metaPill">{featured.elevationM} m</span>
                    <span className="metaPill">{featured.timeHours}h</span>
                    <span className="metaPill">Parking: {featured.parking}</span>
                  </div>
                  <p className="featureNote">{featured.summary}</p>
                </div>
              </Link>
            ) : (
              <div className="featureCard">
                <div className="featureImg" style={{ backgroundImage: `url(${featured.image})` }} />
                <div className="featureBody">
                  <h3 className="featureTitle">{featured.name}</h3>
                  <div className="metaRow">
                    <span className="metaPill">{featured.distanceKm} km</span>
                    <span className="metaPill">{featured.elevationM} m</span>
                    <span className="metaPill">{featured.timeHours}h</span>
                    <span className="metaPill">Parking: {featured.parking}</span>
                  </div>
                  <p className="featureNote">{featured.summary}</p>
                </div>
              </div>
            )
          ) : null}

          <div className="cineSectionHeader" style={{ marginTop: 18 }}>
            <h2 className="cineH2">More hard picks</h2>
            <p className="cineHint">Long days. Iconic routes.</p>
          </div>

          <div className="pickGrid">
            {rest.map((h) => {
              // Custom page links for new hard hikes
              let customHref = null;
              if (h.slug === 'tent-ridge-kananaskis') customHref = '/tent-ridge-hike';
              if (h.slug === 'smutwood-peak') customHref = '/smutwood-hike';
              if (h.slug === 'cascade-amphitheatre') customHref = '/cascade-hike';
              return customHref ? (
                <Link key={h.slug} href={customHref} className={`pickCard${h.slug === 'tent-ridge-kananaskis' ? ' highlight' : ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="pickImg" style={{ backgroundImage: `url(${h.image})` }} />
                  <div className="pickBody">
                    <h3 className="pickTitle">{h.name}</h3>
                    <div className="metaRow">
                      <span className="metaPill">{h.distanceKm} km</span>
                      <span className="metaPill">{h.elevationM} m</span>
                      <span className="metaPill">{h.timeHours}h</span>
                    </div>
                    <p className="pickNote">{h.summary}</p>
                  </div>
                </Link>
              ) : (
                <article key={h.slug} className="pickCard">
                  <div className="pickImg" style={{ backgroundImage: `url(${h.image})` }} />
                  <div className="pickBody">
                    <h3 className="pickTitle">{h.name}</h3>
                    <div className="metaRow">
                      <span className="metaPill">{h.distanceKm} km</span>
                      <span className="metaPill">{h.elevationM} m</span>
                      <span className="metaPill">{h.timeHours}h</span>
                    </div>
                    <p className="pickNote">{h.summary}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}