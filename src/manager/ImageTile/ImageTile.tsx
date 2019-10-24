import React, { useCallback } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useRouteMatch, useHistory } from "react-router";

import ImageView from "../../components/Image";
import Tile from "../../components/Tile";
import { getImage } from "../selectors";

interface ImageTileProps {
  id: string;
}

const ImageTile = ({ id }: ImageTileProps) => {
  const history = useHistory();
  const image = useSelector(getImage(id), shallowEqual)!;

  const match = useRouteMatch<{ imageId: string }>();
  const selectedId = match ? match.params.imageId : null;

  const onClickCallback = useCallback(() => {
    history.push(`/${image.id}`);
  }, [image]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Tile
      title={image.title}
      selected={image.id === selectedId}
      onClick={onClickCallback}
    >
      <ImageView url={image.thumb_url} title={image.title} />
    </Tile>
  );
};

export default ImageTile;
