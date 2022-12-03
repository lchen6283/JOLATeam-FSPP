import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

export default function Search({ city, setCity, handleClick }) {


  return (
    <div className="w-full p-2 px-10 md:mt-0 lg:flex-shrink-0  ">
      <div className="mb-4 items-baseline text-white text-4xl md:text-6xl leading-12 font-extrabold font-[Open Sans]">
        Try something<b className="text-smakorange text-[5rem] leading-8"> NEW!</b>
       
        {/* <div className="pt-5 text-2xl text-white text-center ">
          Choose a location to get started.
        </div> */}
      </div>
      <div className="w-full mx-auto justify-center">
        <div className="border-orange-400 border-[0.5px] py-4 px-4 rounded-3xl shadow-[0_8px_1px_1px_rgb(244,162,89)]">
        <GooglePlacesAutocomplete
          apiKey={googleAPIKey}
          selectProps={{
            city,
            onChange: setCity,
            placeholder: "Choose a location to get started..",
          }}
        />
        </div>
      </div>
      <div className="mt-6 inline-flex rounded-md shadow">
        <button
          onClick={handleClick}
          type="button"
          className="py-2 px-24 bg-smakorange hover:bg-smakHighlight focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full font-extrabold font-[Open Sans]"
        >
          START
        </button>
      </div>
    </div>
  );
}
