import "./App.scss";
import Layout from "./Layout/Layout";
import AppForm from "./AppForm/AppForm";
import { createContext, useState } from "react";

export const CurrentStage = createContext("");

function App() {
    const titles = [
        {
            title: "Personal info",
            subtitle:
                "Please Provide your name, email address, and phone number.",
        },
        {
            title: "Select your plan",
            subtitle: "You have the option of monthly or yearly billing.",
        },
        {
            title: "Pick add-ons",
            subtitle: "Add-ons help enhance your gaming experience.",
        },
        {
            title: "Finishing up",
            subtitle: "Double-check everything looks OK before confirming.",
        },
    ];

    const [currentStage, setCurrentStage] = useState(0);
    const changeCurrentStage = (stage) => setCurrentStage(stage);

    const [errors, setErrors] = useState();
    const setErrorsHandler = (errors) => setErrors(errors);

    const [formValues, setFormValues] = useState();
    const setFormValuesHandler = (values) => setFormValues(values);

    const [fieldTouched, setFieldTouched] = useState();
    const setFieldTouchedHandler = fieldTouched => setFieldTouched(fieldTouched);

    return (
        <Layout
            title={titles[currentStage].title}
            subtitle={titles[currentStage].subtitle}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            errors={errors}
            formValues={formValues}
            fieldTouched={fieldTouched}
        >
            <CurrentStage.Provider
                value={{
                    changeCurrentStage,
                    setErrorsHandler,
                    setFormValuesHandler,
                    setFieldTouchedHandler
                }}
            >
                <AppForm currentStage={currentStage} />
            </CurrentStage.Provider>
        </Layout>
    );
}

export default App;
