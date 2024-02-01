import * as S from "./styles";

import { ComponentProps, forwardRef } from "react";

export const InputField = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ type = "text", name, placeholder, ...rest }, ref) => {
    return (
      <S.Input
        {...rest}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
    );
  }
);
