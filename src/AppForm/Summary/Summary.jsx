import { useContext, useEffect } from "react";
import classes from "./Summary.module.scss";
import { CurrentStage } from "../../App";
import { useFormikContext } from "formik";
const Summary = ({ selectedPlan, selectedAddOns, switchValue }) => {
    const {
        changeCurrentStage,
        setErrorsHandler,
        setFormValuesHandler,
        setFieldTouchedHandler,
    } = useContext(CurrentStage);

    const { errors, values, setFieldTouched } = useFormikContext();
    let totalCost = null;

    if (selectedAddOns.length) {
        let sum = 0;
        for (const addOn of selectedAddOns) sum += addOn.cost;
        totalCost = selectedPlan.cost + sum;
    } else totalCost = selectedPlan.cost;

    useEffect(() => {
        // if (errors.name || errors.email || errors.phone) changeCurrentStage(0);
        // if (errors.plan) changeCurrentStage(1);
        setErrorsHandler(errors);
        setFormValuesHandler(values);
        setFieldTouchedHandler(() => setFieldTouched);
        // setFieldTouched('name', true)
    }, []);

    return (
        <>
            <div className={classes.container}>
                {!selectedPlan.name ? (
                    <h2 style={{ textAlign: "center", color: "tomato" }}>
                        No plans selected!
                    </h2>
                ) : (
                    <>
                        <div className={classes.plan}>
                            <div className={classes.planInfo}>
                                <p
                                    className={classes.planName}
                                >{`${selectedPlan.name} (${switchValue})`}</p>
                                <p
                                    className={classes.change}
                                    onClick={() => changeCurrentStage(1)}
                                >
                                    Change
                                </p>
                            </div>
                            <p className={classes.planCost}>{`$${
                                selectedPlan.cost
                            }${switchValue === "monthly" ? "/mo" : "/yr"}`}</p>
                        </div>
                        {!selectedAddOns.length
                            ? null
                            : selectedAddOns.map((addOn) => (
                                  <div
                                      className={classes.addOn}
                                      key={addOn.name}
                                  >
                                      <p className={classes.addOnName}>
                                          {addOn.name}
                                      </p>
                                      <p className={classes.addOnCost}>{`+$${
                                          addOn.cost
                                      }${
                                          switchValue === "monthly"
                                              ? "/mo"
                                              : "/yr"
                                      }`}</p>
                                  </div>
                              ))}
                    </>
                )}
            </div>
            {selectedPlan.name && (
                <div className={classes.total}>
                    <p className={classes.totalLabel}>
                        Total (per{" "}
                        {switchValue === "monthly" ? "month" : "year"})
                    </p>
                    <p className={classes.totalCost}>
                        +${totalCost}
                        {switchValue === "monthly" ? "/mo" : "/yr"}
                    </p>
                </div>
            )}
        </>
    );
};

export default Summary;
