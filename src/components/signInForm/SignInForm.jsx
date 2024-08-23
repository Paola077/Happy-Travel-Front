import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { SIGN_IN_URL } from "../../config/urls";
import { useState } from "react";
import { apiRequest } from "../../services/apiRequest";

export function SignInForm() {

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [agreeTerms, setAgreeTerms] = useState(false);
    
        const handleSubmit = async (event) => {
            event.preventDefault();
    
            if (!name || !email || !password ) {
                alert("Please fill in all fields and agree to the terms.");
                return;
            }
    
            const userData = { name, email, password };
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };

            try {
                const response = await apiRequest(SIGN_IN_URL, "POST", userData, headers);
                
                //change the alert with SweetAlert
                console.log("API Response:", response); 
                alert("User registered successfully!");

                //if the User is already registered: get response code and set another Alert
                
            } catch (error) {
                //change the alert with SweetAlert
                console.error("API Error:", error);
                alert(`Error: ${error.message}`);
            }
        };
    

        return (
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree to the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button type="submit" className="mt-6" fullWidth>
                        Sign Up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </Card>
        );
    }