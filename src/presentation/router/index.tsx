import ManagementPage from "@src/presentation/pages/ManagementPage";
import SigninPage from "@src/presentation/pages/SigninPage";
import StatisticsPage from "@src/presentation/pages/StatisticsPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/management" element={<ManagementPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
    </Routes>
  );
}
