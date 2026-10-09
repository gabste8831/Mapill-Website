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
  /** Mostra o botão de baixar o APK abaixo dos passos */
  download?: boolean;
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
  protected readonly site = SITE_CONFIG;

  protected readonly topics: DocTopic[] = [
    {
      id: 'primeiros-passos',
      label: 'Primeiro acesso',
      icon: 'download',
      title: 'Instalação e primeiro acesso',
      intro:
        'O Mapill está disponível para Android e é instalado pelo arquivo APK. Na primeira vez que você abre o app, poucos passos deixam tudo pronto.',
      steps: [
        'Toque em “Baixar APK” e abra o arquivo quando o download terminar. Se o Android pedir, permita a instalação de apps dessa origem e toque em “Instalar”.',
        'Escolha entre “Continuar com Google” e “Continuar sem login”. Com o Google, uma cópia dos seus dados fica na sua conta e pode ser recuperada se você trocar de celular ou reinstalar o app. Sem login, os dados ficam só no aparelho.',
        'Na tela “Antes de começar”, leia os termos de uso e a política de privacidade, marque as duas caixas de concordância e toque em “Concordo e continuar”.',
        'Preencha a sua ficha de saúde. Ela serve para consulta em emergências e pode ser alterada quando quiser.',
      ],
      tips: [
        'A escolha entre Google e sem login pode ser mudada depois, em Ajustes, na opção “Conta e dados”.',
        'Ainda não existe versão para iPhone.',
      ],
      download: true,
    },
    {
      id: 'telas',
      label: 'Telas principais',
      icon: 'house',
      title: 'As telas principais',
      intro: 'A barra na parte de baixo da tela leva às quatro áreas do aplicativo.',
      steps: [
        'Home: a página inicial, com as doses do dia, os próximos compromissos, os lembretes e os demais acessos.',
        'Calendário: o que aconteceu ou vai acontecer em cada dia.',
        'Medicações: a lista de todos os remédios cadastrados.',
        'Ajustes: ficha de saúde, conta, avisos e aparência do aplicativo.',
        'O botão “+”, no canto inferior da tela, abre o “Novo cadastro”, onde você escolhe entre cadastrar uma medicação ou um compromisso.',
      ],
      screen: { key: 'hoje', label: 'Tela inicial do Mapill' },
    },
    {
      id: 'cadastro',
      label: 'Cadastrar remédio',
      icon: 'camera',
      title: 'Cadastrar uma medicação',
      intro:
        'Toque em “+” e depois em “Cadastrar uma medicação”. Dá para usar a câmera ou digitar.',
      steps: [
        'Escolha “Escanear código de barras” e aponte a câmera para o código da caixa. Quando o remédio for encontrado, confira o nome e toque em “Continuar o cadastro”. Se não for o certo, toque em “Não é este, ler de novo”. Se preferir digitar, use o “Cadastro manual”.',
        'Preencha o nome, a forma como você toma (comprimido, gota, líquido, injeção e outras), a dose de cada vez, a frequência, os horários e o tempo do tratamento.',
        'Escolha o lembrete: o “Alarme” toca alto e vibra mesmo com o celular no silencioso; a “Notificação” aparece na barra do celular e respeita o silencioso.',
        'Quando aparecer “Já pode cadastrar!”, toque em “Salvar medicação”.',
        'Se quiser, complete as opções extras: estoque (quantidade, onde guarda e aviso de fim), anexos (foto do remédio e receita, com data de vencimento e lembrete) e informações adicionais (como tomar, princípio ativo e observações).',
      ],
      tips: [
        'Nenhuma resposta vem marcada de antemão, para que o app nunca registre algo que você não informou.',
      ],
      screen: { key: 'scanner', label: 'Cadastro por código de barras' },
    },
    {
      id: 'alarmes',
      label: 'Na hora da dose',
      icon: 'bell-ring',
      title: 'Na hora da dose',
      intro:
        'No horário marcado, o Mapill avisa do jeito que você escolheu no cadastro. O alarme ocupa a tela inteira, mesmo com o celular bloqueado.',
      steps: [
        '“Tomei” registra que a dose foi tomada e a desconta do estoque.',
        '“Pulei” registra que você decidiu não tomar a dose.',
        '“Adiar 5 min” faz o alarme tocar de novo em cinco minutos. Dá para adiar uma única vez por horário.',
        '“Silenciar” desliga o som sem fechar o aviso, e “Responder depois” fecha o aviso sem registrar nada.',
        'Na notificação comum, os botões de tomar e pular aparecem na própria notificação.',
      ],
      tips: [
        'Para o alarme e a notificação funcionarem, o celular precisa das autorizações que o app pede. Se faltar alguma, um aviso aparece na Home. Em Ajustes, “Como funcionam os alertas” mostra cada autorização e tem botões que levam direto às configurações do celular.',
      ],
      screen: { key: 'alarme', label: 'Alarme de dose em tela cheia' },
    },
    {
      id: 'doses-do-dia',
      label: 'Doses do dia',
      icon: 'check',
      title: 'A Home no dia a dia',
      intro:
        'A Home mostra as doses do dia em dois grupos: as que ainda esperam resposta e as “Já registradas”.',
      steps: [
        'Cada dose traz o estado escrito por extenso, como tomada, atrasada ou é agora.',
        'Para registrar uma dose, toque em “Confirmar” ou em “Pular”. Com várias doses atrasadas, “Confirmar todas” registra todas de uma vez.',
        'Marcou algo errado? Toque na dose já registrada para corrigir.',
        'A barra de “Progresso diário” mostra quantas doses do dia já foram respondidas, e uma mensagem avisa quando o dia está completo.',
      ],
      screen: { key: 'hoje', label: 'Doses do dia na Home' },
    },
    {
      id: 'estoque',
      label: 'Estoque',
      icon: 'pill-bottle',
      title: 'Controle de estoque',
      intro:
        'Na Home, “Gerenciar estoque” mostra quanto resta de cada remédio e por volta de quando ele vai acabar.',
      steps: [
        'O estoque é descontado sozinho a cada dose tomada.',
        '“Repor” adiciona unidades, por exemplo quando você compra uma caixa nova.',
        '“Recontar” substitui o estoque pelo total que você informar.',
        'Quando o remédio chega perto do fim, o app avisa com a antecedência escolhida no cadastro.',
      ],
      screen: { key: 'estoque', label: 'Controle de estoque' },
    },
    {
      id: 'compromissos',
      label: 'Compromissos',
      icon: 'stethoscope',
      title: 'Consultas, exames e outros compromissos',
      intro: 'Toque em “+” e depois em “Cadastrar um compromisso”.',
      steps: [
        'Informe a descrição, a data e o horário. O local, o nome do profissional e as orientações de preparo são opcionais.',
        'Escolha se quer ser lembrado no dia e com quantos dias de antecedência.',
        'Depois da data, o app pergunta “Você foi?”. Basta responder “Fui” ou “Não fui”.',
        'Todos os compromissos ficam na tela “Compromissos”, aberta pela Home em “Ver compromissos” ou pelo ícone no canto superior direito do Calendário.',
      ],
    },
    {
      id: 'calendario',
      label: 'Calendário',
      icon: 'calendar-days',
      title: 'Calendário',
      intro: 'O Calendário mostra o mês inteiro, com o que aconteceu e o que vai acontecer.',
      steps: [
        'Toque em um dia para ver as doses e os compromissos daquela data.',
        'Use os botões “Compromissos” e “Remédios” para filtrar o que aparece.',
        'Precisa corrigir uma dose de um dia anterior? Também é por aqui.',
      ],
    },
    {
      id: 'adesao',
      label: 'Adesão e relatório',
      icon: 'file-down',
      title: 'Adesão e relatório para a consulta',
      intro: 'Na Home, a seção “Minha adesão” abre a tela de mesmo nome.',
      steps: [
        'Veja quantas doses você tomou no período escolhido: sete, trinta ou noventa dias.',
        'As doses puladas, que você decidiu não tomar, aparecem separadas das que ficaram sem resposta.',
        'Um gráfico de colunas mostra os últimos sete dias, com a porcentagem de adesão de cada dia.',
        'No fim da tela, em “Seu relatório de adesão”, escolha o período, os remédios e os compromissos e toque em “Gerar PDF”.',
      ],
      tips: [
        'O relatório é criado no próprio celular. Você decide se e com quem compartilhá-lo, por exemplo com o seu médico.',
      ],
      screen: { key: 'adesao', label: 'Minha adesão' },
    },
    {
      id: 'ficha',
      label: 'Ficha de saúde',
      icon: 'heart-pulse',
      title: 'Ficha de saúde',
      intro: 'As informações importantes, prontas para mostrar numa consulta ou em uma emergência.',
      steps: [
        'A ficha é preenchida no primeiro acesso, com alergias, condições de saúde, tipo sanguíneo e contatos de emergência.',
        'Para alterar, vá em Ajustes e toque no seu nome, no topo da tela.',
      ],
      screen: { key: 'saude', label: 'Ficha de saúde' },
    },
    {
      id: 'aparencia',
      label: 'Aparência',
      icon: 'sun',
      title: 'Aparência e acessibilidade',
      intro: 'O app foi desenhado para ser lido com facilidade, e o resto você ajusta.',
      steps: [
        'Em Ajustes, “Configurações de tema”, escolha a aparência clara, escura ou de alto contraste, ou “Automático”, que acompanha o celular.',
        'Troque as cores que indicam o estado das doses. Isso ajuda quem tem dificuldade em distinguir cores como verde e vermelho.',
        'Os estados sempre vêm com ícone e palavra, nunca só com cor, e todas as cores passam na norma WCAG AA.',
        'Botões grandes, frases sem caixa alta e confirmação antes de qualquer ação irreversível.',
      ],
    },
    {
      id: 'conta',
      label: 'Conta e dados',
      icon: 'shield-check',
      title: 'Conta, dados e uso sem internet',
      intro: 'Dado de saúde é dado sensível, e é tratado como tal.',
      steps: [
        'O Mapill funciona por completo sem internet. Tudo o que você registra fica guardado no celular.',
        'Se você entrou com a conta do Google, as alterações são enviadas à sua conta assim que a conexão voltar, sem que você precise fazer nada.',
        'Em Ajustes, “Conta e dados”, você vincula ou desvincula a conta do Google, lê os termos aceitos, baixa uma cópia de todos os seus dados ou apaga os dados.',
        'O tratamento segue a LGPD. Não há anúncio nem venda de dados.',
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
