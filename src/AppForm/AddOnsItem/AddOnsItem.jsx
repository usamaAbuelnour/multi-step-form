import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";
import classes from "./AddOnsItem.module.scss";

const AddOnsItem = ({
    name,
    description,
    cost,
    selectedAddOns,
    selectAddOn,
    deselectAddOn,
    switchValue,
}) => {
    return (
        <div
            className={[
                classes.container,
                selectedAddOns.some((addOn) => addOn.name === name) &&
                    classes.selected,
            ].join(" ")}
        >
            <CustomCheckBox
                checked={selectedAddOns.some((addOn) => addOn.name === name)}
                selectAddOn={() =>
                    selectAddOn({
                        name,
                        cost:
                            switchValue === "monthly"
                                ? cost.monthly
                                : cost.yearly,
                    })
                }
                deselectAddOn={() => deselectAddOn({ name })}
            />
            <div className={classes.info}>
                <p className={classes.name}>{name}</p>
                <p className={classes.description}>{description}</p>
            </div>
            <p className={classes.cost}>{`+$${
                switchValue === "monthly"
                    ? `${cost.monthly}/mo`
                    : `${cost.yearly}/yr`
            }`}</p>
        </div>
    );
};

export default AddOnsItem;
