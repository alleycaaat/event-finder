import Link from 'next/link';

const EventItem = (props) => {
    const { title, image, date, location, id } = props;
    const humanDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    //replace commas in addresses with line break
    const formatAddy = location.replace(', ', '\n');

    const eventLink = `/events/${ id }`;

    return (
        <li>
            <img src={'/' + image} alt='' />
            <div>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <time>{humanDate}</time>
                </div>
                <div>
                    <address>
                        {formatAddy}
                    </address>
                </div>
                <div>
                    <Link href={eventLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
};

export default EventItem;