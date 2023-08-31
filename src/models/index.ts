interface PaperModel {
  id: number;
  created_at?: string;
  title: string;
  abstract?: string;
  pdf_url?: string;
  year_published?: number;
  authors?: string[];
  publication_category?: string;
  publication?: string
}

interface PersonModel {
  id: number;
  name: string;
  image: string;
  bio: string;
  role: string;
  ab_publications?: PaperModel[];
}

interface ApplicationModel {
  id: number;
  name: string;
  image: string;
  url: string;
  description_en: string;
  description_ga: string;
  category: number;
  created_at: string;
}

interface NewsImagesModel {
  url: string;
}

interface NewsModel {
  id: number;
  created_at?: string;
  date?: string;
  title_en?: string;
  blurb_en?: string;
  body_en?: string;
  images: NewsImagesModel[];
  title_ga?: string;
  blurb_ga?: string;
  body_ga?: string;
  video?: string;
  news_category?: string;
}

interface synthesisVoiceModel {
  name: string;
  gender?: string;
  locale?: string;
  mode?: string;
  shortCode?: string;
  voices?: string[];
  voicenames?: string[];
}

export type {
  PaperModel,
  PersonModel,
  ApplicationModel,
  NewsModel,
  synthesisVoiceModel,
};
