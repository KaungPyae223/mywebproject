import {movieApi} from "../Moviedb"

const MovieEnePoint = movieApi.injectEndpoints({
    endpoints: (builder) => ({
        GetNowPlaying: builder.query({
            query: () => "/movie/now_playing?language=en-US&api_key=6f045847e2f831ded61cd80a16975899"
        })
    }),
})

export const {useGetNowPlayingQuery} = MovieEnePoint