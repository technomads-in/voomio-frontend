import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Preview from "./Components/uploadNFT/Preview";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aggregator from "./Components/Aggregator/Aggregator";
import NftGenerator from "./Components/NftGenerator/NftGenerator";
import UploadNft from "./Components/UploadNft/UploadNft";
import Details from "./Components/Details/Details";
import Manage from "./Components/Manage/Manage";
import Generate from "./Components/Generate Token/Generate";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Header></Header>
      {/* <UploadNft></UploadNft> */}
      {/* <Preview /> */}
      {/* <NftGenerator></NftGenerator> */}
      <Manage />
      {/* <Generate></Generate>  */}
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

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aggregator" element={<Aggregator />} />
        <Route exact path="/nftgenerator" element={<NftGenerator />} />
        <Route exact path="/upload-nft" element={<UploadNft />} />
        <Route exact path="/create" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
