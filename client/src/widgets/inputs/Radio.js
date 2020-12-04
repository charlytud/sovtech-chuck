import React from "react";

const Radio = ({
    name,
    placeholder,
    handleOnFocus,
    handleOnChange,
    handleOnBlur,
    checkBoxClass
}) => {
    return (
        <div className={checkBoxClass}>
            <span>{placeholder}</span>
            <ul>
                <li>
                    <label id="male">Male</label>
                    <input
                        htmlFor="male"
                        type="radio"
                        name={name}
                        value="Male"
                        onFocus={handleOnFocus}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                    />
                </li>
                <li>
                    <label id="Female">Female</label>
                    <input
                        htmlFor="female"
                        type="radio"
                        name={name}
                        value="Female"
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Radio;
