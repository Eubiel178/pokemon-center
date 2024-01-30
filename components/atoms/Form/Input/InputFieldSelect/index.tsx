import { SelectOptionInterface } from "@/@core/domain/interfaces/SelectOptionInterface";
import * as S from "./styles";

import { ComponentProps, forwardRef } from "react";

interface InputFieldSelectProps extends ComponentProps<"select"> {
  helperText?: string;
  optionsList: SelectOptionInterface[];
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

      {optionsList.map((element) => (
        <option key={element?.key} value={element?.value}>
          {element?.label}
        </option>
      ))}
    </S.Select>
  );
});
