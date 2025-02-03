const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-Applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}
const saveJobApllication = (id) => {
    const storedJobApplication = getStoredJobApplication();
    const existingJOb = storedJobApplication.find(jobId => jobId === id);
    if(!existingJOb){
        storedJobApplication.push(id);
        localStorage.setItem('job-Applications', JSON.stringify(storedJobApplication));
    }

}

export { getStoredJobApplication, saveJobApllication }