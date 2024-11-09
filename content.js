async function fetchGif(){
  try {
    const response = await axios.get('https://api.otakugifs.xyz/gif?reaction=brofist', {
      headers: {
        // Include any headers the API may require, like authorization or content type, if applicable
      }
    });
    return response.data.url; // Assuming the GIF URL is in the 'url' field
  } catch (error) {
    console.error("Failed to retrieve GIF:", error);
    return null;
  }
}

function tryLang(){
  axios.get('https://api.otakugifs.xyz/gif?reaction=kiss')
  .then(response => console.log('GIF URL:', response.data.url))
  .catch(error => console.error('Error fetching GIF:', error));
}




async function hideNewsfeed() {
    const newsFeed = document.querySelector('[role="main"]'); 
    if (newsFeed) {
      newsFeed.style.display = 'none';
      const img = document.createElement("img");

      const gifUrl = await fetchGif();
      img.src = gifUrl;
     // img.width = 500;
     // img.height = 500;
      img.style.position = "fixed";
      img.style.top = "25vh";
      img.style.left = "35vw";
      //img.style.right = "500px";


      document.body.appendChild(img);
    
    }
  }
  
  hideNewsfeed();
  /*
  const observer = new MutationObserver(hideNewsfeed);
  observer.observe(document.body, { childList: true, subtree: true });
  */
