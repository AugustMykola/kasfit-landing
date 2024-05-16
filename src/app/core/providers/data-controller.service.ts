import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class DataControllerService {
  private path: string = '/data'
  constructor(private db: AngularFireDatabase) {
  }

  getData() {
    return this.db.list(this.path).valueChanges();
  }
}
