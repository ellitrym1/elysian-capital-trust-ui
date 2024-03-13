import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentIcon from "@mui/icons-material/Payment";
import { useState } from "react";

export default function BottomNavigationBar() {
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            showLabels
        >
            <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                component={Link}
                to="/"
            />
            <BottomNavigationAction
                label="Transactions"
                icon={<AccountBalanceWalletIcon />}
                component={Link}
                to="/transactions"
            />
            <BottomNavigationAction
                label="Settings"
                icon={<SettingsIcon />}
                component={Link}
                to="/settings"
            />
            <BottomNavigationAction
                label="Pay"
                icon={<PaymentIcon />}
                component={Link}
                to="/pay"
            />
        </BottomNavigation>
    );
}
