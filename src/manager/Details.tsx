import React, { useEffect, useCallback, useState, Dispatch } from "react";
import styled from "styled-components";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { IMAGE_STATUS, LIST_STATUS, Image } from "./types";
import actions from "./actions";
import ImageDetails from "../components/ImageDetails";
import ProgressIndicator from "../components/Progress";

import { getImageStatus, getListStatus, getImage } from "./selectors";

const DetailsStyled = styled.div`
  background: #eee;
  height: 100%;
  padding: 0 20px 10px;
  display: flex;
  flex-direction: column;
`;

function useRenameHandling(
  image: Image | null,
  selectedId: string | null,
  renameImage: (id: string, name: string) => void,
  dispatch: Dispatch<any>
) {
  const [editing, setEditing] = useState(false);

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

function useRemoveCallback(
  selectedId: string | null,
  removeImage: (id: string) => void,
  dispatch: Dispatch<any>
) {
  return useCallback(() => {
    selectedId && dispatch(removeImage(selectedId));
  }, [selectedId, removeImage, dispatch]);
}

function useDetailsFetchingOnImageSelection(
  fetchImage: (id: string) => void,
  selectedId: string | null,
  dispatch: Dispatch<any>
) {
  useEffect(() => {
    if (selectedId) {
      // Start fetching details on new image selection
      dispatch(fetchImage(selectedId));
    }
  }, [fetchImage, selectedId, dispatch]);
}

function useHomepageRedirectionOnMissingImage(
  imageStatus: IMAGE_STATUS | null,
  listStatus: LIST_STATUS,
  image: Image | null
) {
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

const Details = () => {
  const match = useRouteMatch<{ imageId: string }>();
  const dispatch = useDispatch();

  const { removeImage, renameImage, getImage: fetchImage } = actions;

  const selectedId = match ? match.params.imageId : null;

  const imageStatus = useSelector(getImageStatus(selectedId));
  const listStatus = useSelector(getListStatus);
  const image = useSelector(getImage(selectedId), shallowEqual);

  const remove = useRemoveCallback(selectedId, removeImage, dispatch);
  const { rename, editing, turnOnEditing } = useRenameHandling(
    image,
    selectedId,
    renameImage,
    dispatch
  );

  useDetailsFetchingOnImageSelection(fetchImage, selectedId, dispatch);
  useHomepageRedirectionOnMissingImage(imageStatus, listStatus, image);

  return (
    <DetailsStyled>
      <ProgressIndicator
        inProgress={
          imageStatus !== null &&
          [
            IMAGE_STATUS.FETCHING,
            IMAGE_STATUS.PATCHING,
            IMAGE_STATUS.REMOVING
          ].includes(imageStatus)
        }
      />
      {image ? (
        <ImageDetails
          image={image}
          isEditing={editing}
          isRemoving={imageStatus === IMAGE_STATUS.REMOVING}
          isFetchingDescription={imageStatus === IMAGE_STATUS.FETCHING}
          onEditRequest={turnOnEditing}
          onRemoveRequest={remove}
          onRenameRequest={rename}
        />
      ) : (
        <>Select image to see details</>
      )}
    </DetailsStyled>
  );
};

export default Details;
