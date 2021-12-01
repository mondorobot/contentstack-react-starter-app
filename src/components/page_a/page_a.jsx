import React from 'react';
import * as S from './styles';
// import Header from '../header/header';
// import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import RightColumn from '../right_column/right_column';
import Article from '../article/article';

const PageA = (props) => {
  return (
    <S.PageOuter className='page'>
      {/* <Header /> */}
      {/* <Breadcrumbs /> */}
      <S.PageInner>
        <S.PageContent>
          <S.LeftColumn>
            <Article {...props} />
          </S.LeftColumn>
          <S.RightColumn>
            <RightColumn />
          </S.RightColumn>
        </S.PageContent>
      </S.PageInner>
    </S.PageOuter>
  )
};

export default PageA;