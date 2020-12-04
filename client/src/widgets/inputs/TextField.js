import React from "react";

const TextField = ({
  name,
  placeholder,
  value,
  error,
  type,
  handleOnFocus,
  handleOnChange,
  handleOnBlur,
  textFieldClass
}) => {
  return (
    <div>
      <input
        type={type}
        className={textFieldClass}
        placeholder={placeholder}
        name={name}
        value={value}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />

      {error && <div className="invalid">{ error }</div>}
    </div>
  );
};

export default TextField;
