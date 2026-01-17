const API_KEY = "4d11ef7a5add4fcea7d306adb7d6b19c";

async function getNews() {
  const country = document.getElementById("country").value;
  const category = document.getElementById("category").value;
  const query = document.getElementById("searchInput").value;
  document.getElementById("loader").style.display = "block";
document.getElementById("loader").style.display = "none";


const url = `https://api.worldnewsapi.com/search-news?text=${query || "world"}&source-countries=${country}&categories=${category}&api-key=${API_KEY}`;


  const url = `https://api.worldnewsapi.com/search-news?source-countries=${country}&categories=${category}&api-key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.news);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

function displayNews(news) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  news.forEach(article => {
    const div = document.createElement("div");
    div.className = "news-card";

    div.innerHTML = `
      ${article.image ? `<img src="${article.image}" />` : ""}
      <h3>${article.title}</h3>
      <p>${article.text.slice(0, 120)}...</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;

    container.appendChild(div);
  });
}
