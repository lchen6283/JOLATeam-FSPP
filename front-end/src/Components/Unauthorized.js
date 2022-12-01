import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

	return (
		<div className="h-full bg-white">
			<div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
				<h2 className="text-2xl  text-black sm:text-4xl">
					<span className="block text-gray-900 font-extrabold text-6xl mt-10 mb-10">
						Unauthorized
					</span>
					<span className="block text-gray-500">
						You do not have access to the requested page.
					</span>
				</h2>
				<div className="lg:mt-0 lg:flex-shrink-0">
					<div className="mt-12 inline-flex rounded-md shadow">
						<button 
							onClick={goBack}
							type="button" 
							className="py-3 px-6 bg-red-600 hover:bg-red-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-3xl "
						>
							Go Back
						</button>
					</div>
				</div>
			</div>
    </div>
	)
}

export default Unauthorized
