import React from 'react'
import * as S from './styled'

function About() {
  return (
    <S.ContainerAbout>
      <S.SectionProject data-cy='project-poke'>
        <S.ProjectTitle>Proposta: Pokedex</S.ProjectTitle>
        <S.ProjectText>
          Desafio proposto para processo seletivo da Provu:
        </S.ProjectText>
        <S.ProjectText>
          <li>
            <p>
              O desafio consiste no desenvolvimento de uma aplicação em React
              para apresentar visualmente as informações da api pokeapi.co ou
              similar e para as imagens da api pokemondb.net ou similar.
            </p>
            <p>
              Foi oferecido uma ideia inicial com duas páginas e alguns
              elementos, porém foi permitido aos desenvolvedores a liberdade
              para criar novo layout e implementar novos elementos.
            </p>
          </li>
        </S.ProjectText>
        <S.ProjectSubTitle>Minha Proposta</S.ProjectSubTitle>
        <S.ProjectText>
          <li>
            <p>
              Criei uma página de capa com imagem ilustrativa do proposito da
              app.
            </p>
            <p>
              Criei uma página com um resumo da história do Pokémon do início
              aos dias atuais.
            </p>
            <p>
              Inseri a logomarca da Provu evidenciando o patrocínio do desafio.
            </p>
            <p>
              Implementei o loading para informar o usuário que a página esta
              carregando.
            </p>
            <p>
              Mantive layout básico da página de cards, mas com diferenças no
              estilo, como no background uniforme, tamanho das imagens, etc.
            </p>
            <p>
              Na página de detalhes, também mantive o layout e modifiquei apenas
              detalhes de estilo.
            </p>
            <p>
              O campo buscar está funcional e inseri um select para o usuario
              interagir com a quantidade de cards visualizados na lista.
            </p>
            <p>Configurei o EsLint e Prettier</p>
            <p>Utilizei React.lazy e React.memo</p>
            <p>Utilizei Styled Components</p>
            <p>Arquivos disponibilizados no GitHub e Deploy no Netlify.</p>
          </li>
        </S.ProjectText>
        <S.ProjectSubTitle>Atualização</S.ProjectSubTitle>
        <S.ProjectText>
          <li>
            <p>Para a atualização, inseri novas features, são elas:</p>
            <p>
              Criei uma guia que leva para um novo elemento de criação de
              Pokémons customizados.
            </p>
            <p>
              O usuário insere nome, url da imagem, dados estatísticos e pronto,
              novo Pokémon criado.
            </p>
            <p>
              Todos os novos Pokémons são listados na página da nova feature, no
              padrão do projeto inicial.
            </p>
            <p>Ainda o usuário poderá editar e deletar seus Pokémons.</p>
            <p>
              Esta nova funcionalidade esta conectada a API de armazenamento
              criada exclusivamente para esta função, criada com NodeJS,
              Typescript, Express, Axios e Mongoose.
            </p>
            <p>Também novas tecnologias foram utilizadas:</p>
            <p>
              A principal delas ficou por conta da utilização do Context Api
            </p>
          </li>
        </S.ProjectText>
      </S.SectionProject>
      <S.SectionProject data-cy='autor-poke'>
        <S.DevInfo>
          <S.ProjectTitle>Autor: Alex Campos</S.ProjectTitle>
          <S.ProjectText>
            Sou formado em Processamento de Dados e venho me atualizando dia a
            dia com objetivo de me tornar um devensolvedor web full stack.
          </S.ProjectText>
          <S.DevStacks>
            <h3>Stacks:</h3>
            <li>
              <p>html</p>
              <p>css</p>
              <p>javascript</p>
              <p>react</p>
              <p>vue</p>
              <p>nodeJS</p>
              <p>typescript</p>
              <p>mongodb</p>
              <p>postgres</p>
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
