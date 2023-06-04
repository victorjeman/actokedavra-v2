import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { AppRouter } from 'app/app-router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppRouter />
    </MantineProvider>
  );
}
