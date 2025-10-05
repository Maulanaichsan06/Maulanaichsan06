import React from "react";
import { ArrowDownCircle, PlayCircle } from "lucide-react";
import profileImg from "../assets/logo.jpg"; // ganti sesuai path gambarmu

const Hero = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm text-blue-400 font-medium backdrop-blur-sm">
            “Kode yang indah lahir dari ketekunan.💫”
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, Saya <span className="text-blue-500">Maulana Ichsan</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Saya memiliki ketertarikan dalam bidang{" "}
            <span className="text-blue-400 font-medium">Programming</span> dan{" "}
            <span className="text-blue-400 font-medium">Desain</span>. Fokus
            pada pembuatan Website serta Desain Poster, Pamflet, dan Banner.
            Saya sudah menekuni bidang ini lebih dari{" "}
            <span className="text-blue-400 font-medium">4 tahun</span>.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            {/* Tombol Download CV */}
            <a
              href="/CV_MAULANA_ICHSAN.pdf" // ganti dengan path CV kamu, misalnya "/assets/CV-Maulana.pdf"
              download
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Download CV <ArrowDownCircle size={18} />
            </a>

            {/* Tombol Lihat Proyek */}
            <a
              href="/fullprojects" // ganti dengan link proyek kamu
              className="px-8 py-3 border border-blue-500 text-blue-400 font-medium rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              Lihat Proyek <PlayCircle size={18} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 shadow-[0_0_50px_-10px_rgba(37,99,235,0.5)]">
            <img
              src={profileImg}
              alt="Maulana Ichsan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
