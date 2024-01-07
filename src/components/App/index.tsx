import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import routing from 'containers/routes';

const router = createBrowserRouter(createRoutesFromElements(routing()), {
  basename: '/goit-react-hw-08-phonebook',
});

const App = () => <RouterProvider router={router} />;

export default App;
