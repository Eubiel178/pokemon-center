import * as S from "./styles";

import { ComponentProps, forwardRef } from "react";

export const InputFieldSelect = forwardRef<
  HTMLSelectElement,
  ComponentProps<"select">
>(({ children, name, ...rest }, ref) => {
  return (
    <S.Select {...rest} name={name} id={name} ref={ref}>
      {children}
    </S.Select>
  );
});

InputFieldSelect.displayName = "InputFieldSelect";
