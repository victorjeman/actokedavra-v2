import { Grid, Paper, Stack, Text } from '@mantine/core';

import { useGetActorsQuery } from 'features/actor/api/actor-api';
import { ActorCreate } from 'features/actor/components/actor-create/actor-create';
import { ActorThumbnail } from 'features/actor/components/actor-thumbnail/actor-thumbnail';

export const ActorList = () => {
  const { data: actors } = useGetActorsQuery();

  return (
    <>
      <Grid gutter="2rem" my="xl">
        {actors?.map((actor) => (
          <Grid.Col span={4} key={`actor-${actor.id}`}>
            <ActorThumbnail actor={actor} />
          </Grid.Col>
        ))}
      </Grid>

      {actors?.length === 0 && (
        <Paper shadow="md" withBorder p="xl" maw={600} mx="auto">
          <Stack align="center">
            <Text size="xl" mb="xl">
              There are no actors here. Consider adding one.
            </Text>

            <ActorCreate />
          </Stack>
        </Paper>
      )}

      {actors?.length !== 0 && <ActorCreate />}
    </>
  );
};
