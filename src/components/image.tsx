import React from 'react';
import styled from 'styled-components';

interface ImageProps {
    url: string,
    title: string,
}

const ImageStyled = styled.img`
    width: 100%;
`;

const Image = ({url, title}: ImageProps ) => <ImageStyled alt={title} title={title} src={url}/>;

export default Image;