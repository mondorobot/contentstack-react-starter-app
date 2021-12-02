import React, {useState, useEffect, useCallback} from 'react';
import Stack from '../../sdk/entry';
import * as S from './styles';

const Article = (props) => {
  const [content, setContent] = useState();
  
  const fetchContent = useCallback(
    async () => {
      try {
        const url = props.location.pathname.split('/')[2]
        const data = await Stack.getEntryByUrl(
          'demoarticle',
          `/${url}`
        )
        setContent(data[0]);
      } catch (error) {
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
    <S.Article>
      {content.hero_image?.url &&
        <S.HeroImg src={content.hero_image.url} />
      }
      
      <S.Author>{content.author}</S.Author>
      <S.Title>{content.title}</S.Title>
      <S.TitleDivider />
      <S.Subtitle>{content.subtitle}</S.Subtitle>
      <S.Content dangerouslySetInnerHTML={{__html: content.content}} />
    </S.Article>
  );
}

export default Article;
