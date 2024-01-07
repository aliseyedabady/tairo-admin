import { animated, useSpring } from "@react-spring/web";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { RootState } from "../store/index";
import { MainLayoutProps } from "../types/layouts/main";
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { drawer } = useSelector((state: RootState) => state.themeReducer);
  const sidebarAnimation = useSpring({
    marginRight: drawer ? 280 : 0,
  });
  return (
    <div className="bg-[#EBEEF4] min-h-screen ">
      <Sidebar />
      <Navbar />
      <animated.div className={"mr-auto"} style={{ ...sidebarAnimation }}>
        <div className="px-[3rem]">{children}</div>
      </animated.div>
    </div>
  );
};

export default MainLayout;
