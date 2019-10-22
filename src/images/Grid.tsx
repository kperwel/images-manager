import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useHistory } from "react-router";

import Grid from "../components/Grid";
import ImageView from "../components/Image";
import Tile from "../components/Tile";
import ProgressIndicator from "../components/Progress";

import { ImagesState, LIST_STATUS } from "./types";

import { createActions } from "../images/actions";
import { createApi } from "../api/api";

const List = () => {
  const images = useSelector((state: ImagesState) => state.list.map((id) => state.items[id]));
  const listStatus = useSelector((state: ImagesState) => state.listStatus);
  const dispatch = useDispatch();
  const history = useHistory();
  const actions = createActions(createApi());

  const match = useRouteMatch<{imageId: string}>();
  const selectedId = match ? match.params.imageId : null;

  useEffect(()=> {
    dispatch(actions.getImages());
  }, []);

  return (
    <>
    <ProgressIndicator inProgress={listStatus === LIST_STATUS.FETCHING} />
    <Grid
      items={images}
      getKey={image => image.id}
      renderItem={image => (
        <Tile title={image.title} selected={image.id === selectedId} onClick={() => { history.push(`/${image.id}`) }}>
          <ImageView url={image.url} title={image.title} />
        </Tile>
      )}
    />
    </>
  );
};

export default List;
