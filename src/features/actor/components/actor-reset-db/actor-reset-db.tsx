import { Button } from '@mantine/core';

import { useLazyResetActorsQuery } from 'features/actor/api/actor-api';

export const ActorResetDb = () => {
  const [lazyResetActorsQuery] = useLazyResetActorsQuery();

  function resetDbAndReloadPage() {
    lazyResetActorsQuery();
    window.setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return <Button onClick={resetDbAndReloadPage}>Reset the actor list</Button>;
};
