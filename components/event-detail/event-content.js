import classes from './event-content.module.scss';

function EventContent(props) {
    return (
        <section className={classes.content}>
            {props.children}
        </section>
    );
}

export default EventContent;
