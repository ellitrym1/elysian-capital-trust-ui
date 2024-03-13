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

const Routes = () => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/pay" element={<Pay />} />
            </ReactRoutes>
            <BottomNavigationBar />
        </Router>
    );
};

export default Routes;
