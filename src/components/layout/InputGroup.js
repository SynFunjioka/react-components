import React, { useState } from "react";
import PropTypes from "prop-types";

import Inputs from "../shared/Inputs";

const InputGroup = function (props) {
    const {
        label,
        value: pValue,
        onChange,
        errorMessage,
        hasError,
        valid,
        ...inputProps
    } = props;

    const [_inputValue, setInputValue] = useState(pValue);

    const handleInputChange = (newValue) => {
        setInputValue(newValue);
        onChange(newValue);
    };

    return (
        <div className={`form-control ${hasError ? "error" : ""}`}>
            <label>{label}</label>
            {inputProps.type !== "password" ? (
                <Inputs.Input
                    value={_inputValue}
                    onChange={handleInputChange}
                    {...inputProps}
                />
            ) : (
                <Inputs.PasswordInput
                    value={_inputValue}
                    onChange={handleInputChange}
                    {...inputProps}
                />
            )}
            {hasError && <span className="error-message">{errorMessage}</span>}
        </div>
    );
};

InputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    error: PropTypes.string,
    inputProps: PropTypes.object
};

InputGroup.defaultProps = {
    className: ""
};

export default InputGroup;
