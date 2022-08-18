import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aggregator from "./Components/Aggregator/Aggregator";
import Generate from "./Components/Generate Token/Generate";
import Manage from "./Components/Manage/Manage";
import NftGenerator from "./Components/NftGenerator/NftGenerator";
import Preview from "./Components/uploadNFT/Preview";
import NftDetails from "./Components/uploadNFT/NftDetails";

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
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aggregator" element={<Aggregator />} />
        <Route exact path="/generate" element={<Generate />} />
        <Route exact path="/manage" element={<Manage />} />
        <Route exact path="/nft-generator" element={<NftGenerator />} />
        <Route exact path="/preview" element={<Preview />} />
        <Route exact path="/nft-details" element={<NftDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
