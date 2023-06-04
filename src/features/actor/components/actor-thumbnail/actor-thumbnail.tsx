import { Avatar, Text, Button, Paper, Badge, Spoiler } from '@mantine/core';
import { Actor } from 'features/actor/types/actor-types';

interface Props {
  actor: Actor;
}

export function ActorThumbnail({ actor }: Props) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
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
    </Paper>
  );
}
