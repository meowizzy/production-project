import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../../theme/useTheme";
import { classNames } from "../../helpers/classNames";


const App: FC = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={switchTheme}>Switch theme</button>
            <ul>
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
            </ul>
            <Outlet />
        </div>
    );
};

export default App;