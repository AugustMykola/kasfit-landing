import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataControllerService {
  private path: string = '/data';
  private pathContact: string = '/data/contactItemsList';
  private pathLinks: string = '/data/linkList';
  private pathServices: string = '/data/serviceItemListData';
  private pathReviews: string = '/data/reviewItemListData';
  private pathSocialMedia: string = '/data/socialMediaItemsList';
  private pathBenefitsList: string = '/data/benefitsList';

  private pathAboutMeSectionHeader: string = '/data/aboutMeSectionHeader';
  private pathAboutMeSectionDescription: string = '/data/aboutMeSectionDescription';
  private pathJoinButtonLabel: string = '/data/joinButtonLabel';
  private pathReviewsSectionHeader: string = '/data/reviewsSectionHeader';
  private pathServicesSectionHeader: string = '/data/servicesSectionHeader';


  constructor(private db: AngularFireDatabase) {
  }

  getDataContactItemsList() {
    return this.db.list(this.pathContact).valueChanges();
  }

  getDataLinksList(): Observable<any> {
    return this.db.list(this.pathLinks).valueChanges();
  }

  getDataServicesList(): Observable<any> {
    return this.db.list(this.pathServices).valueChanges();
  }

  getDataReviewsList(): Observable<any> {
    return this.db.list(this.pathReviews).valueChanges();
  }

  getDataSocialMediaList(): Observable<any> {
    return this.db.list(this.pathSocialMedia).valueChanges();
  }

  getDataAboutMeSectionHeader(): Observable<any> {
    return this.db.list(this.pathAboutMeSectionHeader).valueChanges();
  }

  getDataAboutMeSectionDescription(): Observable<any> {
    return this.db.list(this.pathAboutMeSectionDescription).valueChanges();
  }

  getDataLoinButtonLabel(): Observable<any> {
    return this.db.list(this.pathJoinButtonLabel).valueChanges();
  }

  getDataReviewsSectionHeader(): Observable<any> {
    return this.db.list(this.pathReviewsSectionHeader).valueChanges();
  }

  getDataServicesSectionHeader(): Observable<any> {
    return this.db.list(this.pathServicesSectionHeader).valueChanges();
  }

  getDataBenefitsList(): Observable<any> {
    return this.db.list(this.pathBenefitsList).valueChanges();
  }
}
