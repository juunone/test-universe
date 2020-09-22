import React from "react";
import PropTypes from "prop-types";

export const Input = ({ placeholder, color, value, onChange, ...rest }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={color && { color }}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  placeholder: "투두리스트 입력",
  color: "black",
  value: "",
  onChange: undefined
};
