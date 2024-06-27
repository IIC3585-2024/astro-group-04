
const transformArray = (characters) => {
    return characters.map((c) => {
        return {
            id: c.show.id,
            name: c.show.name,
            summary: c.show.summary,
            premiered: c.show.premiered,
            ended: c.show.ended,
            url: c.show.url,
            score: c.score,
            type: c.show.type,
            genres: c.show.genres,
            runtime: c.show.runtime,
            officialSite: c.show.officialSite,
            rating: c.show.rating.average,
            network: c.show.network ? c.show.network.name : 'N/A',
            image: c.show.image ? c.show.image.medium : 'https://via.placeholder.com/210x295',
        };
    });
};

const transformData = (show, seasons) => {
    // return characters.map((c) => {
        console.log(show.id)
        console.log(seasons.number, "number")
        return {
            id: show.id,
            name: show.name,
            summary: show.summary,
            premiered: show.premiered,
            ended: show.ended,
            url: show.url,
            type: show.type,
            genres: show.genres,
            runtime: show.runtime,
            officialSite: show.officialSite,
            rating: show.rating.average,
            seasons: seasons.map((s) => {
                return {
                    number: s.number,
                }
            }),
            network: show.network ? show.network.name : 'N/A',
            image: show.image ? show.image.medium : 'https://via.placeholder.com/210x295',
        };
    // });
};

async function api(url) {
    console.log(`https://api.tvmaze.com/${url}`)
    let response = await fetch(`https://api.tvmaze.com/${url}`);
    response = await response.json();
    return response
}

export const getShows = async (query = 'dragon') => {
    try {
        const response = await api(`search/shows?q=${query}`);
        const transformedData = transformArray(response);
        return transformedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export const getShow = async (id) => {
    try {
        const show = await api(`shows/${id}`);
        const seasons = await api(`shows/${id}/seasons`);
        console.log(seasons, "seasons")
        const transformedData = transformData(show, seasons);
        return transformedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export const getShowSeasons = async (id) => {
    try {
        const response = await api(`shows/${id}/seasons`);
        // const transformedData = transformData(response);
        console.log(response, "seasons")
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};