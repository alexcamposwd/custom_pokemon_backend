import React from 'react'
import * as S from './styled'

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <S.ContainerSelect>
      <S.SelectText data-cy='lbl-limit' htmlFor={name}>
        {text}:
      </S.SelectText>
      <S.SelectControl
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value}
        multiple={false}
        data-cy='limit'
      >
        <option>...</option>
        {options.map((option) => (
          <option className='select-option' value={option.name} key={option.id}>
            {option.name}
          </option>
        ))}
      </S.SelectControl>
    </S.ContainerSelect>
  )
}

export default Select
