
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import BodyCard from './components/BodyCard/BodyCard';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Hero></Hero>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
        
      ]
    }
  ])

  return (
    <div className="">
        <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
