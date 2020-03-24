// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
module.exports = function (api) {

  api.loadSource(async actions => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

    const collection = actions.addCollection({
      typeName: 'Posts',
      route: "/posts/:id"
    })

    for (const item of data) {
      collection.addNode({
        id: item.id,
        user: item.userId,
        title: item.title,
        body: item.body
      })
    }
  })
}
