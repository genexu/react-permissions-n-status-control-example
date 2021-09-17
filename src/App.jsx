import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Home from '@/scenes/Home';
import Error from './scenes/Error';
import useErrorPageHandler from '@/hooks/useErrorPageHandler';
import { getHealth } from '@/apis';

const App = () => {
  const errorPageHandler = useErrorPageHandler();

  useEffect(() => {
    getHealth().catch(errorPageHandler);
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/error/:code" component={Error} />
          </Switch>
        </Container>
      </Main>
    </div>
  );
};

export default App;
