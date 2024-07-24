import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

const config = {
	headers: {
		"Content-Type": "application/json",
		"X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_APIKEY,
		"X-Goog-FieldMask": "places.photos,places.displayName,places.id",
	},
};

export const GetPlaceDetails = async (data) =>
	axios.post(BASE_URL, data, config);