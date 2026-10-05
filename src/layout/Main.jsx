import { Outlet } from "react-router-dom";
import Banner from "./TopBanner";
import Header from "./Header";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Banner />
      <Header />

      <Outlet />
      
      <Footer />
    </div>
  );
}
