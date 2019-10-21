import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ImagesState } from './types';
import { createActions } from './actions';
import { createApi } from '../api/api';

const DetailsStyled = styled.div`
    width: 400px;
    background: red;
    height: 100%;
`;

const Details = () => {
    const image = useSelector((state: ImagesState) => state.items[0]);
    const dispatch = useDispatch();
    const actions = createActions(createApi());
    useEffect(()=> {
      dispatch(actions.getImage("0"));
    }, [])

    return <DetailsStyled>{JSON.stringify(image)}</DetailsStyled> 
};

export default Details;