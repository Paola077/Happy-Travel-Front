import {
    //Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { LOG_IN_URL } from "../../config/urls";
import { useState } from "react";
import { apiRequest } from "../../services/apiRequest";
import Card from "../card/Card";
import AcceptButton from "../buttons/AcceptButton";
import CancelButton from "../buttons/CancelButton";
import CommonInput from "../inputs/CommonInput";

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
        <Card className="w-[23.125rem] h-[22.375] border-[color:var(--col-yellow-light)] border-4 border-solid flex flex-col items-center justify-center">
            <div className="w-[18.75rem] flex justify-center mt-[0.625rem] mb-[1.375rem] border-b-[color:var(--col-red)] border-b border-solid">
                <h4 className="jaldi-bold text-lg [color:var(--col-red)] leading-[2.625rem] pb-[0.313rem]">Acceso de usuario</h4>
            </div>

            <form className="w-[23.125rem] mb-[2.063rem]" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6 items-center">
                    
                    <CommonInput    label="E-Mail"
                                    id="email"
                                    type="email" 
                                    placeholder="Escribe tu e-mail..."
                    />
                    <CommonInput    label="Contraseña"
                                    id="password"
                                    type="password" 
                                    placeholder="Escribe tu contraseña..."
                    />
                    <div className="w-[15.625rem] flex justify-around">
                        <AcceptButton type="submit"/>
                        <CancelButton />
                    </div>
                </div>
            </form>

            
            </Card>
        //{
        /* <Card color="transparent" shadow={false}>
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
        </Card> */
    //}
    );
}
