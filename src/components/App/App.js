import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import theme from '../../styles/theme';
import Header from '../../components/Header/Header';
import Home from '../../pages/Home/Home';
import Details from '../../pages/Details/Details';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [isDetailsOpen, openDetails] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Header isDetailsOpen={isDetailsOpen} />
            <Route
              render={({ location }) => {
                location.pathname === '/details'
                  ? openDetails(true)
                  : openDetails(false);
                return (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={300}
                      classNames={'fade'}
                    >
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/details" component={Details} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                );
              }}
            />
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
