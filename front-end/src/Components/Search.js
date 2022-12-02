import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

export default function Search({ city, setCity, handleClick }) {


  return (
    <div className="w-full p-2 px-10 md:mt-0 lg:flex-shrink-0  bg-smakHighlight">
       <div className="p-3 md:mt-0 inline-flex rounded-md shadow top-17 left-1/2 -translate-x-1/6 -translate-y-1/6 font-['Fraunces']">
        <span className="p-7 items-baseline text-white text-4xl md:text-6xl -translate-y-10">
          LET'S FIND A NEW<b className="text-smakorange"> FLAVOR!</b>
       
        <div className="pt-5 text-2xl text-white text-center ">
          Choose a location to get started.
        </div> 
        </span>

      </div>
<div className="w-1/2 mx-auto justify-center">
      <GooglePlacesAutocomplete
        apiKey={googleAPIKey}
        selectProps={{
          city,
          onChange: setCity,
          placeholder: "Enter Your Location.",
        }}
      />
      </div>
      <div className="mt-12 inline-flex rounded-md shadow">
            <button
              onClick={handleClick}
              type="button"
              className="py-4 px-8 bg-smakorange hover:bg-smakHighlight focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg font-['Fraunces']"
            >
              START
            </button>
          </div>
                
    </div>
  );
}
