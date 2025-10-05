import React from "react";
import {
  Code,
  Monitor,
  Figma,
  Server,
  GitBranch,
  Layout,
  Globe,
  Cpu,
  Terminal,
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "45+", label: "Proyek Selesai" },
    { value: "4+", label: "Tahun Pengalaman" },
  ];

  const tools = [
    { name: "Visual Studio Code", desc: "Code Editor", icon: Code },
    { name: "React JS", desc: "Framework", icon: Monitor },
    { name: "Next JS", desc: "Framework", icon: Globe },
    { name: "Tailwind CSS", desc: "CSS Framework", icon: Layout },
    { name: "Figma", desc: "UI/UX Design", icon: Figma },
    { name: "Node JS", desc: "Backend Runtime", icon: Server },
    { name: "Git & GitHub", desc: "Version Control", icon: GitBranch },
    { name: "TypeScript", desc: "Typed Language", icon: Terminal },
    { name: "Vercel", desc: "Deployment", icon: Cpu },
  ];

  return (
    <section className="relative py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian Perkenalan */}
        <div className="bg-[#111] rounded-3xl p-8 md:p-10 shadow-lg mb-16 text-center">
          <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Hi, perkenalkan saya{" "}
            <span className="text-blue-400 font-semibold">Maulana Ichsan</span>,{" "}
            seorang Web Developer dan Designer yang fokus pada pembuatan website
            modern dan responsif. Saya percaya desain dan fungsionalitas harus
            berjalan beriringan untuk menciptakan pengalaman pengguna terbaik.
          </p>

          {/* Stats di bawah teks */}
          <div className="mt-8 flex justify-center gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Tools */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Tools yang Dipakai</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm">
            Berikut beberapa tools yang sering saya gunakan dalam pengembangan
            website dan desain digital.
          </p>
        </div>

        {/* Grid Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500/10 mb-3">
                <tool.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                {tool.name}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
