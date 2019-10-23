import { createMock } from "./mock";
import { Id, Image } from "../manager/types";

/**
 * API MOCKED TO SHOW ASYNC DATA HANDLING
 */
export interface Api {
  get: (id: Id) => Promise<Image>;
  list: () => Promise<Image[]>;
  delete: (id: Id) => Promise<Image>;
  patch: (id: Id, properties: Partial<Image>) => Promise<Image>;
}

export const createApi = (mock = createMock()): Api => {
  return {
    get: (id: Id) => {
      return new Promise(resolve => {
        setTimeout(() => resolve(mock.find(i => i.id === id)!), 1000);
      });
    },
    list: () => {
      return new Promise(resolve => {
        setTimeout(() => resolve(mock), 1000);
      });
    },
    delete: (id: Id) => {
      const image = mock.find(i => i.id === id)!;
      mock = mock.filter(i => i !== image);

      return new Promise(resolve => {
        setTimeout(() => resolve(image), 1000);
      });
    },
    patch: (id: Id, properties: Partial<Image>) => {
      const image = mock.find(i => i.id === id)!;
      Object.assign(image, properties);

      return new Promise(resolve => {
        setTimeout(() => resolve(image), 1000);
      });
    }
  };
};
