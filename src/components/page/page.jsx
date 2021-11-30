import React from 'react';
import * as S from './styles';
import Header from '../header/header';

const Page = (props) => {
  return (
    <S.PageOuter className='page'>
      <Header />
      <S.PageInner>
        <S.PageContent>
          {props.content}
        </S.PageContent>
      </S.PageInner>
    </S.PageOuter>
  )
};

export default Page;