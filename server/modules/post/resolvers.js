const Post = require('./models/post');

/**
 * Query resolver "posts" must return values in response to
 * the query "posts" in GraphQL schema.
**/
const resolvers = {
    Query: {
        posts: () => Post.find({}),
    },

/**
 * Mutation resolver addPost creates a new document in MongoDB
 * in response to the "addPost" mutation in GraphQL schema.
 * The mutation resolvers must return the created object.
**/
    Mutation: {
        addPost: (parent, post) => {
            const newPost = new Post({ name: post.name, surName: post.surName });
            return newPost.save();
        }
    }
};

module.exports = resolvers;