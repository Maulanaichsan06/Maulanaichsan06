import React, { useState } from "react";
import { ArrowUpRight, GraduationCap, Briefcase, Award } from "lucide-react";
import LazyImage from "./LazyImage";

// 🔹 Import gambar dari assets
import Logo from "../assets/logo.jpg";

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Pendidikan", "Pengalaman", "Sertifikat"];

  // === PENDIDIKAN ===
  const data = [
    {
      title: "Sekolah Dasar Negeri 1 Purwojati",
      description: "Belajar dasar akademik dan pembentukan karakter.",
      image: Logo,
      category: "Pendidikan",
      year: "2009 - 2015",
    },
    {
      title: "MTS Ma'arif NU 1 Purwojati",
      description: "Mulai aktif di kegiatan OSIS dan lomba desain poster.",
      image: Logo,
      category: "Pendidikan",
      year: "2015 - 2017",
    },
    {
      title: "SMK Karya Teknologi 2 Jatilawang",
      description: "Jurusan Teknologi Laboratorium Medik.",
      image: Logo,
      category: "Pendidikan",
      year: "2017 - 2020",
    },
    {
      title: "Universitas Muhammadiyah Purwokerto - Teknik Informatika",
      description: "Mendalami AI, UI/UX, dan pengembangan aplikasi full-stack.",
      image: Logo,
      category: "Pendidikan",
      year: "September 2021 - Agustus 2025",
    },

    // === PENGALAMAN ===
    {
      title: "Magang di PT Pusat Pelatihan Jakarta 119",
      description:
        "Mengerjakan proyek website company profile dan dashboard admin.",
      image: Logo,
      category: "Pengalaman",
      year: "2023",
    },
    {
      title: "Proyek Akhir Skripsi: Mengevaluasi Usability Aplikasi Presensi",
      description:
        "Evaluasi Usability Aplikasi Presensi Mobile UMP Menggunakan Metode User Experience Questionnaire dan Think Aloud.",
      image: Logo,
      category: "Pengalaman",
      year: "2023",
    },
    {
      title:
        "Kerja Praktek - Freelance Wordpress Developer - PT Pusat Pelatihan Jakarta 119",
      description: "Membuat website profil perusahaan untuk menarik pelanggan.",
      image: Logo,
      category: "Pengalaman",
      year: "2024",
    },
  ];

  // === SERTIFIKAT ===
  const sertifikat = [
    {
      title: "Sertifikat UI/UX Design - Dicoding",
      description:
        "Mendalami konsep desain antarmuka modern dan prototyping dengan Figma.",
      image: Logo,
      category: "Sertifikat",
      year: "2023",
    },
    {
      title: "Sertifikat Full-Stack Web Developer",
      description: "Mempelajari backend dengan Node.js, Express, dan MongoDB.",
      image: Logo,
      category: "Sertifikat",
      year: "2024",
    },
    {
      title: "Sertifikat Machine Learning Dasar",
      description:
        "Pengenalan dasar algoritma dan model machine learning dengan Python.",
      image: Logo,
      category: "Sertifikat",
      year: "2024",
    },
  ];

  const displayedData =
    activeFilter === "Sertifikat"
      ? sertifikat
      : activeFilter === "All"
      ? data
      : data.filter((item) => item.category === activeFilter);

  return (
    <section className="relative py-24 bg-black text-white">
      {/* Background gradasi biru */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Pendidikan & Pengalaman
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              yang Membentuk Saya
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Sebuah perjalanan belajar, bekerja, dan berkembang di dunia
            teknologi.
          </p>
        </div>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30"
                  : "bg-transparent text-blue-300 border-blue-600 hover:bg-blue-700/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Konten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedData.map((item, i) => (
            <div
              key={i}
              className="group bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[16/9]">
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-1 text-xs font-semibold rounded-br-xl">
                  {item.year}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  {item.category === "Pendidikan" && (
                    <GraduationCap size={18} />
                  )}
                  {item.category === "Pengalaman" && <Briefcase size={18} />}
                  {item.category === "Sertifikat" && <Award size={18} />}
                  <span className="text-sm font-medium">{item.category}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info tambahan saat lihat sertifikat */}
        {activeFilter === "Sertifikat" && (
          <p className="text-center text-sm text-gray-400 mt-8">
            Menampilkan seluruh sertifikat yang telah saya dapatkan 💼
          </p>
        )}
      </div>
    </section>
  );
};

export default Experience;
