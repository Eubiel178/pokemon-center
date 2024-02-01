import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: #747474;
  font-size: 0.875rem;
  font-weight: 400;

  border-top: solid 0.0625rem #d5d5d5;
  padding-top: 1.875rem;
  margin: 1.625rem 0 2.1875rem;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoText = styled.p``;

export const InfoFee = styled.p`
  font-size: 0.5rem;
`;

export const TotalPrice = styled.p`
  color: #1d1d1d;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ButtonSubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
`;
