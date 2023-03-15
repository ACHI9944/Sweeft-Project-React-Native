import axios from "axios";

export async function getToken() {
  const url = "https://opentdb.com/api_token.php?command=request";
  const response = await axios.get(url);
  return response;
}
