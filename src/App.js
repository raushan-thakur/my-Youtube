import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
        {/**
       *
       * Head
       * Body
       *  Sidebar
       *    MenuItems
       *  MainContainer
       *    ButtonsList
       *      VideoContainer
                VideoCard
       */}
      </Provider>
    </div>
  );
}

export default App;
