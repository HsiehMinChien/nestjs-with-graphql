## How to install and run system

```
npm install
npm run start
```

## Online demo (Playground)

[Online demo playground](https://nestjs-demo-project.herokuapp.com/graphql)

#### You can try as following command on playground platform
```
query {
  getPokemonInfo(type:pokemon, offset: 10, limit: 60) {
    count
    previous
    next
    results {
      name
      url
    }
  }
}
```

## reference

1. [Nestjs](https://docs.nestjs.com/)
2. [Pokemon API](https://pokeapi.co/)
3. [Heroku](https://devcenter.heroku.com/)
4. [Heroku - Why Node.js app has R10 error](https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error)
5. [Nestjs with GraphQL](https://dev.to/nikitakot/building-nestjs-app-boilerplate-authentication-validation-graphql-and-prisma-f1d)
