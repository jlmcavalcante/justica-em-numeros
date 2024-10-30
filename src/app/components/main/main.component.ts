import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface ItemText {
  title: string;
  description: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  currentTitle: string = 'Justiça em números';
  currentText: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id porta magna. Pellentesque congue elit quis mauris pulvinar, non dignissim leo porttitor. Praesent laoreet aliquam turpis eget porttitor. Suspendisse sodales sed tortor ac ornare. Duis massa turpis, vehicula sit amet sodales ac, congue id lectus. Etiam ut augue ac lacus efficitur accumsan eu at augue. Aenean quis sem nec eros aliquam lacinia at at libero. Sed a nibh a sapien eleifend porta. Nullam bibendum metus felis, non blandit tellus semper sit amet. In egestas dui vitae velit pulvinar accumsan. Integer condimentum, erat at efficitur consequat, enim nulla aliquet libero, vitae euismod elit velit in est. Quisque porttitor elementum ante sit amet tincidunt. ';
  itemDescriptions: ItemText[] = [
    {
      title: 'Estrutura de Pessoal',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet convallis neque. Pellentesque nulla magna, feugiat at tempus suscipit, porttitor ut dolor. Donec eget nisl ut diam placerat egestas. Duis rutrum ipsum ex, in elementum nibh imperdiet vitae. Aliquam a sodales nunc, at egestas leo. Ut pharetra laoreet aliquet. Phasellus sit amet neque ut arcu aliquam pellentesque.',
    },
    {
      title: 'Produtividade',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet convallis neque. Pellentesque nulla magna, feugiat at tempus suscipit, porttitor ut dolor. Donec eget nisl ut diam placerat egestas. Duis rutrum ipsum ex, in elementum nibh imperdiet vitae. Aliquam a sodales nunc, at egestas leo. Ut pharetra laoreet aliquet. Phasellus sit amet neque ut arcu aliquam pellentesque.',
    },
    {
      title: 'Prêmios de Qualidade',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet convallis neque. Pellentesque nulla magna, feugiat at tempus suscipit, porttitor ut dolor. Donec eget nisl ut diam placerat egestas. Duis rutrum ipsum ex, in elementum nibh imperdiet vitae. Aliquam a sodales nunc, at egestas leo. Ut pharetra laoreet aliquet. Phasellus sit amet neque ut arcu aliquam pellentesque.',
    },
    {
      title: 'Orçamentos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet convallis neque. Pellentesque nulla magna, feugiat at tempus suscipit, porttitor ut dolor. Donec eget nisl ut diam placerat egestas. Duis rutrum ipsum ex, in elementum nibh imperdiet vitae. Aliquam a sodales nunc, at egestas leo. Ut pharetra laoreet aliquet. Phasellus sit amet neque ut arcu aliquam pellentesque.',
    },
    {
      title: 'Patrimônio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet convallis neque. Pellentesque nulla magna, feugiat at tempus suscipit, porttitor ut dolor. Donec eget nisl ut diam placerat egestas. Duis rutrum ipsum ex, in elementum nibh imperdiet vitae. Aliquam a sodales nunc, at egestas leo. Ut pharetra laoreet aliquet. Phasellus sit amet neque ut arcu aliquam pellentesque.',
    },
    {
      title: 'Plano de Gestão',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet convallis neque. Pellentesque nulla magna, feugiat at tempus suscipit, porttitor ut dolor. Donec eget nisl ut diam placerat egestas. Duis rutrum ipsum ex, in elementum nibh imperdiet vitae. Aliquam a sodales nunc, at egestas leo. Ut pharetra laoreet aliquet. Phasellus sit amet neque ut arcu aliquam pellentesque.',
    },
    {
      title: 'Contratos e Licitações',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet convallis neque. Pellentesque nulla magna, feugiat at tempus suscipit, porttitor ut dolor. Donec eget nisl ut diam placerat egestas. Duis rutrum ipsum ex, in elementum nibh imperdiet vitae. Aliquam a sodales nunc, at egestas leo. Ut pharetra laoreet aliquet. Phasellus sit amet neque ut arcu aliquam pellentesque.',
    },
    {
      title: 'Obras',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet convallis neque. Pellentesque nulla magna, feugiat at tempus suscipit, porttitor ut dolor. Donec eget nisl ut diam placerat egestas. Duis rutrum ipsum ex, in elementum nibh imperdiet vitae. Aliquam a sodales nunc, at egestas leo. Ut pharetra laoreet aliquet. Phasellus sit amet neque ut arcu aliquam pellentesque.',
    },
  ];

  constructor() {}

  changeText(index: number) {
    this.currentTitle = this.itemDescriptions[index].title;
    this.currentText = this.itemDescriptions[index].description;
  }

  resetText() {
    this.currentTitle = 'Justiça em números';
    this.currentText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id porta magna. Pellentesque congue elit quis mauris pulvinar, non dignissim leo porttitor. Praesent laoreet aliquam turpis eget porttitor. Suspendisse sodales sed tortor ac ornare. Duis massa turpis, vehicula sit amet sodales ac, congue id lectus. Etiam ut augue ac lacus efficitur accumsan eu at augue. Aenean quis sem nec eros aliquam lacinia at at libero. Sed a nibh a sapien eleifend porta. Nullam bibendum metus felis, non blandit tellus semper sit amet. In egestas dui vitae velit pulvinar accumsan. Integer condimentum, erat at efficitur consequat, enim nulla aliquet libero, vitae euismod elit velit in est. Quisque porttitor elementum ante sit amet tincidunt. ';
  }
}
