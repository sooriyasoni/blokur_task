const artistData = {
    "external_urls": {
        "spotify": "https://open.spotify.com/artist/1u7kkVrr14iBvrpYnZILJR"
    },
    "followers": {
        "href": null,
        "total": 1403052
    },
    "genres": [
        "punk",
        "rock"
    ],
    "href": "https://api.spotify.com/v1/artists/1u7kkVrr14iBvrpYnZILJR",
    "id": "1u7kkVrr14iBvrpYnZILJR",
    "images": [
        {
            "height": 640,
            "url": "https://i.scdn.co/image/ab6761610000e5eb031914500189e6a6a23acec4",
            "width": 640
        },
        {
            "height": 320,
            "url": "https://i.scdn.co/image/ab67616100005174031914500189e6a6a23acec4",
            "width": 320
        },
        {
            "height": 160,
            "url": "https://i.scdn.co/image/ab6761610000f178031914500189e6a6a23acec4",
            "width": 160
        }
    ],
    "name": "Sex Pistols",
    "popularity": 61,
    "type": "artist",
    "uri": "spotify:artist:1u7kkVrr14iBvrpYnZILJR"
}

const stringData = JSON.stringify(artistData);
const artistJson = (JSON.parse(stringData))
module.exports = artistJson;