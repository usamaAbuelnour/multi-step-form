import React, { useState } from "react";
import { FieldArray, Form, Formik } from "formik";
import AppTextField from "./AppTextField/AppTextField";
import { validationSchema } from "./validationSchema";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";
import PlanItem from "./PlanItem/PlanItem";
import CustomSwitch from "./CustomSwitch/CustomSwitch";

const AppForm = ({ currentStage }) => {
    const [switchValue, setSwitchValue] = useState("monthly");
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

    const personalInfo = (
        <>
            {" "}
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
            />{" "}
        </>
    );

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
            }}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
            }}
            validationSchema={validationSchema}
        >
            {() => (
                <Form autoComplete="off">
                    {plans.map((plan) => (
                        <PlanItem
                            name={plan.name}
                            cost={
                                switchValue === "monthly"
                                    ? plan.cost.monthly
                                    : plan.cost.yearly
                            }
                            icon={plan.icon}
                        />
                    ))}
                    <CustomSwitch
                        value={switchValue}
                        setValue={setSwitchValue}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default AppForm;
