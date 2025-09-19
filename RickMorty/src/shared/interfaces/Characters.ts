export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
}