import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Product from './components/product.jsx'
import Body from './components/Body.jsx'
import Category from './components/Category.jsx'
import HeroPage from './components/HeroPage.jsx'

const Router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
       path : "/" ,
       element : <>
        <HeroPage/>
        <Category props={"mobile"}/>
        <Category props={"TV"}/>
        <Category props={"audio"}/>
        <Category props={"gaming"}/>
       </>
      },
      {
        path :"/body",
        element : <Body/>
      },
      {
        path :"/body/:id",
        element : <Body/>
      },
      {
        path :"/product/:id",
        element :<Product/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={Router}/>)
