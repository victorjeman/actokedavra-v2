import { Button } from '@mantine/core';
import { useAppSelector } from 'app/store-hook';
import { useDeleteActorMutation } from 'features/actor/api/actor-api';

export const ActorMultipleDelete = () => {
  const { selectedActorIds } = useAppSelector((state) => state.actor);
  const [deleteActorMutation] = useDeleteActorMutation();

  function deleteSelectedActors() {
    selectedActorIds.forEach((actorId) => deleteActorMutation(actorId));
  }

  return <Button onClick={deleteSelectedActors}>Delete selected actors</Button>;
};
