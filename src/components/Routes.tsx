import {
    BrowserRouter as Router,
    Route,
    Routes as ReactRoutes,
    Navigate,
} from "react-router-dom";
import Home from "@/pages/Home";
import Transactions from "@/pages/Transactions";
import Settings from "@/pages/Settings";
import Pay from "@/pages/Pay";
import BottomNavigationBar from "./BottomNavigationBar";
import Wallets from "@/pages/Wallets";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import { useUserContext } from "@/contexts/UserContext";

const Routes = () => {
    const { loggedIn } = useUserContext();
    return (
        <Router>
            <ReactRoutes>
                {loggedIn ? (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/transactions"
                            element={<Transactions />}
                        />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/pay" element={<Pay />} />
                        <Route path="/wallets" element={<Wallets />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        />
                    </>
                )}
            </ReactRoutes>
            {loggedIn && <BottomNavigationBar />}
        </Router>
    );
};

export default Routes;
