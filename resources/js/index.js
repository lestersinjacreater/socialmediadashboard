document.addEventListener("DOMContentLoaded", function() {
  // Elements for Facebook
  const facebookHandle = document.getElementById("facebook-handle");
  const facebookFollowers = document.getElementById("facebook-followers");
  const facebookDelta = document.getElementById("facebook-delta");

  // Elements for Twitter
  const twitterHandle = document.getElementById("twitter-handle");
  const twitterFollowers = document.getElementById("twitter-followers");
  const twitterDelta = document.getElementById("twitter-delta");

  // Elements for Instagram
  const instagramHandle = document.getElementById("instagram-handle");
  const instagramFollowers = document.getElementById("instagram-followers");
  const instagramDelta = document.getElementById("instagram-delta");

  // Elements for YouTube
  const youtubeHandle = document.getElementById("youtube-handle");
  const youtubeSubscribers = document.getElementById("youtube-subscribers");
  const youtubeDelta = document.getElementById("youtube-delta");

  async function fetchFacebookData() {
    try {
      const response = await fetch('http://localhost:3000/facebook');
      const data = await response.json();
      facebookHandle.textContent = `@${data.username}`;
      facebookFollowers.textContent = data.followers_count;
      facebookDelta.innerHTML = `${data.delta >= 0 ? '&#9652;' : '&#9662;'} ${Math.abs(data.delta)} Today`;
      facebookDelta.classList.toggle('up', data.delta >= 0);
      facebookDelta.classList.toggle('down', data.delta < 0);
    } catch (error) {
      console.error("Error fetching Facebook data:", error);
    }
  }

  async function fetchTwitterData() {
    try {
      const response = await fetch('http://localhost:3000/twitter');
      const data = await response.json();
      twitterHandle.textContent = `@${data.username}`;
      twitterFollowers.textContent = data.followers_count;
      twitterDelta.innerHTML = `${data.delta >= 0 ? '&#9652;' : '&#9662;'} ${Math.abs(data.delta)} Today`;
      twitterDelta.classList.toggle('up', data.delta >= 0);
      twitterDelta.classList.toggle('down', data.delta < 0);
    } catch (error) {
      console.error("Error fetching Twitter data:", error);
    }
  }

  async function fetchInstagramData() {
    try {
      const response = await fetch('http://localhost:3000/instagram');
      const data = await response.json();
      instagramHandle.textContent = `@${data.username}`;
      instagramFollowers.textContent = data.followers_count;
      instagramDelta.innerHTML = `${data.delta >= 0 ? '&#9652;' : '&#9662;'} ${Math.abs(data.delta)} Today`;
      instagramDelta.classList.toggle('up', data.delta >= 0);
      instagramDelta.classList.toggle('down', data.delta < 0);
    } catch (error) {
      console.error("Error fetching Instagram data:", error);
    }
  }

  async function fetchYouTubeData() {
    try {
      const response = await fetch('http://localhost:3000/youtube');
      const data = await response.json();
      youtubeHandle.textContent = `${data.username}`;
      youtubeSubscribers.textContent = data.subscribers_count;
      youtubeDelta.innerHTML = `${data.delta >= 0 ? '&#9652;' : '&#9662;'} ${Math.abs(data.delta)} Today`;
      youtubeDelta.classList.toggle('up', data.delta >= 0);
      youtubeDelta.classList.toggle('down', data.delta < 0);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  }

  // Call the functions to fetch data
  fetchFacebookData();
  fetchTwitterData();
  fetchInstagramData();
  fetchYouTubeData();
  
  // Dark Mode Toggle Functionality
  const btn = document.getElementById("toggle");
  const theme = document.querySelector("#theme-link");

  btn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "resources/css/style.css") {
      theme.href = "resources/css/dark-theme.css";
    } else {
      theme.href = "resources/css/style.css";
    }
  });
});
