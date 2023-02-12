import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { awaitSchema } from './schema'
const { loadFiles } = require('@graphql-tools/load-files')


const main = async (): Promise<void> => {
    const schema = await awaitSchema();
  const yoga = createYoga({ schema });
  const server = createServer(yoga)
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}
 
main();