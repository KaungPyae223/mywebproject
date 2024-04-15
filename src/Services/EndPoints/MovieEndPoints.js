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
        GetDetails: builder.query({
            query: (id) => `movie/${id}?language=en-US&api_key=6f045847e2f831ded61cd80a16975899`,
            providesTags:['Movie']
        }),
        GetActors: builder.query({
            query: (id) => `movie/${id}/credits?language=en-US&api_key=6f045847e2f831ded61cd80a16975899`,
            providesTags:['Movie']
        }),
        GetReviews: builder.query({
            query: (id) => `movie/${id}/reviews?language=en-US&api_key=6f045847e2f831ded61cd80a16975899`,
            providesTags:['Movie']
        }),
        GetSearch: builder.query({
            query: (title) => `https://api.themoviedb.org/3/search/movie?query=${title.query}&include_adult=false&language=en-US&page=${title.page}&api_key=6f045847e2f831ded61cd80a16975899`,
            providesTags:['Movie']
        }),
    }),
})

export const {useGetNowPlayingQuery,useGetUpCommingQuery,useGetDetailsQuery,useGetActorsQuery,useGetReviewsQuery,useGetSearchQuery} = MovieEnePoint