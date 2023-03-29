import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';

import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';

import ErrorAlert from '@/ui/error-alert';

const EventDetail = () => {
    const router = useRouter();
    const eventid = router.query.eventid;

    const event = getEventById(eventid);

    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found</p>;
            </ErrorAlert>
        );
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