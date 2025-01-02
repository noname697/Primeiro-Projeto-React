import { livros } from "./dadosUltimosLancamentos.js";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from "../../imagens/livro2.png";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;

  img {
    max-width: 30vw;
  }
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#eb9b00" tamanhoFonte="36px">
        Últimos Lançamentos
      </Titulo>
      ;
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt=""></img>
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Contruindo uma aplicação com a plataforma google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
