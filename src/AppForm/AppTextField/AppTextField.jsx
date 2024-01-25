import { useField } from "formik";
import classes from "./AppTextField.module.scss";

const AppTextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={classes.container}>
            <label htmlFor={props.name}>{label}</label>
            <input
                {...field}
                {...props}
                style={
                    meta.touched && meta.error ? { borderColor: "red" } : null
                }
            />
            <p
                className={classes.errorMessage}
                style={
                    meta.touched && meta.error
                        ? { visibility: "visible" }
                        : null
                }
            >
                {meta.error || "preventLayoutShifting"}
            </p>
        </div>
    );
};

export default AppTextField;
