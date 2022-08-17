import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preview from "./Components/uploadNFT/Preview";
import Header from "./Components/Header/Header";
import Manage from "./Components/Manage/Manage";
import UploadNft from "./Components/uploadNFT/UploadNft";
import Generate from "./Components/Generate Token/Generate";
function App() {
  return (
    <>
      <Header></Header>
      {/* <UploadNft></UploadNft> */}
      {/* <Preview /> */}
      <Manage />
      <Generate></Generate>
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
        theme="colored"
      />
    </>
  );
}

export default App;
