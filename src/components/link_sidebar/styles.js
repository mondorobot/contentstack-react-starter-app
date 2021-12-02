import styled from 'styled-components'

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;  
  width: 100%;
`;

export const PageGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageLink = styled.a`
  color: #323C67;  
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 1.2rem;
  padding-left: 0.8rem;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover{
    border-left: 0.4rem solid #8A5FE7;
    background-color: #EEE7FE;
  }
`;

export const PageName = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 1.2rem;
  color: #323C67;
`;