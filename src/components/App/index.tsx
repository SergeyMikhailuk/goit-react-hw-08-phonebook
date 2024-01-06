import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import routing from 'containers/routes';

const router = createBrowserRouter(createRoutesFromElements(routing()));

const App = () => <RouterProvider router={router} />;

export default App;
