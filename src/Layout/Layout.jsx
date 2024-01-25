import classes from "./Layout.module.scss";
import headerMobile from "../assets/bg-sidebar-mobile.svg";
import Body from "../components/Body/Body";
const Layout = ({
    children,
    title,
    subtitle,
    currentStage,
    setCurrentStage,
    errors,
    formValues,
    fieldTouched
}) => {
    // console.log(errors)

    const isFormEmpty = () => {
        let values = "";
        for (const key in formValues) {
            values = values + formValues[key];
            if(!formValues[key]) fieldTouched(key, true)
        }
        if (!values) return true;
        else return false;
    };

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <nav className={classes.navBar}>
                    {[1, 2, 3, 4].map((el) => (
                        <div
                            className={[
                                classes.navItem,
                                el === currentStage + 1 && classes.active,
                            ].join(" ")}
                            key={el}
                            onClick={() => setCurrentStage(el - 1)}
                        >
                            {el}
                        </div>
                    ))}
                </nav>
                <div className={classes.headerImg}>
                    <img src={headerMobile} alt="" />
                </div>
            </header>

            <Body title={title} subtitle={subtitle}>
                {children}
            </Body>
            <footer className={classes.footer}>
                {currentStage > 0 && (
                    <button
                        className={[classes.button, classes.goBack].join(" ")}
                        onClick={() => setCurrentStage((prev) => --prev)}
                    >
                        Go Back
                    </button>
                )}
                {currentStage < 3 ? (
                    <button
                        className={[classes.button, classes.next].join(" ")}
                        onClick={() => setCurrentStage((prev) => ++prev)}
                    >
                        Next Step
                    </button>
                ) : (
                    // wrap the outter submit to work properly <></>   !!!!!!
                    <>
                        <button
                            className={[
                                classes.button,
                                classes.next,
                                classes.confirm,
                            ].join(" ")}
                            type="submit"
                            form="my-form"
                            onClick={() => {
                                if(isFormEmpty() ||errors.name || errors.email || errors.phone) setCurrentStage(0)
                                else if(errors.plan) setCurrentStage(1)
                            }}
                        >
                            Confirm
                        </button>
                    </>
                )}
            </footer>
        </div>
    );
};

export default Layout;
