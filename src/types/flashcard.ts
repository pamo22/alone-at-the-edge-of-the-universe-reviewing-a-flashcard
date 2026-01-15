export interface Flashcard {
  id: string;
  front: string;
  back: string;
  language: string;
  lastReviewed?: Date;
  reviewCount: number;
  tags: string[];
}

export type CreateFlashcardDTO = Omit<Flashcard, 'id' | 'lastReviewed' | 'reviewCount'>;
export type UpdateFlashcardDTO = Partial<Omit<Flashcard, 'id'>>;
