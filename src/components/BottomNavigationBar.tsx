import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useState } from "react";
import { PATHS } from "@/paths/paths";

export default function BottomNavigationBar() {
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
            }}
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            showLabels
        >
            <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                component={Link}
                to={PATHS.home}
            />
            <BottomNavigationAction
                label="Transactions"
                icon={<AccountBalanceWalletIcon />}
                component={Link}
                to={PATHS.transactions}
            />
            <BottomNavigationAction
                label="Pay"
                icon={<PaymentIcon />}
                component={Link}
                to={PATHS.pay}
            />
            <BottomNavigationAction
                label="Wallets"
                icon={<AccountBalanceIcon />}
                component={Link}
                to={PATHS.wallets}
            />
            <BottomNavigationAction
                label="Settings"
                icon={<SettingsIcon />}
                component={Link}
                to={PATHS.settings}
            />
        </BottomNavigation>
    );
}
