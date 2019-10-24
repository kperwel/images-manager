import { ImagesState } from "./types";

export const getImageStatus = (selectedId: string | null) => (
  state: ImagesState
) => (selectedId ? state.status[selectedId] : null);
export const getImage = (selectedId: string | null) => (state: ImagesState) =>
  selectedId ? state.items[selectedId] : null;
export const getListStatus = (state: ImagesState) => state.listStatus;

export const getImagesIds = (state: ImagesState) => state.list;
export const getImages = (state: ImagesState) => state.list.map((id) => state.items[id])