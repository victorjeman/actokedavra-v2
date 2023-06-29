import { useEffect } from 'react';
import {
  Avatar,
  Text,
  Button,
  Paper,
  Badge,
  Spoiler,
  useMantineTheme,
  Container,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';
import Marquee from 'react-marquee-slider';

import { useAppDispatch } from 'app/store-hook';
import { ActorSelect } from 'features/actor/components/actor-select/actor-select';
import { Actor } from 'features/actor/types/actor-types';
import { useDeleteActorMutation } from 'features/actor/api/actor-api';
import { setActiveActorAction } from 'features/actor/store/actor-slice';

interface Props {
  actor: Actor;
}

export function ActorThumbnail({ actor }: Props) {
  const dispatch = useAppDispatch();

  const [deleteActorMutation, response] = useDeleteActorMutation();
  const theme = useMantineTheme();

  function deleteActor() {
    modals.openConfirmModal({
      centered: true,
      labels: { confirm: 'Do it', cancel: 'Cancel' },
      confirmProps: { color: 'red', variant: 'outline' },

      transitionProps: { transition: 'slide-down' },

      overlayProps: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      },

      children: (
        <Container>
          <Avatar src={actor.sadImage} size={200} radius="50%" mx="auto" mb="md" />

          <Text align="center" size="lg">
            <Text span>Delete</Text>{' '}
            <Text span fw="600">
              {actor.name}
            </Text>
            ?
          </Text>
        </Container>
      ),

      onConfirm: () => deleteActorMutation(actor.id),
    });
  }

  useEffect(() => {
    if (response.isSuccess) {
      notifications.show({
        color: 'red',
        title: 'Actor delete',
        message: `${actor.name} deleted successfully!`,
        autoClose: 3000,
      });
    }
  }, [response]);

  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={() => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        position: 'relative',
      })}
    >
      <ActorSelect id={actor.id} />

      <Avatar src={actor.image} size={200} radius={200} mx="auto" />

      <Text ta="center" fz="lg" weight={500} mt="md">
        {actor.name}
      </Text>

      {/* @ts-ignore */}
      <Marquee velocity={20} direction="rtl">
        {actor.hobbies.map((hobby) => (
          <Badge key={hobby.id} size="lg" mr="sm" mb="sm">
            {hobby.name}
          </Badge>
        ))}
      </Marquee>

      <Spoiler maxHeight={70} showLabel="Show more" hideLabel="Hide">
        <Text>{actor.description}</Text>
      </Spoiler>

      <Button
        variant="default"
        fullWidth
        mt="md"
        onClick={() => dispatch(setActiveActorAction(actor.id))}
      >
        Edit
      </Button>

      <Button color="red.4" fullWidth mt="md" onClick={() => deleteActor()}>
        Delete
      </Button>
    </Paper>
  );
}
