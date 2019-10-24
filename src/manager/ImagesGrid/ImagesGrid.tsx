import React from "react";
import { useSelector } from "react-redux";

import Grid from "../../components/Grid";
import GridMock from "../../components/GridMock";
import ImageTile from "../ImageTile/ImageTile";
import ProgressIndicator from "../../components/Progress";

import { LIST_STATUS } from "../types";

import { useInitialListFetch } from "./hooks";
import { getListStatus, getImagesIds } from "../selectors";

interface ImagesGridProps {
  columns?: number;
}

const renderImageTile = (id: string) => <ImageTile id={id} />;
const getId = (id: string) => id;

const ImagesGrid = ({ columns }: ImagesGridProps) => {
  const ids = useSelector(getImagesIds);
  const listStatus = useSelector(getListStatus);

  useInitialListFetch();

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
        getKey={getId}
        columns={columns}
        renderItem={renderImageTile}
      />
    </>
  );
};

export default ImagesGrid;
