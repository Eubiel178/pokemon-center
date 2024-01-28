import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375rem;

  padding: 1.875rem 0 3.75rem;

  color: #000;
`;

export const Title = styled.h3`
  width: 100%;
  max-width: 25.625rem;

  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375rem;

  width: var(--content-width);
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  width: 100%;
  max-width: 25.625rem;
`;

export const CardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  line-height: 140%;
`;

export const CardText = styled.p`
  font-weight: 500;
  line-height: 140%;
`;
