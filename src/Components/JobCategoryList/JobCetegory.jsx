import PropTypes from 'prop-types';
const JobCetegory = ({ categorie }) => {
    const { logo, category_name, availability } = categorie;
    console.log(categorie);
    return (
        <div className="">
            <div className="items-center w-[311px] h-[243px] bg-[#F7F7F7] rounded-[8px] mt-5 pl-8 pt-5">
                <div>
                    <img className="w-[100px] -[100px] pt-5 " src={logo} alt="logo" />
                </div>
                <div>
                    <h1 className="font-extrabold text-[20px] text-[#474747] pt-5">{category_name}</h1>
                    <p className="font-medium text-[16px] text-[#A3A3A3]">{availability}</p>
                </div>
            </div>

        </div>
    );
};
JobCetegory.propTypes = {
    category: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        category_name: PropTypes.string.isRequired,
        availability: PropTypes.string.isRequired,
    }).isRequired,
};

export default JobCetegory;