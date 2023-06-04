import { Button, Container, TextInput } from '@mantine/core';
import { NEW_ACTOR } from 'features/actor/constants/actor-constants';
import { Actor } from 'features/actor/types/actor-types';
import { Controller, useForm } from 'react-hook-form';

interface Props {
  actor?: Actor;
  onFormSubmit: (data: any) => void;
}

export const ActorForm = ({ actor = NEW_ACTOR, onFormSubmit }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: actor.image,
      name: actor.name,
      hobbies: actor.hobbies.toString(),
      description: actor.description,
      bestMovieScore: actor.bestMovieScore,
    },
  });

  return (
    <Container maw={600}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Controller
          name="image"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              defaultValue={field.value}
              label="Image"
              withAsterisk
              onChange={field.onChange}
              error={errors.image && 'This field is required'}
              mb="md"
            />
          )}
        />

        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              defaultValue={field.value}
              label="Name"
              withAsterisk
              onChange={field.onChange}
              error={errors.name && 'This field is required'}
              mb="md"
            />
          )}
        />

        <Controller
          name="hobbies"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              defaultValue={field.value}
              label="Hobbies"
              withAsterisk
              onChange={field.onChange}
              error={errors.hobbies && 'This field is required'}
              mb="md"
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              defaultValue={field.value}
              label="Description"
              withAsterisk
              onChange={field.onChange}
              error={errors.description && 'This field is required'}
              mb="md"
            />
          )}
        />

        <Controller
          name="bestMovieScore"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              defaultValue={field.value}
              label="Best score"
              withAsterisk
              onChange={field.onChange}
              error={errors.bestMovieScore && 'This field is required'}
              mb="md"
            />
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};
