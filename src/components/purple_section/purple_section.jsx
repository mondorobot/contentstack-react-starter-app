import React, {useState, useEffect} from 'react';
import * as S from './styles';
import Stack from '../../sdk/entry';

const PurpleSection = () => {
  const [content, setContent] = useState();

  useEffect(()=>{
    fetchContent();
  },[])

  const fetchContent = async () => {
    try {
      // demofullwidthcta
      const data = await Stack.getEntry('demofullwidthcta');
      console.log(data[0][0])
      setContent(data[0][0]);

    } catch (error) {
      console.error(error)
    }
  };

  if(!content){
    return null;
  }

  return (
    <S.PurpleSection>
      <S.SmallHeading>{content.small_heading}</S.SmallHeading>
      <S.LargeHeading>{content.large_heading}</S.LargeHeading>
      <S.BodyText>{content.body_text}</S.BodyText>
      <S.Link href={content.link.href}>{content.link.title}</S.Link>
    </S.PurpleSection>
  );
};

export default PurpleSection;