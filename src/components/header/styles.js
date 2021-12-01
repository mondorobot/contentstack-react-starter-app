import styled from 'styled-components'

export const ButtonIcon = styled.img`
  margin-right: 1rem;
`;

export const ButtonText = styled.p`
  color: #535A8D;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
`;

export const HeaderBottom = styled.div`
  border-bottom: .1rem solid #D0D2D7;  
  display: flex;
  height: 8.8rem;
  justify-content: center;
`;

export const HeaderButton = styled.div`
  align-items: center;
  border: .1rem solid #BCC1DC;
  border-radius: .8rem;
  display: flex;
  flex-direction: row;
  height: 4rem;
  justify-content: space-between;
  padding: 0 1.2rem;
`;

export const HeaderSectionInner = styled.div`
  align-items:center;  
  display: flex;
  justify-content: space-between;
  width: 144rem;
`;

export const HeaderTop = styled.div`
  border-bottom: .1rem solid #E9EAEC;
  display: flex;
  height: 4rem;
  justify-content: center;
`;

export const HeaderWrap = styled.div`
  width: 100%;
`;

export const Logo = styled.img`
  height: 6.3rem;
`;

export const TopLink = styled.li`
  color: #535A8D;  
  font-size: 1.3rem;
  margin-right: ${props => props.right ? '0' : '1.6rem'};

  &:hover{ 
    cursor: pointer; //I know this isnt a link! Leave me alone!
  }
`;

export const TopLinksWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
`;
