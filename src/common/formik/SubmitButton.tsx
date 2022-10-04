import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  Ref,
} from "react";
import { useFormikContext } from "formik";

import Button from "common/input/Button";

export default forwardRef(function SubmitButton(
  {
    disabled,
    ...props
  }: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  ref: Ref<HTMLButtonElement>,
) {
  const { isSubmitting, isValid } = useFormikContext();

  return (
    <Button
      type="submit"
      disabled={isSubmitting || !isValid || disabled}
      {...props}
      ref={ref}
    />
  );
});
