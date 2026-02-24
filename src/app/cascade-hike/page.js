import { HIKES } from "../data/hikes";
import Link from "next/link";

const hike = HIKES.find(h => h.slug === "cascade-amphitheatre");

export default function CascadeHikePage() {
  if (!hike) return <main style={{padding: 32}}><h1>Hike not found</h1></main>;
  return (
    <main className="hikeDetailPage">
      <div className="hikeDetailHero" style={{ backgroundImage: `url(${hike.image})` }}>
        <div className="hikeDetailShade" />
        <div className="hikeDetailHeader">
          <Link href="/hard-hikes" className="hikeBackBtn">&larr; Back to Hard Hikes</Link>
          <h1 className="hikeDetailTitle">{hike.name}</h1>
          <p className="hikeDetailSummary">{hike.summary}</p>
        </div>
      </div>
      <section className="hikeDetailFlex">
        <div className="hikeDetailInfo">
            <div className="hikeStatsBox hikeStatsCard">
              <h3 className="hikeStatsTitle">Hike Stats</h3>
              <div className="hikeStatsGrid">
                <div className="hikeStatRow"><span className="hikeStatIcon" title="Distance">🥾</span><span className="hikeStatLabel">Distance</span><span className="hikeStatValue">{hike.distanceKm} km</span></div>
                <div className="hikeStatRow"><span className="hikeStatIcon" title="Elevation">⛰️</span><span className="hikeStatLabel">Elevation</span><span className="hikeStatValue">{hike.elevationM} m</span></div>
                <div className="hikeStatRow"><span className="hikeStatIcon" title="Time">⏱️</span><span className="hikeStatLabel">Time</span><span className="hikeStatValue">{hike.timeHours} hours</span></div>
                <div className="hikeStatRow"><span className="hikeStatIcon" title="Parking">🅿️</span><span className="hikeStatLabel">Parking</span><span className="hikeStatValue">{hike.parking}</span></div>
                <div className="hikeStatRow"><span className="hikeStatIcon" title="Season">🌦️</span><span className="hikeStatLabel">Season</span><span className="hikeStatValue">{hike.season}</span></div>
              </div>
            </div>
        </div>
        <div className="hikeDetailWriteup">
          <h3>Trail Experience</h3>
          <p>
            Cascade Amphitheatre is a challenging hike with a big climb and an even bigger payoff. The trail winds through forest before opening up to a dramatic natural amphitheatre surrounded by towering peaks. Go prepared for a long day and changing mountain conditions, and enjoy the sense of accomplishment at the top!
          </p>
        </div>
      </section>
    </main>
  );
}
