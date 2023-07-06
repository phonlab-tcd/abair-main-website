type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

interface PublicationModel {
  abstract: string | null;
  authors: Json | null;
  created_at: string | null;
  id: number;
  pdf_url: string | null;
  title: string | null;
  year_published: number | null;
}

interface PersonModel {
  created_at: string | null;
  id: number;
  name: string | null;
  bio: string | null;
  image: string | null;
}

export type { PublicationModel, PersonModel };
