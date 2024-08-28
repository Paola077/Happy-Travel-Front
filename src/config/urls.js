export const BASE_URL = "http://localhost:3001";

//public endpoints
export const PUBLIC_URL = `${BASE_URL}/auth`;
export const SIGN_IN_URL = `${PUBLIC_URL}/sign_in`;
export const LOG_IN_URL = `${PUBLIC_URL}/log_in`;
export const GET_DESTINATIONS_NO_AUTH_URL = `${PUBLIC_URL}destinations`;


// Protected endpoints
export const PROTECTED_URL = `${BASE_URL}/api`;
export const GET_DESTINATIONS_URL = `${PROTECTED_URL}/destinations/location`;
export const ADD_DESTINATION_URL = `${PROTECTED_URL}/destinations/add`;
export const getUpdateDestinationUrl = (id) => `${PROTECTED_URL}/destinations/update/`;
export const getDeleteDestinationUrl = (id) => `${PROTECTED_URL}/destinations/delete/${id}`;
export const getDestinationDetailsUrl = (id) => `${PROTECTED_URL}/destinations/details/${id}`;

