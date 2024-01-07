import { useSpring, animated } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleDrawer } from "../../features/theme";
const Sidebar = () => {
  const { drawer } = useSelector((state: RootState) => state.themeReducer);
  const sidebarAnimation = useSpring({
    right: drawer ? 0 : -280,
  });
  const dispatch = useDispatch();
  const close = () => dispatch(toggleDrawer());
  return (
    <animated.div
      style={{ ...sidebarAnimation }}
      className={
        "fixed top-0 bg-[#fff] border-l border-[#fff] px-[1.5rem] h-screen right-0 overflow-hidden w-[280px]"
      }
    >
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-[2rem] text-[#283252]">پنل علی</h4>
        <button onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-narrow-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </button>
      </div>
      <div className="h-[85px] flex items-center">
        <img />
      </div>
    </animated.div>
  );
};

export default Sidebar;
