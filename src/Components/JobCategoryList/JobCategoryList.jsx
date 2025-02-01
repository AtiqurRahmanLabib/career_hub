import { useEffect, useState } from "react";
import JobCetegory from "./JobCetegory";


const JobCategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('../../../public/data/categories.json')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="mt-[150px]">
            <h1 className="text-[#1A1919] text-[48px] font-extrabold text-center">Job Category List</h1>
            <p className="text-[16px] font-medium text-[#757575] text-center mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-center gap-4">
            {
                categories.map(categorie => <JobCetegory
                    key={categorie.id}
                    categorie={categorie}
                    log={categorie.logo}
                    category_name={categorie.category_name}
                     availability={categorie.availability}

                ></JobCetegory>)
            }
            </div>
        </div>

    );
};

export default JobCategoryList;