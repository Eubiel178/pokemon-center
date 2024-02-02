import * as S from "./styles";
import { InputRootProvider, SharedProps } from "@/providers/InputRootProvider";

interface InputRootProps extends React.ComponentProps<"div">, SharedProps {}

export const InputRoot = ({
  children,
  sharedProps,
  ...rest
}: InputRootProps) => {
  return (
    <InputRootProvider sharedProps={sharedProps}>
      <S.Container {...rest}>{children}</S.Container>
    </InputRootProvider>
  );
};

InputRoot.displayName = "InputRoot";
