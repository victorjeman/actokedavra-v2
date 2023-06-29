import { Button } from '@mantine/core';
import { useAppSelector } from 'app/store-hook';
import { useDeleteActorMutation, useGetActorsQuery } from 'features/actor/api/actor-api';

export const ActorMultipleDelete = () => {
  const { data: actors } = useGetActorsQuery();

  const { selectedActorIds } = useAppSelector((state) => state.actor);
  const [deleteActorMutation] = useDeleteActorMutation();

  function deleteSelectedActors() {
    selectedActorIds.forEach((actorId) => deleteActorMutation(actorId));
  }

  return actors?.length !== 0 && selectedActorIds.length !== 0 ? (
    <Button onClick={deleteSelectedActors} color="red.4">
      Delete selected actors
    </Button>
  ) : null;
};
