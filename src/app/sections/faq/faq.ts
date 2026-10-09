import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';
import { Icon } from '../../shared/icon/icon';

interface FaqItem {
  question: string;
  answer: string;
}

/** Acordeão: uma pergunta aberta por vez, com abertura suave de altura. */
@Component({
  selector: 'app-faq',
  imports: [Reveal, Icon],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {
  // "É gratuito?" volta para a lista quando o modelo de preço estiver definido.
  protected readonly items: FaqItem[] = [
    {
      question: 'O Mapill substitui a orientação do médico?',
      answer:
        'Não. Ele organiza e lembra o que foi prescrito, mas não indica medicamento nem dose.',
    },
    {
      question: 'Precisa de internet?',
      answer:
        'Não. O Mapill funciona por completo sem internet e salva tudo no celular. Se você entrou com a conta do Google, as alterações são enviadas para ela assim que a conexão voltar.',
    },
    {
      question: 'O alarme toca com o celular no silencioso ou bloqueado?',
      answer:
        'Sim, se você escolher o lembrete “Alarme”: ele toca alto e vibra mesmo no silencioso e com a tela bloqueada. A “Notificação” respeita o silencioso. O celular precisa das autorizações que o app pede; se faltar alguma, um aviso aparece na Home e o app leva você direto à configuração.',
    },
    {
      question: 'Tem para iPhone?',
      answer: 'Ainda não. Por enquanto, o Mapill está disponível apenas para Android.',
    },
    {
      question: 'Como instalo o APK?',
      answer:
        'Toque em Baixar APK e abra o arquivo quando o download terminar. Se o Android pedir, permita a instalação de apps dessa origem e toque em Instalar. A permissão só é pedida na primeira vez.',
    },
    {
      question: 'Meus dados são compartilhados com alguém?',
      answer:
        'Não. Seus dados ficam no celular e o backup na conta Google é opcional. O tratamento segue a LGPD, não há anúncio nem venda de dados, e apagar tudo é um botão.',
    },
  ];

  protected readonly openIndex = signal<number | null>(null);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
