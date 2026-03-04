import { HIKES } from "../data/hikes";
import Link from "next/link";

const hike = HIKES.find(h => h.slug === "sentinel-pass");

export default function SentinelPassHikePage() {
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
            Sentinel Pass is an iconic larch hike with stunning views of the Valley of the Ten Peaks and Paradise Valley. The trail is especially beautiful in autumn when the larches turn golden. Be prepared for a steady climb and changing mountain conditions!
          </p>
        </div>
      </section>
    </main>
  );
}
