import * as S from "./styles";

export interface VariantsProps {
  direction?: "row" | "column";
  gap?: number;
  justify?: "flex-start" | "flex-end" | "center" | "space-between";
  align?: "flex-start" | "flex-end" | "center" | "space-between";
}

export const InpuWrapper = ({
  children,
  direction = "column",
  justify = "flex-start",
  align = "flex-start",
  gap = 0,
  ...rest
}: React.ComponentProps<"div"> & VariantsProps) => {
  return (
    <S.Container
      direction={direction}
      gap={gap}
      justify={justify}
      align={align}
      {...rest}
    >
      {children}
    </S.Container>
  );
};
