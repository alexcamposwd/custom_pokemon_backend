import React from 'react'
import poke from '../../assets/images/pokemon-1.jpg'
import * as S from './styled'

function History() {
  return (
    <S.ContainerHistory>
      <S.SectionProject>
        <S.HistoryImg data-cy='img-history' src={poke} alt='Pokémon' />
        <S.ProjectTitle data-cy='title-history'>
          A História do Anime Pokémon
        </S.ProjectTitle>
        <S.ProjectText data-cy='text-history'>
          A estreia de Pokémon foi no videogame. Em 27 de fevereiro de 1996,
          foram lançados no Japão os jogos Pokémon Red e Pokémon Green, de
          Satoshi Tajiri e Ken Sugimori, para o Game Boy. A dupla criou um game
          em que 151 monstrinhos das terras do Kanto poderiam ser capturados
          para uma aventura com uma série de batalhas, em que o objetivo final
          do jogador era derrotar os líderes dos ginásios e se tornar num grande
          mestre Pokémon. O conceito veio de Tajiri, que, na infância,
          colecionava pequenos insetos, os quais chamava de monstros de bolso,
          "Pocket monsters". Daí, inclusive, surgiu o nome "Pokémon" para
          denominar os "bichinhos" que protagonizam a narrativa. No mesmo ano da
          estreia do game foi lançado no Japão um jogo de cartas intitulado
          Pokémon Trading Card Game. Apenas dois anos depois do lançamento,
          Pokémon Red e Green chegariam à América do Norte, com algumas mudanças
          gráficas. No ano seguinte, em 1997, devido ao sucesso dos jogos, foi
          feita a versão anime de Pokémon. Na série animada, a história gira em
          torno de Ash, um menino de 10 anos, que inicia a jornada para se
          transformar num mestre Pokémon ao lado de Pikachu. <br />O seriado
          original teve cinco temporadas e deu origem a mais 18 temporadas de
          spin-off, além de filmes e especiais de tevê. Nos games, Pokémon
          também foi "evoluindo", passando a ter outras versões, e ainda uma
          nova geração Pokémon Gold e Silver, lançados em 1999 para o Game Boy
          Color. Em 2002, os games ganharam uma terceira geração, Pokémon Ruby e
          Sapphire. A cada nova geração novos pokémons eram incorporados à
          franquia. <br /> Após um período longe do auge, Pokémon voltou aos
          holofotes em 2016 com a chegada do
          <span> Pokémon GO para os dispositivos iOS e Android</span>. O
          joguinho movimentou os fãs antigos e angariou novos, em uma jornada
          que o próprio jogador caçava os pokémons usando o sistema de GPS do
          smartphone e uma tecnologia de realidade aumentada. Pokemon Go já se
          transformou simplesmente no maior jogo móvel da história dos EUA. Em
          2019, chegou aos cinemas a
          <span> versão live-action Pokémon: Detetive Pikachu</span>, baseada no
          jogo homônimo, em que Pikachu é detetive. <br />
          E, como o próprio encerramento de cada episódio do anime diz:
          <span> a jornada continua!</span>
        </S.ProjectText>
      </S.SectionProject>
    </S.ContainerHistory>
  )
}

export default History
