import React, { useState } from 'react'
import { useQuery, useLazyQuery, gql } from '@apollo/client'

const QUERY_USERS = gql`

query getAllUsers{
    users {
        id
        name
        age
        nationality
        username
    }
}
`
const QUERY_MOVIES = gql`

query getAllUsers{
    movies {
        name
        year
        oscarReceived
    }
}
`

const QUERY_MOVIE_BY_NAME = gql`
    query Movie($name:String!){
        movie(name: $name){
            name
            year
            oscarReceived
        }
    }
`
const DisplayData = () => {
    const [searchVal, setSearchVal] = useState("")
    const { data: users, loading, error } = useQuery(QUERY_USERS)
    const { data: movies } = useQuery(QUERY_MOVIES)
    const [fetchSingleMovie, { data: movieSearchData }] = useLazyQuery(QUERY_MOVIE_BY_NAME)

    if (loading) {
        return <div className='text-center'>Loading...</div>
    }
    if (error) {
        return <h1 className='text-center'>semothing went wrong!!:(</h1>
    }
    return (

        <div className='my-6'>
            <h1 className='text-xl underline underline-offset-2'>Users</h1>
            <ul className='my-4'>
                {
                    users?.users?.map(user => {
                        return (
                            <li key={user.id} className='my-1'>
                                {user.name} aged {user.age} is from {user.nationality}
                            </li>
                        )
                    })
                }
            </ul>
            <h1 className='text-xl underline underline-offset-2'>Movies</h1>
            <ul className='my-4'>
                {
                    movies?.movies?.map((movie, key) => {
                        return (
                            <li key={key} className='my-1'>
                                {movie.name} ( {movie.year} )
                            </li>
                        )
                    })
                }
            </ul>
            <input type="text" value={searchVal} onChange={e => setSearchVal(e.target.value)} />
            <button onClick={() => {
                fetchSingleMovie({
                    variables:{
                        name:searchVal
                    }
                })
            }
            }
            >Submit</button>

            { movieSearchData ? <p className='my-2'>{movieSearchData?.movie?.name} in {movieSearchData?.movie?.year}</p> : <p className='my-2'>No data Found or something went wrong :(</p> }
        </div>
    )
}

export default DisplayData
