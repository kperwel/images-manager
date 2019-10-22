import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useRouteMatch, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { ImagesState, IMAGE_STATUS, LIST_STATUS } from "./types";
import { createActions } from "./actions";
import { createApi } from "../api/api";
import Button from "../components/Button";
import Image from "../components/Image";
import ProgressIndicator from "../components/Progress";

const DetailsStyled = styled.div`
  background: #eee;
  height: 100%;
  padding: 10px;
`;

const Details = () => {
  const match = useRouteMatch<{ imageId: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const actions = createActions(createApi());

  const selectedId = match ? match.params.imageId : null;

  const remove = useCallback(() => {
    selectedId && dispatch(actions.removeImage(selectedId));
  }, [selectedId]);

  const rename = useCallback(() => {
    selectedId && dispatch(actions.renameImage(selectedId, "New name"));
  }, [selectedId]);

  useEffect(() => {
    if (selectedId) {
      dispatch(actions.getImage(selectedId));
    }
  }, [selectedId]);

  const image = useSelector((state: ImagesState) =>
    selectedId ? state.items[selectedId] : null
  );

  const imageStatus = useSelector((state: ImagesState) =>
    selectedId ? state.status[selectedId] : null
  );

  const listStatus = useSelector((state: ImagesState) => state.listStatus);

  useEffect(() => {
    if (
      !image &&
      (listStatus === LIST_STATUS.READY || imageStatus === IMAGE_STATUS.READY)
    ) {
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
        <>
          <h2>
            {image.title} {image.id}
          </h2>
          <Image url={image.url} title={image.title} />
          <p>
            {imageStatus === IMAGE_STATUS.FETCHING
              ? "Fetching details..."
              : image.description}
          </p>
          <Button onClick={remove}>Delete</Button>
          <Button onClick={rename}>Rename</Button>
        </>
      ) : (
        <>Select image to see details</>
      )}
    </DetailsStyled>
  );
};

export default Details;
