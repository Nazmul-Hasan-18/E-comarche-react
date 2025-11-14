
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './page/Root';
import Home from './page/homePage/Home';
import About from './page/aboutPage/About';
import ContactPage from './page/contactPage/ContactPage';
import SingleProduct from './page/shared/singleProduct/Component/SingleProduct';
import Component from './page/shared/singleProduct/Component';
import ShopPage from './page/ShopPage/ShopPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<ContactPage/>,
      },
      {
        path:'singleProduct/:id',
        element:<SingleProduct/>
      }
      ,{
        path:"shopPage",
        element:<ShopPage/>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
