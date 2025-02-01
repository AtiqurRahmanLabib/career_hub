import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'
import taka from '../../assets/icons/money.png'
import IconPhone from '../../assets/icons/phone.png'
import calender from '../../assets/icons/calendar.png'
import Iconemail from '../../assets/icons/email.png'
import IconLocation from '../../assets/icons/location2.png'
import { useLoaderData, useParams } from "react-router-dom";

const Blogs = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;
    return (
        <div className='mb-[100px]'>
            <div className='flex '>
                <img className='absolute' src={bg1} alt="bg1" />
                <h1 className='text-center w-full h-[220px] content-center font-extrabold text-[32px] text-[#1A1919]'>Job Details</h1>
                <img className='absolute ml-[1222px]' src={bg2} alt="" />
            </div>

            <div className='w-[1321px] h-[550px] mx-auto mt-19 grid grid-cols-2 gap-5'>

            <div className='w-[830px] h-auto p-5 grid '>
            <h1 className='text-[#1A1919] font-extrabold text-[16px] '>Job Description: <span className='text-[#757575] font-medium text-[16px]'> {job_description}</span></h1>
            <h1 className='text-[#1A1919] font-extrabold text-[16px] mt-5'>Job Responsibility: <span className='text-[#757575] font-medium text-[16px]'>{job_responsibility}</span></h1>
            <h1 className='text-[#1A1919] font-extrabold text-[16px] mt-5'>Educational Requirements: <br /> <span className='text-[#757575] font-medium text-[16px]'>{educational_requirements}</span></h1>
            <h1 className='text-[#1A1919] font-extrabold text-[16px] mt-5'>Experiences: <br /> <span className='text-[#757575] font-medium text-[16px]'>{experiences}</span></h1>
            </div>

                <div className='w-[424px] h-[461px] rounded-[8px] ml-[225px]  bg-gradient-to-r from-[#7E90FE]/10 to-[#9873FF]/10'>
                        <h1 className='mt-5 ml-8 font-extrabold text-[20px] text-[#1A1919]'>Job Details</h1>
                        <hr className='w-[364px] mx-auto mt-2' />
                        <div>
                            <div className='mt-5 ml-8'>
                                <div className='flex items-center gap-2'>
                                <img className='w-[18px] h-[18px]' src={taka} alt="" />
                                <h1 className='text-[#474747] text-[20px] font-bold'>Salary: <span className='text-[#757575] text-[20px] font-medium'>{salary}(Per Month)</span></h1>
                                </div>
                                <div className='flex items-center gap-2 mt-5'>
                                    <img className='w-[18px] h-[18px]' src={calender} alt="" />
                                    <h1 className='text-[#474747] text-[20px] font-bold' >Job Title: <span className='text-[#757575] text-[20px] font-medium'>{job_title}</span></h1>
                                </div>
                                <h1 className='mt-5 ml-2 font-extrabold text-[20px] text-[#1A1919]'>Contact Information</h1>
                            </div>
                                <hr className='w-[364px] mx-auto mt-4' />

                                <div className='flex items-center gap-2 mt-5 ml-8'>
                                <img className='w-[18px] h-[18px]' src={IconPhone} alt="" />
                                <h1 className='text-[#474747] text-[20px] font-bold'>Phone: <span className='text-[#757575] text-[20px] font-medium'>{contact_information.phone}</span></h1>
                                </div>

                                <div className='flex items-center gap-2 mt-5 ml-8'>
                                <img className='w-[18px] h-[18px]' src={Iconemail} alt="" />
                                <h1 className='text-[#474747] text-[20px] font-bold'>Email: <span className='text-[#757575] text-[20px] font-medium'>{contact_information.email}</span></h1>
                                </div>

                                <div className='flex items-center gap-2 mt-5 ml-8'>
                                <img className='w-[18px] h-[18px]' src={IconLocation} alt="" />
                                <h1 className='text-[#474747] text-[20px] font-bold'>Address: <span className='text-[#757575] text-[20px] font-medium'>{contact_information.address}</span></h1>
                                </div>
                        </div>
                </div>
                <button className="text-[#FFFFFF] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[4px] w-[425px] h-[65px] text-[20px] font-extrabold ml-[894px]">Apply Now</button>
            </div>

        </div>
    );
};

export default Blogs;