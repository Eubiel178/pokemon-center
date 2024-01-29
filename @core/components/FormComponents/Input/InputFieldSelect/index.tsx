import * as S from "./styles";

import { ComponentProps, forwardRef } from "react";

interface InputFieldSelectProps extends ComponentProps<"select"> {
  helperText?: string;
  optionsList: { key: number; label: string; value: string }[];
}

export const InputFieldSelect = forwardRef<
  HTMLSelectElement,
  InputFieldSelectProps
>(({ helperText = "Selecione", optionsList, ...rest }, ref) => {
  return (
    <S.Select ref={ref} {...rest}>
      <option value="" disabled selected>
        {helperText}
      </option>

      {optionsList.map(({ key, label, value }) => (
        <option key={key} value={value}>
          {label}
        </option>
      ))}
    </S.Select>
  );
});
