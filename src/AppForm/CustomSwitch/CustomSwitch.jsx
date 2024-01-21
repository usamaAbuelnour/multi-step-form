import classes from "./CustomSwitch.module.scss";

const CustomSwitch = ({ value, setValue }) => {
    return (
        <div className={classes.container}>
            <p className={value === "monthly" ? classes.active : null}>
                Monthly
            </p>
            <div
                className={classes.track}
                onClick={() =>
                    setValue((prev) =>
                        prev === "monthly" ? "yearly" : "monthly"
                    )
                }
            >
                <div
                    className={[
                        classes.thumb,
                        value === "yearly" ? classes.clicked : null,
                    ].join(" ")}
                ></div>
            </div>
            <p className={value === "yearly" ? classes.active : null}>Yearly</p>
        </div>
    );
};

export default CustomSwitch;
