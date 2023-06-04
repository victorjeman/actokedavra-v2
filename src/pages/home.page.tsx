import { Button } from '@mantine/core';
import { useAppDispatch, useAppSelector } from 'app/store-hook';
import { useGetActorsQuery } from 'features/actor/api/actor-api';
import { setActiveActorAction } from 'features/actor/store/actor-slice';

export function HomePage() {
  const dispatch = useAppDispatch();
  const { activeActor } = useAppSelector((state) => state.actor);

  const { data: actors } = useGetActorsQuery();

  function setActiveActor() {
    dispatch(setActiveActorAction({ name: 'Un nou actor active' }));
  }

  return (
    <>
      <Button type="button" onClick={setActiveActor}>
        Modifica actorul activ
      </Button>
      Actorul activ este: {activeActor?.name}
      {JSON.stringify(actors)}
    </>
  );
}
