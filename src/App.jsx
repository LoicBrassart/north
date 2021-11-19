import { Switch, Route } from 'react-router-dom';
import Layout from 'Layout';
import { HomePage, ScenariiPage } from 'Pages';
import { useTheme } from 'Hooks';
import { ThemeProvider } from 'styled-components';
import { ThemeToggler } from 'Ui';
import { GlobalStyles } from 'Themes';

function App() {
  const [theme, themeToggler] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/scenarii" component={ScenariiPage} />
        </Switch>
      </Layout>
      <ThemeToggler toggler={themeToggler} />
    </ThemeProvider>
  );
}

export default App;
