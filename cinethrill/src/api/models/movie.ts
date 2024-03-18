export interface Movie {
  id: string;
  title: string;
  year: string;
  rating: string;
  description: string;
  poster: string;
  progress?: number;

  genres?: string[];
  directors?: string[];
  actors?: string[];
  plot?: string;

  runtime?: string;
  production?: string;
  released?: Date;
}
