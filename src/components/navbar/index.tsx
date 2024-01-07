import { useDispatch, useSelector } from "react-redux";
import userIcon from "../../assets/images/user-1.jpg";
import { toggleDrawer } from "../../features/theme";
import { RootState } from "../../store";
const Navbar = () => {
  const dispatch = useDispatch();
  const { drawer } = useSelector((state: RootState) => state.themeReducer);

  return (
    <div>
      <nav className="px-[3rem] flex h-[60px]">
        {!drawer && (
          <button onClick={() => dispatch(toggleDrawer())}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
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
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
        )}
        <div className="mr-auto flex items-center">
          <img src={userIcon} className="w-10 h-10 rounded-full" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
