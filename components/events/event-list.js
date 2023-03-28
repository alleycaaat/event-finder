import EventItem from './event-item';

const EventList = (props) => {
    const { events } = props;
    
    return (
        <section>
            <h1>Events</h1>
            <ul>
                {events.map((event) => (
                    <EventItem
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        location={event.location}
                        data={event.data}
                        image={event.image}
                    />
                ))}
            </ul>
        </section>
    );
};

export default EventList;