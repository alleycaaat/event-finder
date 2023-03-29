import Link from 'next/link';
import classes from './button.module.scss';

const Button = (props) => {
    return (props.link) ? (
        <Link
            href={props.link}
            className={classes.btn}
        >
            {props.children}
        </Link>
    ) : (
        <button
            onClick={props.onclick}
            className={classes.btn}>
            {props.children}
        </button>
    );
};

export default Button;