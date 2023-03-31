import { SchemaTypeDefinition } from 'sanity';
import sharedSchema from './shared';
import blogSchema from './blog';

export const schemaTypes: SchemaTypeDefinition[] = [
  ...sharedSchema,
  ...blogSchema,
];
