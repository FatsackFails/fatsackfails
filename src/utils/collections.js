/*
|----------------------------------------------------------------
| Collections
|
| 11ty Docs: https://www.11ty.dev/docs/collections/
|----------------------------------------------------------------
*/

module.exports = {

  // Tags: A list of every tag used on a post or page
  // https://github.com/nhoizey/zellwk.com/blob/master/.eleventy.js#L64
  tagList: collection => {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") {
          tags = [tags];
        }
        tags = tags.filter(function(item) {
          switch (item) {
            // this list should match the `filter` list in tag.njk
            case "all":
            case "category":
            case "catList":
            case "nav":
            case "page":
            case "post":
            case "tagList":
              return false;
          }
          return true;
        });
        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet].sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  },

  // Categories: A list of every category
  catList: collection => {
    let catSet = new Set();
    collection.getAllSorted().forEach(item =>
        typeof item.data.category === "string"
        &&  catSet.add(item.data.category));

    return [...catSet];
  },

  // Return a collection for each Category
  category: collection => {
    let categories = {}
    collection.getAllSorted().forEach(item => {
      let category = item.data.category
      if (typeof category !== "string")
        return
      if (Array.isArray(categories[category]))
        //  category array exists? Just push
        categories[category].push(item)
      else
        //  Otherwise create it and make `item` the first item.
        categories[category] = [item]
    });

    return categories;
  },

  // Posts
  posts: collection => {
    const post = collection.getFilteredByGlob('**/posts/*.md');

    for (let i = 0; i < post.length; i++) {
      const prevPost = post[i - 1]
      const nextPost = post[i + 1]

      post[i].data["prevPost"] = prevPost
      post[i].data["nextPost"] = nextPost
    }

    return post.reverse();
  },

  // News - aggregates multiple categories
  news: collection => {
    const post = collection.getFilteredByGlob('**/posts/*.md').filter(function(item) {
      let news = item.data.category['Fatsack News', 'Gaming News'];
      return news;
    });

    return post.reverse();
  },

  // Searchable
  searchable: collection => {
    const post = collection.getFilteredByGlob(['**/posts/*.md', '**/page/*.md']);

    return post.reverse();
  }

}
