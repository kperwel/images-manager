import React from "react";
import ImageDetails from "../src/components/ImageDetails";
import { Image } from "../src/images/types";

import { action } from "@storybook/addon-actions";

export default {
  title: "Images Details"
};

const mockImage: Image = {
  id: "0",
  url: require("./assets/image0.jpg"),
  thumb_url: require("./assets/image0_thumb.jpg"),
  title: "Mocked title",
  description: "Mocked description"
};

export const defaultView = () => (
  <ImageDetails
    image={mockImage}
    isEditing={false}
    isRemoving={false}
    isFetchingDescription={false}

    onEditRequest={action("Edit request")}
    onRemoveRequest={action("Remove request")}
    onRenameRequest={action("Rename request")}
  />
);


export const editing = () => (
  <ImageDetails
    image={mockImage}
    isEditing={true}
    isRemoving={false}
    isFetchingDescription={false}

    onEditRequest={action("Edit request")}
    onRemoveRequest={action("Remove request")}
    onRenameRequest={action("Rename request")}
  />
);

export const removing = () => (
  <ImageDetails
    image={mockImage}
    isEditing={false}
    isRemoving={true}
    isFetchingDescription={false}

    onEditRequest={action("Edit request")}
    onRemoveRequest={action("Remove request")}
    onRenameRequest={action("Rename request")}
  />
);

export const duringDescriptionFetching = () => (
  <ImageDetails
    image={mockImage}
    isEditing={false}
    isRemoving={false}
    isFetchingDescription={true}

    onEditRequest={action("Edit request")}
    onRemoveRequest={action("Remove request")}
    onRenameRequest={action("Rename request")}
  />
);
