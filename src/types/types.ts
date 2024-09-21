import { z } from "zod";

const enumValues = ["TEST1", "TEST2"] as const;
export const enumTest = z.enum(enumValues);

export type EnumValues = z.infer<typeof enumTest>;

export interface Data {
  word: string;
  count: number;
  test: EnumValues;
}

export const dataSchema = z.object({
  word: z.string(),
  count: z.number(),
  test: enumTest,
});
