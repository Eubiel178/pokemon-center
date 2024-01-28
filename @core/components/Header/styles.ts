import Image from "next/image";
import styled, { keyframes } from "styled-components";

const extendAnimation = keyframes`
  from {
    width: 13.75rem;
  }

  to {
    width: 13.75rem;
  }
`;

const retractAnimation = keyframes`
  from {
    width: 13.75rem;
  }
  
  to {
    width: 3.125rem;
  }
`;

export const Container = styled.header`
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: var(--content-width);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  padding-left: 0.75rem;

  border-radius: 3.125rem;
  background-color: ${(props) => props.theme.colors.primary};

  height: 3.8125rem;
  width: 3.125rem;

  overflow: hidden;
  transition: width 0.5s ease-in-out;
  animation: ${extendAnimation} 5s, ${retractAnimation} 0.5s 5s;

  &:hover {
    width: 13.75rem;
  }
`;

export const Logo = styled(Image)`
  width: 2.3125rem;
  height: 2.125rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;

  a {
    text-decoration: none;
    color: #fff;
  }
`;
