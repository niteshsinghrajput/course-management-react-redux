import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/authors/";
const baseUrl = "http://localhost:3001/authors/";

export function getAuthors() {
  console.log("Hii : " + baseUrl);
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
