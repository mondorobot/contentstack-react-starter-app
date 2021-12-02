import React, {useEffect, useState, useCallback} from 'react';
import * as S from './styles';
import Stack from '../../sdk/entry';

const SuggestedSidebar = () => {
  const [content, setContent] = useState();

  const fetchContent = useCallback(
    async () => {
      try {
        const data = await Stack.getEntry('demoarticle');
        console.log(data[0])
        setContent(data[0]);
      } catch(error) {
        console.error(error);
      }
    },
    [setContent],
  );

  useEffect(async () => {
    fetchContent();
  },[fetchContent]);

  if (!content) {
    return null;
  }

  return (
    <S.RelatedArticles>
      <S.RelatedArticlesInner>
        <S.SectionHeading>Continue Reading</S.SectionHeading>
        <S.ArticleWrap>
          {content?.map((article, index) => {
            return (
              <S.ArticleThumbnail key={`article-thumb-${index}`}>
                <S.ArticleImageWrap style={{'background-image': `url(${article.hero_image?.url})`}} />
                
                <S.ArticleTextWrap>
                  <S.ArticleAuthor>{article.author}</S.ArticleAuthor>
                  <S.ArticleTitle>{article.title}</S.ArticleTitle>
                  <S.ArticleLink>Read More</S.ArticleLink>
                </S.ArticleTextWrap>
                
              </S.ArticleThumbnail>
            );
          })}
        </S.ArticleWrap>
      </S.RelatedArticlesInner>
    </S.RelatedArticles>
  );
};

export default SuggestedSidebar;