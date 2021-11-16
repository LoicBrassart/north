import { Switch, Route } from 'react-router-dom';
import Layout from 'Layout';
import { HomePage, ScenariiPage } from 'Pages';
import useDarkTheme from 'Hooks';
import { ThemeProvider } from 'styled-components';
import { ThemeToggler } from 'Ui';
import { lightTheme, darkTheme } from 'Themes/themes';
import GlobalStyles from 'Themes/GlobalStyle';

function App() {
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === 'light' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
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
