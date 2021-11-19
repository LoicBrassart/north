import { Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import Layout from 'Layout';
import { AuthPage, HomePage, ScenariiPage } from 'Pages';
import useTheme from 'Hooks';
import { ThemeToggler } from 'Ui';
import { GlobalStyles } from 'Themes';

function App() {
  const [theme, themeToggler] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/scenarii" component={ScenariiPage} />
        </Switch>
      </Layout>
      <ThemeToggler toggler={themeToggler} />
    </ThemeProvider>
  );
}

export default App;
