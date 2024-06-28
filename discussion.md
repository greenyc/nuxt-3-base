# Discussion

Using this md file to explain decisions and quirks in this project for future reference.

## TypeScript

### How was the tsconfig decided upon?

The tsconfig is based on [Matt Pocock's tsconfig cheat sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet). Any alterations to that should be explained individually.

### Why is the TypeScript version at ~5.4? Why is the vue-tsc version at ^1?

Due to an [issue with Typechecking](https://github.com/fi3ework/vite-plugin-checker/pull/327) which is mentioned on the [Nuxt website's TypeScript section](https://nuxt.com/docs/guide/concepts/typescript), vue-tsc can't be upgraded past ^1 and TypeScript can't be upgraded past ~5.4. If the versions were to be upgraded past that currently, typechecking wouldn't work on linting/build, which isn't ideal. When this issue is resolved, both can be upgraded.