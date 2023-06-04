import { Checkbox } from '@mantine/core';
import { useAppDispatch } from 'app/store-hook';
import { setSelectedActorsAction } from 'features/actor/store/actor-slice';

interface Props {
  id: number;
}

export const ActorSelect = ({ id }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Checkbox
      size="xl"
      radius="50%"
      onChange={() => dispatch(setSelectedActorsAction(id))}
      sx={{ position: 'absolute', top: '-0.9rem', right: '-0.9rem' }}
    />
  );
};
