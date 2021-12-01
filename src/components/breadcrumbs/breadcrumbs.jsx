import React from 'react';
import * as S from './styles';
import Caret from '../../icons/caret.png';

const Breadcrumbs = () => {
  return (
    <S.Breadcrumbs>
      <S.BreadcrumbInner>
        <S.BreadcrumbLink>LEVEL 1 PAGE</S.BreadcrumbLink>
        <S.Caret src={Caret} />
        <S.BreadcrumbLink>LEVEL 2 PAGE</S.BreadcrumbLink>
        <S.Caret src={Caret} />
        <S.BreadcrumbLink bold>THIS PAGE</S.BreadcrumbLink>
      </S.BreadcrumbInner>
    </S.Breadcrumbs>
  );
};

export default Breadcrumbs;