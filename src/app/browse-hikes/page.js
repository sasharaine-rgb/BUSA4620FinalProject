"use client";

import React from "react";
import Link from "next/link";
import { HIKES } from "../data/hikes";

export default function BrowseHikesPage() {
  const easyHikes = Array.isArray(HIKES) ? HIKES.filter((h) => h.difficulty === "easy") : [];
  const moderateHikes = Array.isArray(HIKES) ? HIKES.filter((h) => h.difficulty === "moderate") : [];
  const hardHikes = Array.isArray(HIKES) ? HIKES.filter((h) => h.difficulty === "hard") : [];

  const heroImage = easyHikes.length > 0 ? easyHikes[0]?.image : "/images/tunnel-mountain.jpeg";

  return (
    <main className="cinePage">
      <div className="cineWrap">
        {/* HERO */}
        <section className="cineHero cineHeroBrowse" aria-label="Browse all Banff hikes">
          <div
            className="cineHeroImg"
            style={{ backgroundImage: `url(/images/banff-town.jpg)` }}
          />
          <div className="cineHeroShade" />

          <div className="cineHeroInner">
            <p className="cineKicker">BANFF HIKES</p>
            <h1 className="cineTitle">Browse All Trails</h1>
            <p className="cineSub">
              Explore every difficulty level. From gentle walks to challenging summits — find your next adventure.
            </p>
          </div>
        </section>

        {/* EASY HIKES */}
        {easyHikes.length > 0 && (
          <section className="cineSection">
            <div className="cineSectionHeader" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h2 className="cineH2">Easy Hikes</h2>
                <p className="cineHint">Beginner-friendly with big views.</p>
              </div>
              <Link href="/easy-hikes" passHref legacyBehavior>
                <button className="hikeLevelBtn">See All Easy Hikes</button>
              </Link>
            </div>

            <div className="pickGrid">
              {easyHikes.map((h) => {
                let customHref = null;
                if (h.slug === 'bow-falls-walk') customHref = '/bow-falls-hike';
                if (h.slug === 'tunnel-mountain') customHref = '/tunnel-mountain';
                if (h.slug === 'banff-golfcourse-walk') customHref = '/golf-course-hike';
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
        )}

        {/* MODERATE HIKES */}
        {moderateHikes.length > 0 && (
          <section className="cineSection">
            <div className="cineSectionHeader" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h2 className="cineH2">Moderate Hikes</h2>
                <p className="cineHint">Great views. Solid workout.</p>
              </div>
              <Link href="/moderate-hikes" passHref legacyBehavior>
                <button className="hikeLevelBtn">See All Moderate Hikes</button>
              </Link>
            </div>

            <div className="pickGrid">
              {moderateHikes.map((h) => {
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
        )}

        {/* HARD HIKES */}
        {hardHikes.length > 0 && (
          <section className="cineSection">
            <div className="cineSectionHeader" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h2 className="cineH2">Hard Hikes</h2>
                <p className="cineHint">For experienced hikers seeking a challenge.</p>
              </div>
              <Link href="/hard-hikes" passHref legacyBehavior>
                <button className="hikeLevelBtn">See All Hard Hikes</button>
              </Link>
            </div>

            <div className="pickGrid">
              {hardHikes.map((h) => {
                let customHref = null;
                if (h.slug === 'tent-ridge-kananaskis') customHref = '/tent-ridge-hike';
                if (h.slug === 'smutwood-peak') customHref = '/smutwood-hike';
                if (h.slug === 'cascade-amphitheatre') customHref = '/cascade-hike';
                return customHref ? (
                  <Link key={h.slug} href={customHref} className={`pickCard${h.slug === 'tent-ridge-kananaskis' ? ' highlight' : ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="pickImg" style={{ backgroundImage: `url(${h.image})` }}>
                      {h.slug === 'tent-ridge-kananaskis' && (
                        <div className="pickImgOverlay">
                          <h3 className="pickTitleOverlay">{h.name}</h3>
                        </div>
                      )}
                    </div>
                    <div className="pickBody">
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
        )}
      </div>
    </main>
  );
}
