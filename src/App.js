import { ToastContainer } from "react-toastify";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </>
  );
};
