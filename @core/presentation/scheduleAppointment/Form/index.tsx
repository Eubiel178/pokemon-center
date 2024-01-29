import * as S from "./styles";

import { useReducer, useState } from "react";

import { Button, Input } from "@/@core/components";

export const FormPresentation = () => {
  const [teamList, setTeamList] = useState<number[]>([]);
  const teamListSize = teamList.length;
  const ThereTeam = teamListSize > 0;

  const addTeam = () => {
    if (teamListSize < 6) {
      setTeamList((prevState) => [...prevState, teamListSize + 1]);
    } else {
      alert("Limite de equipes atingido");
    }
  };

  const removeTeam = () => {
    if (teamListSize > 0) {
      const newTeamList = [...teamList];

      setTeamList(newTeamList);
    } else {
      alert("Nenhuma equipe adicionada");
    }
  };

  const regionList = [
    {
      key: 1,
      label: "Kanto",
      value: "Kanto",
    },
  ];
  const cityList = [
    {
      key: 1,
      label: "Pewter City",
      value: "Pewter City",
    },
    {
      key: 2,
      label: "Pallet Town",
      value: "Pallet Town",
    },
    {
      key: 3,
      label: "Veridian City",
      value: "Veridian City",
    },
  ];

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Preencha o formulário abaixo para agendar sua consulta
        </S.Title>

        <S.Form>
          <S.PersonalInfo>
            <Input.Root>
              <Input.Label htmlFor="name">Nome</Input.Label>

              <Input.Wrapper>
                <Input.Field placeholder="Digite seu nome" />
              </Input.Wrapper>

              <Input.HelperText />
            </Input.Root>

            <Input.Root>
              <Input.Label htmlFor="name">Sobrenome</Input.Label>

              <Input.Wrapper>
                <Input.Field placeholder="Digite seu sobrenome" />
              </Input.Wrapper>

              <Input.HelperText />
            </Input.Root>

            <Input.Root>
              <Input.Label htmlFor="name">Região</Input.Label>

              <Input.Wrapper>
                <Input.FieldSelect optionsList={regionList} />
              </Input.Wrapper>

              <Input.HelperText />
            </Input.Root>

            <Input.Root>
              <Input.Label htmlFor="name">Cidade</Input.Label>

              <Input.Wrapper>
                <Input.FieldSelect optionsList={cityList} />
              </Input.Wrapper>

              <Input.HelperText />
            </Input.Root>
          </S.PersonalInfo>

          <S.TeamRegistration>
            <S.TeamRegistrationHeader>
              <S.TeamRegistrationTitle>
                Cadastre seu time
              </S.TeamRegistrationTitle>

              <S.TeamRegistrationText>
                Atendemos até 06 pokémons por vez
              </S.TeamRegistrationText>
            </S.TeamRegistrationHeader>

            <S.TeamRegistrationFields>
              {ThereTeam &&
                teamList.map((team) => (
                  <Input.Root key={team}>
                    <Input.Wrapper direction="row" align="center" gap={2}>
                      <Input.Label htmlFor="pokemonList">
                        Pokémon 0{team}
                      </Input.Label>

                      <Input.FieldSelect
                        helperText="Selecione seu pokémon"
                        optionsList={regionList}
                      />
                    </Input.Wrapper>
                  </Input.Root>
                ))}

              <Button
                type="button"
                onClick={addTeam}
                background="white"
                font={{
                  color: "#1D1D1D",
                  size: 0.75,
                  weight: 700,
                }}
                border={{
                  width: 0.0625,
                  type: "solid",
                  color: "#1D1D1D",
                  rounded: 1.875,
                }}
              >
                Adicionar novo pokémon ao time... {"\u00A0"}+
              </Button>
            </S.TeamRegistrationFields>
          </S.TeamRegistration>

          <S.AppointmentDate>
            <Input.Root>
              <Input.Label htmlFor="schedulingDate">
                Data para Atendimento
              </Input.Label>
              <Input.Wrapper>
                <Input.FieldSelect
                  helperText="Selecione uma data"
                  optionsList={regionList}
                />
              </Input.Wrapper>
            </Input.Root>

            <Input.Root>
              <Input.Label htmlFor="schedulingTime">
                Data para Atendimento
              </Input.Label>
              <Input.Wrapper>
                <Input.FieldSelect
                  helperText="Selecione um horário"
                  optionsList={regionList}
                />
              </Input.Wrapper>
            </Input.Root>
          </S.AppointmentDate>

          <S.Info>
            <S.InfoItem>
              <S.InfoText>Número de pokémons a serem atendidos:</S.InfoText>

              <S.InfoText>01</S.InfoText>
            </S.InfoItem>

            <S.InfoItem>
              <S.InfoText>Atendimento unitário por pokémon:</S.InfoText>

              <S.InfoText>R$ 70,00</S.InfoText>
            </S.InfoItem>

            <S.InfoItem>
              <S.InfoText>Subtotal:</S.InfoText>

              <S.InfoText>R$ 70,00</S.InfoText>
            </S.InfoItem>

            <S.InfoItem>
              <S.InfoText>Taxa geracional*: </S.InfoText>

              <S.InfoText>R$ 2,10</S.InfoText>
            </S.InfoItem>

            <S.InfoFee>
              *adicionamos uma taxa de 3%, multiplicado pelo número da geração
              mais alta do time, com limite de até 30%
            </S.InfoFee>
          </S.Info>

          <S.ButtonSubmitContainer>
            <S.TotalPrice>Valor Total: R$ 72,10</S.TotalPrice>

            <Button>Concluir Agendamento</Button>
          </S.ButtonSubmitContainer>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};
