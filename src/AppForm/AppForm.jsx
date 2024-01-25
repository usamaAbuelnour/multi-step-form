import React, { useEffect, useRef, useState } from "react";
import { Form, Formik, useFormikContext } from "formik";
import AppTextField from "./AppTextField/AppTextField";
import { validationSchema } from "./validationSchema";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";
import PlanItem from "./PlanItem/PlanItem";
import CustomSwitch from "./CustomSwitch/CustomSwitch";
import AddOnsItem from "./AddOnsItem/AddOnsItem";
import Summary from "./Summary/Summary";

const AppForm = ({ currentStage }) => {
    const [switchValue, setSwitchValue] = useState("monthly");
    // const {setFieldValue} = useFormikContext()
    const plans = [
        {
            name: "Arcade",
            cost: {
                monthly: { price: 9, offer: null },
                yearly: { price: 90, offer: "2 months free" },
            },
            icon: arcadeIcon,
        },
        {
            name: "Advanced",
            cost: {
                monthly: { price: 12, offer: null },
                yearly: { price: 120, offer: "2 months free" },
            },
            icon: advancedIcon,
        },
        {
            name: "Pro",
            cost: {
                monthly: { price: 15, offer: null },
                yearly: { price: 150, offer: "2 months free" },
            },
            icon: proIcon,
        },
    ];

    const [selectedPlan, setSelectedPlan] = useState({});

    const selectPlanHandler = (plan) => {
        setSelectedPlan(plan);
    };

    const mount = useRef(true);
    useEffect(() => {
        if (mount.current) mount.current = false;
        else {
            if (selectedPlan.name) {
                let temp = plans.find((el) => el.name === selectedPlan.name);
                setSelectedPlan((prev) => {
                    if (switchValue === "yearly")
                        return {
                            ...prev,
                            cost: temp.cost.yearly.price,
                        };
                    else
                        return {
                            ...prev,
                            cost: temp.cost.monthly.price,
                        };
                });
            }
            if (selectedAddOns.length) {
                setSelectedAddOns(
                    selectedAddOns.map((el) => {
                        let temp = addOns.find((item) => el.name === item.name);
                        if (switchValue === "yearly")
                            return { name: temp.name, cost: temp.cost.yearly };
                        else
                            return { name: temp.name, cost: temp.cost.monthly };
                    })
                );
            }
        }
    }, [switchValue]);

    const addOns = [
        {
            name: "Online service",
            description: "Access to multiplayer games",
            cost: { monthly: 1, yearly: 10 },
        },
        {
            name: "Larger storage",
            description: "Extra 1TB of cloud save",
            cost: { monthly: 2, yearly: 20 },
        },
        {
            name: "Customizable profile",
            description: "Custom theme on your profile",
            cost: { monthly: 2, yearly: 20 },
        },
    ];

    const [selectedAddOns, setSelectedAddOns] = useState([]);

    const selectAddOn = (addOn) =>
        setSelectedAddOns((prev) => [...prev, addOn]);

    const deselectAddOn = (addOn) =>
        setSelectedAddOns((prev) =>
            prev.filter(
                (_, idx) =>
                    prev.findIndex((el) => el.name === addOn.name) !== idx
            )
        );
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                plan: "",
            }}
            onSubmit={(values, actions) => {
                console.log(values);
                // actions.resetForm();
            }}
            validationSchema={validationSchema}
        >
            {({ setFieldValue, errors, touched }) => (
                <Form autoComplete="off" id="my-form">
                    {currentStage === 0 ? (
                        <>
                            <AppTextField
                                label="Name"
                                type="text"
                                name="name"
                                placeholder="e.g. Stephen King"
                            />
                            <AppTextField
                                label="Email Address"
                                type="text"
                                name="email"
                                placeholder="e.g. setphenking@lorem.com"
                            />
                            <AppTextField
                                label="Phone Number"
                                type="text"
                                name="phone"
                                placeholder="e.g. +1 234 567 890"
                                maxLength="11"
                                onKeyDown={(e) =>
                                    isNaN(e.key) && e.key !== "Backspace"
                                        ? e.preventDefault()
                                        : null
                                }
                            />
                        </>
                    ) : currentStage === 1 ? (
                        <>
                            {plans.map((plan) => (
                                <PlanItem
                                    key={plan.name}
                                    name={plan.name}
                                    cost={
                                        switchValue === "monthly"
                                            ? plan.cost.monthly
                                            : plan.cost.yearly
                                    }
                                    icon={plan.icon}
                                    selectPlanHandler={selectPlanHandler}
                                    selectedPlan={selectedPlan}
                                    setFieldValue={setFieldValue}
                                />
                            ))}
                            <CustomSwitch
                                value={switchValue}
                                setValue={setSwitchValue}
                            />
                            {(errors.plan && touched.plan) && (
                                <p
                                    style={{
                                        marginTop: "1em",
                                        textAlign: "center",
                                        color: "red",
                                        fontWeight: 500,
                                        backgroundColor: "#f6f6f6",
                                        padding: "0.5em",
                                        borderRadius: "7px",
                                    }}
                                >
                                    {errors.plan}
                                </p>
                            )}
                        </>
                    ) : currentStage === 2 ? (
                        <>
                            {addOns.map((addOn) => (
                                <AddOnsItem
                                    key={addOn.name}
                                    name={addOn.name}
                                    description={addOn.description}
                                    cost={addOn.cost}
                                    selectedAddOns={selectedAddOns}
                                    selectAddOn={selectAddOn}
                                    deselectAddOn={deselectAddOn}
                                    switchValue={switchValue}
                                />
                            ))}
                        </>
                    ) : (
                        <Summary
                            selectedPlan={selectedPlan}
                            selectedAddOns={selectedAddOns}
                            switchValue={switchValue}
                            setSwitchValue={setSwitchValue}
                            errors={errors}
                        />
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default AppForm;
