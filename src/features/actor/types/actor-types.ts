interface Hobby {
  id: string;
  name: string;
}

interface ActorNew {
  image: string;
  sadImage: string;
  name: string;
  hobbies: Hobby[];
  description: string;
  bestMovieScore: number;
}

export interface Actor extends ActorNew {
  id: number;
}

export interface ActorFormValues {
  image: string;
  sadImage: string;
  name: string;
  hobbies: string;
  description: string;
  bestMovieScore: number;
}

export interface ActorField {
  name: 'image' | 'sadImage' | 'name' | 'hobbies' | 'description' | 'bestMovieScore';
  label: string;
  type: 'TextInput';
  required: boolean;
  errorMessage: string;
}
