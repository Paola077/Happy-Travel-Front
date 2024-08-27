
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LOG_IN_URL } from "../../config/urls";
import { apiRequest } from "../../services/apiRequest";
import Card from "../card/Card";
import CommonInput from "../inputs/CommonInput";
import AcceptCancelButtons from "../buttons/AcceptCancelButtons"
import { AuthContext } from "../../auth/AuthWrapper"; 
import { useContext } from "react";


const  LogInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleCancelButtonClick = () => {
        navigate('/'); 
    };

    const onSubmit = async (data) => {
        const { email, password } = data;
        const userData = { email, password };
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
    
        try {
            const response = await apiRequest(LOG_IN_URL, "POST", userData, headers);
    
            // La respuesta contiene el token JWT
            const { token, ...user } = response;  // Extrae el token y el resto del usuario
            console.log("API Response:", response);
    
            if (token) {
                // Limpia el prefijo 'Bearer ' del token
                const cleanedToken = token.startsWith('Bearer ') ? token.slice(7) : token;
                // Guarda el token limpio en localStorage
                login(user, cleanedToken);
                alert("Login successful!"); // Mensaje de éxito
    
                navigate('/'); // Navega a la ruta deseada
            } else {
                alert("Login failed: No token received.");
            }
        } catch (error) {
            console.error("API Error:", error);
            alert(`Login failed: ${error.message}`);
        }
    };
    

    return (
        <Card   className="w-[23.125rem] h-[22.375rem] my-[5rem] border-[color:var(--col-yellow-light)] border-4 border-solid flex flex-col items-center justify-center" 
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
                    
                    <AcceptCancelButtons    type="submit" 
                                            onClickCancel={handleCancelButtonClick}/>
                </div>
            </form>
        </Card>
    );
}

export default LogInForm