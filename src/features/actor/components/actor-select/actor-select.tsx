import { Checkbox } from '@mantine/core';
import { useAppDispatch, useAppSelector } from 'app/store-hook';
import { setSelectedActorsAction } from 'features/actor/store/actor-slice';

interface Props {
  id: number;
}

export const ActorSelect = ({ id }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Checkbox onChange={() => dispatch(setSelectedActorsAction(id))} />
    </>
  );
};
