
/**
 * Fetch
 */
const fetchMd = (url) => {
  const myRequest = new Request( url );

  return fetch(myRequest)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      return text;
    })
    .catch(function(ex) {
      console.log('Fetch oops...', ex);
    });
};

export default fetchMd;
