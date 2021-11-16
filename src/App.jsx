import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'Layout';
import { HomePage, ScenariiPage } from 'Pages';
import SApp from './SApp';

function App() {
  return (
    <SApp>
      <Layout>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/scenarii" component={ScenariiPage} />
          </Switch>
        </main>
      </Layout>
      <ToastContainer position="bottom-right" />
    </SApp>
  );
}

export default App;
