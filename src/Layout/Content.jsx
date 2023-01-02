import { Route, Routes } from "react-router-dom";

import List from "../pages/List";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";

const Content = () => {
  return (
    <div style={{marginTop: '10vh'}}>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Content;
