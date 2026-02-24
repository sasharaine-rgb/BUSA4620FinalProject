import Link from 'next/link';

export default function PlainOfSixGlaciersHikePage() {
  return (
    <main className="hikeDetailPage">
      <div className="hikeHero" style={{ backgroundImage: 'url(/images/smutwood.jpg)' }}>
        <div className="hikeHeroShade" />
        <div className="hikeHeroInner">
          <Link href="/moderate-hikes" className="backBtn">← Back to Moderate Hikes</Link>
          <h1 className="hikeTitle">Plain of Six Glaciers</h1>
          <p className="hikeSubtitle">Glacier views + a teahouse stop if open.</p>
        </div>
      </div>
      <div className="hikeDetailContent">
          <div className="hikeStatsBox hikeStatsCard">
            <h3 className="hikeStatsTitle">Hike Stats</h3>
            <div className="hikeStatsGrid">
              <div className="hikeStatRow"><span className="hikeStatIcon" title="Distance">🥾</span><span className="hikeStatLabel">Distance</span><span className="hikeStatValue">13.8 km</span></div>
              <div className="hikeStatRow"><span className="hikeStatIcon" title="Elevation">⛰️</span><span className="hikeStatLabel">Elevation</span><span className="hikeStatValue">587 m</span></div>
              <div className="hikeStatRow"><span className="hikeStatIcon" title="Time">⏱️</span><span className="hikeStatLabel">Time</span><span className="hikeStatValue">4–5 hours</span></div>
              <div className="hikeStatRow"><span className="hikeStatIcon" title="Parking">🅿️</span><span className="hikeStatLabel">Parking</span><span className="hikeStatValue">Lake Louise (busy)</span></div>
              <div className="hikeStatRow"><span className="hikeStatIcon" title="Season">🌦️</span><span className="hikeStatLabel">Season</span><span className="hikeStatValue">Summer–Fall</span></div>
            </div>
          </div>
        <div className="hikeWriteupBox">
          <p>
            This classic Banff hike takes you from the shores of Lake Louise up a dramatic valley, with glaciers looming above and a historic teahouse as your reward. The trail is well-marked and offers a steady climb, with breathtaking views at every turn. Be prepared for crowds in peak season, and bring cash if you want to enjoy a treat at the teahouse!
          </p>
        </div>
      </div>
    </main>
  );
}
