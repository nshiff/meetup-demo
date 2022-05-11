export interface CardModel {
  id: number;
  title: string;
  created: Date;
  content?: string; // ? denotes an optional field
  // content: string | undefined;   // optional fields are equivalent to this
}
