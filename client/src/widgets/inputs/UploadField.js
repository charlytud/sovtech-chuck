import React from "react";

const UploadField = ({
  type,
  name,
  placeholder,
  value,
  error,
  handleOnChange,
  handleOnBlur,  
  handleOnFocus,
  uploadClass,
  id
}) => {
  return (
    <div className={uploadClass}>
      <label htmlFor={ id }>Upload { placeholder }</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        id={id}
        accept=".doc, .docx, .jpg, .jpeg, .png, .pdf"
      />
      {error && <div className="invalid">{ error }</div>}
    </div>
  );
};

export default UploadField;
