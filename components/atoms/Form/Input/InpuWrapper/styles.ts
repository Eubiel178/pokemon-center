import styled, { css } from "styled-components";
import { VariantsProps } from ".";

export const Container = styled.div<VariantsProps>`
  ${({ direction, gap, justify, align }) => css`
    flex: 1;

    display: flex;
    gap: ${gap}rem;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `}
`;
