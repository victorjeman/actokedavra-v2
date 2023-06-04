import { Container, Text, createStyles, Header } from '@mantine/core';

const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}));

export function PageHeader() {
  const { classes } = useStyles();

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <Text fw="600" size="xl">
          Actokedavra
        </Text>
      </Container>
    </Header>
  );
}
