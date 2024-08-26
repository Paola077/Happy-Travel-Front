
import { useForm } from "react-hook-form";
import { LOG_IN_URL } from "../../config/urls";
import { apiRequest } from "../../services/apiRequest";
import Card from "../card/Card";
import CommonInput from "../inputs/CommonInput";
import AcceptButton from "../buttons/AcceptButton";
import CancelButton from "../buttons/CancelButton";

export function LogInForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;
        const userData = { email, password };
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
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
                // Redirect to a different page - REPLACEthisuseNavigate 
                //navigate('/REPLACEthis'); // Redirect using useNavigate
            } else {
                alert("Login failed: No token received.");
            }
        } catch (error) {
            console.error("API Error:", error);
            alert(`Login failed: ${error.message}`); 
        }
    };

    return (
        <Card   className="w-[23.125rem] h-[22.375rem] border-[color:var(--col-yellow-light)] border-4 border-solid flex flex-col items-center justify-center" 
                headerText="Acceso de usuario">

            <form className="w-[23.125rem] mb-[2.063rem]" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1 flex flex-col gap-6 items-center">
                    
                    <CommonInput
                        label="E-Mail"
                        id="login_email"
                        type="email"
                        placeholder="Escribe tu e-mail..."
                        error={errors.email?.message}
                        {...register("email", {
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Correo electrónico no válido"
                            }
                        })}
                    />
                    
                    <CommonInput
                        label="Contraseña"
                        id="login_password"
                        type="password"
                        placeholder="Escribe tu contraseña..."
                        error={errors.password?.message}
                        {...register("password", {
                            required: "La contraseña es obligatoria",
                            minLength: {
                                value: 8,
                                message: "La contraseña debe tener al menos 8 caracteres"
                            }
                        })}
                    />
                    
                    <div className="w-[15.625rem] flex justify-around">
                        <AcceptButton type="submit" />
                        <CancelButton />
                    </div>
                </div>
            </form>
        </Card>
    );
}
