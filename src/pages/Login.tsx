import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    Button,
    TextField,
    Typography,
    Box,
    Link,
    FormControl,
} from "@mui/material";
import { useUserContext } from "@/contexts/UserContext";

const Login = () => {
    const [registrationNumber, setRegistrationNumber] = useState<string>("");
    const [pinCode, setPinCode] = useState<string>("");

    const { login } = useUserContext();

    const handleLogin = () => {
        login({ registrationNumber, pinCode });
    };

    return (
        <Box
            maxWidth="xs"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                background: "linear-gradient(to bottom, #6E78B4, #FFFFFF)",
                color: "white",
            }}
        >
            <img
                src="/ect-no-bg.png"
                style={{
                    width: "60%",
                    height: "auto",
                }}
            />
            <FormControl
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "20px",
                    borderRadius: "8px",
                    color: "white",
                    width: "100%",
                    maxWidth: "320px",
                }}
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
            >
                <TextField
                    label="Registration Number"
                    variant="outlined"
                    sx={{
                        marginBottom: "16px",
                        width: "100%",
                        backgroundColor: "white",
                    }}
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                />
                <TextField
                    label="Pin Code"
                    variant="outlined"
                    sx={{
                        marginBottom: "16px",
                        width: "100%",
                        backgroundColor: "white",
                    }}
                    type="password"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: "16px", width: "100%" }}
                    type="submit"
                >
                    Login
                </Button>
                <Typography variant="body2" align="center" mt={2}>
                    Looking to register instead?{" "}
                    <Link
                        component={RouterLink}
                        to="/register"
                        sx={{ color: "white" }}
                    >
                        Register
                    </Link>
                </Typography>
            </FormControl>
        </Box>
    );
};

export default Login;
