import React from "react";

export const CustomInput = (props) => {
  return (
    <>
      <input type="text" onChange={props.onChangeHandler} />
    </>
  );
};

// export default CustomInput;
