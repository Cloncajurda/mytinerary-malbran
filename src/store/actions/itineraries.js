import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const itinerary_actions = createAsyncThunk(
    'read_itineraries_from_city',
    async(id)=> {
        return {
            itineraries: await axios(apiUrl + "/itineraries?city_id=" + id)
                .then((res) => {
                    return res.data.response;
                })
                .catch((err) => {
                    return null;
                }),
        };
    });
export default itinerary_actions