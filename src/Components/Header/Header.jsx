import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="w-[1450px] mx-auto">
                <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                    <a href="#" className="font-extrabold text-[32px] text-[#1A1919]">CareerHub</a>
                    <div className="flex space-x-4 text-[16px] font-medium">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'h-[35px] w-[100px] flex items-center justify-center hover:bg-gray-200 rounded-[8px] active-link'
                                    : 'h-[35px] w-[100px] flex items-center justify-center hover:bg-gray-200 rounded-[8px] inactive-link'
                            }
                        >
                            <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent text-center">
                                Statistics
                            </span>
                        </NavLink>
                        <NavLink
                            to="/appliedJobs"
                            className={({ isActive }) =>
                                isActive
                                    ? 'h-[35px] w-[100px] text-center flex items-center justify-center hover:bg-gray-200 rounded-[8px] active-link'
                                    : 'h-[35px] w-[100px] text-center flex items-center justify-center hover:bg-gray-200 rounded-[8px] inactive-link'
                            }
                        >
                            Applied Jobs
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                                isActive
                                    ? 'h-[35px] w-[100px] text-center flex items-center justify-center hover:bg-gray-200 rounded-[8px] active-link'
                                    : 'h-[35px] w-[100px] text-center flex items-center justify-center hover:bg-gray-200 rounded-[8px] inactive-link'
                            }
                        >
                            Blog
                        </NavLink>
                    </div>
                    <button className="w-[190px] h-[65px] rounded-[8px] text-[#FFFFFF] font-extrabold text-[20px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF]" type="button">Start Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
