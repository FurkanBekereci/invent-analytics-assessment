export type UserResponse = {
  id: number;
  name: string;
};

export type SingleUserResponse = UserResponse & {
  books: {
    past: {
      name: string;
      userScore: number;
    }[];
    present: {
      name: string;
    }[];
  };
};
