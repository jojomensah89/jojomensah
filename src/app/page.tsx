import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { RESUME_DATA } from "@/data/resume-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sectionNumber = (number: string) => (
  <span className="mono-face text-[10px] font-bold tracking-[.18em] text-[#d95d39]">
    {number}
  </span>
);

export default function Page() {
  const refFlow = RESUME_DATA.projects[0];
  const spendy = RESUME_DATA.projects[1];

  return (
    <main className="overflow-hidden">
      <section className="paper-grid border-b quiet-rule">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-5 sm:px-8 sm:pb-20 lg:px-12">
          <nav className="rise-in flex items-center justify-between border-b quiet-rule pb-4">
            <a className="display-face text-xl font-bold tracking-tight" href="#top">
              EJM<span className="text-[#d95d39]">.</span>
            </a>
            <div className="mono-face flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.16em] text-[#65706d] sm:gap-6">
              <a className="transition hover:text-[#17211f]" href="#work">Work</a>
              <a className="transition hover:text-[#17211f]" href="#experience">Experience</a>
              <a className="transition hover:text-[#17211f]" href={`mailto:${RESUME_DATA.contact.email}`}>Contact</a>
            </div>
          </nav>

          <div id="top" className="grid gap-12 pt-16 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:pt-24">
            <div>
              <p className="rise-in mono-face mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#d95d39]">
                Software engineer · Ghana
              </p>
              <h1 className="rise-in-delay display-face max-w-4xl text-5xl font-bold leading-[.92] tracking-[-.055em] text-[#17211f] sm:text-7xl lg:text-[6.6rem]">
                I build systems people can trust.
              </h1>
              <p className="rise-in-late mt-7 max-w-xl text-lg leading-8 text-[#46504d] sm:text-xl">
                {RESUME_DATA.summary}
              </p>
            </div>

            <div className="rise-in-late grid gap-5 border-l-2 border-[#d95d39] pl-5 sm:grid-cols-[1fr_auto] sm:items-end lg:mb-2">
              <div>
                <p className="mono-face text-[10px] font-bold uppercase tracking-[.16em] text-[#65706d]">Currently focused on</p>
                <p className="display-face mt-2 text-2xl font-bold leading-tight">Reliable workflows, AI-enabled products, and product-minded engineering.</p>
                <a className="mono-face mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] underline decoration-[#d95d39] decoration-2 underline-offset-4" href="#work">
                  See selected work <ArrowDownRight className="size-4" />
                </a>
              </div>
              <Avatar className="size-24 border-2 border-[#17211f] bg-[#d7dfdb] shadow-[5px_5px_0_#d95d39] sm:size-28">
                <AvatarImage alt={`Portrait of ${RESUME_DATA.name}`} src={RESUME_DATA.avatarUrl} />
                <AvatarFallback className="display-face text-2xl font-bold text-[#17211f]">{RESUME_DATA.initials}</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="rise-in-late mt-16 flex flex-wrap gap-x-6 gap-y-3 border-t quiet-rule pt-5 text-sm text-[#46504d]">
            <a className="inline-flex items-center gap-2 hover:text-[#d95d39]" href={RESUME_DATA.locationLink} target="_blank" rel="noreferrer"><MapPin className="size-4" /> {RESUME_DATA.location}</a>
            <a className="inline-flex items-center gap-2 hover:text-[#d95d39]" href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a>
            <a className="inline-flex items-center gap-2 hover:text-[#d95d39]" href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-8 border-b quiet-rule pb-8 lg:grid-cols-[.35fr_.65fr]">
          <div>{sectionNumber("01 / SELECTED WORK")}</div>
          <div>
            <h2 className="display-face text-4xl font-bold tracking-[-.035em] sm:text-5xl">One product. A complete responsibility.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#65706d]">The strongest work is not always open source. RefFlow shows how I approach a complex, human workflow end to end.</p>
          </div>
        </div>

        <article className="mt-10 grid overflow-hidden border quiet-rule bg-[#17211f] text-[#f5f3ed] lg:grid-cols-[1.15fr_.85fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="mono-face text-[10px] font-bold uppercase tracking-[.17em] text-[#e6a38e]">{refFlow.eyebrow}</p>
            <h3 className="display-face mt-5 text-5xl font-bold tracking-[-.05em] sm:text-6xl">{refFlow.name}</h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d7dfdb]">{refFlow.description}</p>
            <p className="mt-5 max-w-xl border-l border-[#d95d39] pl-4 text-sm leading-6 text-[#b6c2bd]">{refFlow.contribution}</p>
            <div className="mt-9 flex flex-wrap gap-2">
              {refFlow.stack.map((item) => <span className="mono-face border border-[#52615c] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.08em]" key={item}>{item}</span>)}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a className="inline-flex items-center gap-2 bg-[#f5f3ed] px-4 py-3 text-sm font-bold text-[#17211f] transition hover:bg-[#d95d39] hover:text-white" href={refFlow.href} target="_blank" rel="noreferrer">{refFlow.linkLabel} <ArrowUpRight className="size-4" /></a>
              <span className="mono-face text-[10px] uppercase tracking-[.12em] text-[#a9b6b0]">Private product · walkthrough on request</span>
            </div>
          </div>

          <div className="relative min-h-[390px] overflow-hidden bg-[#e9ebe5] p-5 text-[#17211f] sm:p-7">
            <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(#355c50 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
            <div className="relative mx-auto mt-6 max-w-md border border-[#17211f] bg-[#fcfbf7] p-4 shadow-[8px_8px_0_#d95d39] sm:p-5">
              <div className="flex items-center justify-between border-b border-[#d4d3c9] pb-3"><span className="mono-face text-[9px] font-bold uppercase tracking-[.15em]">Request workspace</span><span className="size-2 rounded-full bg-[#d95d39]" /></div>
              <div className="mt-5 grid gap-3">
                <div className="border border-[#d4d3c9] p-3"><p className="mono-face text-[9px] uppercase tracking-[.12em] text-[#65706d]">Student request</p><p className="mt-1 text-sm font-semibold">Graduate application recommendation</p><div className="mt-3 h-1.5 w-3/4 bg-[#d95d39]" /></div>
                <div className="grid grid-cols-2 gap-3"><div className="border border-[#d4d3c9] p-3"><p className="mono-face text-[9px] uppercase tracking-[.1em] text-[#65706d]">Status</p><p className="mt-1 text-sm font-semibold">In review</p></div><div className="border border-[#d4d3c9] p-3"><p className="mono-face text-[9px] uppercase tracking-[.1em] text-[#65706d]">Reminder</p><p className="mt-1 text-sm font-semibold">Queued</p></div></div>
                <div className="border border-[#355c50] bg-[#e2eee8] p-3"><p className="mono-face text-[9px] uppercase tracking-[.1em] text-[#355c50]">Reliable delivery</p><p className="mt-1 text-sm font-semibold">Retries protected by idempotency</p></div>
              </div>
            </div>
            <p className="absolute bottom-6 left-7 right-7 mono-face text-[10px] font-semibold tracking-[.04em] text-[#65706d]">A representative product workflow — no user data shown</p>
          </div>
        </article>

        <article className="mt-5 grid overflow-hidden border quiet-rule bg-[#fcfbf7] lg:grid-cols-[.8fr_1.2fr]">
          <div className="flex min-h-56 flex-col justify-between border-b quiet-rule bg-[#e2eee8] p-7 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="mono-face text-[10px] font-bold uppercase tracking-[.16em] text-[#355c50]">{spendy.eyebrow}</p>
            <div>
              <p className="display-face text-5xl font-bold tracking-[-.05em] text-[#17211f]">{spendy.name}</p>
              <div className="mt-4 grid grid-cols-3 gap-2"><span className="h-12 bg-[#355c50]" /><span className="mt-5 h-7 bg-[#d95d39]" /><span className="mt-2 h-10 border border-[#355c50]" /></div>
            </div>
            <p className="mono-face mt-8 text-[10px] font-bold uppercase tracking-[.13em] text-[#65706d]">Money clarity, without clutter</p>
          </div>
          <div className="p-7 sm:p-10">
            <p className="max-w-2xl text-lg leading-8 text-[#46504d]">{spendy.description}</p>
            <p className="mt-5 max-w-2xl border-l-2 border-[#d95d39] pl-4 text-sm leading-6 text-[#65706d]">{spendy.contribution}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {spendy.stack.map((item) => <span className="mono-face border quiet-rule px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.08em] text-[#46504d]" key={item}>{item}</span>)}
            </div>
            <div className="mt-9 flex flex-wrap gap-5">
              <a className="inline-flex items-center gap-2 bg-[#17211f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#d95d39]" href={spendy.href} target="_blank" rel="noreferrer">{spendy.linkLabel} <ArrowUpRight className="size-4" /></a>
              <a className="inline-flex items-center gap-2 border-b-2 border-[#17211f] pb-1 text-sm font-bold" href={spendy.repositoryHref} target="_blank" rel="noreferrer"><Github className="size-4" /> View repository</a>
            </div>
          </div>
        </article>
      </section>

      <section className="border-y quiet-rule bg-[#e9ebe5]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[.35fr_.65fr] lg:px-12 lg:py-20">
          <div>{sectionNumber("02 / OPEN SOURCE")}</div>
          <div>
            <h2 className="display-face text-4xl font-bold tracking-[-.035em] sm:text-5xl">Contributing where the tools are shared.</h2>
            <div className="mt-8 border-t border-[#b8c2bd]">
              {RESUME_DATA.openSource.map((contribution) => (
                <article className="grid gap-5 py-6 sm:grid-cols-[.8fr_1.2fr]" key={contribution.project}>
                  <p className="mono-face text-[10px] font-bold uppercase tracking-[.15em] text-[#355c50]">{contribution.project}</p>
                  <div><p className="text-base leading-7 text-[#46504d]">{contribution.description}</p><a className="mono-face mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] underline decoration-[#d95d39] decoration-2 underline-offset-4" href={contribution.href} target="_blank" rel="noreferrer">{contribution.linkLabel} <ArrowUpRight className="size-4" /></a></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-y quiet-rule bg-[#fcfbf7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[.35fr_.65fr] lg:px-12 lg:py-28">
          <div>{sectionNumber("03 / EXPERIENCE")}</div>
          <div>
            <h2 className="display-face text-4xl font-bold tracking-[-.035em] sm:text-5xl">A deliberate route into software.</h2>
            <div className="mt-10">
              {RESUME_DATA.experience.map((item, index) => (
                <article className="grid gap-4 border-t quiet-rule py-6 sm:grid-cols-[100px_1fr]" key={`${item.company}-${item.role}`}>
                  <p className="mono-face text-[10px] font-bold uppercase tracking-[.12em] text-[#65706d]">{item.period}</p>
                  <div><p className="text-base font-bold">{item.role} <span className="font-normal text-[#65706d]">/ {item.company}</span></p><p className="mt-2 max-w-xl text-sm leading-6 text-[#65706d]">{item.description}</p>{index === 0 && <span className="mono-face mt-3 inline-block text-[9px] font-bold uppercase tracking-[.12em] text-[#d95d39]">Most recent role</span>}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[.35fr_.65fr] lg:px-12 lg:py-28">
        <div>{sectionNumber("04 / CAPABILITIES")}</div>
        <div>
          <h2 className="display-face text-4xl font-bold tracking-[-.035em] sm:text-5xl">Comfortable across the product surface.</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {RESUME_DATA.capabilities.map((group) => <div className="border-t quiet-rule pt-4" key={group.title}><h3 className="mono-face text-[10px] font-bold uppercase tracking-[.14em] text-[#d95d39]">{group.title}</h3><p className="mt-3 text-base leading-7 text-[#46504d]">{group.items.join(" · ")}</p></div>)}
          </div>
        </div>
      </section>

      <footer className="bg-[#d95d39] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.35fr_.65fr] lg:px-12 lg:py-20">
          <div>{sectionNumber("05 / CONTACT")}</div>
          <div><p className="display-face max-w-3xl text-4xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl">Have a product problem worth solving?</p><a className="mt-8 inline-flex items-center gap-2 border-b-2 border-white pb-1 text-lg font-bold" href={`mailto:${RESUME_DATA.contact.email}`}><Mail className="size-5" /> {RESUME_DATA.contact.email}<ArrowUpRight className="size-5" /></a><p className="mono-face mt-14 text-[10px] font-bold uppercase tracking-[.14em] text-[#ffd9ce]">© {new Date().getFullYear()} Ebenezer Jojo Mensah</p></div>
        </div>
      </footer>
    </main>
  );
}
