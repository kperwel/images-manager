// import { createMock } from "./mock";
import { Id, Image } from '../images/types';

export interface Api {
  get: (id: Id) => Promise<Image>;
  list: () => Promise<Image[]>;
  delete: (id: Id) => Promise<Image>;
  patch: (id: Id, properties: Partial<Image>) => Promise<Image>;
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
