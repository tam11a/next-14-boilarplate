import { z } from 'zod';

const schema = z.object({});

export type FilterValues = z.infer<typeof schema>;

export default schema;
