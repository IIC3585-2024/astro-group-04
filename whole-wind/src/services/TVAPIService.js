const transformData = (characters) => {
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

export const getShows = async (query = 'girl') => {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const characters = await response.json();
        console.log(characters, "characters");
        const transformedData = transformData(characters);
        console.log(transformedData, "transformedData");
        return transformedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};