import { FaFireAlt, FaRegPlusSquare } from "react-icons/fa";

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md fixed top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="/">
                    <span className="pr-2">推しボード</span>
                    <FaFireAlt className="text-rose-600" />
                </a>
            </div>
            <div className="flex-none">
                <a className="btn btn-ghost normal-case text-xl" href="/new">
                    <span className="pr-2">新規作成</span>
                    <FaRegPlusSquare />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
