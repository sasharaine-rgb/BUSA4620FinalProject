"use client";

import React from 'react';
import Link from 'next/link';
import { HIKES } from '../data/hikes';

export default function ModerateHikesPage() {
  const hikes = HIKES.filter((h) => h.difficulty === 'moderate');
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
        <section className="cineHero" aria-label="Moderate hikes hero">
          <div
            className="cineHeroImg"
            style={{ backgroundImage: `url(/images/golfcourse.jpeg)` }}
          />
          <div className="cineHeroShade" />
          <div className="cineHeroFade" />
          <div className="cineHeroInner">
            <p className="cineKicker">BANFF HIKES</p>
            <h1 className="cineTitle">Moderate Banff Hikes</h1>
            <p className="cineSub">
              A little more time and elevation — the kind of days you’ll remember.
            </p>

            <nav className="cineNav" aria-label="Difficulty pages">
              <Link className="cinePill" href="/easy-hikes">Easy</Link>
              <Link className="cinePill cinePillActive" href="/moderate-hikes">Moderate</Link>
              <Link className="cinePill" href="/hard-hikes">Hard</Link>
            </nav>
          </div>
        </section>

        <section className="cineSection" aria-label="Featured moderate hike">
          <div className="cineSectionHeader">
            <h2 className="cineH2">Featured pick</h2>
            <p className="cineHint">Worth the climb.</p>
          </div>

          {featured ? (
            featured.slug === 'sunshine-village' ? (
              <Link href="/sunshine-village-hike" className="featureCard" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="featureImg" style={{ backgroundImage: `url(${featured.image})` }} />
                <div className="featureBody">
                  <h3 className="featureTitle">{featured.name}</h3>
                  <div className="metaRow">
                    <span className="metaPill">{featured.distanceKm} km</span>
                    <span className="metaPill">{featured.elevationM} m</span>
                    <span className="metaPill">{featured.timeHours}h</span>
                    <span className="metaPill">Season: {featured.season}</span>
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
                    <span className="metaPill">Season: {featured.season}</span>
                  </div>
                  <p className="featureNote">{featured.summary}</p>
                </div>
              </div>
            )
          ) : null}

          <div className="cineSectionHeader" style={{ marginTop: 18 }}>
            <h2 className="cineH2">More moderate picks</h2>
            <p className="cineHint">Iconic trails, manageable days.</p>
          </div>

          <div className="pickGrid">
            {rest.map((h) => {
              // Custom page links for new moderate hikes
              let customHref = null;
              if (h.slug === 'sunshine-village') customHref = '/sunshine-village-hike';
              if (h.slug === 'plain-of-six-glaciers') customHref = '/plain-of-six-glaciers-hike';
              if (h.slug === 'c-level-cirque') customHref = '/c-level-cirque';
              if (h.slug === 'cascade-hike') customHref = '/cascade-hike';
              return customHref ? (
                <Link key={h.slug} href={customHref} className="pickCard" style={{ textDecoration: 'none', color: 'inherit' }}>
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