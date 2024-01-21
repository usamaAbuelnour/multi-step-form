import "./App.scss";
import Layout from "./Layout/Layout";
import AppForm from "./AppForm/AppForm";
import { useState } from "react";

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

    return (
        <Layout
            title={titles[currentStage].title}
            subtitle={titles[currentStage].subtitle}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
        >
            <AppForm currentStage={currentStage} />
        </Layout>
    );
}

export default App;
