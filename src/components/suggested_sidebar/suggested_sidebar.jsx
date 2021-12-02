import React, {useEffect, useState, useCallback} from 'react';
import * as S from './styles';
import Phone from '../../icons/phone.png';
import Email from '../../icons/mail.png';
import Stack from '../../sdk/entry';

const SuggestedSidebar = () => {
  const [content, setContent] = useState();

  const fetchContent = useCallback(
    async () => {
      try {
        const data = await Stack.getEntry('demo_suggested_sidebar');
        console.log(data[0][0])
        setContent(data[0][0]);
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
    <S.SuggestedSidebar>
      <S.Heading>{content.title}</S.Heading>
      {content?.articles?.map( (item, index) => {
        return(
          <S.SuggestedItem key={`suggested-item-${item.title+index}`}>
            <S.SuggestedItemHeading>{item.title}</S.SuggestedItemHeading>
            <S.SuggestedItemBlurb>{item.caption}</S.SuggestedItemBlurb>
          </S.SuggestedItem>
        );
      })}
      <S.GreyBox>
        <S.GreyBoxHeading>Contact Us</S.GreyBoxHeading>
        <S.GreyBoxLink href={content.contact_us.call_us_link.href}><S.Icon src={Phone}/>{content.contact_us.call_us_link.title}</S.GreyBoxLink>
        <S.GreyBoxLink href={content.contact_us.email_us_link.href}><S.Icon src={Email}/>{content.contact_us.email_us_link.title}</S.GreyBoxLink>
      </S.GreyBox>
      <S.GreyBox>
        <S.GreyBoxHeading>Resources</S.GreyBoxHeading>
        {content?.resources?.link?.map((resource, index) => {
          return (
            <S.GreyBoxLink href={resource.href} key={`resource-${index}}`}>{resource.title}</S.GreyBoxLink>
          );
        })}
      </S.GreyBox>
      <S.GreyBox>
        <S.GreyBoxHeading>Member Resources</S.GreyBoxHeading>
        {content?.member_resources?.link?.map((member_resource, index) => {
          return (
            <S.GreyBoxLink href={member_resource.href} key={`member-resource-${index}`}>{member_resource.title}</S.GreyBoxLink>
          )
        })}
        <S.GreyBoxText>{content?.member_resources?.membership_text}</S.GreyBoxText>
        <S.GreyBoxLink small>{content?.member_resources?.membership_link?.title}</S.GreyBoxLink>
      </S.GreyBox>
    </S.SuggestedSidebar>
  );
};

export default SuggestedSidebar;