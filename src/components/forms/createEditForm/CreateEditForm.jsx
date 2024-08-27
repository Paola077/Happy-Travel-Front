import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { apiRequest } from "../../../services/apiRequest";
import Card from "../../card/Card";
import CommonInput from "../../inputs/CommonInput";
import AcceptCancelButtons from "../../buttons/AcceptCancelButtons"

const CreateEditForm = ({url}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [fileName, setFileName] = useState("Sube una imagen...");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const maxFileSize = 5 * 1024 * 1024; // 5 MB
        const allowedTypes = ["image/jpeg", "image/png"];

        if (file) {
            if (!allowedTypes.includes(file.type)) {
                alert("Only JPG and PNG files are allowed.");
                e.target.value = ''; // Clear the input if validation fails
                setFileName("Sube una imagen...");
                return;
            }

            if (file.size > maxFileSize) {
                alert("File size exceeds the maximum limit of 5 MB.");
                e.target.value = ''; // Clear the input if validation fails
                setFileName("Sube una imagen...");
                return;
            }

            setFileName(file.name);
        }
    };

    const handleCancelButtonClick = () => {
        navigate('/'); 
    };

    const handleAcceptButtonClick = () => {
        navigate('/location'); 
    };

    const onSubmit = async (data) => {
        const { title, location, image, description } = data;
        
        const cleanedData = {
            name: title.trim().toLowerCase(),
            location: location.trim().toLowerCase(), 
            image: image,
            description: description
        };

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        try {
            const response = await apiRequest(url, "POST", cleanedData, headers);
            console.log("API Response:", response);
            alert("Nuevo destino creado con éxito!");
            navigate('/login');
        } catch (error) {
            console.error("API Error:", error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <Card className="w-[45.813rem] h-[31.813rem] my-[5rem] border-[color:var(--col-yellow-light)] border-4 border-solid flex flex-col items-center justify-center" headerText="Crear destino">
            <form className="w-full h-[31.813rem] px-[5%] grid grid-rows-[1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr_1fr] gap-0 h-full" onSubmit={handleSubmit(onSubmit)}>

                <div className="row-start-1 col-start-1 row-end-3 col-end-3 mb-1 flex flex-col gap-8">
                    <CommonInput
                        label="Título"
                        id="title"
                        type="text"
                        placeholder="Escribe un título..."
                        error={errors.title?.message}
                        {...register("title", { required: "Título requerido" })}
                    />

                    <CommonInput
                        label="Ubicación"
                        id="location"
                        type="text"
                        placeholder="Escribe una ubicación..."
                        error={errors.location?.message}
                        {...register("location", {
                            required: "Ubicación requerida" })}
                    />

                    <div>
                        <p className='jaldi-bold text-md text-[color:var(--col-blue)] leading-[2.063rem] w-full'>
                            Imagen
                        </p>
                        <div className='flex rounded-[1.25rem] w-[18.75rem] h-[2.5rem] text-[color:var(--col-blue)] bg-[color:var(--col-yellow-light)] text-md pl-[1.063rem] shadow-inset-custom' >
                            <CommonInput
                                label="Imagen"
                                labelClassName="outline-none cursor-pointer"
                                id="image"
                                type="file"
                                placeholder="Sube una imagen..."
                                divInputClassName="w-[3.875rem] rounded-tl-[1.25rem] rounded-bl-[1.25rem] bg-[color:var(--col-blue)] ml-[-1rem] relative block"
                                imgSrc="/public/assets/File-icon.svg"
                                imgClassName='w-[1.876rem] h-[1.5rem] absolute top-[0.5rem] left-[1rem]'
                                inputClassName="hidden"
                                onInput={handleFileChange} 
                                error={errors.image?.message}
                                {...register("image", {
                                    required: "Imagen requerida" })}
                            />
                            <p className='pl-[0.813rem] flex items-center'>
                                {fileName}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row-start-3 col-start-1 row-end-4 col-end-3 flex justify-start items-end pb-[1.688rem]'>
                    <AcceptCancelButtons type="submit" onClickCancel={handleCancelButtonClick}/>
                </div>

                <div className='h-[25.313rem] row-start-1 col-start-3 row-end-4 col-end-5 flex justify-end items-center'>
                    <CommonInput 
                        label="¿Por qué quieres viajar allí?"
                        id="description"
                        type="textarea"
                        placeholder="Aquí estará la explicación del porque quieres viajar allí y no debe pasarse de más de 500 caracteres.." 
                        divInputClassName="h-[25.313rem]" 
                        inputClassName="w-full overflow-auto" 
                        rows={13} 
                        error={errors.password?.message}
                        {...register("password", {
                            required: "Debes escribir una descripción",
                            maxLength: {
                                value: 500,
                                message: "La descripción no debe pasarse de más de 500 caracteres"
                            }
                        })}
                    />
                </div>
            </form>
        </Card>
    );
}

export default CreateEditForm;
