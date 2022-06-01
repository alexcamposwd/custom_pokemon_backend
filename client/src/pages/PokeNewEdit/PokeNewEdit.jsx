/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { usePoke } from '../../contexts/PokenewContext'
import * as S from './styled'

function PokeEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getPoke, updatePoke } = usePoke()
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm()

  useEffect(async () => {
    if (id) {
      const data = await getPoke(id)
      reset(data)
    }
  }, [reset])

  const upPoke = (value) => {
    updatePoke(id, value)
    navigate(`/pokenew/${id}`)
    toast.success('Pokémon atualizado com sucesso!')
  }

  return (
    <S.MainContainer>
      <S.CardPoke data-cy='wapper-pokeedit'>
        <h1 data-cy='title-pokeedit'>Criar Pokémon</h1>
        <S.LinePoke />

        <S.CardBodyPoke>
          <form onSubmit={handleSubmit(upPoke)}>
            <S.FieldsInfo>
              <label data-cy='lbl-name-pokeedit' htmlFor='name'>
                Name:
              </label>
              <input
                type='text'
                data-cy='inp-name-pokeedit'
                name='name'
                {...register('name', { required: 'Name is Required' })}
                onKeyUp={() => {
                  trigger('name')
                }}
              />
              {errors?.name && <span>{errors.name.message}</span>}
              <label data-cy='lbl-url-pokeedit' htmlFor='url'>
                Url:
              </label>
              <textarea
                type='text'
                data-cy='inp-url-pokeedit'
                name='url'
                {...register('url', { required: 'Image is Required' })}
                onKeyUp={() => {
                  trigger('url')
                }}
              />
              {errors?.url && <span>{errors.url.message}</span>}
            </S.FieldsInfo>
            <S.FieldsTypes>
              <S.WrapperFieldsTypes>
                <div>
                  <label data-cy='lbl-type1-pokeedit' htmlFor='type1'>
                    Type1:
                  </label>
                  <input
                    type='text'
                    data-cy='inp-type1-pokeedit'
                    name='type1'
                    {...register('types.type1', {
                      required: 'Type is Required',
                    })}
                    onKeyUp={() => {
                      trigger('type1')
                    }}
                  />
                </div>
                {errors?.type1 && <span>{errors.type1.message}</span>}
              </S.WrapperFieldsTypes>
              <S.WrapperFieldsTypes>
                <div>
                  <label data-cy='lbl-type2-pokeedit' htmlFor='type2'>
                    Tipe2:
                  </label>
                  <input
                    type='text'
                    data-cy='inp-type2-pokeedit'
                    name='type2'
                    {...register('types.type2', {
                      required: 'Type is Required',
                    })}
                    onKeyUp={() => {
                      trigger('type2')
                    }}
                  />
                </div>
                {errors?.type2 && <span>{errors.type2.message}</span>}
              </S.WrapperFieldsTypes>
            </S.FieldsTypes>
            <S.FieldsStats>
              <S.WrapperFieldsStats>
                <S.StatsItems>
                  <div>
                    <label data-cy='lbl-hp-pokeedit' htmlFor='hp'>
                      HP:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-hp-pokeedit'
                      name='hp'
                      {...register('hp', {
                        required: 'HP is Required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Only numbers are allowed',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('hp')
                      }}
                    />

                    <label data-cy='lbl-attack-pokeedit' htmlFor='attack'>
                      Attack:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-attack-pokeedit'
                      name='attack'
                      {...register('stats.attack', {
                        required: 'Attack is Required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Only numbers are allowed',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('attack')
                      }}
                    />

                    <label data-cy='lbl-defense-pokeedit' htmlFor='defense'>
                      Defense:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-defense-pokeedit'
                      name='defense'
                      {...register('stats.defense', {
                        required: 'Defense is Required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Only numbers are allowed',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('defense')
                      }}
                    />
                  </div>
                  {errors?.hp && <span>{errors.hp.message}</span>}
                  {errors?.attack && <span>{errors.attack.message}</span>}
                  {errors?.defense && <span>{errors.defense.message}</span>}
                </S.StatsItems>
              </S.WrapperFieldsStats>
              <S.WrapperFieldsStats>
                <S.StatsItems>
                  <div>
                    <label data-cy='lbl-specAtc-pokeedit' htmlFor='specAtc'>
                      SpecAtc:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-specAtc-pokeedit'
                      name='specAtc'
                      {...register('stats.specAtc', {
                        required: 'Special Attack is Required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Only numbers are allowed',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('specAtc')
                      }}
                    />

                    <label data-cy='lbl-specDef-pokeedit' htmlFor='specDef'>
                      SpecDef:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-specDef-pokeedit'
                      name='specDef'
                      {...register('stats.specDef', {
                        required: 'Special Defense is Required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Only numbers are allowed',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('specDef')
                      }}
                    />

                    <label data-cy='lbl-speed-pokeedit' htmlFor='speed'>
                      Speed:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-speed-pokeedit'
                      name='speed'
                      {...register('stats.speed', {
                        required: 'Speed is Required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Only numbers are allowed',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('speed')
                      }}
                    />
                  </div>
                  {errors?.specAtc && <span>{errors.specAtc.message}</span>}
                  {errors?.specDef && <span>{errors.specDef.message}</span>}
                  {errors?.speed && <span>{errors.speed.message}</span>}
                </S.StatsItems>
              </S.WrapperFieldsStats>
            </S.FieldsStats>
            <S.FieldsAbilities>
              <label data-cy='lbl-title1-pokeedit' htmlFor='title1'>
                Title1:
              </label>
              <input
                type='text'
                data-cy='inp-title1-pokeedit'
                name='title1'
                {...register('abilities.ability1.title1', {
                  required: 'Type is Required',
                })}
                onKeyUp={() => {
                  trigger('title1')
                }}
              />
              {errors.title1 && <p>O tipo é obrigatório</p>}
              <label data-cy='lbl-descr1-pokeedit' htmlFor='description1'>
                Description1:
              </label>
              <textarea
                type='text'
                data-cy='inp-descr1-pokeedit'
                name='description1'
                {...register('abilities.ability1.description1', {
                  required: 'Type is Required',
                })}
                onKeyUp={() => {
                  trigger('description1')
                }}
              />
              {errors?.description1 && <span>{errors.title1.message}</span>}
              <label data-cy='lbl-title2-pokeedit' htmlFor='title2'>
                Title2:
              </label>
              <input
                type='text'
                data-cy='inp-title2-pokeedit'
                name='title2'
                {...register('abilities.ability2.title2', {
                  required: 'Type is Required',
                })}
                onKeyUp={() => {
                  trigger('title2')
                }}
              />
              {errors?.title2 && <span>{errors.title2.message}</span>}
              <label data-cy='lbl-descr2-pokeedit' htmlFor='description2'>
                Description2:
              </label>
              <textarea
                type='text'
                data-cy='inp-descr2-pokeedit'
                name='description2'
                {...register('abilities.ability2.description2', {
                  required: 'Type is Required',
                })}
                onKeyUp={() => {
                  trigger('description2')
                }}
              />
              {errors?.description2 && (
                <span>{errors.description2.message}</span>
              )}
            </S.FieldsAbilities>
            <S.FildButtons>
              <S.Button data-cy='btn-save-pokeedit' type='submit'>
                Save
              </S.Button>
              <S.Button
                data-cy='btn-back-pokeedit'
                type='button'
                onClick={() => navigate(`/pokenew/${id}`)}
              >
                Back
              </S.Button>
            </S.FildButtons>
          </form>
        </S.CardBodyPoke>
      </S.CardPoke>
    </S.MainContainer>
  )
}

export default PokeEdit
