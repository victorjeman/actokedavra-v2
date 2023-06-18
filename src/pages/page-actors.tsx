import { Container } from '@mantine/core';

import { ActorList } from 'features/actor/components/actor-list/actor-list';
import { ActorUpdate } from 'features/actor/components/actor-update/actor-update';

export function PageActors() {
  return (
    <Container size="lg" mx="auto" p="lg">
      <ActorList />
      <ActorUpdate />
    </Container>
  );
}
