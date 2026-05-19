import { NextResponse } from "next/server";

const experienceData = [
  {
    icon: "/images/icon/BMKG.svg",
    role: "Internship BMKG Padang Pariaman (Bandara International Minangkabau) - GIS Specialist",
    location: "Padang City, Sumatera Barat, Indonesia",
    startYear: "9 July 2022",
    endYear: "9 Agust 2022",
    bulletPoints: [
      "Bertanggung jawab dalam melakukan pengukuran suhu udara, kecepatan angin dan kelembaban udara, dan tekanan udara di Bandara International Minangkabau (BIM).",
      "Melakukan pemasangan alat pengukuran yang tepat agar dapat melakukan pengukuran yang akurat",
      "Merekam data pengukuran dengan cermat dan memastikan keakuratan serta konsistensi data",
      "Melakukan pengentrian kelembaban udara, kecepatan angin, dan suhu kedalam microsoft excel",
      "Membuat Peta Suhu dan Kelembaban menggunakan aplikasi Arcgis",
      "Membuat Peta Suhu dan Kelembaban menggunakan aplikasi Arcgis",
      "Membuat laporan Analisis Suhu dan Kelembaban Udara di sekitar Bandara Internasional Minangkabau",
    ],
  },
  {
    icon: "/images/icon/DRONE2.avif",
    role: "Drone Mapping Kawasan Mesjid Baitul Atiq Seberang Padang Selatan - Drone Mapping",
    location: "Padang City, Sumatera Barat, Indonesia",
    startYear: "8 January 2023",
    endYear: "8 January 2023",
    bulletPoints: [
      "Mengumpulkan data geospasial melalui pemotretan udara foto udara menggunakan Drone pada kawasan Mesjid Baitul Atiq untuk pembuatan peta digital dan model 3D.",
      "Melakukan perencanaan rute penerbangan drone untuk memastikan cakupan area yang optimal dan penghindaran hambatan",
      "Membuat pemetaan lahan dari kawasan Mesjid Baitul Atiq dengan menggunakan aplikasi Agisoft",
    ],
  },

  {
    icon: "/images/icon/programming.svg",
    role: "Fullstack Developer DPMPTSP DKI Jakarta - Web Programming",
    location: "Jakarta,Indonesia",
    startYear: "1 July 2025",
    endYear: "4 April 2026",
    bulletPoints: [
      "Melakukan desain web menggunakan JakBizhub",
      "Melakukan pembuatan desain CRUD untuk dashoard admin Pleayanan Publik DPMPTSP DKI Jakarta",
      "Pengelolaan dan pengintegrasian PostgreSQL dan mySql",
      "Pengintegrasian Peta Web kehalaman User",
      "Integrasi Antara Peta Json dengan aplikasi dengan menggunakan Geoserver",
    ],
  },
];

const educationData = [
  {
    date: "Agust 2019 - Mar 2024",
    title: "Universitas Negeri Padang in Geography Science",
    subtitle: "Padang City, Sumatera Barat, Indonesia",
  },
  {
    date: "May 2024 - Oct 2024",
    title: "Green Leadership Indonesia Program",
    subtitle: "Institut Hijau Indonesia, Jakarta",
  },
  {
    date: "Feb 2025 - Jun 2025",
    title: "Web Developer Certificate",
    subtitle: "LPK Mediatama, Padang City, Sumatera Barat, Indonesia",
  },
];

const projectOverview = {
  caseStudies: [
    { name: "Wellnest", url: "#" },
    { name: "ScoutHire", url: "#" },
  ],
  sideProjects: [
    { name: "Formless", url: "#" },
    { name: "Gridsnap", comingSoon: true },
    { name: "OrbitPay Mobile App", comingSoon: true },
    { name: "Siteflow Page Builder", comingSoon: true },
  ],
};

export const GET = async () => {
  return NextResponse.json({
    experienceData,
    educationData,
    projectOverview,
  });
};
