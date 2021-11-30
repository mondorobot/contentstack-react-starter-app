import React, {useState, useEffect} from 'react';
import Stack from '../../sdk/entry';
import * as S from './styles';

// import Layout from '../components/layout';
// import RenderComponenets from '../components/render-components';

const PageA = (props) => {
  const [pageData, setPageData] = useState();
  
  useEffect(() => {
    testRequest();
  },[]);

  const testRequest = async () => {
    console.log(props)
    try {
      const url = props.location.pathname.split('/')[2]
      const pageData = await Stack.getEntryByUrl(
        'demoinnerpagea',
        `/${url}`
      )
      setPageData(pageData[0]);
    } catch (error) {
      console.error(error);
    }
  };

  
  if (!pageData) {
    return '';
  }

  return (
    <S.PageA>
      <img src={pageData.hero_image.url} />
      <p>{pageData.author}</p>
      <h1>{pageData.title}</h1>
      <h2>{pageData.subtitle}</h2>
      <div dangerouslySetInnerHTML={{__html: pageData.content}} />
    </S.PageA>
  );
}

export default PageA;
// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       entry: undefined,
//       header: undefined,
//       footer: undefined,
//       error: { errorStatus: false, errorCode: undefined, errorData: undefined },
//     };
//   }

//   async componentDidMount() {
//     try {
//       const result = await Stack.getEntryByUrl(
//         'page',
//         this.props.location.pathname,
//         ['page_components.from_blog.featured_blogs']
//       );
//       const header = await Stack.getEntry(
//         'header',
//         'navigation_menu.page_reference'
//       );
//       const footer = await Stack.getEntry('footer');
//       this.setState({
//         entry: result[0],
//         header: header[0][0],
//         footer: footer[0][0],
//         error: { errorStatus: false },
//       });
//     } catch (error) {
//       this.setState({
//         error: { errorStatus: true, errorCode: 404, errorData: error },
//       });
//     }
//   }

//   render() {
//     const { header, footer, entry, error } = this.state;
//     const { history } = this.props;
//     if (!error.errorStatus && entry) {
//       return (
//         <Layout header={header} footer={footer} page={entry} activeTab='Home'>
//           <RenderComponenets
//             pageComponents={entry.page_components}
//             contentTypeUid='page'
//             entryUid={entry.uid}
//             locale={entry.locale}
//           />
//         </Layout>
//       );
//     }

//     if (error.errorStatus) {
//       history.push('/error', [error]);
//     }
//     return '';
//   }
// }
// export default Home;
