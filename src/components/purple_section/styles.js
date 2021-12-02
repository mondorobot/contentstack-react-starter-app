import styled from 'styled-components'

export const BodyText = styled.p`
font-size: 22px;
line-height: 32px;
margin-bottom: 5rem;
max-width: 60rem;
`;

export const LargeHeading = styled.h4`
font-weight: 800;
font-size: 34px;
line-height: 48px;
margin-bottom: 2rem;
max-width: 60rem;

`;

export const Link = styled.a`
border: 1px solid #FDFDFD;
border-radius: 0.6rem;
color: #FDFDFD;
font-weight: bold;
font-size: 1.7rem;
line-height: 2.4rem;
padding: 1.6rem 2.4rem;
text-decoration: none;
transition: background 0.2s ease;
&:hover{
  color: #FDFDFD;
  background-color: rgba(253, 253, 253, 0.2)
}
`;

export const PurpleSection = styled.div`
align-items: center;
  background-color: #402183;
  color: #FDFDFD;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 0;
  text-align: center;
  width: 100%;
`;

export const SmallHeading = styled.h5`
font-weight: bold;
font-size: 1.7rem;
line-height: 2.4rem;
margin-bottom: 2rem;
`;

