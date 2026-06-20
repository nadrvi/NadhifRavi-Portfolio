"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ==========================================
// KOMPONEN ANIMASI SCROLL
// ==========================================
function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Kalau masuk layar -> visible, kalau keluar layar -> hidden lagi
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    ); // Muncul kalau 10% bagian elemen udah kelihatan

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Tipe data
type Mockup = {
  src: string;
  imageStyle: string;
  bgStyle: string;
};

type Project = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  mockups: Mockup[];
  hasPopUp?: boolean;
};

// ==========================================
// 1. DATA PROYEK
// ==========================================
const projectsData: Project[] = [
  {
    id: "healthify",
    title: "HEALTHIFY",
    desc: "Desain antarmuka web dengan estetika medis dan sains yang realistis dan profesional.",
    tags: ["UI/UX", "Figma"],
    hasPopUp: true,
    mockups: [
      {
        src: "/Healthify1.png",
        imageStyle: "object-cover object-top",
        bgStyle: "bg-white",
      },
      {
        src: "/Healthify3.png",
        imageStyle: "object-cover object-top",
        bgStyle: "bg-white",
      },
      {
        src: "/Healthify.png",
        imageStyle: "object-cover object-top",
        bgStyle: "bg-white",
      },
      {
        src: "/Healthify2.png",
        imageStyle: "object-cover object-top",
        bgStyle: "bg-white",
      },
      {
        src: "/Healthify4.png",
        imageStyle: "object-cover object-top",
        bgStyle: "bg-white",
      },
    ],
  },
  {
    id: "aquaflow",
    title: "AquaFlow",
    desc: "Sistem pelacakan dan manajemen inventaris ikan secara real-time dan komprehensif.",
    tags: ["React", "Hono.js", "Tailwind CSS v4", "Supabase"],
    hasPopUp: true,
    mockups: [
      {
        src: "/AquaFlow1.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-100",
      },
      {
        src: "/AquaFlow2.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-100",
      },
      {
        src: "/AquaFlow3.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-100",
      },
      {
        src: "/aquaflow4.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-100",
      },
      {
        src: "/aquaflow5.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-100",
      },
      {
        src: "/aquaflow6.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-100",
      },
    ],
  },
  {
    id: "skydeliver",
    title: "SkyDeliver",
    desc: "Perancangan arsitektur sistem inti, database, dan ERD untuk jaringan logistik pengiriman drone otomatis.",
    tags: ["System Design", "Process Modeling"],
    hasPopUp: true,
    mockups: [
      {
        src: "/skydeliver/4.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/skydeliver/5.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/skydeliver/6.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/skydeliver/9.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/skydeliver/10.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/skydeliver/11.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/skydeliver/12.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/skydeliver/13.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
    ],
  },
  {
    id: "savana_MotoClub",
    title: "Savana-MotoClub",
    desc: "Platform reservasi tur motor dengan antarmuka visual yang imersif dan performa responsif bertenaga edge-network.",
    tags: ["React", "Hono.js", "Tailwind CSS v4", "Cloudflare Pages"],
    hasPopUp: false,
    mockups: [
      {
        src: "/Savana/1.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/Savana/2.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/Savana/3.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/Savana/4.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/Savana/5.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/Savana/6.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/Savana/7.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/Savana/8.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/Savana/9.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
    ],
  },
  {
    id: "OrderOps_Analytics",
    title: "OrderOps Analytics",
    desc: "Dashboard antrean e-commerce real-time dengan optimasi algoritma dan struktur data.",
    tags: ["Python", "Streamlit", "Pandas", "HTML/CSS"],
    hasPopUp: true,
    mockups: [
      {
        src: "/OrderOps/OrderOps.png",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
    ],
  },
  {
    id: "Data_Ops",
    title: "Operational Data Management",
    desc: "Pengelolaan arus kas, rekapitulasi data anggota, dan transaksi harian menggunakan sistem Moka POS & Excel.",
    tags: ["Excel", "Moka POS"],
    hasPopUp: true,
    mockups: [
      {
        src: "/FrontOffice/excel-cashflow.webp",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
      {
        src: "/FrontOffice/MOKA POS.webp",
        imageStyle: "object-contain",
        bgStyle: "bg-slate-50",
      },
    ],
  },
];

// ==========================================
// 2. KOMPONEN KARTU PROYEK (Reusable)
// ==========================================
function ProjectCard({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === project.mockups.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? project.mockups.length - 1 : prev - 1,
    );
  };

  const handleCardClick = () => {
    if (project.hasPopUp) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={`group/card cursor-pointer flex flex-col ${project.hasPopUp ? "cursor-zoom-in" : ""}`}
        onClick={handleCardClick}
      >
        <div className="relative aspect-[4/3] rounded-2xl mb-4 sm:mb-6 overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 group-hover/card:shadow-md group-hover/card:-translate-y-1 group/carousel">
          <div
            className="flex w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {project.mockups.map((mockup: Mockup, i: number) => (
              <div
                key={i}
                className={`relative w-full h-full flex-shrink-0 transition-transform duration-700 ease-out ${mockup.bgStyle}`}
              >
                <Image
                  src={mockup.src}
                  alt={`${project.title} Mockup ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={mockup.imageStyle}
                />
              </div>
            ))}
          </div>

          {/* Tombol Navigasi - Mobile UI Fix: opacity-100 di layar HP, sembunyi di Desktop kecuali di-hover */}
          {project.mockups.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/90 text-slate-800 p-2 sm:p-2.5 rounded-full shadow-md opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white active:scale-95 md:hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-[18px] sm:h-[18px]"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/90 text-slate-800 p-2 sm:p-2.5 rounded-full shadow-md opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white active:scale-95 md:hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-[18px] sm:h-[18px]"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                {project.mockups.map((_, i: number) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "bg-slate-800 w-4" : "bg-slate-400 w-1.5"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-slate-900">
          {project.title}
        </h3>
        <p className="text-slate-500 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base leading-relaxed">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-slate-500 mt-auto">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-slate-50 rounded-full border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* POP-UP MODAL - Mobile Fixes (Touch targets bigger) */}
      {isModalOpen && project.hasPopUp && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-2 sm:p-4 md:p-12 cursor-zoom-out"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full backdrop-blur-md z-50 active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-6 sm:h-6"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-6xl h-[85vh] md:h-full flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.mockups[currentIndex].src}
              alt={`${project.title} HD Mockup`}
              fill
              className="object-contain"
              sizes="100vw"
            />

            {project.mockups.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 sm:left-4 md:-left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 p-3 sm:p-4 rounded-full transition-all active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 sm:right-4 md:-right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 p-3 sm:p-4 rounded-full transition-all active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ==========================================
// 3. HALAMAN UTAMA (Main Page)
// ==========================================
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-lg border-b border-stone-200/50">
        <div className="flex justify-between items-center py-4 px-5 sm:px-8 max-w-5xl mx-auto">
          {/* BURGER MENU (Tampil di sm, sembunyi di md) */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-slate-900 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-900 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-900 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>

          {/* NAMA LU (Tengah di sm, Kiri di md) */}
          <div className="font-extrabold text-lg tracking-tighter absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link href="/">Nadhif Ravi</Link>
          </div>

          {/* NAV LINKS (Sembunyi di sm, Muncul di md) */}
          <div className="hidden md:flex gap-8 font-semibold text-sm text-slate-500">
            <Link href="#work" className="hover:text-slate-900">
              Work
            </Link>
            <Link href="#about" className="hover:text-slate-900">
              About
            </Link>
            <Link href="#contact" className="hover:text-slate-900">
              Contact
            </Link>
          </div>

          {/* Spacer biar nama lu tetep presisi di tengah di HP */}
          <div className="md:hidden w-10" />
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-50 border-b border-stone-200 p-5 flex flex-col gap-4 font-semibold text-slate-500">
            <Link href="#work" onClick={() => setIsMenuOpen(false)}>
              Work
            </Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="py-10 sm:py-16 md:py-24 px-5 sm:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-center md:text-left overflow-hidden">
        <div className="md:col-span-4 order-first md:order-last">
          <FadeInSection>
            <div className="relative aspect-square w-full max-w-[180px] sm:max-w-[240px] md:max-w-none bg-slate-200 rounded-full md:rounded-3xl overflow-hidden shadow-lg mx-auto md:-translate-y-12">
              <Image
                src="/my-profile.webp"
                alt="Nadhif Ravi Prathama"
                fill
                sizes="(max-width: 768px) 240px, 400px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeInSection>
        </div>

        <div className="md:col-span-8">
          <FadeInSection delay={150}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6 md:mb-8 text-slate-900">
              Information Systems Student, Full-Stack Developer & Data
              Enthusiast.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto md:mx-0 mb-6 sm:mb-8 md:mb-12 leading-relaxed px-2 sm:px-0">
              Transforming complex workflows into intuitive digital experiences
              through smart engineering.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-slate-900 text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-md"
            >
              Let&apos;s Talk ↗
            </Link>
          </FadeInSection>
        </div>
      </header>

      {/* SELECTED WORK SECTION */}
      <section
        id="work"
        className="py-12 sm:py-20 md:py-24 px-5 sm:px-8 max-w-5xl mx-auto border-t border-slate-200/60 overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
          {projectsData.map((project, index) => (
            <FadeInSection key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ABOUT & TECH STACK SECTION */}
      <section
        id="about"
        className="py-12 sm:py-20 md:py-32 px-5 sm:px-8 bg-slate-100/50 overflow-hidden border-t border-slate-200/60"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-center md:text-left">
          <FadeInSection>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-6 text-slate-900">
                About & Journey
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mx-auto md:mx-0 max-w-xl px-2 sm:px-0">
                Selain mendalami keilmuan di Sistem Informasi, pengalaman terjun
                langsung ke industri mengajarkan gue banyak hal praktis. Mulai
                dari memangkas waktu load halaman web hingga 35%, membangun
                backend serverless yang responsif, sampai mengelola ribuan data
                transaksi agar sistem tetap rapi, akurat, dan terukur.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900">
                Tech Arsenal
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2.5 sm:gap-3 select-none">
                {[
                  { name: "Next.js", url: "https://nextjs.org/" },
                  { name: "React", url: "https://react.dev/" },
                  {
                    name: "TypeScript",
                    url: "https://www.typescriptlang.org/",
                  },
                  { name: "Tailwind CSS v4", url: "https://tailwindcss.com/" },
                  { name: "Hono.js", url: "https://hono.dev/" },
                  { name: "PostgreSQL", url: "https://www.postgresql.org/" },
                  { name: "Supabase", url: "https://supabase.com/" },
                  { name: "Python", url: "https://www.python.org/" },
                  { name: "Streamlit", url: "https://streamlit.io/" },
                  { name: "Pandas", url: "https://pandas.pydata.org/" },
                  { name: "HTML/CSS", url: "https://www.w3schools.com/html/" },
                  {
                    name: "Cloudflare Pages",
                    url: "https://pages.cloudflare.com/",
                  },
                  { name: "Git/GitHub", url: "https://github.com/" },
                  { name: "Figma", url: "https://www.figma.com/" },
                  { name: "Moka POS", url: "https://www.mokapos.com/" },
                  {
                    name: "Excel",
                    url: "https://www.microsoft.com/en-us/microsoft-365/excel",
                  },
                ].map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-[11px] sm:text-sm font-semibold text-slate-600 rounded-full border border-slate-200 shadow-sm transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 md:hover:-translate-y-1 hover:shadow-md cursor-pointer"
                  >
                    {tech.name}
                  </a>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FOOTER */}
      <FadeInSection>
        <footer
          id="contact"
          className="py-20 sm:py-28 md:py-40 px-5 sm:px-8 max-w-5xl mx-auto text-center overflow-hidden"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-8 tracking-tight text-slate-900">
            Let&apos;s build something great together.
          </h2>
          <a
            href="mailto:nadhifravi@gmail.com"
            className="text-base sm:text-xl md:text-2xl font-medium text-slate-500 hover:text-slate-900 transition-colors block mb-10 sm:mb-16"
          >
            nadhifravi@gmail.com
          </a>
          <div className="flex justify-center gap-6 sm:gap-10 font-bold text-[10px] sm:text-xs md:text-sm text-slate-900 uppercase tracking-[0.2em]">
            <a
              href="https://www.linkedin.com/in/nadhif-ravi/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nadrvi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        </footer>
      </FadeInSection>
    </div>
  );
}
