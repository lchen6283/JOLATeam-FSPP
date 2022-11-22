import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

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
