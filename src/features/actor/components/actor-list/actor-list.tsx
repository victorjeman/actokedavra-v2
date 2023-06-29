import { useMemo, useState } from 'react';
import { Box, Grid, Paper, SegmentedControl, Stack, Text } from '@mantine/core';

import { useGetActorsQuery } from 'features/actor/api/actor-api';
import { Actor } from 'features/actor/types/actor-types';
import { ActorCreate } from 'features/actor/components/actor-create/actor-create';
import { ActorThumbnail } from 'features/actor/components/actor-thumbnail/actor-thumbnail';

export const ActorList = () => {
  const { data: actors } = useGetActorsQuery();
  const [sortType, setSortType] = useState<'ascending' | 'descending' | 'default'>('default');

  function sortActors() {
    if (actors) {
      const actorsClone: Actor[] = JSON.parse(JSON.stringify(actors));

      return actorsClone?.sort((a, b) => {
        if (sortType === 'ascending') return a.name.localeCompare(b.name);
        if (sortType === 'descending') return b.name.localeCompare(a.name);
        return 1;
      });
    }

    return actors;
  }

  const sortedActors: Actor[] | undefined = useMemo(sortActors, [actors, sortType]);

  return (
    <>
      <Box>
        <Text size="lg" mb="sm">
          Sort actors
        </Text>

        <SegmentedControl
          onChange={(value: 'ascending' | 'descending' | 'default') => setSortType(value)}
          defaultValue="default"
          data={[
            { label: 'default', value: 'default' },
            { label: 'ascending', value: 'ascending' },
            { label: 'descending', value: 'descending' },
          ]}
        />
      </Box>

      <Grid gutter="2rem" my="xl">
        {sortedActors?.map((actor) => (
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
