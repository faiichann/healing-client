import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const token = sessionStorage.getItem('token');
    const routeComponent = (props: any) => (token ? <Component {...props} /> : <Redirect to={{ pathname: '/landing' }} />);
    return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;