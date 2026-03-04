"use client";

import React from "react";
import Link from "next/link";
import { HIKES } from "../data/hikes";

export default function EasyHikesPage() {
  const hikes = Array.isArray(HIKES) ? HIKES.filter((h) => h.difficulty === "easy") : [];
  const featured = hikes.find((h) => h.slug === "tunnel-mountain") || (hikes.length > 0 ? hikes[0] : null);
  const rest = hikes.filter((h) => h.slug !== featured?.slug);

  const heroImage = "/images/norquay.jpeg";

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
        {/* HERO */}
        <section className="cineHero" aria-label="Easy hikes hero">
          <div
            className="cineHeroImg"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="cineHeroShade" />
          <div className="cineHeroFade" />

          <div className="cineHeroInner">
            <p className="cineKicker">BANFF HIKES</p>
            <h1 className="cineTitle">Easy Banff Hikes</h1>
            <p className="cineSub">
              Beginner-friendly picks with huge views — curated so you can spend less time
              planning and more time outside.
            </p>

            <nav className="cineNav" aria-label="Difficulty pages">
              <Link className="cinePill cinePillActive" href="/easy-hikes">
                Easy
              </Link>
              <Link className="cinePill" href="/moderate-hikes">
                Moderate
              </Link>
              <Link className="cinePill" href="/hard-hikes">
                Hard
              </Link>
            </nav>
          </div>
        </section>

        {/* FEATURED */}
        {featured && (
          <section className="cineSection">
            <div className="cineSectionHeader">
              <h2 className="cineH2">Featured Pick</h2>
              <p className="cineHint">A first hike that feels like Banff.</p>
            </div>
            <Link href="/tunnel-mountain" className="featureCard" style={{ textDecoration: 'none' }}>
              <div
                className="featureImg"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
              <div className="featureBody">
                <h3 className="featureTitle">{featured.name}</h3>
                <div className="metaRow">
                  <span className="metaPill">{featured.distanceKm} km</span>
                  <span className="metaPill">{featured.elevationM} m</span>
                  <span className="metaPill">{featured.timeHours}h</span>
                  {featured.parking ? (
                    <span className="metaPill">Parking: {featured.parking}</span>
                  ) : null}
                </div>
                <p className="featureNote">{featured.summary}</p>
              </div>
            </Link>
          </section>
        )}

        {/* MORE PICKS */}
        <section className="cineSection">
          <div className="cineSectionHeader">
            <h2 className="cineH2">More Easy Picks</h2>
            <p className="cineHint">Quick wins, big payoffs.</p>
          </div>

          <div className="pickGrid">
            {rest.map((h) => {
              let customHref = null;
              if (h.slug === 'bow-falls-walk') customHref = '/bow-falls-hike';
              else if (h.slug === 'tunnel-mountain') customHref = '/tunnel-mountain';
              else if (h.slug === 'banff-golfcourse-walk') customHref = '/golf-course-hike';
              return (
                <Link
                  key={h.slug}
                  href={customHref || `/easy-hikes/${h.slug}`}
                  className="pickCard"
                >
                  <div
                    className="pickImg"
                    style={{ backgroundImage: `url(${h.image})` }}
                  />
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
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
