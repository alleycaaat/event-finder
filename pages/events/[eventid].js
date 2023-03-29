import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';

import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';

const EventDetail = () => {
    const router = useRouter();
    const eventid = router.query.eventid;

    const event = getEventById(eventid);

    if (!event) {
        return <p>No event found</p>;
    }
    return (
        <>
            <article>
                <EventSummary title={event.title} />
                <EventLogistics
                    date={event.date}
                    address={event.location}
                    image={event.image}
                    imageAlt={event.title}
                />
                <EventContent />
                <p>{event.description}</p>
            </article>
        </>
    );
};

export default EventDetail;