import HomePage from "@pages/Home/Home";
import UiPage from "@pages/_ui/Ui";
import Header from "@components/Header/Header";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import PolicyPage from "@pages/Policy/Policy";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />

        <Suspense fallback={<div className=""></div>}>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="policy" element={<PolicyPage />} />
            <Route path="ui" element={<UiPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
