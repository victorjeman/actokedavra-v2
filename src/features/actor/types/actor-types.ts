interface Hobby {
  id: string;
  name: string;
}

export interface Actor {
  id: number;
  image: string;
  name: string;
  hobbies: Hobby[];
  description: string;
  bestMovieScore: number;
}
