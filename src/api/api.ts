import { createMock } from "./mock";
import { Id, Image } from "../images/types";

export interface Api {
  get: (id: Id) => Promise<Image>;
  list: () => Promise<Image[]>;
  delete: (id: Id) => Promise<Image>;
  patch: (id: Id, properties: Partial<Image>) => Promise<Image>;
}

export const createApi = (mock = createMock()): Api => {
  return {
    get: (id: Id) => Promise.resolve(mock.find(i => i.id === id)!),
    list: () => Promise.resolve(mock),
    delete: (id: Id) => {
      const image = mock.find(i => i.id === id)!;
      mock = mock.filter(i => i !== image);
      return Promise.resolve(image);
    },
    patch: (id: Id, properties: Partial<Image>) => {
      const image = mock.find(i => i.id === id)!;
      Object.assign(image, properties);
      return Promise.resolve(image);
    }
  };
};
