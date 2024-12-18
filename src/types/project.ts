export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  role: string;
  skills: string[];
  fullDescription: string;
  goals: string[];
  achievements: string[];
  images: string[];
  videoUrl?: string;
  externalLink?: string;
}