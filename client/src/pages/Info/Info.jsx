import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import { api } from '../../services/api'
import * as S from './styled'

function Info() {
  const { name } = useParams()
  const [pokeTypes, setPokeTypes] = useState([])
  const [pokeStats, setPokeStats] = useState([])
  const [nameAbil1, setNameAbil1] = useState('')
  const [nameAbil2, setNameAbil2] = useState('')
  const [urlAbil1, setUrlAbil1] = useState('')
  const [urlAbil2, setUrlAbil2] = useState('')
  const [Ability1, SetAbility1] = useState('')
  const [Ability2, SetAbility2] = useState('')
  const urlName = `https://img.pokemondb.net/artwork/large/${name}.jpg`
  const navigate = useNavigate()

  useEffect(() => {
    api
      .get(`/pokemon/${name}`)
      .then((res) => {
        setPokeTypes(res.data.types)
        setPokeStats(res.data.stats)
        setNameAbil1(res.data.abilities[0].ability.name)
        setNameAbil2(res.data.abilities[1].ability.name)
        setUrlAbil1(res.data.abilities[0].ability.url)
        setUrlAbil2(res.data.abilities[1].ability.url)
      })
      .catch((error) => {
        console.log(error)
      })

    fetch(`${urlAbil1}`)
      .then((res) => res.json())
      .then((data) => {
        SetAbility1(data.effect_entries[0].effect)
      })
      .catch((error) => console.log(error))

    fetch(`${urlAbil2}`)
      .then((res) => res.json())
      .then((data) => {
        SetAbility2(data.effect_entries[1].effect)
      })
      .catch((error) => console.log(error))
  }, [name, urlAbil1, urlAbil2])

  return (
    <S.ContainerInfo>
      <S.InfoTitle>
        <h1 data-cy='title-info'>{name}</h1>
      </S.InfoTitle>
      <S.SectionData>
        <S.FieldData>
          <S.InfoImg>
            <S.ItemImg data-cy='img-info' src={urlName} alt={name} />
          </S.InfoImg>
          <S.InfoTypes>
            {pokeTypes.length > 0 &&
              pokeTypes.map((types) => (
                <S.ItemTypes data-cy='types-info' key={types.slot}>
                  {types.type.name}
                </S.ItemTypes>
              ))}
          </S.InfoTypes>
        </S.FieldData>
        <S.InfoStats>
          {pokeStats.length > 0 &&
            pokeStats.map((stats) => (
              <S.GroupStats key={stats.id}>
                <S.StatsName data-cy='stats-name-info'>
                  {stats.stat.name}
                </S.StatsName>
                <S.Bars data-cy='stats-progress-info'>
                  <ProgressBar percent={stats.base_stat} />
                </S.Bars>
                <S.StatsNum data-cy='stats-num-info'>
                  {stats.base_stat}
                </S.StatsNum>
              </S.GroupStats>
            ))}
        </S.InfoStats>
      </S.SectionData>
      <S.Underline />
      <S.InfoAbilities>
        <S.AbilitiesTitle data-cy='abilities-title-info'>
          Abilities
        </S.AbilitiesTitle>
        <S.GroupAbilities>
          <S.AbilityTitle data-cy='abilities-name-info'>
            {nameAbil1}
          </S.AbilityTitle>
          <S.AbilityText data-cy='abilities-text-info'>
            {Ability1}
          </S.AbilityText>
        </S.GroupAbilities>
        <S.GroupAbilities>
          <S.AbilityTitle data-cy='abilities-name-info'>
            {nameAbil2}
          </S.AbilityTitle>
          <S.AbilityText data-cy='abilities-text-info'>
            {Ability2}
          </S.AbilityText>
        </S.GroupAbilities>
      </S.InfoAbilities>
      <S.Back>
        <S.BtnBack data-cy='btn-back-info' onClick={() => navigate(-1)}>
          back
        </S.BtnBack>
      </S.Back>
    </S.ContainerInfo>
  )
}

export default Info
