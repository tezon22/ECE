import React from "react";

const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <div variant={variant} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </div>
  );
};

export default ErrorMessage;
