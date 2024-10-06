import type { z } from "zod";

/** サーバーアクションのstate型 */
export type State = {
  errors?: {
    name?: string[];
    email?: string[];
  };
  message?: string;
  success: boolean | null;
};
