export default function books(keyword) {
  let query = "";
  if (keyword.includes("by")) {
    const parts = keyword.split("by");
    query = `${parts[0]}+inauthor:${parts[1].trim()}`;
  } else {
    query = keyword;
  }

  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&langRestrict=en&key=AIzaSyAXFPhH1KDvy6HQZwnoDKhEbFt0pncfVLk`,
  )
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => data.items || [])
    .catch((error) => {
      console.error("Error fetching books:", error);
      return [];
    });
}
