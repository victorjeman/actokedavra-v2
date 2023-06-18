import { Container, Text, createStyles, Header, Group, Box } from '@mantine/core';
import { ActorMultipleDelete } from 'features/actor/components/actor-multiple-delete/actor-multiple-delete';

import { ActorResetDb } from 'features/actor/components/actor-reset-db/actor-reset-db';

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
    <Header height={60}>
      <Container className={classes.header} size="lg">
        <Group position="apart" w="100%">
          <Text fw="600" size="xl">
            Actokedavra
          </Text>

          <Group>
            <Box mr="md">
              <ActorMultipleDelete />
            </Box>

            <ActorResetDb />
          </Group>
        </Group>
      </Container>
    </Header>
  );
}
