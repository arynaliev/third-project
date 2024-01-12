import React from "react";
import { makeUpperCase } from "../utilities/helpers";

export const CustomButton = (props) => {
  return (
    <button onClick={props.onClickHandler}>{makeUpperCase(props.text)}</button>
  );
};

// export default CustomButton;
