import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageA from './components/page_a/page_a.jsx';
import './styles/style.css';
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
