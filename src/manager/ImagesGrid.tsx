import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Grid from "../components/Grid";
import GridMock from "../components/GridMock";
import ImageTile from "./ImageTile";
import ProgressIndicator from "../components/Progress";

import { LIST_STATUS } from "./types";

import actions from "./actions";
import { getListStatus, getImagesIds } from "./selectors";

interface ImagesGridProps {
  columns?: number;
}

const ImagesGrid = ({ columns }: ImagesGridProps) => {
  const dispatch = useDispatch();

  const ids = useSelector(getImagesIds);
  const listStatus = useSelector(getListStatus);

  useEffect(() => {
    if (listStatus !== LIST_STATUS.READY) {
      dispatch(actions.getImages());
    }
  }, [listStatus]);

  if (listStatus === LIST_STATUS.FETCHING || listStatus === LIST_STATUS.INIT) {
    return (
      <>
        <ProgressIndicator inProgress={listStatus === LIST_STATUS.FETCHING} />
        <GridMock numberOfTiles={6} columns={columns} />
      </>
    );
  }

  return (
    <>
      <ProgressIndicator inProgress={false} />
      <Grid
        items={ids}
        getKey={id => id}
        columns={columns}
        renderItem={id => <ImageTile id={id} />}
      />
    </>
  );
};

export default ImagesGrid;
