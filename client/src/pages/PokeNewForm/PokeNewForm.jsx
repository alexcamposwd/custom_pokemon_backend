/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as S from './styled'
import { usePoke } from '../../contexts/PokenewContext'

function PokeForm() {
  const navigate = useNavigate()
  const { createPoke } = usePoke()
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm()

  const addPoke = (value) => {
    createPoke(value)
    navigate('/list')
  }

  return (
    <S.MainContainer>
      <S.CardPoke data-cy='wapper-pokenew'>
        <h1 data-cy='title-pokenew'>Create Pokémon</h1>
        <S.LinePoke />

        <S.CardBodyPoke>
          <form onSubmit={handleSubmit(addPoke)}>
            <S.FieldsInfo>
              <label data-cy='lbl-name-pokenew' htmlFor='name'>
                Name:
              </label>
              <input
                type='text'
                data-cy='inp-name-pokenew'
                name='name'
                {...register('name', { required: 'Name is Required' })}
                onKeyUp={() => {
                  trigger('name')
                }}
              />
              {errors?.name && (
                <span data-cy='error-name-pokenew'>{errors.name.message}</span>
              )}
              <label data-cy='lbl-url-pokenew' htmlFor='url'>
                Url:
              </label>
              <textarea
                type='text'
                data-cy='inp-url-pokenew'
                name='url'
                {...register('url', { required: 'Image is Required' })}
                onKeyUp={() => {
                  trigger('url')
                }}
              />
              {errors?.url && (
                <span data-cy='error-url-pokenew'>{errors.url.message}</span>
              )}
            </S.FieldsInfo>
            <S.FieldsTypes>
              <S.WrapperFieldsTypes>
                <div>
                  <label data-cy='lbl-type1-pokenew' htmlFor='type1'>
                    Type1:
                  </label>
                  <input
                    type='text'
                    data-cy='inp-type1-pokenew'
                    name='type1'
                    {...register('type1', { required: 'Type is Required' })}
                    onKeyUp={() => {
                      trigger('type1')
                    }}
                  />
                </div>
                {errors?.type1 && (
                  <span data-cy='error-type-pokenew'>
                    {errors.type1.message}
                  </span>
                )}
              </S.WrapperFieldsTypes>
              <S.WrapperFieldsTypes>
                <div>
                  <label data-cy='lbl-type2-pokenew' htmlFor='type2'>
                    Tipe2:
                  </label>
                  <input
                    type='text'
                    data-cy='inp-type2-pokenew'
                    name='type2'
                    {...register('type2', { required: 'Type is Required' })}
                    onKeyUp={() => {
                      trigger('type2')
                    }}
                  />
                </div>
                {errors?.type2 && (
                  <span data-cy='error-type-pokenew'>
                    {errors.type2.message}
                  </span>
                )}
              </S.WrapperFieldsTypes>
            </S.FieldsTypes>
            <S.FieldsStats>
              <S.WrapperFieldsStats>
                <S.StatsItems>
                  <div>
                    <label data-cy='lbl-hp-pokenew' htmlFor='hp'>
                      HP:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-hp-pokenew'
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
                    <label data-cy='lbl-attack-pokenew' htmlFor='attack'>
                      Attack:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-attack-pokenew'
                      name='attack'
                      {...register('attack', {
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
                    <label data-cy='lbl-defense-pokenew' htmlFor='defense'>
                      Defense:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-defense-pokenew'
                      name='defense'
                      {...register('defense', {
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
                  {errors?.hp && (
                    <span data-cy='error-stats-pokenew'>
                      {errors.hp.message}
                    </span>
                  )}
                  {errors?.attack && (
                    <span data-cy='error-stats-pokenew'>
                      {errors.attack.message}
                    </span>
                  )}
                  {errors?.defense && (
                    <span data-cy='error-stats-pokenew'>
                      {errors.defense.message}
                    </span>
                  )}
                </S.StatsItems>
              </S.WrapperFieldsStats>
              <S.WrapperFieldsStats>
                <S.StatsItems>
                  <div>
                    <label data-cy='lbl-specAtc-pokenew' htmlFor='specAtc'>
                      SpecAtc:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-specAtc-pokenew'
                      name='specAtc'
                      {...register('specAtc', {
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
                    <label data-cy='lbl-specDef-pokenew' htmlFor='specDef'>
                      SpecDef:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-specDef-pokenew'
                      name='specDef'
                      {...register('specDef', {
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
                    <label data-cy='lbl-speed-pokenew' htmlFor='speed'>
                      Speed:
                    </label>
                    <input
                      type='text'
                      data-cy='inp-speed-pokenew'
                      name='speed'
                      {...register('speed', {
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
                  {errors?.specAtc && (
                    <span data-cy='error-stats-pokenew'>
                      {errors.specAtc.message}
                    </span>
                  )}
                  {errors?.specDef && (
                    <span data-cy='error-stats-pokenew'>
                      {errors.specDef.message}
                    </span>
                  )}
                  {errors?.speed && (
                    <span data-cy='error-stats-pokenew'>
                      {errors.speed.message}
                    </span>
                  )}
                </S.StatsItems>
              </S.WrapperFieldsStats>
            </S.FieldsStats>
            <S.FieldsAbilities>
              <label data-cy='lbl-title1-pokenew' htmlFor='title1'>
                Title1:
              </label>
              <input
                type='text'
                data-cy='inp-title1-pokenew'
                name='title1'
                {...register('title1', { required: 'Title is Required' })}
                onKeyUp={() => {
                  trigger('title1')
                }}
              />
              {errors?.title1 && (
                <span data-cy='error-title-pokenew'>
                  {errors.title1.message}
                </span>
              )}
              <label data-cy='lbl-descr1-pokenew' htmlFor='description1'>
                Description1:
              </label>
              <textarea
                type='text'
                data-cy='inp-descr1-pokenew'
                name='description1'
                rows={4}
                {...register('description1', {
                  required: 'Description is Required',
                })}
                onKeyUp={() => {
                  trigger('description1')
                }}
              />
              {errors?.description1 && (
                <span data-cy='error-description-pokenew'>
                  {errors.description1.message}
                </span>
              )}
              <label data-cy='lbl-title2-pokenew' htmlFor='title2'>
                Title2:
              </label>
              <input
                type='text'
                data-cy='inp-title2-pokenew'
                name='title2'
                {...register('title2', { required: 'Title is Required' })}
                onKeyUp={() => {
                  trigger('title2')
                }}
              />
              {errors?.title2 && (
                <span data-cy='error-title-pokenew'>
                  {errors.title2.message}
                </span>
              )}
              <label data-cy='lbl-descr2-pokenew' htmlFor='description2'>
                Description2:
              </label>
              <textarea
                type='text'
                data-cy='inp-descr2-pokenew'
                name='description2'
                rows={4}
                {...register('description2', {
                  required: 'Description is Required',
                })}
                onKeyUp={() => {
                  trigger('description2')
                }}
              />
              {errors?.description2 && (
                <span data-cy='error-description-pokenew'>
                  {errors.description2.message}
                </span>
              )}
            </S.FieldsAbilities>
            <S.FildButtons>
              <S.Button data-cy='btn-save-pokenew' type='submit'>
                Save
              </S.Button>
              <S.Button
                data-cy='btn-back-pokenew'
                type='button'
                onClick={() => navigate(`/list`)}
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

export default PokeForm
