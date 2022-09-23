export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md fixed top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="/">推しボード</a>
            </div>
            <div className="flex-none" />
        </div>
    );
}

export default Navbar;