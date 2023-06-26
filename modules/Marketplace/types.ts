export interface IProduct {
  id: number;
  technology: Technology[];
  modules: Modules[];
  type: number;
  name: string;
  price: number;
  link: string;
  publication_date: string;
  description: string;
}

export interface Technology {
  id: number;
  label: string;
}

export interface Modules {
  id: number;
  label: string;
}
