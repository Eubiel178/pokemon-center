import * as S from "./styles";
import { useInputRootContext } from "@/providers/InputRootProvider";

export const InputErrorText = ({}: React.ComponentProps<"p">) => {
  const { sharedProps } = useInputRootContext();
  const thereIsError = sharedProps?.error && true;

  return <>{thereIsError && <S.Text>{sharedProps.error}</S.Text>}</>;
};

InputErrorText.displayName = "InputErrorText";
