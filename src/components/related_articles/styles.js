import styled from 'styled-components'

export const ArticleAuthor = styled.p`
color: #787878;
font-size: 1.4rem;
line-height: 1.6rem;
`;

export const ArticleImage = styled.img`
display: block;
`;

export const ArticleImageWrap = styled.div`
  height: 18rem;
  width: 100%;
  overflow: hidden;
  border-radius: 0.8rem 0.8rem 0 0;
  background-size: cover;
`;

export const ArticleLink = styled.a`
color: #323C67;
font-weight: bold;
font-size: 1.4rem;
text-decoration: none;
&:hover{
  color: #323c67;
}
`;

export const ArticleTextWrap = styled.div`
  padding: 2.4rem 2.4rem 3rem;
`;

export const ArticleTitle = styled.p`
color: #000000;
font-weight: bold;
font-size: 1.7rem;
line-height: 2.4rem;
`

export const ArticleThumbnail = styled.div`
background: #ffffff;
border-radius: 0.8rem;
cursor: pointer;
filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.16));
margin-right: 3rem;
width: 27rem;
transition: all 0.3s ease;
&:hover{
  transform: translateY(-1rem);
}
`;

export const ArticleWrap = styled.div`
display: flex;
flex-direction: row;
`;

export const RelatedArticles = styled.div`
border-top: 1px solid #D0D2D7;
display: flex;
justify-content: center;
padding: 8rem 10rem;
width: 100%;
`;

export const RelatedArticlesInner = styled.div`
width: 114rem;
display: flex;
justify-content: start;
flex-direction: column;
`;

export const SectionHeading = styled.h5`
color: #000000;
font-weight: 800;
font-size: 3.4rem;
margin-bottom: 3rem;

`;