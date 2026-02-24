import { HIKES } from "../data/hikes";
import Link from "next/link";

const hike = HIKES.find(h => h.slug === "sunshine-village");

export default function SunshineVillageHikePage() {
  if (!hike) return <main style={{padding: 32}}><h1>Hike not found</h1></main>;
  return (
    <main className="hikeDetailPage">
      <div className="hikeDetailHero" style={{ backgroundImage: `url(${hike.image})` }}>
        <div className="hikeDetailShade" />
        <div className="hikeDetailHeader">
          <Link href="/moderate-hikes" className="hikeBackBtn">&larr; Back to Moderate Hikes</Link>
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
            Sunshine Village Walk offers alpine meadows, wildflowers, and panoramic views. The trail is accessible and rewarding, making it a favorite for those looking for a moderate adventure in Banff. Enjoy the fresh air and the scenery!
          </p>
        </div>
      </section>
    </main>
  );
}
