import { Data, dataSchema } from "../types/types";

export const dataService = {
  validateData: (data: Data): boolean => {
    const validation = dataSchema.safeParse(data);
    return validation.success;
  },
};
