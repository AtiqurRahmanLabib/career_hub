import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'

const AppliedJob = ({ jobApplied}) => {
    const { job_title, logo , company_name} = jobApplied;
    return (
        <div className=''>
            <div className="w-[1120px] h-[200px] mt-[20px] items-center pl-4 flex rounded-[8px] border mx-auto">
                <div>
                    <img className='w-[160px] h-[160px]' src={logo} alt="" />
                </div>
                <div>
                    <h1>{job_title}</h1>
                    <p>{company_name}</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;
