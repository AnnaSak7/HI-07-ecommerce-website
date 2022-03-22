import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchPage = (props) => {
  const { name = 'all' } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts({ name: name !== 'all' ? name : '' }));
  }, [dispatch, name]);
  return <div>SearchPage</div>;
};

export default SearchPage;
