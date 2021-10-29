import { Switch, Route } from 'react-router-dom';
import Layout from 'Layout';
import { HomePage, ScenariiPage } from 'Pages';

function App() {
  return (
    <Layout>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/scenarii" component={ScenariiPage} />
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
