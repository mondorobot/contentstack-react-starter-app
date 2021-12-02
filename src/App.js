import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageA from './components/page_a/page_a.jsx';
import PageB from './components/page_b/page_b.jsx';
import './styles/style.css';
import Header from './components/header/header';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Breadcrumbs />
      <Switch>
        <Route
          path='/article/*'
          render={(renderProps) => <PageA {...renderProps} />}
        />
        <Route
          path='/blog/*'
          render={(renderProps) => <PageB {...renderProps} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
