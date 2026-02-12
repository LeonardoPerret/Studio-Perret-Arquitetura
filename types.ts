
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Architect {
  name: string;
  description: string;
  image: string;
  position: 'left' | 'right';
}
