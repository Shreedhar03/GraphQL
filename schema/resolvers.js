const { users, movies } = require('../Data/data')

console.log(movies.length)

const resolvers = {
    Query: {
        users() {
            return users
        },
        // _ as a placeholder for parent
        user(_, args) {
            const id = args.id
            return users.filter(u => u.id === id)[0]
        },
        movie(_, args) {
            return movies.filter(m => m.name === args.name)[0]
        },
        movies() {
            return movies
        }
    },
    User: {
        favMovies() {
            return movies.filter(movie => movie.oscarReceived)
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            console.log("user = ", user)
            let latestId = users[users.length - 1].id
            user.id = latestId ?  +latestId + 1 : 0
            users.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input
            let user;
            console.log(id , newUsername)
            users.forEach(u=>{
                console.log(u.id)
                if(u.id===id){
                    console.log("matches")
                    u.username = newUsername
                    user=u;
                }
            })
            return user
        },
        deleteUser: (parent,args)=>{
            const {id} = args
            const index = users.findIndex(user=>user.id===id)
            const deletedUser = users.splice(index,1)
            return deletedUser[0]
        }
    }
}

module.exports = { resolvers }