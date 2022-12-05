import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

export default function Search({ city, setCity, handleClick }) {


  return (
    <div className="w-full p-2 px-10 md:mt-0 lg:flex-shrink-0  ">
      <div className="mb-4 items-baseline text-white text-4xl md:text-5xl leading-12 font-extrabold font-[Open Sans]">
        Let's <b className="text-smakorange text-[5rem] leading-8"> SMAK</b> something new...
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
      <div className="mt-8 inline-flex">
        <button
          onClick={handleClick}
          type="button"
          className="py-2 px-24 hover:bg-orange-400 hover:opacity-75 focus:ring-smakorange focus:ring-offset-gray-200 text-white text-xl transition ease-in duration-200 text-center font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-2xl font-extrabold font-[Open Sans] bg-orange-600"
        >
          Search
        </button>
      </div>
    </div>
  );
}
