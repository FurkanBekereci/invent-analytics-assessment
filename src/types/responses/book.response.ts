export type BookResponse = {
  id: number;
  name: string;
};

export type SingleBookResponse = BookResponse & {
  score: number;
};
