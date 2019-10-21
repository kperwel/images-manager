import { Image } from "../api/types";

export const GET_IMAGE_REQUEST = 'GET_IMAGE_REQUEST';
export const GET_IMAGE_ERROR = 'GET_IMAGE_ERROR';
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS';

export const GET_IMAGES_REQUEST = 'GET_IMAGES_REQUEST';
export const GET_IMAGES_ERROR = 'GET_IMAGES_ERROR';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';

export const REMOVE_IMAGE_REQUEST = "REMOVE_IMAGE_REQUEST";
export const REMOVE_IMAGE_ERROR = "REMOVE_IMAGE_ERROR";
export const REMOVE_IMAGE_SUCCESS = "REMOVE_IMAGE_SUCCESS";

export const RENAME_IMAGE_REQUEST = "RENAME_IMAGE_REQUEST";
export const RENAME_IMAGE_ERROR = "RENAME_IMAGE_ERROR";
export const RENAME_IMAGE_SUCCESS = "RENAME_IMAGE_SUCCESS";

export type Id = string;
export type Error = string;

export interface Image {
    id: Id,
    url: string,
    title: string,
    description: string;
}

export interface GetImageRequestAction {
  type: typeof GET_IMAGE_REQUEST
  payload: Id
}

export interface GetImageErrorAction {
  type: typeof GET_IMAGE_ERROR
  payload: Error
}

export interface GetImageSuccessAction {
  type: typeof GET_IMAGE_SUCCESS
  payload: Image
}

export interface GetImagesRequestAction {
  type: typeof GET_IMAGES_REQUEST
}

export interface GetImagesErrorAction {
  type: typeof GET_IMAGES_ERROR
  payload: Error
}

export interface GetImagesSuccessAction {
  type: typeof GET_IMAGES_SUCCESS
  payload: Image[]
}

export interface RemoveImagesRequestAction {
  type: typeof REMOVE_IMAGE_REQUEST
}

export interface RemoveImagesErrorAction {
  type: typeof REMOVE_IMAGE_ERROR
  payload: Error
}

export interface RemoveImagesSuccessAction {
  type: typeof REMOVE_IMAGE_SUCCESS
  payload: Id
}

export interface RenameImageRequestAction {
  type: typeof RENAME_IMAGE_REQUEST
  payload: {
      id: Id,
      newName: string,
  }
}

export interface RenameImageErrorAction {
  type: typeof RENAME_IMAGE_ERROR
  payload: Error
}

export interface RenameImageSuccessAction {
  type: typeof RENAME_IMAGE_SUCCESS,
  payload: Image,
}