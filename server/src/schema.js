import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
const allTypes = fileLoader(path.join(__dirname, "/apis/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "/apis/**/*.js"));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;
