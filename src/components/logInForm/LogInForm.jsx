import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { LOG_IN_URL } from "../../config/urls";
import { useState } from "react";
import { apiRequest } from "../../services/apiRequest";

export function LogInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const userData = { email, password };
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        try {
            const response = await apiRequest(LOG_IN_URL, "POST", userData, headers);

            // The response contains the JWT token
            const { token } = response; // Adjust based on your response structure
            console.log("API Response:", response);

            if (token) {
                // Save the JWT token to localStorage 
                localStorage.setItem('authToken', token);
                alert("Login successful!"); // Success message
                
                //REEMPLAZAR LA RUTA QUE SE VA A CARGAR DEPUES DE LOGIN CON EXITO
                // Redirect to a different page - REPLACEthis
                navigate('/REPLACEthis'); // Redirect using useNavigate

            } else {
                alert("Login failed: No token received.");
            }
            
        } catch (error) {
            console.error("API Error:", error);
            alert(`Login failed: ${error.message}`); // Error message
        }
    };

    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Log In
            </Typography>
        
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    
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
                
                <Button type="submit" className="mt-6" fullWidth>
                    Log In
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Don't have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign Up
                    </a>
                </Typography>
            </form>
        </Card>
    );
}
