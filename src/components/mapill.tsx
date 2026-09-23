import { useEffect, useState, type ReactNode } from "react";
import { Check, Clock3, ShieldCheck, Camera, Pill, BellRing, FileText, Users, ChevronDown, ArrowDown, Triangle, WifiOff, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export function Logo({ compact = false }: { compact?: boolean }) {
  return <a href="#inicio" className="inline-flex min-h-11 items-center gap-2" aria-label="Mapill, início">
    <svg viewBox="0 0 40 40" className="size-8 shrink-0" aria-hidden="true"><g transform="rotate(-45 20 20)"><path d="M20 5h1a10 10 0 0 1 10 10v5H20V5Z" fill="var(--brand-mid)"/><path d="M20 20h11v5a10 10 0 0 1-10 10h-1V20Z" fill="var(--brand-light)"/><path d="M20 5h-1A10 10 0 0 0 9 15v5h11V5Z" fill="var(--brand-mid)"/><path d="M20 20H9v5a10 10 0 0 0 10 10h1V20Z" fill="var(--brand-light)"/></g></svg>
    {!compact && <span className="font-brand text-[22px] font-bold tracking-[-0.03em] text-foreground">Mapill</span>}
  </a>
}

export function Section({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={cn("section-space scroll-mt-24", className)}><div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">{children}</div></section>
}

type Status = "tomada" | "atrasada" | "pendente" | "atenção";
const labels: Record<Status, string> = { tomada: "TOMADA", atrasada: "ATRASADA", pendente: "PENDENTE", atenção: "ATENÇÃO" };
export function StatusBadge({ status }: { status: Status }) {
  const Icon = status === "tomada" ? Check : status === "atrasada" ? Clock3 : status === "atenção" ? Triangle : Clock3;
  return <span className={`status-badge status-${status}`}><Icon aria-hidden="true" />{labels[status]}</span>
}

export function DoseCard({ compact = false, taken = false, theme = "light" }: { compact?: boolean; taken?: boolean; theme?: string }) {
  return <div className={cn("dose-card", compact && "dose-card-compact", `demo-${theme}`)}>
    <div className="flex items-start justify-between gap-3"><div><p className="mock-label">Próxima dose</p><p className="dose-time">14:30</p></div>{taken && <span className="dose-check"><Check /></span>}</div>
    <h3>Losartana 50 mg</h3><p className="mock-muted">1 comprimido</p>
    {!compact && <div className="mt-4 flex items-center gap-2"><Button className="h-10 flex-1 rounded-[10px]">{taken ? <Check /> : null}{taken ? "Tomada" : "Tomei"}</Button><Button variant="ghost" className="h-10">Pular</Button></div>}
    {compact && <div className="mt-4"><StatusBadge status={taken ? "tomada" : "pendente"} /></div>}
  </div>
}

export function PhoneFrame({ children, className, label }: { children: ReactNode; className?: string; label: string }) {
  return <div className={cn("phone", className)} role="img" aria-label={label}><div className="phone-speaker"/><div className="phone-screen">{children}</div></div>
}

function TodayScreen({ animate = false }: { animate?: boolean }) {
  const [taken, setTaken] = useState(false);
  useEffect(() => {
    if (!animate) return;
    const cycle = () => { setTaken(true); window.setTimeout(() => setTaken(false), 2600); };
    const first = window.setTimeout(cycle, 2400); const timer = window.setInterval(cycle, 6200);
    return () => { window.clearTimeout(first); window.clearInterval(timer); };
  }, [animate]);
  return <div className="screen-padding"><p className="mock-label">Hoje, 23 de setembro</p><h2 className="mock-title">Boa tarde, Helena</h2><DoseCard taken={taken}/><div className={cn("dose-list", taken && "is-taken")}>
    <div className="mini-dose"><div><strong>08:00</strong><span>Levotiroxina 50 mcg</span></div><StatusBadge status="tomada"/></div>
    <div className="mini-dose"><div><strong>12:00</strong><span>Metformina 850 mg</span></div><StatusBadge status="atrasada"/></div>
    <div className="mini-dose"><div><strong>20:00</strong><span>Sinvastatina 20 mg</span></div><StatusBadge status="pendente"/></div>
  </div></div>
}

export function AlarmScreen() { return <div className="alarm-screen"><BellRing className="size-7"/><p className="alarm-label">Hora do remédio</p><p className="alarm-time">14:30</p><h3>Losartana 50 mg</h3><p>1 comprimido</p><div className="mt-auto grid w-full gap-2"><Button className="alarm-primary"><Check/> Tomei</Button><Button className="alarm-secondary">Adiar</Button></div></div> }
export function ScannerScreen() { return <div className="screen-padding scanner-screen"><p className="mock-label">Novo medicamento</p><h2 className="mock-title">Escanear caixa</h2><div className="camera-view"><Camera/><div className="scan-line"/><span>Aponte para o código de barras</span></div><div className="suggestion"><span className="suggestion-icon"><Pill/></span><div><strong>Losartana potássica</strong><span>50 mg · 30 comprimidos</span></div><Check/></div></div> }
export function AdherenceScreen() { const bars=[82,100,94,72,100,91,100]; const days=["D","S","T","Q","Q","S","S"]; return <div className="screen-padding"><p className="mock-label">Sua semana</p><h2 className="mock-title">Adesão</h2><p className="adherence-number">92%</p><p className="mock-muted">das doses tomadas no horário</p><div className="bar-chart">{bars.map((h,i)=><div className="bar-col" key={i}><div style={{height:`${h}%`}}/><span>{days[i] ?? ""}</span></div>)}</div></div> }
export function StockScreen() { return <div className="screen-padding"><p className="mock-label">Seus medicamentos</p><h2 className="mock-title">Estoque</h2><div className="stock-card"><div className="flex justify-between gap-2"><div><strong>Losartana 50 mg</strong><p>restam 6 comprimidos</p></div><span className="stock-days">3 dias</span></div><div className="progress"><span style={{width:"20%"}}/></div><div className="stock-alert"><Triangle/> Hora de comprar</div></div><div className="stock-card"><strong>Metformina 850 mg</strong><p>restam 38 comprimidos</p><div className="progress"><span style={{width:"72%"}}/></div></div></div> }
export function HealthScreen() { return <div className="screen-padding"><p className="mock-label">Dados essenciais</p><h2 className="mock-title">Ficha de saúde</h2><div className="health-grid"><div><span>Tipo sanguíneo</span><strong>O+</strong></div><div><span>Alergias</span><strong>Dipirona</strong></div><div className="wide"><span>Condições</span><strong>Hipertensão · Diabetes tipo 2</strong></div><div className="wide"><span>Contato de emergência</span><strong>Marina · (47) 9••••-••••</strong></div></div></div> }

export function ThemeSwitcherDemo() {
 const [theme,setTheme]=useState("light");
 return <div><Tabs value={theme} onValueChange={setTheme}><TabsList className="theme-tabs" aria-label="Tema da demonstração">{[["light","Claro"],["dark","Escuro"],["contrast","Alto contraste"],["colorblind","Daltonismo"]].map(([v,l])=><TabsTrigger key={v} value={v}>{l}</TabsTrigger>)}</TabsList></Tabs><div className={cn("theme-demo",`demo-wrap-${theme}`)}><DoseCard compact theme={theme}/></div></div>
}

const faqs = [
 ["O Mapill substitui a orientação do médico?","Não. Ele organiza e lembra o que foi prescrito, mas não indica medicamento nem dose."],
 ["Precisa de internet?","Não. O Mapill funciona offline e salva tudo primeiro no celular."],
 ["O alarme toca com o celular no silencioso ou bloqueado?","Toca com o celular bloqueado. Em alguns aparelhos, como Xiaomi, é preciso liberar a inicialização automática, e o próprio app mostra o passo a passo."],
 ["Tem para iPhone?","Por enquanto, o Mapill está disponível para Android."],
 ["É gratuito?","[a definir]"],
 ["Meus dados são compartilhados com alguém?","Não. Seus dados ficam no celular e o backup na nuvem é opcional."],
];
export function Faq() { return <Accordion type="single" collapsible className="faq-list">{faqs.map(([q,a],i)=><AccordionItem value={`item-${i}`} key={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion> }

export function PlayIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.6 2.3a2 2 0 0 0-.6 1.4v16.6a2 2 0 0 0 .6 1.4l9.7-9.7L3.6 2.3Zm11 8.4 2.7-2.7-10-5.7 7.3 8.4Zm0 2.6-7.3 8.4 10-5.7-2.7-2.7Zm1.3-1.3 3.3 3a1.4 1.4 0 0 0 0-6l-3.3 3Z"/></svg>}

export const icons = { ShieldCheck, FileText, Users, WifiOff, CalendarDays, Pill, BellRing, ChevronDown, ArrowDown };
