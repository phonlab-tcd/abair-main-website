import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "./supabase";

interface ImageModel {
  url: string;
  alt: string;
}

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        news_stories: {
          Row: {
            images: ImageModel[];
          };
        };
        ab_publications: {
          Row: {
            people: DatabaseGenerated["public"]["Tables"]["people"]["Row"][];
          };
        };
      };
    };
  }
>;

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type Views<T extends keyof Database["public"]["Views"]> =
  Database["public"]["Views"][T]["Row"];
export type { ImageModel };
