export interface LoginValues {
  email: string;
  password: string;
}

export interface LoginErrors {
  email?: string;
  password?: string;
}

export interface NewsItem {
  title: string;
  image?: string;
  tag?: string;
  time: string;
}