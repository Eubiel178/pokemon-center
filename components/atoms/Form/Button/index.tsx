import * as S from "./styles";

export interface VariantsProps {
  width?: string;
  font?: {
    size?: number;
    weight?: number;
    color?: string;
  };
  border?: {
    rounded?: number;
    type?: "solid" | "none";
    width?: number;
    color?: string;
  };
  background?: string;
}

interface ButtonProps extends React.ComponentProps<"button">, VariantsProps {
  loading?: boolean;
}

export const Button = ({
  children,
  loading = false,
  width = "fit-content",
  font = {
    size: 0.875,
    weight: 700,
    color: "#fff",
  },
  border = {
    rounded: 1.875,
    type: "none",
    width: 0,
    color: "transparent",
  },
  background,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container
      {...rest}
      width={width}
      border={border}
      background={background}
      font={font}
    >
      {loading ? "Carregando..." : children}
    </S.Container>
  );
};
