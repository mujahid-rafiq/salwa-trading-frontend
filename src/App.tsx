import { ToastContainer } from "react-toastify";
import AppRoutes from "./app-routes/AppRoutes";

const App = () => {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
};

export default App;