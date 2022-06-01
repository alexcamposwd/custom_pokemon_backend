import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import * as S from './styled'

function Footer() {
  return (
    <S.FooterWrapper>
      <ScrollToTop
        smooth
        top={300}
        component={<S.CustomIconUp />}
        style={{
          background: 'none',
          width: 30,
          height: 30,
          right: 50,
          bottom: 10,
        }}
      />
      <S.CopyRight data-cy='copyright'>
        <span>Alex Campos</span> &copy; 2022
      </S.CopyRight>
    </S.FooterWrapper>
  )
}

export default Footer
