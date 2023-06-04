import { Container } from '@mantine/core';
import { ActorList } from 'features/actor/components/actor-list/actor-list';

export function HomePage() {
  return (
    <Container maw={1200} mx="auto" p="lg">
      <ActorList />
    </Container>
  );
}
