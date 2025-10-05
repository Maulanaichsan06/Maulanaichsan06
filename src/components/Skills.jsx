import React from "react";
import { Code, Users, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Hard Skills",
      description:
        "Kemampuan teknis yang saya kuasai dalam pengembangan web dan desain.",
      icon: Code,
      gradient: "from-blue-600 to-cyan-500",
      features: [
        "React.js & Node.js",
        "Tailwind CSS & UI/UX Design",
        "Git & GitHub",
        "Responsive Web Design",
      ],
    },
    {
      title: "Soft Skills",
      description:
        "Keterampilan non-teknis yang membantu saya bekerja secara efisien dan kolaboratif.",
      icon: Users,
      gradient: "from-cyan-600 to-sky-500",
      features: [
        "Komunikasi Efektif",
        "Problem Solving",
        "Kreativitas & Adaptabilitas",
        "Time Management",
      ],
    },
    {
      title: "Bahasa",
      description:
        "Kemampuan berbahasa yang membantu saya dalam komunikasi global.",
      icon: Globe,
      gradient: "from-sky-500 to-blue-500",
      features: ["Bahasa Indonesia (Native)", "English (Intermediate)"],
    },
  ];

  return (
    <section className="relative py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-500">Skills</span> Saya
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Berikut ini adalah kemampuan yang saya miliki, baik dalam bidang
            teknis maupun non-teknis, yang membantu saya membangun proyek secara
            profesional.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${skill.gradient} text-white shadow-lg mb-6`}
              >
                <skill.icon size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-400 mb-6">{skill.description}</p>

              <ul className="space-y-3">
                {skill.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
