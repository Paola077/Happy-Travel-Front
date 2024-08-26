
import { SIGN_IN_URL } from "../../config/urls";
import { useState } from "react";
import { apiRequest } from "../../services/apiRequest";
import Card from "../card/Card";
import CommonInput from "../inputs/CommonInput";
import AcceptCancelButtons from "../buttons/AcceptCancelButtons";

export function SignInForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const userData = { name, email, password };
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        try {
            const response = await apiRequest(SIGN_IN_URL, "POST", userData, headers);

            // Replace the alert with SweetAlert or a similar 
            console.log("API Response:", response);
            alert("User registered successfully!");

            // If the User is already registered: get response code and set another Alert

        } catch (error) {
            // Replace the alert with SweetAlert or a similar 
            console.error("API Error:", error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <Card className="w-[23.125rem] h-[30.438rem] border-[color:var(--col-yellow-light)] border-4 border-solid flex flex-col items-center justify-center">
            <div className="w-[18.75rem] flex justify-center mt-[0.625rem] mb-[1.375rem] border-b-[color:var(--col-red)] border-b border-solid">
                <h4 className="jaldi-bold text-lg [color:var(--col-red)] leading-[2.625rem] pb-[0.313rem]">Registro de usuario</h4>
            </div>

            <form className="w-[23.125rem] h-[30.438rem]" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6 items-center">
                    <CommonInput
                        label="Nombre"
                        id="name"
                        type="text"
                        placeholder="Escribe tu nombre..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <CommonInput
                        label="E-Mail"
                        id="signin_email"
                        type="email"
                        placeholder="Escribe tu e-mail..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <CommonInput
                        label="Contraseña"
                        id="signin_password"
                        type="password"
                        placeholder="Escribe tu contraseña..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <AcceptCancelButtons type="submit"/>
                </div>

                <p color="gray" className="mt-4 text-center jaldi-bold text-md text-[color:var(--col-blue)]">
                    ¿Ya tienes cuenta? Accede{" "}
                    <a href="#" className="text-[color:var(--col-green)]">
                        aquí
                    </a>
                </p>
            </form>
        </Card>
    );
}
