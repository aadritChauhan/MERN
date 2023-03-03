const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests
// ENV. variables can be accesses with process.env<environment_variable>

/*
 * Functions for Trakt API requests.
 */
async function getPopularShows(){
    let reqUrl=`${trakt}/shows/popular?page=1&limit=15`;
    var response= await fetch(
        reqUrl,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "trakt-api-version": "2",
                "trakt-api-key": process.env.TRAKT_CLIENT_ID
            }
        }
    );
// response will be found in response.json()
    return await response.json();
} 
// EXPORT any function used outside this file
module.exports= {
    getPopularShows
};