import iconLocation from "../../assets/icons/Location.png";
import iconSalary from "../../assets/icons/money.png";
const FeaturedJob = ({ job }) => {
    const { logo, job_title, salary, location, remote_or_onsite, job_type, company_name } = job;
    console.log(job);
    return (
        <div>
            <div className="w-[548px] h-[292px] rounded-[10px] border mx-auto mt-4 p-6 ">
                <img className="w-[116.69px] h-[40px]" src={logo} alt="company-logo" />
                <h1 className="font-extrabold text-[20px] text-[#474747]">{job_title}</h1>
                <p className=" text-[#474747] font-semibold text-[18px]">{company_name}</p>
                <div className="flex gap-2 mt-2">
                    <div className="w-[91px] h-[40px] rounded-[4px] border ">
                        <h1 className="items-center text-center justify-center mt-1.5 font-extrabold text-[16px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">{remote_or_onsite}</h1>
                    </div>
                    <div className="w-[91px] h-[40px] rounded-[4px] border ">
                        <h1 className="items-center text-center justify-center mt-1.5 font-extrabold text-[16px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">{job_type}</h1>
                    </div>
                </div>

                <div className="flex gap-1 items-center mt-2 ">

                    <div className="flex items-center justify-center gap-1">
                        <img className="h-[24px] w-[24px]" src={iconLocation} alt="" />
                        <p className="text-[#757575] text-[20px] font-semibold">{location}</p>
                    </div>

                    <div className="flex items-center justify-center gap-1">
                        <img className="h-[24px] w-[24px]" src={iconSalary} alt="" />

                        <p className="text-[#757575] text-[20px] font-semibold">{salary}</p>
                    </div>
                </div>
                    <button className="text-[#FFFFFF] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[4px] w-[157px] h-[49px]  mt-5 text-[18px] font-extrabold ">View Details</button>

            </div>
        </div>
    );
};

export default FeaturedJob;