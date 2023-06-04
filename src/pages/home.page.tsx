import { useAppDispatch, useAppSelector } from 'app/store-hook';
import { useGetActorsQuery } from 'features/actor/api/actor-api';
import { setActiveActorAction } from 'features/actor/store/actor-slice';

import { ColorSchemeToggle } from 'shared/components/color-scheme-toggle/color-scheme-toggle';

export function HomePage() {
  const dispatch = useAppDispatch();
  const { activeActor } = useAppSelector((state) => state.actor);

  const { data: actors } = useGetActorsQuery();

  function setActiveActor() {
    dispatch(setActiveActorAction({ name: 'Un nou actor active' }));
  }

  return (
    <>
      <button type="button" onClick={setActiveActor}>
        Modifica actorul activ
      </button>
      Actorul activ este: {activeActor?.name}
      {JSON.stringify(actors)}
      <ColorSchemeToggle />
    </>
  );
}
