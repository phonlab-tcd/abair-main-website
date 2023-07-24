interface PublicationModel {
  id: number;
  title: string;
}

interface PersonModel {
  id: number;
  name: string;
  image: string;
  bio: string;
  role: string;
  ab_publications?: PublicationModel[];
}

export type { PublicationModel, PersonModel };
