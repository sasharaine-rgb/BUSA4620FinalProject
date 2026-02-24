import { HIKES } from "../data/hikes";
import Link from "next/link";

const hike = HIKES.find(h => h.slug === "banff-golfcourse-walk");

export default function GolfCourseHikePage() {
	if (!hike) return <main style={{padding: 32}}><h1>Hike not found</h1></main>;
	return (
		<main className="hikeDetailPage">
			<div className="hikeDetailHero" style={{ backgroundImage: `url(${hike.image})` }}>
				<div className="hikeDetailShade" />
				<div className="hikeDetailHeader">
					<Link href="/easy-hikes" className="hikeBackBtn">&larr; Back to Easy Hikes</Link>
					<h1 className="hikeDetailTitle">{hike.name}</h1>
					<p className="hikeDetailSummary">{hike.summary}</p>
				</div>
			</div>
			<section className="hikeDetailFlex">
				<div className="hikeDetailInfo">
					<div className="hikeStatsBox hikeStatsCard">
						<h3 className="hikeStatsTitle">Hike Stats</h3>
						<div className="hikeStatsGrid">
							<div className="hikeStatRow"><span className="hikeStatIcon" title="Distance"></span><span className="hikeStatLabel">Distance</span><span className="hikeStatValue">{hike.distanceKm} km</span></div>
							<div className="hikeStatRow"><span className="hikeStatIcon" title="Elevation"></span><span className="hikeStatLabel">Elevation</span><span className="hikeStatValue">{hike.elevationM} m</span></div>
							<div className="hikeStatRow"><span className="hikeStatIcon" title="Time"></span><span className="hikeStatLabel">Time</span><span className="hikeStatValue">{hike.timeHours} hours</span></div>
							<div className="hikeStatRow"><span className="hikeStatIcon" title="Parking"></span><span className="hikeStatLabel">Parking</span><span className="hikeStatValue">{hike.parking}</span></div>
							<div className="hikeStatRow"><span className="hikeStatIcon" title="Season"></span><span className="hikeStatLabel">Season</span><span className="hikeStatValue">{hike.season}</span></div>
						</div>
					</div>
				</div>
				<div className="hikeDetailWriteup">
					<h3>Trail Experience</h3>
					<p>
						This scenic loop around the Banff Springs Golf Course is a hidden gem for walkers and cyclists. The trail offers peaceful river views, glimpses of wildlife, and a unique perspective on the historic hotel and fairways. It’s mostly flat and easy to follow, making it ideal for a relaxing outing or a gentle introduction to Banff’s outdoors.
					</p>
				</div>
			</section>
		</main>
	);
}
