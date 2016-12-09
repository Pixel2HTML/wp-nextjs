# Redux implementation of wordpress.

The whole idea here is to mantain everything in small components yet having them interact with one another, there's where redux comes into play to help us.

However we still need to define the global state object which is tightly the same as the wpapi endpoints so far the basic top level containers would be:

- Site: Contains the root details like blog name and description
- Posts: The list at start of the top 10 posts and the rest can be added here by requesting them.
- Active post: The current post that is being rendered.
- Search Results: The list of posts that match what was searched with the search widget
- Categories: List of categories to be rendered on the sidebar.
- Recent Comments: List of recent comments to be rendered on the sidebar.

