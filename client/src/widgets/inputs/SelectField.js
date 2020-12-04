import React from "react";

const SelectField = ({
     name, 
     info, 
     handleOnFocus,
     handleOnChange,
     handleOnBlur,
     options,
     selectFieldClass
}) => {
  const selectOptions = options.map((option, index) => (
    <option key={ index } value={ option }>
      { option }
    </option>
  ));
  return (
    <div className={ selectFieldClass }>
      <div>{ info && <span className="">{info}</span>}</div>
      <select
        name={name}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      >
        { selectOptions }
      </select>
    </div>
  );
};

export default SelectField;
