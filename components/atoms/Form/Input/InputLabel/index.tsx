import * as S from "./styles";

export const InputLabel = ({
  children,
  htmlFor,
  ...rest
}: React.ComponentProps<"label">) => {
  return (
    <S.Label htmlFor={htmlFor} {...rest}>
      {children}
    </S.Label>
  );
};

InputLabel.displayName = "InputLabel";
