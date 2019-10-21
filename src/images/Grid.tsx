import React, { useEffect } from "react";

import Grid from "../components/grid";
import ImageView from "../components/image";
import Tile from "../components/tile";

import { useSelector, useDispatch } from "react-redux";
import { ImagesState } from "./types";

import { createActions } from "../images/actions";
import { createApi } from "../api/api";

const List = () => {
  const images = useSelector((state: ImagesState) => state.list.map((id) => state.items[id]));
  const dispatch = useDispatch();
  const actions = createActions(createApi());
  useEffect(()=> {
    dispatch(actions.getImages());
  }, [])

  return (
    <Grid
      items={images}
      getKey={image => image.id}
      renderItem={image => (
        <Tile title={image.title}>
          <ImageView url={image.url} title={image.title} />
        </Tile>
      )}
    />
  );
};

export default List;
