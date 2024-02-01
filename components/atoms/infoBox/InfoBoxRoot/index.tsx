import * as S from "./styles";

export const InfoBoxRoot = ({ children }: React.ComponentProps<"div">) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
