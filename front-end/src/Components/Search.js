import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;



export default function Search({ city, setCity, handleClick }) {
  return (
    <div className="w-full p-2 px-0 md:mt-0 lg:flex-shrink-0  ">
      <div className="mb-4 items-baseline text-white text-4xl md:text-5xl leading-12 font-extrabold font-[Open Sans]">
        Find a new
        <b className="text-smakorange text-5xl leading-8"> FLAVOR</b>
      </div>
      <div className="w-full mx-auto justify-center">
        <div className="border-orange-400 border-[0.5px] py-4 px-4 rounded-3xl shadow-[0_8px_1px_1px_rgb(244,162,89)]">
          <GooglePlacesAutocomplete
            apiKey={googleAPIKey}
            suppressDefaultStyles={true}
            
            selectProps={{
              city,
              onChange: setCity,
              placeholder: "Choose a location to get started..",
              styles: {
                input: (provided) => ({
                  ...provided,
                  color: 'gray',
                }),
                option: (provided) => ({
                  ...provided,
                  color: 'black',
                  backgroud: 'yellow',
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'black',
                }),
              },
              
            }}
            
            
            // styles={{
            //   container: {
            //     flex: 1,
            //   },
            //   textInputContainer: {
            //     flexDirection: 'row',
            //   },
            //   textInput: {
            //     backgroundColor: '#FFFFFF',
            //     height: 44,
            //     borderRadius: 15,
            //     paddingVertical: 5,
            //     paddingHorizontal: 10,
            //     fontSize: 15,
            //     flex: 1,
            //   },
            //   poweredContainer: {
            //     justifyContent: 'flex-end',
            //     alignItems: 'center',
            //     borderBottomRightRadius: 5,
            //     borderBottomLeftRadius: 5,
            //     borderColor: '#c8c7cc',
            //     borderTopWidth: 0.5,
            //   },
            //   powered: {},
            //   listView: {},
            //   row: {
            //     backgroundColor: '#FFFFFF',
            //     padding: 13,
            //     height: 44,
            //     flexDirection: 'row',
            //   },
            //   separator: {
            //     height: 0.5,
            //     backgroundColor: '#c8c7cc',
            //   },
            //   description: {},
            //   loader: {
            //     flexDirection: 'row',
            //     justifyContent: 'flex-end',
            //     height: 20,
            //   },
            // }}
          />
        </div>
      </div>
      <div className="mt-8 inline-flex">
        <button
          onClick={handleClick}
          type="button"
          className=" py-3 px-[8rem] text-white text-xl transition ease-in duration-200 text-center font-semibold shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl font-extrabold font-[Open Sans] bg-yellow-400"
        >
          Search
        </button>
      </div>
    </div>
  );
}
