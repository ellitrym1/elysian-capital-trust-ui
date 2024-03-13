import {
    BrowserRouter as Router,
    Route,
    Routes as ReactRoutes,
} from "react-router-dom";
import Home from "@/pages/Home";
import Transactions from "@/pages/Transactions";
import Settings from "@/pages/Settings";
import Pay from "@/pages/Pay";
import BottomNavigationBar from "./BottomNavigationBar";
import Wallets from "@/pages/Wallets";

const Routes = () => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/wallets" element={<Wallets />} />
            </ReactRoutes>
            <BottomNavigationBar />
        </Router>
    );
};

export default Routes;
