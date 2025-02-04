import { Link } from 'react-router-dom';
import iconLocation from '../../assets/icons/location2.png'
import iconSalary from '../../assets/icons/money.png'
const AppliedJob = ({ jobApplied }) => {
    const { job_title, logo, company_name, remote_or_onsite, job_type, salary, location, id } = jobApplied;
    return (
        <div className=''>
            <div className="w-[1120px] h-[200px] mt-[20px] items-center pl-4 flex rounded-[8px] border mx-auto">
                <div className='bg-[#F4F4F4] w-[200px] h-[160px] pt-15 pl-5'>
                    <img className='w-[160px] h-[50px]' src={logo} alt="" />
                </div>
                <div className='ml-3'>
                    <h1>{job_title}</h1>
                    <p>{company_name}</p>
                    <div className='flex gap-2'>
                        <div className="w-[91px] h-[40px] rounded-[4px] border ">
                            <h1 className="items-center text-center justify-center mt-1.5 font-extrabold text-[16px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">{remote_or_onsite}</h1>
                        </div>
                        <div className="w-[91px] h-[40px] rounded-[4px] border ">
                            <h1 className="items-center text-center justify-center mt-1.5 font-extrabold text-[16px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">{job_type}</h1>
                        </div>
                        <div>
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
                </div>
                <Link to={`/blogs/${id}`} className='ml-[390px]'><button className="text-[#FFFFFF] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[4px] w-[157px] h-[49px]  mt-5 text-[18px] font-extrabold ">View Details</button></Link>
            </div>
        </div>
    );
};
export default AppliedJob;


