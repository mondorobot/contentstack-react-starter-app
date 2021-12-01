import React, {useState, useEffect} from 'react';
import Stack from '../../sdk/entry';
import * as S from './styles';

const Article = (props) => {
  const [pageData, setPageData] = useState();
  
  useEffect(() => {
    testRequest();
  },[]);

  const testRequest = async () => {
    try {
      const url = props.location.pathname.split('/')[2]
      const pageData = await Stack.getEntryByUrl(
        'demoinnerpagea',
        `/${url}`
      )
      setPageData(pageData[0]);
    } catch (error) {
      console.error(error);
    }
  };

  if (!pageData) {
    return null;
  }

  return (
    <S.Article>
      <S.HeroImg src={pageData.hero_image.url} />
      <S.Author>{pageData.author}</S.Author>
      <S.Title>{pageData.title}</S.Title>
      <S.TitleDivider />
      <S.Subtitle>{pageData.subtitle}</S.Subtitle>
      <S.Content dangerouslySetInnerHTML={{__html: pageData.content}} />
    </S.Article>
  );
}

export default Article;
