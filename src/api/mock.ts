import { Image } from "../images/types";

export const createMock = (): Image[] => {
  return Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index.toString(),
      url: "http://placehold.it/300x200",
      title: "Title",
      description: "Description"
    }));
};
