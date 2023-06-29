import { ActorField } from 'features/actor/types/actor-types';

export const NEW_ACTOR = {
  image: 'https://i.pinimg.com/originals/62/4a/8a/624a8a3dbd3b709bd677c73922189326.jpg',
  sadImage: 'https://justfunfacts.com/wp-content/uploads/2017/02/jack-nicholson.jpg',
  name: 'Jack Nicholson',
  hobbies: 'Golfing, Watching Lakers games, Collecting art',
  description:
    'Jack Nicholson is an American actor, producer, writer, and director. Known for his iconic roles and distinctive voice, he has been one of the most prominent and respected actors in Hollywood for decades. Nicholson has delivered exceptional performances in films such as "One Flew Over the Cuckoo\'s Nest," "The Shining," and "Chinatown."',
  bestMovieScore: 8.7,
};

const ERROR_MESSAGE = 'This field is required';

export const ACTOR_DEFAULT_VALUES = NEW_ACTOR;

export const ACTOR_FIELDS: ActorField[] = [
  {
    name: 'image',
    label: 'Image',
    type: 'TextInput',
    required: true,
    errorMessage: ERROR_MESSAGE,
  },
  {
    name: 'sadImage',
    label: 'Sad image',
    type: 'TextInput',
    required: true,
    errorMessage: ERROR_MESSAGE,
  },
  {
    name: 'name',
    label: 'Name',
    type: 'TextInput',
    required: true,
    errorMessage: ERROR_MESSAGE,
  },
  {
    name: 'hobbies',
    label: 'Hobbies',
    type: 'TextInput',
    required: true,
    errorMessage: ERROR_MESSAGE,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'TextInput',
    required: true,
    errorMessage: ERROR_MESSAGE,
  },
  {
    name: 'bestMovieScore',
    label: 'Best score',
    type: 'TextInput',
    required: true,
    errorMessage: ERROR_MESSAGE,
  },
];
