import React from "react";
import { Form, Formik } from "formik";
import AppTextField from "./AppTextField/AppTextField";
import { validationSchema } from "./validationSchema";

const AppForm = () => {
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
                <Form autoComplete='off'>
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
                </Form>
            )}
        </Formik>
    );
};

export default AppForm;
