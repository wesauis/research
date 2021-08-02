## Resolvers

A resolver transforms data into the shape the query requires

It is a funcion that is responsable to populate the data for a single field in our schema

The resolver must have the same name as the field that it is populating data for, like in our schema we have `tracksForHome: [Track!]!`, our resolver must have the name `tracksForHome` and return a list, empty or with non null tracks inside

A resolver can have up to 4 optional parameters:

- **parent**:

  parent is the returned value of the resolver for this field's parent. This will be useful when dealing with resolver chains.

- **args**:

  args is an object that contains all GraphQL arguments that were provided for the field by the GraphQL operation. When querying for a specific item (such as a specific track instead of all tracks), in client-land we'll make a query with an id argument that will be accessible via this args parameter in server-land. We'll cover this further in Lift-off Part III.

- **context**:

  context is an object shared across all resolvers that are executing for a particular operation. The resolver needs this context argument to share state, like authentication information, a database connection, or in our case the RESTDataSource.

- **info**:

  info contains information about the operation's execution state, including the field name, the path to the field from the root, and more. It's not used as frequently as the others, but it can be useful for more advanced actions like setting cache policies at the resolver level.
