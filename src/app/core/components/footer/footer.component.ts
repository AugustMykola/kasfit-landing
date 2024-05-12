import { Component } from '@angular/core';
import {ContactItemModel, SocialMediaItemModel} from "../../models/models";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialMediaItemsList: SocialMediaItemModel[] = [
    {
      link: 'https://www.instagram.com/kasfit_007/',
      image: 'instagram.svg'
    },
    {
      link: 'https://www.facebook.com/people/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0-%D0%9A%D1%83%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0/100090325854368/',
      image: 'facebook.svg'
    },
    {
      link: 'https://t.me/kasfit_007',
      image: 'telegram-app.svg'
    }
  ]

  contactItemsList: ContactItemModel[] = [
    {
      image: 'phone.svg',
      itemName: 'Phone',
      itemValue: '+380994444099'
    },
    {
      image: 'mail.svg',
      itemName: 'E-mail',
      itemValue: '+380994444099'
    }
  ]

  constructor() { }

}
