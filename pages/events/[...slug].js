import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';

import Button from '@/ui/button';
import ErrorAlert from '@/ui/error-alert';

import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router';

const FilteredEvents = () => {
    const router = useRouter();
    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className='center'>Loading...</p>;
    }

    const filteredYear = +filteredData[0];
    const filteredMonth = +filteredData[1];

    if (
        isNaN(filteredYear) ||
        isNaN(filteredMonth) ||
        filteredMonth < 1 ||
        filteredMonth > 12
    ) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid search parameters, please adjust your values.</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the selected time frame.</p>;
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>
        );
    }

    const date = new Date(filteredYear, filteredMonth - 1);

    return (
        <section>
            <ResultsTitle date={date} />
            <EventList events={filteredEvents} />
        </section>
    );
};

export default FilteredEvents;