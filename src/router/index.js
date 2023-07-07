import { memo, useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import routes from './config';

export default memo(() => {
	
	const location = useLocation();
	const elements = useRoutes(routes);

	useEffect(() => {
		console.log(location);
	}, [location]);

	return elements;
});