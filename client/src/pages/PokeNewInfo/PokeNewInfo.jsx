import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { usePoke } from '../../contexts/PokenewContext'
import * as S from './styled'
import Loading from '../../components/Loading'
import ProgressBar from '../../components/ProgressBar'

function PokeInfo() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getPoke, deletePoke } = usePoke()
  const [pokeInfo, setPokeInfo] = useState()

  useEffect(async () => {
    if (id) {
      const data = await getPoke(id)
      setPokeInfo(data)
    }
  }, [id, getPoke])

  const handleDelete = () => {
    deletePoke(id)
    navigate('/list')
    toast.success('Pokémon deletado com sucesso!')
  }

  if (!pokeInfo) {
    return <Loading />
  }

  return (
    <S.ContainerInfo>
      <S.InfoTitle>
        <h1 data-cy='title-pokeinfo'>{pokeInfo.name}</h1>
      </S.InfoTitle>
      <S.SectionData>
        <S.FieldData>
          <S.InfoImg>
            <S.ItemImg
              data-cy='img-pokeinfo'
              src={pokeInfo.url}
              alt={pokeInfo.name}
            />
          </S.InfoImg>
          <S.InfoTypes>
            <S.ItemTypes>
              <p data-cy='types-pokeinfo'>{pokeInfo.types.type1}</p>
            </S.ItemTypes>
            <S.ItemTypes>
              <p data-cy='types-pokeinfo'>{pokeInfo.types.type2}</p>
            </S.ItemTypes>
          </S.InfoTypes>
        </S.FieldData>
        <S.InfoStats>
          <S.GroupStats>
            <p data-cy='lbl-stats-pokeinfo'>HP:</p>
            <S.Bars>
              <ProgressBar
                data-cy='progress-pokeinfo'
                percent={pokeInfo.stats.hp}
              />
            </S.Bars>
            <S.StatsName data-cy='stats-pokeinfo'>
              {pokeInfo.stats.hp}
            </S.StatsName>
          </S.GroupStats>
          <S.GroupStats>
            <p data-cy='lbl-stats-pokeinfo'>Attack:</p>
            <S.Bars>
              <ProgressBar
                data-cy='progress-pokeinfo'
                percent={pokeInfo.stats.attack}
              />
            </S.Bars>
            <S.StatsName data-cy='stats-pokeinfo'>
              {pokeInfo.stats.attack}
            </S.StatsName>
          </S.GroupStats>
          <S.GroupStats>
            <p data-cy='lbl-stats-pokeinfo'>Defense:</p>
            <S.Bars>
              <ProgressBar
                data-cy='progress-pokeinfo'
                percent={pokeInfo.stats.defense}
              />
            </S.Bars>
            <S.StatsName data-cy='stats-pokeinfo'>
              {pokeInfo.stats.defense}
            </S.StatsName>
          </S.GroupStats>
          <S.GroupStats>
            <p data-cy='lbl-stats-pokeinfo'>Special Attack:</p>
            <S.Bars>
              <ProgressBar
                data-cy='progress-pokeinfo'
                percent={pokeInfo.stats.specAtc}
              />
            </S.Bars>
            <S.StatsName data-cy='stats-pokeinfo'>
              {pokeInfo.stats.specAtc}
            </S.StatsName>
          </S.GroupStats>
          <S.GroupStats>
            <p data-cy='lbl-stats-pokeinfo'>Special Defesa:</p>
            <S.Bars>
              <ProgressBar
                data-cy='progress-pokeinfo'
                percent={pokeInfo.stats.specDef}
              />
            </S.Bars>
            <S.StatsName data-cy='stats-pokeinfo'>
              {pokeInfo.stats.specDef}
            </S.StatsName>
          </S.GroupStats>
          <S.GroupStats>
            <p data-cy='lbl-stats-pokeinfo'>Speed:</p>
            <S.Bars>
              <ProgressBar
                data-cy='progress-pokeinfo'
                percent={pokeInfo.stats.speed}
              />
            </S.Bars>
            <S.StatsName data-cy='stats-pokeinfo'>
              {pokeInfo.stats.speed}
            </S.StatsName>
          </S.GroupStats>
        </S.InfoStats>
      </S.SectionData>
      <S.Underline />
      <S.InfoAbilities>
        <S.AbilitiesTitle data-cy='title-abilities-pokeinfo'>
          Abilities
        </S.AbilitiesTitle>
        <S.GroupAbilities>
          <S.AbilityTitle data-cy='title-ability-pokeinfo'>
            {pokeInfo.abilities.ability1.title1}
          </S.AbilityTitle>
          <S.AbilityText data-cy='descr-abilities-pokeinfo'>
            {pokeInfo.abilities.ability1.description1}
          </S.AbilityText>
        </S.GroupAbilities>
        <S.GroupAbilities>
          <S.AbilityTitle data-cy='title-ability-pokeinfo'>
            {pokeInfo.abilities.ability2.title2}
          </S.AbilityTitle>
          <S.AbilityText data-cy='descr-abilities-pokeinfo'>
            {pokeInfo.abilities.ability2.description2}
          </S.AbilityText>
        </S.GroupAbilities>
      </S.InfoAbilities>
      <S.FieldButtons>
        <S.Button
          data-cy='btn-update-pokeinfo'
          type='button'
          onClick={() => navigate(`/edit/${id}`)}
        >
          Update
        </S.Button>
        <S.Button
          data-cy='btn-delete-pokeinfo'
          type='button'
          onClick={() => handleDelete(id)}
          disabled
        >
          Delete
        </S.Button>
        <S.Button
          data-cy='btn-back-pokeinfo'
          type='button'
          onClick={() => navigate('/list')}
        >
          Back
        </S.Button>
      </S.FieldButtons>
    </S.ContainerInfo>
  )
}

export default PokeInfo
