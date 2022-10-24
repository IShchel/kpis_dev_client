import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Mpe1gem from "./pages/mpe1gem";
import RootLayout from "./components/rootLayout";
import Main from "./pages/main";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
        <Route path="/mpe1gem" element={<Mpe1gem />} />
      </Route>
    </>
  )
);

function App() {
  // const { regions_fo,
  // mpe1gem_list} = useContext(Context);
  // console.log(regions_fo);

  return <RouterProvider router={router} />;
}

export default App;
