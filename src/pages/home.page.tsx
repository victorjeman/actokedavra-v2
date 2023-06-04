import { Container } from '@mantine/core';
import { ActorCreate } from 'features/actor/components/actor-create/actor-create';

import { ActorList } from 'features/actor/components/actor-list/actor-list';

export function HomePage() {
  return (
    <Container maw={1200} mx="auto" p="lg">
      <ActorList />
      <ActorCreate />
    </Container>
  );
}
