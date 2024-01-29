import styled, { css } from "styled-components";
import { VariantsProps } from ".";

export const Container = styled.button<VariantsProps>`
  ${({ width, font, border, background }) => css`
    width: ${width};

    background-color: ${background};
    font-size: ${font?.size}rem;
    font-weight: ${font?.weight};
    color: ${font?.color};

    border: ${border?.type} ${border?.width}rem ${border?.color};
    border-radius: ${border?.rounded}rem;

    padding: 0.625rem;
  `}
`;
