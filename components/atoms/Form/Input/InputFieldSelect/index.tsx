import * as S from "./styles";

import { ComponentProps, forwardRef } from "react";

interface InputFieldSelectProps extends ComponentProps<"select"> {
  helperText?: string;
  optionsList: { key: number; label: string; value: string }[];
}

export const InputFieldSelect = forwardRef<
  HTMLSelectElement,
  InputFieldSelectProps
>(({ helperText = "Selecione", optionsList, name, ...rest }, ref) => {
  return (
    <S.Select {...rest} name={name} id={name} ref={ref}>
      {helperText && (
        <option value="" disabled selected>
          {helperText}
        </option>
      )}

      {optionsList.map(({ key, label, value }) => (
        <option key={key} value={value}>
          {label}
        </option>
      ))}
    </S.Select>
  );
});
