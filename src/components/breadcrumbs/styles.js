import styled from 'styled-components'

export const Breadcrumbs = styled.div`
  display: flex;
  height: 6rem;
  justify-content: center;
  width: 100%;
`;

export const BreadcrumbInner = styled.div`
  display: flex;
  flex-direction: row;  
  width: 114rem;
  align-items: center;
`;

export const BreadcrumbLink = styled.p`
  color: ${props => props.bold ? '#323C67' : '#17191C'};
  font-size: 1.4rem;
  margin: 0 1.2rem 0 0;
  font-weight: ${props => props.bold ? '700' : '400'}
`;

export const Caret = styled.img`
  height: 1.5rem;
  margin-right: 1.2rem;
`;