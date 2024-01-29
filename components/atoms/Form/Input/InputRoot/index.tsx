import * as S from "./styles";

export const InputRoot = ({
  children,
  ...rest
}: React.ComponentProps<"div">) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
