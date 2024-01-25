import classes from "./PlanItem.module.scss";

const PlanItem = ({ name, cost, icon, setPlan, selected }) => {
    const styles = [classes.container];
    return (
        <div
            className={styles.join(" ")}
            onClick={() => {
                setPlan({ name, cost });
                styles.push(classes.selected);
            }}
        >
            <div className={classes.icon}>
                <img src={icon} alt="" />
            </div>
            <div className={classes.info}>
                <p className={classes.name}>{name}</p>
                <p className={classes.cost}>{`$${cost.price}/${
                    cost.offer ? "yr" : "mo"
                }`}</p>
                <p className={classes.offer}>{cost.offer}</p>
            </div>
        </div>
    );
};

export default PlanItem;
