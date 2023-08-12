import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = function (props) {
    const { value: pValue, className, onChange, ...rest } = props;

    const [inputValue, setInputValue] = useState(pValue);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };

    return (
        <input
            value={inputValue}
            className={`input ${className}`}
            onChange={handleInputChange}
            {...rest}
        />
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
};

Input.defaultProps = {
    className: "",
    type: "text",
    required: false,
    onClick: () => { }
};

export default Input;
