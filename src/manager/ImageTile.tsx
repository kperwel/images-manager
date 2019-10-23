import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router";

import ImageView from "../components/Image";
import Tile from "../components/Tile";
import { getImage } from "./selectors";

interface ImageTileProps {
  id: string;
}

const ImageTile = ({ id }: ImageTileProps) => {
  const history = useHistory();
  const image = useSelector(getImage(id))!;

  const match = useRouteMatch<{ imageId: string }>();
  const selectedId = match ? match.params.imageId : null;

  return (
    <Tile
      title={image.title}
      selected={image.id === selectedId}
      onClick={() => {
        history.push(`/${image.id}`);
      }}
    >
      <ImageView url={image.thumb_url} title={image.title} />
    </Tile>
  );
};

export default ImageTile;
