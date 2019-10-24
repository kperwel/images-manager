import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { IMAGE_STATUS } from "../types";
import { ImageDetails, ProgressIndicator } from "../../components";

import { getImageStatus, getImage } from "../selectors";

import {
  useRemoveCallback,
  useRenameHandling,
  useDetailsFetchingOnImageSelection,
  useHomepageRedirectionOnMissingImage
} from "./detailsHooks";
import { useSelectedId } from "../commonHooks";

const DetailsStyled = styled.div`
  background: #eee;
  height: 100%;
  padding: 0 20px 10px;
  display: flex;
  flex-direction: column;
`;

const Details = () => {
  const selectedId = useSelectedId();

  const imageStatus = useSelector(getImageStatus(selectedId));
  const image = useSelector(getImage(selectedId));

  const remove = useRemoveCallback();
  const { rename, editing, turnOnEditing } = useRenameHandling();

  useDetailsFetchingOnImageSelection();
  useHomepageRedirectionOnMissingImage();

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
