import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import InnerPageA from './components/article/article.jsx';
import PageA from './components/page_a/page_a.jsx';
// import Blog from './pages/blog';
// import BlogPost from './pages/blog-post.jsx';
// import ContactUS from './pages/contact-us';
// import AboutUs from './pages/about-us';
// import Error from './pages/error.jsx';
// import './styles/third-party.css';
import './styles/style.css';
// import './styles/modal.css';
import Header from './components/header/header';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';

function App() {
  return (
    <div className='App'>
      <Header />
      <Breadcrumbs />
      <Switch>
        <Route
          path='/demoinnerpagea/*'
          render={(renderProps) => <PageA {...renderProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
