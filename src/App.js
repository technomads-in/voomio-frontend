import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aggregator from "./Components/Aggregator/Aggregator";
import Generate from "./Components/uploadNFT/Generate";
import Manage from "./Components/Manage/Manage";
import NftGenerator from "./Components/NftGenerator/NftGenerator";
import UploadNft from "./Components/uploadNFT/UploadNft";
import Preview from "./Components/uploadNFT/Preview";
import GenerateToken from "./Components/Generate Token/GenerateToken";
function App() {
  return (
    <>
      <Header />
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
        Z-index="9999999999999999999"
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aggregator" element={<Aggregator />} />
        <Route exact path="/nftgenerator" element={<NftGenerator />} />
        <Route exact path="/upload-nft" element={<UploadNft />} />
        <Route exact path="/manage" element={<Manage />} />
        <Route exact path="/generate" element={<GenerateToken />} />
        <Route exact path="/general" element={<Generate />} />
        <Route exact path="/preview" element={<Preview />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
