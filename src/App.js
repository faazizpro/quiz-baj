
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Cards from './components/Cards/Cards';
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
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: '/card/:cardId',
          element: <Cards></Cards>,
          loader: async ({params}) =>{
            // console.log(params.cardId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.cardId}`)
          }
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
    },
    {
      path: '*',
      element: <div>This Route Does Not Exists</div>
    }
  ])

  return (
    <div className="">
        <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
