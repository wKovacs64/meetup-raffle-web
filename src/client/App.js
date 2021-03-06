/** @jsxImportSource theme-ui */
import '@wkovacs64/normalize.css';
import { Flex, Container } from 'theme-ui';
import Header from './components/Header';
import Raffle from './components/Raffle';
import AppProviders from './AppProviders';

function App() {
  return (
    <AppProviders>
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Header />
        <Container as="main">
          <Raffle />
        </Container>
      </Flex>
    </AppProviders>
  );
}

App.displayName = 'App';

export default App;
