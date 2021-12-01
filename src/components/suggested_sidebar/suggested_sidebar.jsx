import React from 'react';
import * as S from './styles';
import Phone from '../../icons/phone.png';
import Email from '../../icons/mail.png';

const SuggestedSidebar = () => {
  return (
    <S.SuggestedSidebar>
      <S.Heading>Suggested Content</S.Heading>
      {Array(3).fill(0).map( (item, index) => {
        return(
          <S.SuggestedItem key={`suggested-item-${item+index}`}>
            <S.SuggestedItemHeading>Lorem Ipsum</S.SuggestedItemHeading>
            <S.SuggestedItemBlurb>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</S.SuggestedItemBlurb>
          </S.SuggestedItem>
        );
      })}
      <S.GreyBox>
        <S.GreyBoxHeading>Contact Us</S.GreyBoxHeading>
        <S.GreyBoxLink><S.Icon src={Phone}/>Call us</S.GreyBoxLink>
        <S.GreyBoxLink><S.Icon src={Email}/>Eamil us</S.GreyBoxLink>
      </S.GreyBox>
      <S.GreyBox>
        <S.GreyBoxHeading>Resources</S.GreyBoxHeading>
        <S.GreyBoxLink>Resource Name 1</S.GreyBoxLink>
        <S.GreyBoxLink>Resource Name 2</S.GreyBoxLink>
        <S.GreyBoxLink>Resource Name 3</S.GreyBoxLink>
      </S.GreyBox>
      <S.GreyBox>
        <S.GreyBoxHeading>Member Resources</S.GreyBoxHeading>
        <S.GreyBoxLink>Member Resource Name 3</S.GreyBoxLink>
        <S.GreyBoxLink>Member Resource Name 3</S.GreyBoxLink>
        <S.GreyBoxText>
          These resources are for members only. Interested in becoming a member?
        </S.GreyBoxText>
        <S.GreyBoxLink small>Start Here</S.GreyBoxLink>
      </S.GreyBox>
    </S.SuggestedSidebar>
  );
};

export default SuggestedSidebar;