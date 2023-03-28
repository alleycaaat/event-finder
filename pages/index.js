import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/dummy-data';

export default function Home() {
	const featuredEvents = getFeaturedEvents()

	return (
		<main>
			<h1>Event Finder</h1>
			<EventList events={featuredEvents} />
		</main>
	);
}
