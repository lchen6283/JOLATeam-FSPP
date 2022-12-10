import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import "../App.css"

const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;



export default function Search({ city, setCity, handleClick }) {
  return (
    <div className="w-full p-0 px-0 md:mt-0 lg:flex-shrink-0  ">
      <div className="my-0 items-baseline text-white text-4xl md:text-5xl leading-12 font-extrabold font-[Open Sans]">
        Find a new
        <b className="text-smakorange text-5xl leading-8"> FLAVOR</b>
      </div>
      <div className="w-full mx-auto justify-center">
        <div 
        className="py-10 px-10 tems-center justify-center flex items-center space-y-24 md:space-y-0  flex-col md:flex-row justify evenly border-0 border-smaksalmon rounded-xl " > 
        {/* bg-[#b7324b] */}
          <GooglePlacesAutocomplete
            apiKey={googleAPIKey}
            suppressDefaultStyles={true}
            
            selectProps={{
              city,
              onChange: setCity,
              placeholder: "",
              styles: {
                input: (provided) => ({
                  ...provided,
                  color: 'gray',
                  width: '400px',
                  padding: '12px',
                  borderRadius: '0px',
                  fontSize: '1rem',
                  border: '4px',
                  textAlign: 'left'
                }),
                option: (provided) => ({
                  ...provided,
                  color: 'black',
                  fontSize: '1rem'
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'black',
                  fontSize: '1rem',
                  borderRadius: '0px',
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
          <div className="mt-8 inline-flex">
            <button
              onClick={handleClick}
              type="button"
              className=" py-0 px-0 text-white text-xl transition ease-in duration-200 text-center font-semibold shadow-xl focus:outline-none focus:ring-0 focus:ring-offset-0 rounded-br-xl rounded-tr-xl font-extrabold font-[Open Sans]  leading-8 focus:ring-smakHighlight border-[14px] border-[#b7324b] border-l-0"
            >
              <FaSearch className="w-14 h-14 py-3 px-2 my-0 fill-white border-0 border-smakorange rounded-br-lg rounded-tr-lg bg-smakorange" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
