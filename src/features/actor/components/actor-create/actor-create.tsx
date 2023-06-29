import { useEffect } from 'react';
import { Box, Button, Modal, useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { useAppDispatch, useAppSelector } from 'app/store-hook';
import { setIsFormVisible } from 'features/actor/store/actor-slice';
import { useCreateActorMutation } from 'features/actor/api/actor-api';
import { ActorForm } from 'features/actor/components/actor-form/actor-form';

export const ActorCreate = () => {
  const theme = useMantineTheme();

  const dispatch = useAppDispatch();
  const { isFormVisible } = useAppSelector((state) => state.actor);

  const [createActorMutation, createActorResponse] = useCreateActorMutation();

  function createActor(data: any) {
    createActorMutation({ ...data, hobbies: data.hobbies.split(',') });
  }

  useEffect(() => {
    if (createActorResponse.isSuccess) {
      dispatch(setIsFormVisible(false));

      notifications.show({
        title: 'Actor create',
        message: `${createActorResponse.data?.name} created successfully!`,
        autoClose: 3000,
      });
    }
  }, [createActorResponse]);

  return (
    <>
      <Modal
        transitionProps={{
          transition: 'slide-down',
        }}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        opened={isFormVisible}
        onClose={() => dispatch(setIsFormVisible(false))}
        title="Add new actor"
        centered
      >
        <ActorForm onFormSubmit={createActor} submitText="Create" />
      </Modal>

      <Box ta="center">
        <Button onClick={() => dispatch(setIsFormVisible(true))} size="lg" w="400px">
          Add new actor
        </Button>
      </Box>
    </>
  );
};
