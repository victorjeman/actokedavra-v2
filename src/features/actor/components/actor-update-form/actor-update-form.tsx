import { Button, Container, TextInput } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';

import { ACTOR_FIELDS } from 'features/actor/constants/actor-constants';
import { ActorFormValues } from 'features/actor/types/actor-types';

interface Props {
  formValues?: ActorFormValues;
  onFormSubmit: (data: any) => void;
}

export const ActorUpdateForm = ({ formValues, onFormSubmit }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    values: formValues,
  });

  return (
    <Container maw={600}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        {ACTOR_FIELDS.map((actorField) => (
          <Controller
            key={`field-${actorField.name}`}
            name={actorField.name}
            control={control}
            rules={{ required: actorField.required }}
            render={({ field }) => (
              <TextInput
                withAsterisk
                defaultValue={field.value}
                label={actorField.label}
                onChange={field.onChange}
                error={errors[actorField.name] && actorField.errorMessage}
                mb="md"
              />
            )}
          />
        ))}

        <Button type="submit">Update</Button>
      </form>
    </Container>
  );
};
