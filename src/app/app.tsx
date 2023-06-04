import { MantineProvider } from '@mantine/core';
import { AppRouter } from 'app/app-router';
import { PageFooter } from 'shared/components/page-footer/page-footer';
import { PageHeader } from 'shared/components/page-header/page-header';

export default function App() {
  return (
    <MantineProvider>
      <PageHeader />
      <AppRouter />
      <PageFooter />
    </MantineProvider>
  );
}
