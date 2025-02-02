// const getStoredJobApplications = () => {
//     const jobApplications = localStorage.getItem('jobApplications');
//     if (jobApplications){
//         return JSON.parse(jobApplications);
//     }
//     else{
//         return [];
//     }
// };
// const saveJobApplications = (id) => {
//     const jobApplications = getStoredJobApplications();
//     const exsit = jobApplications.find(jobId => jobId === id);
//     if (!exsit){
//         jobApplications.push(id);
//         localStorage.setItem('jobApplications', JSON.stringify(jobApplications));
//     }
// };


// export default {getStoredJobApplications, saveJobApplications};
export const getStoredJobApplications = () => {
    const jobApplications = localStorage.getItem('jobApplications');
    return jobApplications ? JSON.parse(jobApplications) : [];
};

export const saveJobApplications = (id) => {
    const jobApplications = getStoredJobApplications();
    if (!jobApplications.includes(id)) {
        jobApplications.push(id);
        localStorage.setItem('jobApplications', JSON.stringify(jobApplications));
    }
};