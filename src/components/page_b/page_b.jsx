import React from 'react';
import * as S from './styles';
// import SuggestedSidebar from '../suggested_sidebar/suggested_sidebar';
import Article from '../article/article';
import PurpleSection from '../purple_section/purple_section';
import LinkSidebar from '../link_sidebar/link_sidebar';
import RelatedArticles from '../related_articles/related_articles';

const PageA = (props) => {
  return (
    <S.PageOuter className='page'>
      <S.PageInner>
        <S.PageContent>
          <S.LeftColumn>
            <LinkSidebar />
          </S.LeftColumn>
          <S.RightColumn>
            {/* <SuggestedSidebar /> */}
            <Article {...props} />
          </S.RightColumn>
        </S.PageContent>
      </S.PageInner>
      <RelatedArticles />
      <PurpleSection />
    </S.PageOuter>
  )
};

export default PageA;