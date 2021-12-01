import React from 'react';
import * as S from './styles';
import ACRLogo from '../../images/ACRLogo.png';
import Hamburger from '../../icons/hamburger.png';
import MagnifyingGlass from '../../icons/magnifying-glass.png';

// src/images/ACRLogo.png
const Header = () => {
  return (
    <S.HeaderWrap>
      <S.HeaderTop>
        <S.HeaderSectionInner>
          <S.TopLinksWrapper>
            <S.TopLink>Membership</S.TopLink>
            <S.TopLink>Patient Resources</S.TopLink>
            <S.TopLink>Whats New</S.TopLink>
            <S.TopLink>Journals</S.TopLink>
            <S.TopLink>Global Community</S.TopLink>
            <S.TopLink>Donate</S.TopLink>
          </S.TopLinksWrapper>
          <S.TopLinksWrapper>
            <S.TopLink right>Login</S.TopLink>
          </S.TopLinksWrapper>
        </S.HeaderSectionInner>
      </S.HeaderTop>
      <S.HeaderBottom>
        <S.HeaderSectionInner>
          <S.HeaderButton>
            <S.ButtonIcon src={Hamburger} />
            <S.ButtonText>MENU</S.ButtonText>
          </S.HeaderButton>
          <S.Logo src={ACRLogo} />
          <S.HeaderButton>
            <S.ButtonIcon src={MagnifyingGlass} />
            <S.ButtonText>SEARCH</S.ButtonText>
          </S.HeaderButton>
        </S.HeaderSectionInner>
      </S.HeaderBottom>
    </S.HeaderWrap>
  );
};

export default Header;