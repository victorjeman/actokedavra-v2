import { Button, Modal } from '@mantine/core';

import { useAppDispatch, useAppSelector } from 'app/store-hook';
import { useCreateActorMutation } from 'features/actor/api/actor-api';
import { ActorForm } from 'features/actor/components/actor-form/actor-form';
import { setIsFormVisible } from 'features/actor/store/actor-slice';

export const ActorCreate = () => {
  const dispatch = useAppDispatch();
  const { isFormVisible } = useAppSelector((state) => state.actor);

  const [createActorMutation] = useCreateActorMutation();

  function createNewActor(data: any) {
    createActorMutation({ ...data, hobbies: data.hobbies.split(',') });
  }

  return (
    <>
      <Modal
        opened={isFormVisible}
        onClose={() => dispatch(setIsFormVisible(false))}
        title="Add new actor"
        centered
      >
        <ActorForm onFormSubmit={createNewActor} />
      </Modal>

      <Button onClick={() => dispatch(setIsFormVisible(true))}>Add new actor</Button>
    </>
  );
};
