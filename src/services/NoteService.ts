import { NoteModel } from '../model/NoteModel';

let reloadAttempts = 2;
let saveAttempts = 2;

export class NoteService {
  static load(): Promise<NoteModel[]> {
    return new Promise<NoteModel[]>((resolve, reject) => {
      setTimeout(() => {
        if (reloadAttempts > 1) {
          const notes: any = window.localStorage.getItem('notes');
          resolve(notes ? JSON.parse(notes) : []);
        } else {
          reject();
          reloadAttempts++;
        }
      }, 1500);
    });
  }

  static save(notes: NoteModel[]) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (saveAttempts > 1) {
          window.localStorage.setItem('notes', JSON.stringify(notes));
          resolve();
        } else {
          reject();
          saveAttempts++;
        }
      }, 1500);
    });
  }
}
