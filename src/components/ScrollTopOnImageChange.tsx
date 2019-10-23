import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

const ScrollTopOnImageChange = () => {
    const match = useRouteMatch<{ imageId: string }>();
    const selectedId = match ? match.params.imageId : null;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedId]);
    return null;
};

export default ScrollTopOnImageChange;