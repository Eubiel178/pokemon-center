import * as S from "./styles";

import { ComponentProps, forwardRef } from "react";

export const InputField = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ type = "text", name, placeholder, ...rest }, ref) => {
    return (
      <S.Input
        ref={ref}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);
