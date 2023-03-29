import { getAllEvents } from '@/dummy-data';
import { useRouter } from 'next/router';

import EventsSearch from '@/components/events/events-search';
import EventList from '@/components/events/event-list';

const AllEvents = () => {
    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${ year }/${ month }`;
        router.push(fullPath);
    };

    return (
        <section>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList events={events} />
        </section>
    );
};

export default AllEvents;