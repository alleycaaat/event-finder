import Button from '@/ui/button';

import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';

import classes from './event-item.module.scss';

const EventItem = (props) => {
    const { title, image, date, location, id } = props;
    const humanDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    //replace commas in addresses with line break
    const formatAddy = location.replace(', ', '\n');

    const eventLink = `/events/${ id }`;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt='' />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                </div>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>
                        {formatAddy}
                    </address>
                </div>
                <div className={classes.actions}>
                    <Button link={eventLink}>
                        Explore Event
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;