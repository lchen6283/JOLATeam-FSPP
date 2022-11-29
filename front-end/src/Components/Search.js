
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;
// const googleAPIKey = 'AIzaSyCNPgsc2bvHNYZyr5lQ7cq1JerEhg81yzA';
// const googleAPIKey = 'AIzaSyA5RXptdvU_R8fULTBs2NGjGcgJZfBUnU8';
console.log(googleAPIKey)

export default function Search({ city, setCity }) {
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={googleAPIKey}
        selectProps={{
          city,
          onChange: setCity,
          placeholder: "Find Smaks near you",
        }}
      />
    </div>
  );
}
