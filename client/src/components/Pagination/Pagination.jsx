import React from 'react'
import * as S from './Pagination'

function Pagination({ pages, setCurrentPage }) {
  return (
    <S.ContainerPagination data-cy='wrapper-pagination'>
      <S.SectionBtn data-cy='sec-btn-pagination'>
        {Array.from(Array(pages), (item, index) => (
          <button
            key={index}
            value={index}
            type='button'
            onClick={(e) => setCurrentPage(Number(e.target.value))}
            data-cy='btn-pagination'
          >
            {index + 1}
          </button>
        ))}
      </S.SectionBtn>
     
    </S.ContainerPagination>
  )
}

export default Pagination
