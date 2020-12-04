import React from "react";

const CheckBox = ({
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
                        type="checkbox"
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
                        type="checkbox"
                        name={name}
                        value="Female"
                        onFocus={handleOnFocus}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                    />
                </li>
            </ul>
        </div>
    );
};

export default CheckBox;
