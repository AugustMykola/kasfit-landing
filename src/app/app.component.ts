import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./core/components/footer/footer.component";
import {HeaderComponent} from "./core/components/header/header.component";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ReviewItemComponent} from "./core/components/review-item/review-item.component";
import {ServiceItemComponent} from "./core/components/service-item/service-item.component";
import {DataControllerService} from "./core/providers/data-controller.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, NgForOf, ReviewItemComponent, ServiceItemComponent, NgOptimizedImage],
  providers: [DataControllerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'kasfit-landing';

  serviceItemListData = [
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
  ]
  reviewItemListData = [
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
  ]

  constructor(private dataController: DataControllerService) {

  }
  ngOnInit() {
    this.dataController.getData().subscribe(res => console.log(res))
  }
}
