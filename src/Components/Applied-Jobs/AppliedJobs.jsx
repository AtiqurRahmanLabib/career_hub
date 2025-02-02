import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { saveJobApplications } from "../../utils/LocalStorage";

const AppliedJobs = () => {
   const jobs = useLoaderData();
   console.log(jobs);
    useEffect(() => {
        const storedJobIds = saveJobApplications();
        if (storedJobIds.length) {
            console.log('Applied jobs:', storedJobIds);
        }
    }, [])
    return (
        <div>
            <h1>Apply jobs</h1>
        </div>
    );
};

export default AppliedJobs;