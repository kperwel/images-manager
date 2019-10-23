import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useHistory } from "react-router";

import Grid from "../components/Grid";
import GridMock from "../components/GridMock";
import ImageView from "../components/Image";
import Tile from "../components/Tile";
import ProgressIndicator from "../components/Progress";

import { ImagesState, LIST_STATUS } from "./types";

import { createActions } from "../images/actions";
import { createApi } from "../api/api";
import { getImages, getListStatus } from "./selectors";

const List = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const images = useSelector(getImages);
  const listStatus = useSelector(getListStatus);

  const actions = createActions(createApi());

  const match = useRouteMatch<{ imageId: string }>();
  const selectedId = match ? match.params.imageId : null;

  useEffect(() => {
    dispatch(actions.getImages());
  }, []);

  if (listStatus === LIST_STATUS.FETCHING || listStatus === LIST_STATUS.INIT) {
    return (
      <>
        <ProgressIndicator inProgress={listStatus === LIST_STATUS.FETCHING} />
        <GridMock numberOfTiles={6} />
      </>
    );
  }

  return (
    <>
      <ProgressIndicator inProgress={false} />
      <Grid
        items={images}
        getKey={image => image.id}
        renderItem={image => (
          <Tile
            title={image.title}
            selected={image.id === selectedId}
            onClick={() => {
              history.push(`/${image.id}`);
            }}
          >
            <ImageView url={image.thumb_url} title={image.title} />
          </Tile>
        )}
      />
    </>
  );
};

export default List;
