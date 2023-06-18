import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { AppRouter } from 'app/app-router';
import { PageFooter } from 'shared/components/page-footer/page-footer';
import { PageHeader } from 'shared/components/page-header/page-header';

export default function App() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <ModalsProvider>
        <Notifications position="top-right" />
        <PageHeader />
        <AppRouter />
        <PageFooter />
      </ModalsProvider>
    </MantineProvider>
  );
}
