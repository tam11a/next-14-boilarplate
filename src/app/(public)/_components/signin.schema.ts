import {z} from "zod"

const schema = z.object({
    username: z
      .string()
      .min(4, {
        message: 'Username must be at least 6 characters.',
      })
      .max(155, {
        message: 'Username must be at most 155 characters.',
      }),
    password: z.string().min(4, {
      message: 'Password must be at least 6 characters.',
    }),
  });

  export type FormValues = z.infer<typeof schema>;

  export default schema