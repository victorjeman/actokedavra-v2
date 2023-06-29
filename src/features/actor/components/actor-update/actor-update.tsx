import { useEffect } from 'react';
import { LoadingOverlay, Modal, useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { useAppDispatch, useAppSelector } from 'app/store-hook';
import { setActiveActorAction } from 'features/actor/store/actor-slice';
import { useLazyGetActorQuery, useUpdateActorMutation } from 'features/actor/api/actor-api';
import { ActorForm } from 'features/actor/components/actor-form/actor-form';

export const ActorUpdate = () => {
  const theme = useMantineTheme();

  const dispatch = useAppDispatch();
  const { activeActorId } = useAppSelector((state) => state.actor);

  const [lazyGetActorQuery, getActorResponse] = useLazyGetActorQuery();
  const [updateActorMutation, updateActorResponse] = useUpdateActorMutation();

  function updateActor(data: any) {
    updateActorMutation({ ...data, hobbies: data.hobbies.split(',') });
  }

  const activeActor = getActorResponse?.data;

  useEffect(() => {
    if (activeActorId) lazyGetActorQuery(activeActorId);
  }, [activeActorId]);

  useEffect(() => {
    if (updateActorResponse.isSuccess) {
      dispatch(setActiveActorAction(null));

      notifications.show({
        title: 'Actor update',
        message: `${updateActorResponse.data?.name} updated successfully!`,
        autoClose: 3000,
      });
    }
  }, [updateActorResponse]);

  return (
    <Modal
      centered
      opened={!!activeActorId && !!activeActor}
      title={`Edit ${activeActor?.name}`}
      transitionProps={{ transition: 'slide-down' }}
      overlayProps={{
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      onClose={() => dispatch(setActiveActorAction(null))}
    >
      <LoadingOverlay visible={getActorResponse.isLoading} overlayBlur={2} />

      <ActorForm onFormSubmit={updateActor} formValues={activeActor} submitText="Update" />
    </Modal>
  );
};
