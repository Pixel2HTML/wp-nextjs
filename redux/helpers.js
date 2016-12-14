/**
 * Helps us return an array of posts without duplicated ids
 * @param {array} mixedPosts both new and old
 * @returns {array} posts
 */

export function preventDuplicatePosts (mixedPosts) {
  let posts = mixedPosts.concat()
  for (var i = 0; i < posts.length; ++i) {
    for (var j = i + 1; j < posts.length; ++j) {
      if (posts[i].id === posts[j].id) {
        posts.splice(j--, 1)
      }
    }
  }
  return posts
}
