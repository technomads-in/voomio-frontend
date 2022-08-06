import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aggregator from "./Components/Aggregator/Aggregator";
import NftGenerator from "./Components/NFT Generator/NftGenerator";

function App() {
  return (
    <>
      <Header />
      <NftGenerator></NftGenerator>
      {/*
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aggregator" element={<Aggregator />} />
      </Routes>
      <Footer /> */}
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
