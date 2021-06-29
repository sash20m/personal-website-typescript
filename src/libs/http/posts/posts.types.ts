export interface Posts {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  title: string;
  text: string;
  coverUrl: string;
  isBookEssay: boolean;
  likeNumer: number;
}
