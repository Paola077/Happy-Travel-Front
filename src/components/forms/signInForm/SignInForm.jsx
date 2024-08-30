import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { SIGN_IN_URL } from "../../../config/urls";
import { apiRequest } from "../../../services/apiRequest";
import Card from "../../card/Card";
import CommonInput from "../../inputs/CommonInput";
import AcceptCancelButtons from "../../buttons/AcceptCancelButtons"


const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleCancelButtonClick = () => {
        navigate('/'); 
    };

    const handleLoginClick = () => {
        navigate('/login'); 
    };


    const onSubmit = async (data) => {
        const { name, email, password } = data;
        
        const cleanedData = {
            name: name.trim(),
            email: email.trim().toLowerCase(), 
            password: password.trim()
        };

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        try {
            const response = await apiRequest(SIGN_IN_URL, "POST", cleanedData, headers);
            alert("Usuario registrado con éxito!");
            navigate('/login');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <Card className="w-[23.125rem] h-[30.438rem] my-[5rem] border-[color:var(--col-yellow-light)] border-4 border-solid flex flex-col items-center justify-center" headerText="Registro de usuario">
            <form className="w-[23.125rem] h-[30.438rem]" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1 flex flex-col gap-6 items-center">
                    <CommonInput
                        label="Nombre"
                        id="name"
                        type="text"
                        placeholder="Escribe tu nombre..."
                        error={errors.name?.message}
                        {...register("name", { required: "Debes escribir un nombre" })}
                    />

                    <CommonInput
                        label="E-Mail"
                        id="signin_email"
                        type="text"
                        placeholder="Escribe tu e-mail..."
                        error={errors.email?.message}
                        {...register("email", {
                            required: "Debes escribir un e-mail",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Correo electrónico no válido"
                            }
                        })}
                    />

                    <CommonInput
                        label="Contraseña"
                        id="signin_password"
                        type="password"
                        placeholder="Escribe tu contraseña..."
                        error={errors.password?.message}
                        {...register("password", {
                            required: "Debes escribir una contraseña",
                            minLength: {
                                value: 8,
                                message: "La contraseña debe tener al menos 8 caracteres"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "La contraseña debe incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
                            }
                        })}
                    />

                    <AcceptCancelButtons    type="submit" 
                                            onClickCancel={handleCancelButtonClick}/>

                    
                </div>

                <p className="mt-4 text-center jaldi-bold text-md text-[color:var(--col-blue)]">
                    ¿Ya tienes cuenta? Accede{" "}
                    <span 
                        onClick={handleLoginClick} 
                        className="text-[color:var(--col-green)] cursor-pointer underline">
                            aquí
                    </span>
                </p>
            </form>
        </Card>
    );
}

export default SignInForm