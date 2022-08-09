import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aggregator from "./Components/Aggregator/Aggregator";
import NftGenerator from "./Components/NftGenerator/NftGenerator";
import UploadNft from "./Components/UploadNft/UploadNft";

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <NftGenerator></NftGenerator>
      {/* <Home /> */}
      {/*
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aggregator" element={<Aggregator />} />
      </Routes>
      <Footer /> */}
=======
>>>>>>> 54e252f5b60a71cfa92cccc5f0a6f2bfe7b8dca3
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
