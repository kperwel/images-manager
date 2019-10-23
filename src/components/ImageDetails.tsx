import React, { useRef } from "react";
import styled from "styled-components";
import TextMock from "./TextMock";
import Button from "./Button";
import ImageView from "./Image";

import { Image } from "../images/types";

const DescriptionStyled = styled.p`
  margin: 20px 0;
`;

const BottomMenuStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EditableItemStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  align-items: flex-start;
  align-self: flex-end;

  input {
    background: #fff;
    padding: 3px 10px;
    border: 1px solid #000;
  }
`;

interface EditableTitleProps {
  children: string;
  editing: boolean;
  toggleEditing: () => void;
  onSave: (name: string) => void;
}

const EditableTitle = ({
  children,
  editing,
  onSave,
  toggleEditing
}: EditableTitleProps) => {
  const inputEl = useRef<HTMLInputElement>(null);
  return (
    <EditableItemStyled>
      {editing ? (
        <>
          <input ref={inputEl} type="text" defaultValue={children} />
          <Button
            onClick={() =>
              onSave(inputEl.current ? inputEl.current.value : children)
            }
          >
            Save
          </Button>
        </>
      ) : (
        <>
          <h2>{children}</h2>
          <Button onClick={() => toggleEditing()}>Edit</Button>
        </>
      )}
    </EditableItemStyled>
  );
};

interface ImageDetailsProps {
  image: Image;
  isEditing: boolean;
  onEditRequest: () => void;
  onRenameRequest: (newName: string) => void;
  onRemoveRequest: () => void;
  isFetchingDescription: boolean;
}

const ImageDetails = ({
  image,
  isFetchingDescription,
  isEditing = false,
  onEditRequest,
  onRemoveRequest,
  onRenameRequest
}: ImageDetailsProps) => {
  return (
    <>
      <EditableTitle
        editing={isEditing}
        toggleEditing={onEditRequest}
        onSave={onRenameRequest}
      >
        {image.title}
      </EditableTitle>
      <ImageView url={image.url} title={image.title} />
      <DescriptionStyled>
        {isFetchingDescription ? <TextMock lines={6} /> : image.description}
      </DescriptionStyled>
      <BottomMenuStyled>
        <Button onClick={onRemoveRequest}>Delete</Button>
      </BottomMenuStyled>
    </>
  );
};

export default ImageDetails;
