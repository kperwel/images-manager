import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { IMAGE_STATUS, LIST_STATUS } from "./types";
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

const Details = () => {
  const match = useRouteMatch<{ imageId: string }>();
  const history = useHistory();
  const dispatch = useDispatch();

  const { removeImage, renameImage, getImage: fetchImage } = actions;

  const selectedId = match ? match.params.imageId : null;
  const [editing, setEditing] = useState(false);

  const imageStatus = useSelector(getImageStatus(selectedId));
  const listStatus = useSelector(getListStatus);
  const image = useSelector(getImage(selectedId));

  const remove = useCallback(() => {
    selectedId && dispatch(removeImage(selectedId));
  }, [selectedId]);

  const rename = useCallback(
    (name: string) => {
      selectedId && dispatch(renameImage(selectedId, name));
    },
    [selectedId]
  );

  useEffect(() => {
    if (selectedId) {
      // Start fetching details on new image selection
      dispatch(fetchImage(selectedId));
    }
  }, [selectedId]);
  useEffect(() => {
    // If image has changed, change turn off editing mode
    setEditing(false);
  }, [image, setEditing]);


  const isFetchingFullyDone : boolean =
    listStatus === LIST_STATUS.READY || imageStatus === IMAGE_STATUS.READY;
  useEffect(() => {
    if (!image && isFetchingFullyDone) {
      // if no image found and fetch status is ready, redirect to homeapge
      history.push("/");
    }
  }, [image, imageStatus, listStatus]);

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
          onEditRequest={() => setEditing(true)}
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
