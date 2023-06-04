import { Grid } from '@mantine/core';

import { useGetActorsQuery } from 'features/actor/api/actor-api';
import { ActorThumbnail } from 'features/actor/components/actor-thumbnail/actor-thumbnail';

export const ActorList = () => {
  const { data: actors } = useGetActorsQuery();

  return (
    <Grid>
      {actors?.map((actor) => (
        <Grid.Col span={4} key={`actor-${actor.id}`}>
          <ActorThumbnail actor={actor} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
