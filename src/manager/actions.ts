import {
  GET_IMAGES_SUCCESS,
  GET_IMAGE_ERROR,
  GET_IMAGE_SUCCESS,
  GET_IMAGES_ERROR,
  GET_IMAGES_REQUEST,
  REMOVE_IMAGE_ERROR,
  REMOVE_IMAGE_SUCCESS,
  REMOVE_IMAGE_REQUEST,
  RENAME_IMAGE_SUCCESS,
  RENAME_IMAGE_ERROR,
  RENAME_IMAGE_REQUEST,
  GET_IMAGE_REQUEST
} from "./types";

import {
  GetImageRequestAction,
  GetImageSuccessAction,
  GetImageErrorAction,
  GetImagesRequestAction,
  RemoveImagesRequestAction,
  RemoveImagesErrorAction,
  RemoveImagesSuccessAction,
  RenameImageSuccessAction,
  RenameImageErrorAction,
  RenameImageRequestAction
} from "./types";

import { Image, Id, Error } from "./types";
import { Api, createApi } from "../api/api";
import { Dispatch } from "redux";

const getImageSuccess = (image: Image): GetImageSuccessAction => ({
  type: GET_IMAGE_SUCCESS,
  payload: image
});

const getImageError = (error: Error): GetImageErrorAction => ({
  type: GET_IMAGE_ERROR,
  payload: error
});

const getImageRequest = (id: Id): GetImageRequestAction => ({
  type: GET_IMAGE_REQUEST,
  payload: id
});

const getImagesSuccess = (images: Image[]) => ({
  type: GET_IMAGES_SUCCESS,
  payload: images
});

const getImagesError = (error: Error) => ({
  type: GET_IMAGES_ERROR,
  payload: error
});

const getImagesRequest = (): GetImagesRequestAction => ({
  type: GET_IMAGES_REQUEST
});

const removeImageSuccess = (id: Id): RemoveImagesSuccessAction => ({
  type: REMOVE_IMAGE_SUCCESS,
  payload: id
});

const removeImageError = (error: Error): RemoveImagesErrorAction => ({
  type: REMOVE_IMAGE_ERROR,
  payload: error
});

const removeImageRequest = (id: Id): RemoveImagesRequestAction => ({
  type: REMOVE_IMAGE_REQUEST,
  payload: id
});

const renameImageSuccess = (image: Image): RenameImageSuccessAction => ({
  type: RENAME_IMAGE_SUCCESS,
  payload: image
});

const renameImageError = (error: Error): RenameImageErrorAction => ({
  type: RENAME_IMAGE_ERROR,
  payload: error
});

const renameImageRequest = (
  id: Id,
  newName: string
): RenameImageRequestAction => ({
  type: RENAME_IMAGE_REQUEST,
  payload: {
    id,
    newName
  }
});

const getImage = (api: Api) => (id: Id) => (dispatch: Dispatch) => {
  dispatch(getImageRequest(id));
  return api
    .get(id)
    .then(image => dispatch(getImageSuccess(image)))
    .catch(error => dispatch(getImageError(error)));
};

const getImages = (api: Api) => () => (dispatch: Dispatch) => {
  dispatch(getImagesRequest());
  return api
    .list()
    .then(images => dispatch(getImagesSuccess(images)))
    .catch(error => dispatch(getImagesError(error)));
};

const removeImage = (api: Api) => (id: Id) => (dispatch: Dispatch) => {
  dispatch(removeImageRequest(id));
  return api
    .delete(id)
    .then(() => dispatch(removeImageSuccess(id)))
    .catch(error => dispatch(removeImageError(error)));
};

const renameImage = (api: Api) => (id: Id, newName: string) => (
  dispatch: Dispatch
) => {
  dispatch(renameImageRequest(id, newName));
  return api
    .patch(id, { title: newName })
    .then(image => dispatch(renameImageSuccess(image)))
    .catch(error => dispatch(renameImageError(error)));
};

export const createActions = (api: Api) => ({
  getImage: getImage(api),
  getImages: getImages(api),
  removeImage: removeImage(api),
  renameImage: renameImage(api)
});

export default createActions(createApi());
