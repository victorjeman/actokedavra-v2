import { Avatar, Text, Button, Paper, Badge, Spoiler } from '@mantine/core';

import { useDeleteActorMutation } from 'features/actor/api/actor-api';
import { ActorSelect } from 'features/actor/components/actor-select/actor-select';
import { Actor } from 'features/actor/types/actor-types';

interface Props {
  actor: Actor;
}

export function ActorThumbnail({ actor }: Props) {
  const [deleteActorMutation] = useDeleteActorMutation();

  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        position: 'relative',
      })}
    >
      <ActorSelect id={actor.id} />

      <Avatar src={actor.image} size={120} radius={120} mx="auto" />

      <Text ta="center" fz="lg" weight={500} mt="md">
        {actor.name}
      </Text>

      {actor.hobbies.map((hobby) => (
        <Badge key={hobby.id} size="lg" mr="sm" mb="sm">
          {hobby.name}
        </Badge>
      ))}

      <Spoiler maxHeight={70} showLabel="Show more" hideLabel="Hide">
        <Text>{actor.description}</Text>
      </Spoiler>

      <Button variant="default" fullWidth mt="md">
        Edit
      </Button>

      <Button color="red.4" fullWidth mt="md" onClick={() => deleteActorMutation(actor.id)}>
        Delete
      </Button>
    </Paper>
  );
}
