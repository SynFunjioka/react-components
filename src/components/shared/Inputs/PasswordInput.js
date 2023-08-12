import React, { useState } from "react";
import PropTypes from "prop-types";

const PasswordInput = function (props) {
    const { value: pValue, className, onChange, type, ...rest } = props;

    const [inputValue, setInputValue] = useState(pValue);
    const [showingPassword, setShowingPassword] = useState(false);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };

    const toggleShowingPassword = () => {
        setShowingPassword(!showingPassword);
    };

    return (
        <div className="input-password">
            <input
                type={showingPassword ? "text" : "password"}
                value={inputValue}
                className={`input ${className}`}
                onChange={handleInputChange}
                {...rest}
            />
            <div className="input-password__actions">
                <button onClick={toggleShowingPassword} type="button">
                    <i
                        className={`fa-regular fa-eye${showingPassword ? "" : "-slash"}`}
                    ></i>
                </button>
            </div>
        </div>
    );
};

PasswordInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
};

PasswordInput.defaultProps = {
    className: "",
    type: "text",
    required: false,
    onClick: () => { }
};

export default PasswordInput;
