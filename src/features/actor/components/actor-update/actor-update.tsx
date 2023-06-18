import { useEffect } from 'react';
import { LoadingOverlay, Modal, useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { useAppDispatch, useAppSelector } from 'app/store-hook';
import { setActiveActorAction } from 'features/actor/store/actor-slice';
import { useLazyGetSingleActorQuery, useUpdateActorMutation } from 'features/actor/api/actor-api';

import { ActorUpdateForm } from 'features/actor/components/actor-update-form/actor-update-form';

export const ActorUpdate = () => {
  const theme = useMantineTheme();

  const dispatch = useAppDispatch();
  const { activeActor } = useAppSelector((state) => state.actor);

  const [lazyGetSingleActorQuery, getActorResponse] = useLazyGetSingleActorQuery();
  const [updateActorMutation, updateActorResponse] = useUpdateActorMutation();

  function updateActor(data: any) {
    updateActorMutation({ ...data, hobbies: data.hobbies.split(',') });
  }

  useEffect(() => {
    if (activeActor) lazyGetSingleActorQuery(activeActor.id);
  }, [activeActor]);

  useEffect(() => {
    if (updateActorResponse.isSuccess) {
      dispatch(setActiveActorAction(null));

      notifications.show({
        title: 'Actor update',
        message: `${updateActorResponse.data?.name} updated successfully!`,
        autoClose: 4000,
      });
    }
  }, [updateActorResponse]);

  return (
    <Modal
      centered
      title={`Edit ${activeActor?.name}`}
      opened={!!activeActor}
      transitionProps={{
        transition: 'slide-down',
      }}
      overlayProps={{
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      onClose={() => dispatch(setActiveActorAction(null))}
    >
      <LoadingOverlay visible={getActorResponse.isLoading} overlayBlur={2} />

      {getActorResponse.data && (
        <ActorUpdateForm onFormSubmit={updateActor} formValues={getActorResponse.data} />
      )}
    </Modal>
  );
};
