import { Button } from '@mantine/core';

import { useLazyResetActorsQuery } from 'features/actor/api/actor-api';

export const ActorResetDb = () => {
  const [lazyResetActorsQuery] = useLazyResetActorsQuery();

  return <Button onClick={() => lazyResetActorsQuery()}>Reset the actor list</Button>;
};
