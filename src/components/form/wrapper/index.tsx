import React from "react";
import { FormWrapperProps } from "../../../types/form/wrapper";

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return (
    <div className="bg-white p-[3.5rem] rounded-xl border border-[#E3E3E3]">
      {children}
    </div>
  );
};

export default FormWrapper;
