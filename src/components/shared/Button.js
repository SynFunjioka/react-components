import React from "react";
import PropTypes from "prop-types";

const Button = function (props) {
    const { children, typeClass, onClick, isDisabled } = props;

    return (
        <button
            className={`btn ${typeClass} ${isDisabled ? "disabled" : ""}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    typeClass: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit"]),
    isDisabled: PropTypes.bool,
    class: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    className: "",
    type: "submit",
    onClick: () => { }
};

export default Button;
