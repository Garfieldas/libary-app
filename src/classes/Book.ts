import { v4 as uuidv4 } from 'uuid';
export class Book  {
    id?: string;
    title: string;
    author: string;
    pages: number;
    status: boolean

  constructor(title: string, author: string, pages: number, status: boolean) {
    this.id = uuidv4();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

}
