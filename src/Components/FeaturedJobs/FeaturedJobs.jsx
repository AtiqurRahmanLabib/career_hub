import { useState } from "react";
import { useEffect } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [datalength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('../../../public/data/jobs.json')
            .then(response => response.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div>
            <h1 className="text-[48px] font-extrabold text-[#1A1919] text-center mt-[80px]">Featured Jobs</h1>
            <p className="font-medium text-[16px] text-center mt-2 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-y-5 mt-8 mb-[60px] w-[1400px] mx-auto">
                {
                    jobs.slice(0, datalength).map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>
            <div className="flex justify-center mb-[100px] ">
               <div className={datalength >= jobs.length ? "hidden" : "block"}>
               <button onClick={() => {
                    setDataLength(datalength + 4)

                }} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[8px] w-[174px] h-[65px] font-extrabold text-[20px]  text-white">See All Jobs</button>
               </div>
            </div>
        </div>

    );
};

export default FeaturedJobs;