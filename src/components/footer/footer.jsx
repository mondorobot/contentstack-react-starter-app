import React, {useState, useEffect} from 'react';
import * as S from './styles';
import Stack from '../../sdk/entry';

const Footer = () => {
  const [content, setContent] = useState();

  useEffect(()=>{
    fetchContent();
  },[])

  const fetchContent = async () => {
    try {
      // demofullwidthcta
      const data = await Stack.getEntry('footer');
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
    <div>
      <S.FooterTop>
        <S.FooterInner>
          {content.footer_columns?.map((column, index) => {
            return (
              <S.FooterColumn key={`footer-column-${index}`}>
                {column.column_name 
                  ? <S.LinkHeader>{column.column_name}</S.LinkHeader>
                  : null
                }
                {column.link?.map((link, linkIndex) => {
                  return (
                    <S.LinkColumnLink key={`about-link-${linkIndex}`} href={link.href}>{link.title}</S.LinkColumnLink>
                  );
                })}
                {column.file?.map((image, imageIndex) => {
                  return (
                    <S.Logo key={`logo-${imageIndex}`} src={image.url} />
                  );
                })}
              </S.FooterColumn>
            );
          })}
        </S.FooterInner>
      </S.FooterTop>
      <S.FooterBottom>
        <S.FooterInner>
          <S.FooterBottomText>{content.copyright_text}</S.FooterBottomText>
          <S.FooterBottomLink href={content.acr_policies_link.href}>{content.acr_policies_link.title}</S.FooterBottomLink>
          <S.FooterBottomLink href={content.sitemap_link.href}>{content.sitemap_link.title}</S.FooterBottomLink>
        </S.FooterInner>
      </S.FooterBottom>
    </div>
  );
};

export default Footer;