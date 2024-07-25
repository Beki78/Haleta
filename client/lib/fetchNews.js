import axios from "axios";

const apiKey = "bfe9234e731542afbeb9cdf85b48fab6";

const fetchNews = async () => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey,
        country: "us", 
        category: "health", 
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export default fetchNews;
