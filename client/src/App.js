import { Routes, Route } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import ProtectedRoute from "./components/routing/ProtectedRoute";
function App() {
  return (
    <div className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth authRoute="login" />} />
        <Route path="/register" element={<Auth authRoute="register" />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute protectedRoute="dashboard" />}
        />
        <Route
          path="/about"
          element={<ProtectedRoute protectedRoute="about" />}
        />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
