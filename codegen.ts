import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'import.meta.env.VITE_APPSYNC_GQL_ENDPOINT',
//   schema: 'http://localhost:4000/graphql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};
console.log(import.meta.env.VITE_APPSYNC_GQL_ENDPOINT)

export default config;