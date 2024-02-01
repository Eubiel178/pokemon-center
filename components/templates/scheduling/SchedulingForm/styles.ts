import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375rem;

  padding: 1.875rem 0 3.75rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.1875rem;
`;

export const Title = styled.h3`
  color: #1d1d1d;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const Form = styled.form`
  max-width: 31.5625rem;
  width: 100%;
`;

export const PersonalInfo = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const TeamRegistration = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 5.9375rem 0 1.875rem;
`;

export const TeamRegistrationHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  font-size: 0.75rem;
`;

export const TeamRegistrationTitle = styled.h4`
  color: #1d1d1d;
  font-weight: 700;
`;

export const TeamRegistrationText = styled.p`
  color: #747474;
  font-weight: 500;
`;

export const TeamRegistrationFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
`;

export const AppointmentDate = styled.fieldset`
  display: flex;
  gap: 1rem;
`;

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

export const TotalPrice = styled(Title)`
  text-align: left;
`;
