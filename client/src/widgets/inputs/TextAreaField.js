import React from "react";

const TextAreaField = ({
  name,
  placeholder,
  value,
  error,
  info,
  handleOnChange,
  handleOnBlur,
  rows,
  textFieldClass
}) => {
  return (
    <div className="">
      <textarea
        className={textAreaFieldClass}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        rows={rows}
      />
      {info && <small className="">{info}</small>}
      {error && <div className="invalid">{error}</div>}
    </div>
  );
};

export default TextAreaField;
