import {movieApi} from "../Moviedb"

const MovieEnePoint = movieApi.injectEndpoints({
    endpoints: (builder) => ({
        GetNowPlaying: builder.query({
            query: (title) => `/${title.path}?language=en-US&api_key=6f045847e2f831ded61cd80a16975899&page=${title.page}`,
            providesTags:['Movie'],
        }),
        GetUpComming: builder.query({
            query: () => "/movie/upcoming?language=en-US&api_key=6f045847e2f831ded61cd80a16975899",
            providesTags:['Movie']
        
        }),
        
    }),
})

export const {useGetNowPlayingQuery,useGetUpCommingQuery} = MovieEnePoint