import { HIKES } from "../data/hikes";
import Link from "next/link";

const hike = HIKES.find(h => h.slug === "smutwood-peak");

export default function SmutwoodHikePage() {
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
            Smutwood Peak is a hard hike with alpine terrain and unreal views. The route is challenging and conditions can change quickly, so be prepared. The reward is a panoramic summit experience that few can match!
          </p>
        </div>
      </section>
    </main>
  );
}
