import { Image } from "../images/types";

export const createMock = (): Image[] => {
  return Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index.toString(),
      url: require(`../assets/image${index}.jpg`),
      thumb_url: require(`../assets/image${index}_thumb.jpg`),
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et viverra volutpat. Nunc efficitur nisi at lacus volutpat, vitae ultrices metus interdum. Proin lacinia metus eu elit mattis scelerisque. Vivamus consectetur vel risus condimentum varius. Vestibulum sit amet metus non tellus lacinia consectetur eu vel elit."
    }));
};
