import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from "./core/components/footer/footer.component";
import {HeaderComponent} from "./core/components/header/header.component";
import {AsyncPipe, JsonPipe, NgClass, NgForOf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {ReviewItemComponent} from "./core/components/review-item/review-item.component";
import {ServiceItemComponent} from "./core/components/service-item/service-item.component";
import {DataControllerService} from "./core/providers/data-controller.service";
import {ContactItemModel, SocialMediaItemModel} from "./core/models/models";
import {BehaviorSubject, combineLatest, first, forkJoin, map, tap} from "rxjs";
import {MatTab, MatTabChangeEvent, MatTabGroup, MatTabsModule} from "@angular/material/tabs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, NgForOf, ReviewItemComponent, ServiceItemComponent, NgOptimizedImage, MatTabsModule, UpperCasePipe, NgClass],
  providers: [DataControllerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'kasfit-landing';

  readonly themesList: string[] = ['pilates', 'functional-trx', 'barre', 'stretching-lite'];

  currentTheme: string = '';

  linkList: WritableSignal<any> = signal([]);
  serviceItemListData: WritableSignal<any> = signal([]);
  reviewItemListData: WritableSignal<any> = signal([]);
  socialMediaItemsList: WritableSignal<any> = signal([]);
  contactItemsList: WritableSignal<any> = signal([]);
  benefitsList: WritableSignal<any> = signal([]);

  aboutMeSectionHeader: WritableSignal<any> = signal('')
  aboutMeSectionDescription: WritableSignal<any> = signal('')
  joinButtonLabel: WritableSignal<any> = signal('')
  servicesSectionHeader: WritableSignal<any> = signal('')
  reviewsSectionHeader: WritableSignal<any> = signal('')

  data: any = {
    aboutMeSectionHeader: {
      direction: 'Чому обирають мене?'
    },
    aboutMeSectionDescription: {
      description: 'Шукаєте професійного, сертифікованого тренера з фітнесу, який може запропонувати вам індивідуальний план, що відповідає вашим потребам? З роками досвіду у фітнесі, тренуваннях і харчуванні я можу допомогти вам вирішити ваші проблеми здоров\'я з кількох напрямків, щоб забезпечити максимальні результати. Давайте поставимо ваше благополуччя і щастя на перше місце. Готові почати?'
    },
    benefitsList: [
      {
        description: 'Більше семи років досвіду в сфері спорту'
      },
    ],
    joinButtonLabel: {
      description: 'Приєднатися'
    },
    servicesSectionHeader: {
      description: 'Тренуйся зі мною в BARRE, PILATES, STRETCHING, MIND&BODY, TRX-FUNCTIONAL напрямках'
    },
    reviewsSectionHeader: {
      description: 'Що кажуть мої клієнти'
    },
    linkList: ['Про мене','Тренування','Відгуки','Контакти'],
    serviceItemListData: [
      {
        direction: 'Pilates',
        className: 'pilates',
        description: {
          mainText: 'Pilates  - це система тренувань, яка зміцнює м\'язи, вирівнює поставу, розвиває гнучкість і навіть налагоджує зв\'язок розуму та тіла.',
          subText: 'Зробити своє тіло струнким і підкачати всі групи м\'язів можна без посиленого пихтіння в залі. У цьому допоможе пілатес – в основі якої –  свідомі рухи поєднанні з правильною глибокою техникою дихання'
        },
        advantages: [
          {
            description: 'Ви створите пружні м\'язи черевного преса і сильну спину, а також пропрацюєте глибокі м\'язи живота.'
          },
          {
            description: 'Pilates вирівнює і стабілізує хребет, зменшує дискомфорт і больові відчуття в спині. Дослідження показують, що Pilates також позбавляє від різного роду болів у попереку.'
          },
          {
            description: 'Регулярні заняття pilates допоможуть вам підтягти тіло, укріпити м\'язи, і збільшити їх силу. При цьому ви будете створювати струнке тоноване тіло без яскраво виражених накачаних м\'язів.'
          },
          {
            description: 'Pilates настільки безпечний, що навіть використовується у фізичній терапії для реабілітації після травм. Також регулярні заняття є відмінною профілактикою травм опорно-рухового апарату.'
          },
          {
            description: 'Pilates поліпшує форму тіла. Ви будете тонізувати м\'язи в таких «проблемних» галузях як стегна і живіт, створюючи красивий стрункий силует.'
          },
          {
            description: 'Контролюючи дихання і правильне положення тіла, ви вчіться контролювати свої рухи і краще відчувати тіло.'
          },
          {
            description: 'Глибоке дихання, яке лежить в основі Pilates допомагає зняти занепокоєння, позбутися депресії та безсоння.'
          },
          {
            description: 'Вправи з Pilates підвищать вашу гнучкість і рухливість суглобів. Ви будете працювати в напрямку безпечного збільшення довжини і розтягування м\'язів, а також підвищення діапазону рухів у суглобах.'
          }
        ],
        additionalInfo: 'Важливо, під час тренувань з Pilates  ви повинні  відволіктися від усіх справ, розслабитися і сконцентруватися тільки на своєму тілі і внутрішніх відчуттях. Важливо точно виконувати вправи, звертаючи увагу на всі подробиці, щоб тренування давала хороший результат'
      },
      {
        direction: 'Functional + TRX',
        className: 'functional-trx',
        description: {
          mainText: ' Functional + TRX - це  функціональний напрям тренувань, в якому поєднуються силові вправи, а також вправи на статику і розтяжку, використовуючи спеціальні петлі TRX.',
        },
        advantages: [
          {
            description: 'Цікаво, що найпростіші вправи (віджимання або присідання) з петлями перетворюються в складні комбінації, які задіюють одночасно безліч груп м\'язів.'
          },
          {
            description: 'Такі тренування активно спалюють калорії, а ще дають потужний метаболічний відгук (енергія продовжує витрачатися ще кілька годин після закінчення заняття).'
          },
          {
            description: 'Вправи з TRX допоможуть підвищити силу і витривалість, розвинути функціональну підготовку, поліпшити якість тіла.'
          },
          {
            description: 'Підходять для будь-якого рівня фізичної підготовки та не мають вікових обмежень.'
          },
          {
            description: 'Не мають навантаження осьового на хребет'
          },
          {
            description: 'Ідеальний вид тренінгу для схуднення та укріплення м‘язів всього тіла.'
          },
        ],
        additionalInfo: 'Важливо, під час тренувань дотримуватись правил безпечних рухів, тобто свідоме ставлення до свого  тіла  та слухати тренера'
      },
      {
        direction: 'BARRE',
        className: 'barre',
        description: {
          mainText: 'BARRE це трендовий напрямок світового фітнесу, який поєднує в собі функціональний тренінг, елементи пілатесу, йоги , стречингу і , звісно ж, балету.',
          subText: 'Балетний верстат використовується на тренуваннях як опора під час роботи над м\'язами ніг, сідниць, преса, та рук'
        },
        advantages: [
          {
            description: 'Завдяки тому, що тренування функціональне, воно дозволяє пропрацювати всі групи м’язів, навіть найдрібніші, та розвиває координацію, швидкість, витривалість, гнучкість .'
          },
          {
            description: 'Це те, що допоможе вам створити сильне тіло, зміцнити мʼязи кору, покращити поставу, не забуваючи про красу та грацію.'
          },
          {
            description: 'Будь-хто, незалежно від віку, ваги та рівня підготовки, може оволодіти станком та отримати результат.'
          },
        ],
        additionalInfo: 'Важливо, не поспішати , бути уважним на тренуванні і у тебе все вийде'
      },

      {
        direction: 'Stretching light',
        className: 'stretching-lite',
        description: {
          mainText: 'Stretching light це  комплекс вправ, спрямованих на розтягування певних м\'язів за допомогою технік 3д, МФР обладнання та своєї маси тіла.',
        },
        advantages: [
          {
            description: 'Такі тренування допомагають підтягти тіло, змоделювати м\'язовий корсет, поліпшити поставу і координацію, а також опрацювати м\'язи стабілізатори, які рідко задіюються в повсякденному житті.'
          },
          {
            description: 'Заняття проходить в спокійному темпі, під релаксуючу музику;'
          },
          {
            description: 'Ти витягуєш всі мʼязи тіла, знімаючи з них напругу; Потім ти береш масажні м’ячики і глибше пропрацьовуєш всі точки, які потребують розслаблення;'
          },
          {
            description: 'А після ти виходиш з повним відчуттям релаксу, ніби після сеансу масажу.'
          }
        ]
      }
    ],
    reviewItemListData: [
      {
        direction: 'BARRE',
        className: 'barre',
        description: {
          mainText: 'Відгук',
        },
        signature: 'KASFIT'
      },
      {
        direction: 'Stretching light',
        className: 'stretching-lite',
        description: {
          mainText: 'Відгук',
        },
        signature: 'KASFIT'
      },
      {
        direction: 'Pilates',
        className: 'pilates',
        description: {
          mainText: 'Відгук',
        },
        signature: 'KASFIT'
      }
    ],
    socialMediaItemsList: [
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
    ],
    contactItemsList: [
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
  }

  constructor(private dataController: DataControllerService) {

  }

  ngOnInit() {
    combineLatest([
      this.dataController.getDataLinksList(),
      this.dataController.getDataServicesList(),
      this.dataController.getDataReviewsList(),
      this.dataController.getDataContactItemsList(),
      this.dataController.getDataSocialMediaList(),
      this.dataController.getDataAboutMeSectionHeader(),
      this.dataController.getDataAboutMeSectionDescription(),
      this.dataController.getDataLoinButtonLabel(),
      this.dataController.getDataServicesSectionHeader(),
      this.dataController.getDataReviewsSectionHeader(),
      this.dataController.getDataBenefitsList()
    ])
      .pipe(
        tap((res => console.log(res))),
        map((
          [links, services, reviews, contacts, socialMedia, aboutMeSectionHeader, aboutMeSectionDescription, joinButtonLabel, servicesSectionHeader, reviewsSectionHeader, benefitsList]
        ) => ({
          links, services, reviews, contacts, socialMedia, aboutMeSectionHeader, aboutMeSectionDescription, joinButtonLabel, servicesSectionHeader, reviewsSectionHeader, benefitsList
        }))
      )
      .subscribe((
        {
          links,
          services,
          reviews,
          contacts,
          socialMedia,
          aboutMeSectionHeader,
          aboutMeSectionDescription,
          joinButtonLabel,
          servicesSectionHeader,
          reviewsSectionHeader,
          benefitsList
        }
      ) => {

        console.log(servicesSectionHeader)
        this.linkList.set(links);
        this.serviceItemListData.set(services);
        this.reviewItemListData.set(reviews);
        this.contactItemsList.set(contacts);
        this.socialMediaItemsList.set(socialMedia);
        this.aboutMeSectionHeader.set(aboutMeSectionHeader)
        this.aboutMeSectionDescription.set(aboutMeSectionDescription)
        this.joinButtonLabel.set(joinButtonLabel)
        this.servicesSectionHeader.set(servicesSectionHeader)
        this.reviewsSectionHeader.set(reviewsSectionHeader)
        this.benefitsList.set(benefitsList)
      });
  }

  test(event: MatTabChangeEvent): void {
    this.currentTheme = this.themesList[event.index]
  }
}
