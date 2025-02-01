

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-xl font-bold">CareerHub</h2>
                        <p className="text-gray-400 mt-2">There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
                        <div className="flex space-x-3 mt-4">
                            <a href="#" className="text-white text-xl"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-white text-xl"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white text-xl"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Latest News</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Product</h3>
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li><a href="#">Prototype</a></li>
                            <li><a href="#">Plans & Pricing</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Support</h3>
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li><a href="#">Help Desk</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Become a Partner</a></li>
                            <li><a href="#">Developers</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4">
                    <p>&copy; 2023 CareerHub. All Rights Reserved</p>
                    <p>Powered by <span className="text-white font-semibold">CareerHub</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;