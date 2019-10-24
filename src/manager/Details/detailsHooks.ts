import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { IMAGE_STATUS, LIST_STATUS } from "../types";
import actions from "../actions";
import { getImage, getImageStatus, getListStatus } from "../selectors";
import { useSelectedId } from "../commonHooks";

export function useRenameHandling() {
  const { renameImage } = actions;
  const dispatch = useDispatch();
  const selectedId = useSelectedId();
  const [editing, setEditing] = useState(false);
  const image = useSelector(getImage(selectedId), shallowEqual);

  const rename = useCallback(
    (name: string) => {
      selectedId && dispatch(renameImage(selectedId, name));
    },
    [selectedId, renameImage, dispatch]
  );

  useEffect(() => {
    // If image has changed, change turn off editing mode
    setEditing(false);
  }, [image]);

  return { rename, editing, turnOnEditing: () => setEditing(true) };
}

export function useRemoveCallback() {
  const { removeImage } = actions;
  const dispatch = useDispatch();
  const selectedId = useSelectedId();
  return useCallback(() => {
    selectedId && dispatch(removeImage(selectedId));
  }, [selectedId, removeImage, dispatch]);
}

export function useDetailsFetchingOnImageSelection() {
  const dispatch = useDispatch();
  const selectedId = useSelectedId();
  const { getImage } = actions;
  useEffect(() => {
    if (selectedId) {
      // Start fetching details on new image selection
      dispatch(getImage(selectedId));
    }
  }, [getImage, selectedId, dispatch]);
}

export function useHomepageRedirectionOnMissingImage() {
  const selectedId = useSelectedId();
  const imageStatus = useSelector(getImageStatus(selectedId));
  const listStatus = useSelector(getListStatus);
  const image = useSelector(getImage(selectedId), shallowEqual);
  const history = useHistory();

  const isFetchingFullyDone: boolean =
    listStatus === LIST_STATUS.READY || imageStatus === IMAGE_STATUS.READY;

  useEffect(() => {
    if (!image && isFetchingFullyDone) {
      // if no image found and fetch status is ready, redirect to homeapge
      history.push("/");
    }
  }, [image, history, isFetchingFullyDone]);
}
