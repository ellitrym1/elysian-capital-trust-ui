import { useRef, useState } from "react";
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
    const [pinCode, setPinCode] = useState<Array<string>>(["", "", "", "", ""]);
    const pinCodeRefs = useRef<
        Array<HTMLInputElement | HTMLTextAreaElement | null>
    >([]);

    const { login } = useUserContext();

    const focusNextInput = (index: number) => {
        if (index < pinCodeRefs.current.length - 1) {
            pinCodeRefs.current[index + 1]?.focus();
        }
    };

    const handlePinCodeChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { value } = e.target;
        const newPinCode = value || "";
        setPinCode((prev) => {
            const newPinCodeArray = [...prev];
            newPinCodeArray[index] = newPinCode;
            return newPinCodeArray;
        });
        focusNextInput(index);
    };

    const handleLogin = () => {
        const formattedPinCode = pinCode.join("");
        login({ registrationNumber, pinCode: formattedPinCode });
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
                <Box sx={{ display: "flex", gap: "8px" }}>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <TextField
                            key={index}
                            inputRef={(el) => (pinCodeRefs.current[index] = el)}
                            variant="outlined"
                            sx={{
                                width: "calc(20% - 8px)",
                                backgroundColor: "white",
                            }}
                            type="number"
                            inputMode="numeric"
                            value={pinCode[index]}
                            onChange={(e) => handlePinCodeChange(e, index)}
                            onFocus={(e) => e.target.select()}
                        />
                    ))}
                </Box>
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
