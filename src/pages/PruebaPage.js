import { useState } from "react";

//* Components
import { Button } from "../components/shared";
import { InputGroup } from "../components/layout";

//* Utils
import { isEmail, required, isMinLength } from "../utils/formValidator";


function PruebaPage() {

    const [_formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [_formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [_isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));

        if (!_isSubmitted) return false;

        switch (field) {
            case "name":
                return value.trim() === "";

            case "email":
                return !isEmail(value);

            default:
                return false;
        }
    };

    const handleSubmit = (event) => {
        console.log(event);

        event.preventDefault();
        setIsSubmitted(true);

        if (isFormValid()) {
            console.log("Correct submit");
        } else {
            console.log("Error, can't submit");
        }
    };

    const isFormValid = () => {
        const errors = {};

        if (_formData.name.trim() === "") {
            errors.name = "El nombre es obligatorio";
        }

        if (!isEmail(_formData.email)) {
            errors.email = "El correo electrónico no es válido";
        }

        setFormErrors(errors);
        console.log(_formData);
        console.log(errors);

        return Object.keys(errors).length === 0;
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className={_isSubmitted ? "submitted" : ""}>
                <legend>Pruebas</legend>

                {/* INPUT NOMBRE*/}
                <InputGroup
                    label="Nombre"
                    value={_formData.name}
                    onChange={(value) => handleInputChange("name", value)}
                    errorMessage={
                        _isSubmitted || _formErrors.name ? _formErrors.name : ""
                    }
                    hasError={_formData.name.trim() === ""}
                    type="text"
                    placeholder="Ingresa tu nombre"
                    required
                />

                {/* INPUT EMAIL*/}
                <InputGroup
                    label="Email"
                    value={_formData.email}
                    onChange={(value) => handleInputChange("email", value)}
                    errorMessage={
                        _isSubmitted || _formErrors.email ? _formErrors.email : ""
                    }
                    hasError={!isEmail(_formData.email)}
                    type="text"
                    placeholder="Ingresa tu email"
                    required
                />

                {/* INPUT PASSWORD*/}
                <InputGroup
                    label="Password"
                    value={_formData.password}
                    onChange={(value) => handleInputChange("password", value)}
                    errorMessage={
                        _isSubmitted || _formErrors.password ? _formErrors.password : ""
                    }
                    hasError={!isEmail(_formData.password)}
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    required
                />

                <Button type="submit" typeClass="primary">
                    Subir
                </Button>
            </form>
        </div>
    );
}

export default PruebaPage;
