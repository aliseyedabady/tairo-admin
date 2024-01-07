import { FormProps } from "../../types/form";
import FormWrapper from "./wrapper";

const Form: React.FC<FormProps> = () => {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-[#283252] text-2xl font-semibold">ایجاد کاربر</h2>
        <button>بازگشت</button>
      </div>
      <FormWrapper>
        <p></p>
      </FormWrapper>
    </div>
  );
};

export default Form;
