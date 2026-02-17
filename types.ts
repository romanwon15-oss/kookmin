
export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  category: 'school' | 'home';
  date: string;
}

export interface Consultation {
  id: string;
  name: string;
  phone: string;
  locationType: string;
  content: string;
  photoUrl?: string;
  status: 'pending' | 'completed';
}
