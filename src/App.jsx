import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotfoundPage from "./pages/Notfound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
    // <div>
    //   <Navbar />
    //   <Header />
    //   <About />
    //   <Technology />
    //   <Project />
    //   <Contact />
    // </div>
  );
}
