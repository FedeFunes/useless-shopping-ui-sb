import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  Ref,
  useCallback,
} from "react";
import { useField, FieldHookConfig } from "formik";

import Input from "common/input/Input";

export default forwardRef(function NumberField(
  props: FieldHookConfig<never> &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  ref: Ref<HTMLInputElement>,
): JSX.Element {
  const [field] = useField(props);

  const handleChange = useCallback(
    (event) => {
      const re = /^.?[0-9]*$/;

      if (
        !Number.isSafeInteger(+event.target.value) ||
        !re.exec(event.target.value)
      )
        return;

      field.onChange?.(event);
      props.onChange?.(event);
    },
    [props.onChange, field.onChange],
  );

  return (
    <Input
      type="tel"
      inputMode="numeric"
      pattern="[0-9]*"
      {...field}
      {...props}
      onChange={handleChange}
      ref={ref}
    />
  );
});
