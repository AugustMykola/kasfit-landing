import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class DataControllerService {
  private path: string = '/test'
  expancesRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.expancesRef = db.list(this.path)
  }

  getData() {
    return this.db.list(this.path).valueChanges();
  }
}
