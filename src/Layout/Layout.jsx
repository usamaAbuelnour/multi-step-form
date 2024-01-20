import classes from "./Layout.module.scss";
import headerMobile from "../assets/bg-sidebar-mobile.svg";
import Body from "../components/Body/Body";

const Layout = ({
    children,
    title,
    subtitle,
    currentStage,
    setCurrentStage,
}) => {
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
                <button
                    className={[
                        classes.button,
                        classes.next,
                        currentStage === 3 && classes.confirm,
                    ].join(" ")}
                    onClick={
                        currentStage === 3
                            ? () => {}
                            : () => setCurrentStage((prev) => ++prev)
                    }
                >
                    {currentStage === 3 ? "Confirm" : "Next Step"}
                </button>
            </footer>
        </div>
    );
};

export default Layout;
