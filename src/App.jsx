import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import View from "./pages/View";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="view" element={<View />} />
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
