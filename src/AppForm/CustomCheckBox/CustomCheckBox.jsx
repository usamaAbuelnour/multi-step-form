import classes from "./CustomCheckBox.module.scss";
import checkMark from "../../assets/icon-checkmark.svg";

const CustomCheckBox = ({ checked, selectAddOn, deselectAddOn }) => {
    return (
        <div
            className={[classes.container, checked && classes.checked].join(
                " "
            )}
            onClick={checked ? deselectAddOn :selectAddOn}
        >
            {checked && <img src={checkMark} alt="" />}
        </div>
    );
};

export default CustomCheckBox;
