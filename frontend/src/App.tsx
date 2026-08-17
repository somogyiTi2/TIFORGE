import React from 'react';
// @ts-ignore: allow importing CSS without type declarations
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Exercises from './pages/Exercises';
import Exercise from './pages/Exercise';
import RootLayout from './pages/Root';

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
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
