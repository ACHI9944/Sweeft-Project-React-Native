import axios from "axios";

export async function getToken() {
  const url = "https://opentdb.com/api_token.php?command=request";
  const response = await axios.get(url);
  return response;
}

export async function refreshToken(token) {
  const url = `https://opentdb.com/api_token.php?command=reset&token=${token}`;
  const response = await axios.get(url);
  return response;
}

export async function getQuestions(url) {
  const response = await axios.get(url);
  return response;
}
