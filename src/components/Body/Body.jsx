import classes from "./Body.module.scss";

const Body = ({ children, title, subtitle }) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h2 className={classes.title}>{title}</h2>
                <p className={classes.subtitle}>{subtitle}</p>
                <div className={classes.formSegment}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Body;
