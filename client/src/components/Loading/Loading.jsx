import React from 'react'
import loading from '../../assets/images/loading.svg'
import * as S from './styled'

function Loading() {
  return (
    <S.LoaderContainer>
      <S.Loader data-cy='loading' src={loading} alt='Loading' />
    </S.LoaderContainer>
  )
}

export default Loading
