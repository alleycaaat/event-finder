import EventItem from './event-item';

const EventList = (props) => {
    const {events} = props
    return (
        <section>
            <h1>Events</h1>
            <ul>
                {events.map(evnt => <EventItem  />)}
            </ul>
        </section>
    );
};

export default EventList;