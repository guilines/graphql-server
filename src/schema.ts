import { makeExecutableSchema } from '@graphql-tools/schema';
import { userResolver } from './resolvers'
const { loadFiles } = require('@graphql-tools/load-files')

const importedTypeDefs = async () => {
    const typeDefs = await loadFiles('src/schemas/**/*.graphql');
    console.log('typeDefs >>', JSON.stringify(typeDefs));
    return typeDefs;
}

export const awaitSchema = async() => {
    const importedTypeDef = await importedTypeDefs();
    return makeExecutableSchema({
        resolvers: [userResolver],
        typeDefs: [importedTypeDef]
      })
}