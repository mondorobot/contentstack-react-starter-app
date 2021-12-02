import React from 'react';
import * as S from './styles';
import SuggestedSidebar from '../suggested_sidebar/suggested_sidebar';
import Article from '../article/article';
import PurpleSection from '../purple_section/purple_section';

const PageA = (props) => {
  return (
    <S.PageOuter className='page'>
      <S.PageInner>
        <S.PageContent>
          <S.LeftColumn>
            <Article {...props} />
          </S.LeftColumn>
          <S.RightColumn>
            <SuggestedSidebar />
          </S.RightColumn>
        </S.PageContent>
        
      </S.PageInner>
      <PurpleSection />
    </S.PageOuter>
  )
};

export default PageA;