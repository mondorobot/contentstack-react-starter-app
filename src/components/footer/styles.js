import styled from 'styled-components'



export const FooterBottom = styled.div`
  background-color: #E9EAEC;
  display:flex;
  justify-content: center;
  padding: 3rem 0;
`;


export const FooterBottomText = styled.p`
  color: #464953;
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin: 0;
`;

export const FooterBottomLink = styled.a`
  color: #464953;
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin: 0 0 0 4rem;
  text-decoration: none; 
  &:hover {
    color: #464953;
  }
`;

export const FooterBottomLinkWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FooterColumn = styled.div`
  display:flex;
  flex-direction: column;
  margin-right: 2rem;
  width: 26rem;
  &:last-child {
    margin-right: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: end;
  }

`;

export const FooterInner = styled.div`
  width: 114rem;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.bottom ? 'space-between' : 'start'};
  ${(props) => {
    if (props.bottom) {
      return 'align-items: center;'
    }
  }}
`;

export const FooterSocialLink = styled.a`
  display: inline-block;
  margin-right: 1.6rem;
`;


export const FooterTop = styled.div`
  align-items: center;
  background-color: #F4F4F6;
  display: flex;
  flex-direction: column;
  padding: 15rem 0 9rem 0;
  width: 100%;
`;


export const LinkColumnLink = styled.a`
  color: #323C67;
  desplay: inline-block;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 1rem;
  text-decoration: none;
  &:hover {
    color: #323C67;
  }
`;

export const LinkHeader = styled.p`
  color: #6738CD;
  font-weight: 800;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  margin-bottom: 5rem;  
  width: 19rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SocialLinkWrap = styled.div``;

export const SocialIcon = styled.img`
  height: 2.6rem;
  width: 2.6rem;
`;
