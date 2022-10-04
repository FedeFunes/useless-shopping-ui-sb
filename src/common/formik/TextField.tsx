import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  Ref,
} from "react";
import { useField, FieldHookConfig } from "formik";

import Input from "common/input/Input";

export default forwardRef(function TextField(
  props: FieldHookConfig<never> &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  ref: Ref<HTMLInputElement>,
): JSX.Element {
  const [field] = useField(props);

  return <Input {...field} {...props} ref={ref} />;
});
