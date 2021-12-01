import styled from 'styled-components'

export const GreyBox = styled.div`
  background-color: #F4F4F6;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  border-radius: 0.8rem;
  padding: 2.4rem;
`;

export const GreyBoxHeading = styled.h6`
  color: #464953;
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 3.2rem;
  margin-bottom: 1.6rem;
`;

export const GreyBoxLink = styled.a`
color: #535A8D;
font-size: ${props => props.small ? '1.5rem' : '1.7rem'};
line-height: 2.4rem;
margin-bottom: 1rem;
text-decoration: none;
&:hover{
  color: #535A8D;
}
&:last-child{
  margin-bottom: 0;
}
`;

export const GreyBoxText = styled.p`
color: #656976;
font-size: 1.5rem;
font-style: italic;
line-height: 2.4rem;
`;

export const Heading = styled.h4`
  color: #000000;
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 3.2rem;
  margin: 3rem 0 4rem;
`;

export const Icon = styled.img`
margin-right: 0.8rem;
width: 1.6rem;
`;

export const SuggestedItem = styled.div``;

export const SuggestedItemHeading = styled.h5`
  color: #656976;
  font-size: 1.4rem;
  line-height: 1.6rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
`;

export const SuggestedItemBlurb = styled.p`
  color: #323C67;
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 2.4rem;
  line-height: 2.4rem;
`;

export const SuggestedSidebar = styled.div``;

