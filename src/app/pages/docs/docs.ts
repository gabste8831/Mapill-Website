import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { SITE_CONFIG } from '../../core/site-config';
import { PhoneFrame } from '../../mockups/phone-frame/phone-frame';
import { AdherenceScreen } from '../../mockups/screens/adherence-screen/adherence-screen';
import { AlarmScreen } from '../../mockups/screens/alarm-screen/alarm-screen';
import { HealthScreen } from '../../mockups/screens/health-screen/health-screen';
import { ScannerScreen } from '../../mockups/screens/scanner-screen/scanner-screen';
import { StockScreen } from '../../mockups/screens/stock-screen/stock-screen';
import { TodayScreen } from '../../mockups/screens/today-screen/today-screen';
import { Icon, IconName } from '../../shared/icon/icon';

type ScreenKey = 'hoje' | 'alarme' | 'saude' | 'scanner' | 'estoque' | 'adesao';

interface DocTopic {
  id: string;
  label: string;
  icon: IconName;
  title: string;
  intro: string;
  steps: string[];
  tips?: string[];
  screen?: { key: ScreenKey; label: string };
}

/**
 * Documentação interativa: um botão por parte do sistema, um painel de cada vez.
 * O tópico aberto fica no endereço (#fragmento), então dá para compartilhar o link.
 */
@Component({
  selector: 'app-docs',
  imports: [
    Icon,
    PhoneFrame,
    TodayScreen,
    AlarmScreen,
    HealthScreen,
    ScannerScreen,
    StockScreen,
    AdherenceScreen,
  ],
  templateUrl: './docs.html',
  styleUrl: './docs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Docs {
  private readonly router = inject(Router);
  private readonly fragment = toSignal(inject(ActivatedRoute).fragment, { initialValue: null });

  protected readonly shots = SITE_CONFIG.screenshots;

  protected readonly topics: DocTopic[] = [
    {
      id: 'primeiros-passos',
      label: 'Primeiros passos',
      icon: 'download',
      title: 'Instalando e começando',
      intro: 'O Mapill está disponível para Android. A instalação é feita pelo arquivo APK.',
      steps: [
        'Toque em “Baixar APK” e abra o arquivo quando o download terminar.',
        'Se o Android pedir, permita a instalação de apps dessa origem e toque em “Instalar”. Isso só é pedido na primeira vez.',
        'Abra o Mapill e cadastre seu primeiro medicamento.',
      ],
      tips: ['Ainda não existe versão para iPhone.'],
      screen: { key: 'hoje', label: 'Tela inicial do Mapill' },
    },
    {
      id: 'cadastro',
      label: 'Cadastrar remédio',
      icon: 'camera',
      title: 'Cadastro de medicamentos',
      intro: 'Dois jeitos de cadastrar: pela câmera ou digitando.',
      steps: [
        'Aponte a câmera para o código de barras da caixa.',
        'O Mapill consulta a base oficial da CMED (Anvisa) e preenche os dados do medicamento.',
        'Se preferir, digite as informações manualmente.',
        'Defina os horários das doses.',
      ],
      screen: { key: 'scanner', label: 'Cadastro por código de barras' },
    },
    {
      id: 'alarmes',
      label: 'Alarmes',
      icon: 'bell-ring',
      title: 'Alarme de dose',
      intro:
        'Não é uma notificação que some: é uma tela cheia que aparece na hora da dose, mesmo com o celular bloqueado.',
      steps: [
        'Na hora da dose, o celular toca e mostra a tela cheia.',
        'Toque em “Tomei” para registrar a dose.',
        'Toque em “Adiar” se precisar de mais um tempo.',
      ],
      tips: [
        'Em alguns aparelhos, como Xiaomi, é preciso liberar a inicialização automática. O próprio app mostra o passo a passo.',
      ],
      screen: { key: 'alarme', label: 'Alarme de dose em tela cheia' },
    },
    {
      id: 'historico',
      label: 'Histórico e adesão',
      icon: 'check',
      title: 'Histórico e adesão semanal',
      intro: 'Cada dose fica registrada com um estado claro, sem esconder esquecimentos.',
      steps: [
        'Cada dose aparece como tomada, pulada ou atrasada.',
        'Os estados sempre vêm com ícone e palavra, nunca só com cor.',
        'A tela de adesão resume a sua semana.',
      ],
      screen: { key: 'adesao', label: 'Adesão semanal' },
    },
    {
      id: 'estoque',
      label: 'Estoque',
      icon: 'pill-bottle',
      title: 'Controle de estoque',
      intro: 'O app conta os comprimidos por você.',
      steps: [
        'Cada dose tomada desconta do estoque automaticamente.',
        'O Mapill avisa antes de o remédio acabar, não depois.',
      ],
      screen: { key: 'estoque', label: 'Controle de estoque' },
    },
    {
      id: 'receitas',
      label: 'Receitas e consultas',
      icon: 'calendar-days',
      title: 'Receitas, consultas e exames',
      intro: 'Compromissos de saúde junto dos remédios, com lembrete.',
      steps: [
        'Cadastre a receita para ser avisado a tempo de marcar a consulta.',
        'Registre consultas e exames e receba lembretes.',
      ],
    },
    {
      id: 'ficha',
      label: 'Ficha de saúde',
      icon: 'heart-pulse',
      title: 'Ficha de saúde',
      intro: 'As informações importantes, prontas para mostrar numa consulta ou emergência.',
      steps: [
        'Registre alergias, condições de saúde e tipo sanguíneo.',
        'Cadastre contatos de emergência.',
      ],
      screen: { key: 'saude', label: 'Ficha de saúde' },
    },
    {
      id: 'relatorio',
      label: 'Relatório em PDF',
      icon: 'file-down',
      title: 'Relatório em PDF',
      intro: 'Um resumo para levar ao médico.',
      steps: ['Gere o relatório com o resumo do tratamento e da adesão.', 'Leve à consulta.'],
    },
    {
      id: 'acessibilidade',
      label: 'Acessibilidade',
      icon: 'sun',
      title: 'Acessibilidade e temas',
      intro: 'O app foi desenhado para ser lido com facilidade.',
      steps: [
        'Escolha entre os temas claro, escuro, alto contraste e para daltonismo.',
        'Todas as cores passam na norma WCAG AA.',
        'Botões grandes e frases sem caixa alta.',
        'Há confirmação antes de qualquer ação irreversível.',
      ],
    },
    {
      id: 'privacidade',
      label: 'Privacidade e backup',
      icon: 'shield-check',
      title: 'Seus dados e privacidade',
      intro: 'Dado de saúde é dado sensível, e é tratado como tal.',
      steps: [
        'Tudo é salvo primeiro no celular. O Mapill funciona sem internet.',
        'O backup na sua conta Google é opcional.',
        'O tratamento segue a LGPD. Não há anúncio nem venda de dados.',
        'Apagar tudo é um botão.',
      ],
    },
  ];

  /** Tópico escolhido pelo clique; sem clique, vale o do endereço, ou o primeiro */
  private readonly picked = signal<string | null>(null);

  protected readonly activeIndex = computed(() => {
    const id = this.picked() ?? this.fragment();
    const index = this.topics.findIndex((topic) => topic.id === id);
    return index === -1 ? 0 : index;
  });
  protected readonly active = computed(() => this.topics[this.activeIndex()]);

  protected select(index: number): void {
    const topic = this.topics[index];
    if (!topic) return;
    this.picked.set(topic.id);
    this.router.navigate([], { fragment: topic.id, replaceUrl: true });
  }

  /** Setas e Home/End movem entre os botões, como numa lista de abas */
  protected onKeydown(event: KeyboardEvent): void {
    const last = this.topics.length - 1;
    const current = this.activeIndex();
    let next: number;
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        next = current === last ? 0 : current + 1;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        next = current === 0 ? last : current - 1;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = last;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.select(next);
    (event.currentTarget as HTMLElement).querySelectorAll<HTMLElement>('[role=tab]')[next]?.focus();
  }
}
