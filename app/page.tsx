"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

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
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

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

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  images: string[];
  hasPopUp?: boolean;
};

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

const certificatesData: Certificate[] = [
  {
    id: "Dicoding-bundle",
    title: "IT Fundamentals & Software Engineering Path",
    issuer: "Dicoding Indonesia",
    year: "2026",
    hasPopUp: true,
    images: [
      "/Certificates/Financial_certificate.png",
      "/Certificates/Programmin_logic.png",
      "/Certificates/web_program.png",
      "/Certificates/AWS.png",
      "/Certificates/Software_develop.png",
    ],
  },
  {
    id: "naspo-gold-medal",
    title:
      "Gold Medalist - National Applied Science Project Olympiad (Energy Category)",
    issuer: "IYSA & Institut Teknologi Sepuluh Nopember (ITS)",
    year: "2023",
    hasPopUp: true,
    images: ["/Certificates/sertifikat-penghargaan-NASPO.jpg"],
  },
  {
    id: "isqo-biology-finalist",
    title:
      "National Finalist - International Science Qualification Olympiad (Biology)",
    issuer: "Edu Expo & ILTI",
    year: "2023",
    hasPopUp: true,
    images: ["/Certificates/EDU-EXPO-BIOLOGI.jpg"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const openModal = () => {
    if (!project.hasPopUp) return;
    setIsModalOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsModalVisible(true));
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
    window.setTimeout(() => setIsModalOpen(false), 300);
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight" && project.mockups.length > 1) {
        setCurrentIndex((prev) =>
          prev === project.mockups.length - 1 ? 0 : prev + 1,
        );
      }
      if (e.key === "ArrowLeft" && project.mockups.length > 1) {
        setCurrentIndex((prev) =>
          prev === 0 ? project.mockups.length - 1 : prev - 1,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`group/card cursor-pointer flex flex-col ${project.hasPopUp ? "cursor-zoom-in" : ""} `}
        onClick={openModal}
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

      {mounted &&
        isModalOpen &&
        project.hasPopUp &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 md:p-12 cursor-zoom-out transition-[background-color,backdrop-filter] duration-300 ease-out ${isModalVisible ? "bg-slate-900/95 backdrop-blur-md" : "bg-slate-900/0 backdrop-blur-none"}`}
            onClick={closeModal}
          >
            <button
              className={`absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full backdrop-blur-md z-50 active:scale-95 transition-all duration-300 ease-out ${isModalVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
              style={{ transitionDelay: isModalVisible ? "120ms" : "0ms" }}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
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
              className={`relative inline-flex items-center justify-center max-w-[92vw] max-h-[85vh] cursor-default transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isModalVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-1.5 sm:p-2.5 max-w-[92vw] max-h-[85vh] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={currentIndex}
                  src={project.mockups[currentIndex].src}
                  alt={`${project.title} HD Mockup`}
                  className="modal-img-fade block max-w-[88vw] max-h-[78vh] w-auto h-auto rounded-md sm:rounded-lg object-contain"
                />
              </div>
              {project.mockups.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className={`absolute left-1 sm:-left-5 md:-left-14 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 p-3 sm:p-4 rounded-full active:scale-95 transition-all duration-300 ease-out ${isModalVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}
                    style={{
                      transitionDelay: isModalVisible ? "150ms" : "0ms",
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
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className={`absolute right-1 sm:-right-5 md:-right-14 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 p-3 sm:p-4 rounded-full active:scale-95 transition-all duration-300 ease-out ${isModalVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}`}
                    style={{
                      transitionDelay: isModalVisible ? "150ms" : "0ms",
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                  <div
                    className={`absolute -bottom-7 sm:-bottom-9 left-1/2 -translate-x-1/2 flex gap-1.5 transition-all duration-300 ease-out ${isModalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                    style={{
                      transitionDelay: isModalVisible ? "180ms" : "0ms",
                    }}
                  >
                    {project.mockups.map((_, i: number) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white w-4" : "bg-white/40 w-1.5"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <style jsx>{`
              @keyframes modalImgFade {
                from {
                  opacity: 0;
                  transform: scale(1.015);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              .modal-img-fade {
                animation: modalImgFade 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              }
            `}</style>
          </div>,
          document.body,
        )}
    </>
  );
}

function CertificateCard({ cert }: { cert: Certificate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === cert.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? cert.images.length - 1 : prev - 1));
  };

  const openModal = () => {
    if (!cert.hasPopUp) return;
    setIsModalOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsModalVisible(true));
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
    window.setTimeout(() => setIsModalOpen(false), 300);
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight" && cert.images.length > 1) {
        setCurrentIndex((prev) =>
          prev === cert.images.length - 1 ? 0 : prev + 1,
        );
      }
      if (e.key === "ArrowLeft" && cert.images.length > 1) {
        setCurrentIndex((prev) =>
          prev === 0 ? cert.images.length - 1 : prev - 1,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`p-4 h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group/card ${cert.hasPopUp ? "cursor-zoom-in" : "cursor-default"}`}
        onClick={openModal}
      >
        <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-xl border border-slate-100 bg-stone-50 group/carousel min-h-[200px]">
          <div
            className="flex w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cert.images.map((img, i) => (
              <div key={i} className="relative w-full h-full flex-shrink-0">
                <Image
                  src={img}
                  alt={`${cert.title} ${i}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {cert.images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-sm opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-sm opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                {cert.images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all ${i === currentIndex ? "bg-slate-800 w-3" : "bg-slate-400 w-1"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-base font-bold text-slate-900 leading-snug flex-1">
            {cert.title}
          </h3>
          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
            {cert.year}
          </span>
        </div>
        <p className="text-xs sm:text-sm font-medium text-slate-500 mt-auto">
          {cert.issuer}
        </p>
      </div>

      {mounted &&
        isModalOpen &&
        cert.hasPopUp &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 md:p-12 cursor-zoom-out transition-[background-color,backdrop-filter] duration-300 ease-out ${isModalVisible ? "bg-slate-900/95 backdrop-blur-md" : "bg-slate-900/0 backdrop-blur-none"}`}
            onClick={closeModal}
          >
            <button
              className={`absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full backdrop-blur-md z-50 active:scale-95 transition-all duration-300 ease-out ${isModalVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
              style={{ transitionDelay: isModalVisible ? "120ms" : "0ms" }}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
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
              className={`relative inline-flex items-center justify-center max-w-[92vw] max-h-[85vh] cursor-default transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isModalVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-1.5 sm:p-2.5 max-w-[92vw] max-h-[85vh] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={currentIndex}
                  src={cert.images[currentIndex]}
                  alt={`${cert.title} HD`}
                  className="modal-img-fade block max-w-[88vw] max-h-[78vh] w-auto h-auto rounded-md sm:rounded-lg object-contain"
                />
              </div>

              {cert.images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className={`absolute left-1 sm:-left-5 md:-left-14 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 p-3 sm:p-4 rounded-full active:scale-95 transition-all duration-300 ease-out ${isModalVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}
                    style={{
                      transitionDelay: isModalVisible ? "150ms" : "0ms",
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
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className={`absolute right-1 sm:-right-5 md:-right-14 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 p-3 sm:p-4 rounded-full active:scale-95 transition-all duration-300 ease-out ${isModalVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}`}
                    style={{
                      transitionDelay: isModalVisible ? "150ms" : "0ms",
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                  <div
                    className={`absolute -bottom-7 sm:-bottom-9 left-1/2 -translate-x-1/2 flex gap-1.5 transition-all duration-300 ease-out ${isModalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                    style={{
                      transitionDelay: isModalVisible ? "180ms" : "0ms",
                    }}
                  >
                    {cert.images.map((_, i: number) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white w-4" : "bg-white/40 w-1.5"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <style jsx>{`
              @keyframes modalImgFade {
                from {
                  opacity: 0;
                  transform: scale(1.015);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              .modal-img-fade {
                animation: modalImgFade 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              }
            `}</style>
          </div>,
          document.body,
        )}
    </>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans select-none">
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-lg border-b border-stone-200/50"
      >
        <div className="flex justify-between items-center py-4 px-5 sm:px-8 max-w-5xl mx-auto">
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

          <div className="font-extrabold text-lg tracking-tighter absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link href="/">Nadhif Ravi</Link>
          </div>

          <div className="hidden md:flex gap-8 font-semibold text-sm text-slate-500">
            <Link href="#work" className="hover:text-slate-900">
              Work
            </Link>
            <Link href="#about" className="hover:text-slate-900">
              About
            </Link>
            <Link href="#certificates" className="hover:text-slate-900">
              Certificates
            </Link>
            <Link href="#contact" className="hover:text-slate-900">
              Contact
            </Link>
          </div>

          <div className="md:hidden w-10" />
        </div>

        {mounted &&
          isMenuOpen &&
          createPortal(
            <>
              <div
                className="md:hidden fixed inset-0 z-30 bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              />
              <div
                className="mobile-menu-fade md:hidden fixed left-0 right-0 z-40 bg-stone-50 border-b border-slate-200 shadow-lg p-5 flex flex-col gap-4 font-semibold text-slate-500"
                style={{ top: navHeight }}
              >
                <Link href="#work" onClick={() => setIsMenuOpen(false)}>
                  Work
                </Link>
                <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link href="#certificates" onClick={() => setIsMenuOpen(false)}>
                  Certificates
                </Link>
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </>,
            document.body,
          )}
        <style jsx>{`
          @keyframes mobileMenuFade {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .mobile-menu-fade {
            animation: mobileMenuFade 0.2s ease-out;
          }
        `}</style>
      </nav>

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
              Enthusiast
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
                langsung ke industri mengajarkan saya banyak hal praktis. Mulai
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

      <section
        id="certificates"
        className="py-12 sm:py-20 md:py-24 px-5 sm:px-8 max-w-5xl mx-auto border-t border-slate-200/60 overflow-hidden"
      >
        <div className="text-center md:text-left mb-10 md:mb-12">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900">
              Licenses & Certifications
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto md:mx-0">
              Documenting a journey of professional growth, academic
              exploration, and purpose-driven initiatives.
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <FadeInSection key={cert.id} delay={index * 100}>
              <CertificateCard cert={cert} />
            </FadeInSection>
          ))}
        </div>
      </section>

      <FadeInSection>
        <footer
          id="contact"
          className="py-20 sm:py-28 md:py-40 px-5 sm:px-8 max-w-5xl mx-auto text-center overflow-hidden border-t border-slate-200/60"
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
