import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from './state/store.ts';
// Components
import { Layout } from './layout/Layout.tsx';
import { NotFoundPage } from './NotFoundPage.tsx';
// import { MapContainer } from './components/MapContainer.tsx';
// import { FireMap } from './components/FireMap.tsx';
// import { DamageMap } from './components/DamageMap.tsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <App />,
        // children: [
        //   {
        //     path: '/',
        //     element: <MapContainer children={<FireMap />} />,
        //   },
        //   {
        //     path: '/damage',
        //     element: <MapContainer children={<DamageMap />} />,
        //   },
        // ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
