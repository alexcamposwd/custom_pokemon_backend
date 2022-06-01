import React from 'react'
import * as S from './styled'

function ProgressBar({ percent }) {
  return (
    <S.ProgressBarWrapper>
      <S.CurrentProgress
        data-cy='progress-newpoke'
        style={{ width: `calc(${percent}%)` }}
      />
    </S.ProgressBarWrapper>
  )
}

export default ProgressBar
