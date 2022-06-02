import React from 'react'
import * as S from './styled'

function About() {
  return (
    <S.ContainerAbout>
      <S.SectionProject data-cy='project-poke'>
        <S.ProjectTitle>Proposta: Custom Pokedex</S.ProjectTitle>
        <S.ProjectText>
          Este pojeto foi executado para estudos e prática das tecnologias
          aplicadas.
        </S.ProjectText>
        <S.ProjectText>
          <li>
            <p>
              O estudo é baseado na execução de Pokedex e um Custom Pokémon
              utilizando:
            </p>
          </li>
          <li>
            <p>Docker, React.js, Typescript, Node.js, MongoDB, Cypress, etc.</p>
          </li>
          <li>
            <p>A aplicação é separada em duas atividades:</p>
          </li>
          <li>
            <p>A aplicação é separada em duas atividades:</p>
          </li>
          <li>
            <p>
              - 1º é listagem de Pokémons da api pública pokeapi.co com página
              de detalhes;
            </p>
          </li>
          <li>
            <p>
              - 2º é aonde o usuário poderá personalizar seus Pokémons,
              possibilitando criar e editar Pokémons. Também com imagem e página
              de detalhes.
            </p>
          </li>
        </S.ProjectText>
        <S.ProjectText>
          <S.ProjectText>
            <li>
              <p>Tecnologias utilizadas no frontend:</p>
            </li>
          </S.ProjectText>
          <li>
            <p>- React.</p>
          </li>
          <li>
            <p>- React.lazy e Suspense</p>
          </li>
          <li>
            <p>- Manipulação de estados com Context.</p>
          </li>
          <li>
            <p>- Manipulaçãode rotas com React router V6.</p>
          </li>
          <li>
            <p>- Consumo api com React e axios.</p>
          </li>
          <li>
            <p>- Styled Components.</p>
          </li>
          <li>
            <p>- Eslint e Prettier</p>
          </li>
          <li>
            <p>
              - Testes do frontend com Cypress e relatórios com MochAwesome.
            </p>
          </li>
          <S.ProjectText>
            <li>
              <p>Tecnologias utilizadas no backend:</p>
            </li>
          </S.ProjectText>
          <li>
            <p>- Api request GET, POST, PUT, DELETE;</p>
          </li>
          <li>
            <p>- Aplicação criada com Nodejs e Typescript;</p>
          </li>
          <li>
            <p>- Banco de dados utilizado foi MongoDB Atlas (online);</p>
          </li>
          <li>
            <p>- Utilizando Express e Mongoose;</p>
          </li>
          <li>
            <p>- Testes da api com Cypress e relatórios com MochAwesome.</p>
          </li>
        </S.ProjectText>
      </S.SectionProject>
      <S.SectionProject data-cy='autor-poke'>
        <S.DevInfo>
          <S.ProjectTitle>Autor: Alex Campos</S.ProjectTitle>
          <S.ProjectText>
            Sou formado em Processamento de Dados e venho me atualizando dia a
            dia com objetivo de me tornar um desenvolvedor web full stack.
          </S.ProjectText>
          <S.DevStacks>
            <h3>Stacks:</h3>
            <li>
              <p>html</p>
              <p>css</p>
              <p>javascript</p>
              <p>typescript</p>
              <p>nodeJS</p>
              <p>react</p>
              <p>vue</p>
              <p>sass</p>
              <p>docker</p>
              <p>mongodb</p>
              <p>postgres</p>
              <p>cypress</p>
              <p>styled-components</p>
              <p>docker-compose</p>
            </li>
          </S.DevStacks>
          <S.ProjectTitle>
            GitHub:
            <a
              href='https://github.com/alexcamposwd'
              target='_blank'
              rel='noreferrer'
              data-cy='git_autor'
            >
              github.com/alexcamposwd
            </a>
          </S.ProjectTitle>
        </S.DevInfo>
      </S.SectionProject>
    </S.ContainerAbout>
  )
}

export default About
