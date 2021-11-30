import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InnerPageA from './pages/page-a/page-a.jsx';
import Page from './components/page/page.jsx';
// import Blog from './pages/blog';
// import BlogPost from './pages/blog-post.jsx';
// import ContactUS from './pages/contact-us';
// import AboutUs from './pages/about-us';
// import Error from './pages/error.jsx';
// import './styles/third-party.css';
import './styles/style.css';
// import './styles/modal.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route
          path='/demoinnerpagea/*'
          render={(renderProps) => <Page {...renderProps} content={<InnerPageA {...renderProps}/>} />}
        />
      </Switch>
    </div>
  );
}

export default App;
