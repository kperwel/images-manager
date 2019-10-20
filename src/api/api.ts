import { createMock } from "./mock";
import { Image } from "./types";

interface Api {
  get: <T>(id: T) => Promise<T extends string ? Image : Image[]>;
  delete: (id: string) => Promise<{}>;
  patch: (id: string, properties: Partial<Image>) => Image;
}

// const createApi = (): Api => {
//   const mock = createMock();

//   return {
//     get: id =>
//       new Promise(resolve =>
//         resolve(id ? mock.find(image => image.id === id) : mock);
//       )
//   };
// };
