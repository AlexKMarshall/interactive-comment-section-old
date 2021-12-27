## setting up graphql with next

use Apollo Server Micro. Even though vercel says it doesn't need the micro package, it seems
to need the dependency anyway. The apolloServerMicro lets you put a server on a specific route
and pass it the req and res.

## Running nexus

Nexus needs to generate the type files and the schema, to do that need to run it in the background with ts-node
Ts node doesn't by default understand relative paths. So also need to install tsconfig-paths and then put

```
 "ts-node": {
    "require": ["tsconfig-paths/register"]
  }
```

in the tsconfig. The tutorial I followed used a separate tsconfig for this process. Not sure whether this is necessary or not, should try without.
