import React from 'react';
// @ts-ignore: allow importing CSS without type declarations
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Exercises from './pages/Exercises';
import Exercise from './pages/Exercise';
import RootLayout from './pages/Root';
import History from './pages/History';
import Goals from './pages/Goals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'exercises',
        element: <Exercises />,
      },
      { path: 'exercise/:id', element: <Exercise /> },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'goals',
        element: <Goals />,}
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
