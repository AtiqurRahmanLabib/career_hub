import img from "../../assets/images/user.png";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
const Statistics = () => {
    return (
        <div>
            <div className="flex w-[1450px] h-[644px] mx-auto justify-between">
                <div className="mt-15">
                    <h1
                        className="text-6xl font-bold mt-5 text-start text-[80px] text-[#1A1919] ml-5"
                    >Take One Step
                        <br />
                        Closer To Your
                        <br />
                        <span
                            className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent"
                        >Dream Job
                        </span>
                    </h1>
                    <p
                        className="font-medium text-[18px] text-[#757575] mt-5 ml-6"
                    >Explore thousands of job opportunities with all the
                        <br />
                        information you need. Its your future. Come find it. Manage all
                        <br />
                        your job application from start to finish.</p>
                    <button className="text-[#FFFFFF] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[8px] w-[172px] h-[65px] ml-5 mt-5">Get Started</button>
                </div>

                <div>
                    <img className="w-[716px] h-[644px] ml- " src={img} alt="user" />
                </div>

            </div>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>

        </div>
    );
};

export default Statistics;