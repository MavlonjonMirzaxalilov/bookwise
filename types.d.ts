type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl?: string; // Majburiy bo'lmagan
  summary?: string; // Majburiy bo'lmagan
  color?: string; // Kitob uchun rang
  isLoanedBook?: boolean; // Majburiy bo'lmagan
};
