import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utils/LocalStorage";
import AppliedJob from "./AppliedJob";
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'

const AppliedJobs = () => {
    const [jobsApplied, setJobsApplied] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApllied = jobs.filter(job =>  storedJobIds.includes(job.id)); 
            const jobsApllied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApllied.push(job);
                }
            }
            setJobsApplied(jobsApllied);
            // console.log(jobs, storedJobIds, jobsApllied);
        }
    }, [jobs]);
    return (
        <div>
            <div className='flex '>
                            <img className='absolute' src={bg1} alt="bg1" />
                            <h1 className='text-center w-full h-[220px] content-center font-extrabold text-[32px] text-[#1A1919]'>Applied Jobs</h1>
                            <img className='absolute ml-[1222px]' src={bg2} alt="" />
                        </div>
                        <div className="mt-[50px] mb-[80px]">
                {
                    jobsApplied.map(jobApplied => <AppliedJob
                        key={jobApplied.id}
                        jobApplied={jobApplied}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;