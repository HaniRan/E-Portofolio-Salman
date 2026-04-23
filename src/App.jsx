import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
// Pastikan GalleryModal diimport!
import GalleryModal from "./components/GalleryModal"; 
import { IdCard, Book, Building2, Building, Target, MapPin, Sparkles, GraduationCap } from "lucide-react";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css';
import { listTools, listProyek, listFotoPPL } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";

AOS.init();

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); 

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        {/* WARNA AURORA: Biru Gelap, Biru Indigo, dan Ungu Vivid */}
        <Aurora
          colorStops={["#030014", "#4F46E5", "#7C3AED"]} 
          blend={0.5}
          amplitude={1.2}
          speed={0.5}
        />
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HERO SECTION --- */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800/80 backdrop-blur-md w-fit p-4 rounded-2xl border border-white/5">
              <img src="./assets/faris1.png" className="w-10 rounded-md" alt="Mini Profile" />
              <q className="text-gray-200 text-sm">Mendidik adalah seni menghidupkan harapan dan menerangi masa depan.</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Salman Hidayat" disabled={false} speed={3} />
            </h1>
            <BlurText
              text="Mengabdi sambil belajar, tumbuh untuk menginspirasi masa depan."
              delay={150}
              animateBy="words"
              direction="top"
              className="mb-6 text-gray-300"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors shadow-lg shadow-indigo-900/20">
                <ShinyText text="Jurnal PPL" disabled={false} speed={3} />
              </a>
            </div>
          </div>
          
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Salman Hidayat"
              title="TJKT Student & Future Educator"
              handle="salman"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/faris.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
        </div>

        {/* --- ABOUT ME SECTION (VERSI TJKT) --- */}
        <div className="mt-20 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-indigo-500/30 shadow-[0_0_30px_rgba(79,70,229,0.3)] bg-gradient-to-br from-[#0a0a0a] via-[#0d0d1a] to-[#0a0a0a] p-8" id="about">
          <div className="flex flex-col lg:flex-row gap-12 pt-0" data-aos="fade-up">
            
            {/* Kolom Kiri: Profil Mahasiswa */}
            <div className="basis-full lg:basis-1/2 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-indigo-500/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-indigo-400" /> Profil Mahasiswa PPG
              </h2>
              <p className="text-gray-300 leading-relaxed mb-10 text-justify">
                Saya adalah mahasiswa Pendidikan Profesi Guru (PPG) yang berdedikasi dalam mencetak generasi teknisi digital handal yang mampu beradaptasi dengan cepat di ekosistem industri teknologi informasi global.
              </p>
              
              {/* Grid Kartu Informasi dengan Icon - Warna Indigo/Violet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 text-center flex flex-col items-center group hover:border-indigo-500/50 transition-all">
                  <div className="mb-3 p-3 bg-indigo-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <IdCard size={28} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">NIM</h3>
                  <p className="text-gray-300 text-sm">2590544951278</p>
                </div>

                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 text-center flex flex-col items-center group hover:border-indigo-500/50 transition-all">
                  <div className="mb-3 p-3 bg-indigo-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Book size={28} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Bidang Studi</h3>
                  <p className="text-gray-300 text-sm text-center">Teknik Jaringan Komputer dan Telekomunikasi</p>
                </div>

                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 text-center flex flex-col items-center group hover:border-indigo-500/50 transition-all">
                  <div className="mb-3 p-3 bg-indigo-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Building2 size={28} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">LPTK</h3>
                  <p className="text-gray-300 text-sm">Universitas Negeri Makassar</p>
                </div>

                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 text-center flex flex-col items-center group hover:border-indigo-500/50 transition-all">
                  <div className="mb-3 p-3 bg-indigo-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Building size={28} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Sekolah Mitra</h3>
                  <p className="text-gray-300 text-xs">SMK NEGERI 10 MAKASSAR</p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Biodata Pribadi */}
            <div className="basis-full lg:basis-1/2 pl-0 lg:pl-8">
              <h2 className="text-3xl font-bold text-white mb-6">Biodata Pribadi</h2>
              <div className="text-gray-300 space-y-4 text-justify leading-relaxed">
                <p>
                  Perkenalkan nama saya <span className="text-white font-bold">Salman Hidayat</span>. Sebagai lulusan Teknik yang mendalami infrastruktur TI, motivasi saya menjadi pendidik adalah untuk menjembatani kesenjangan antara kurikulum sekolah vokasi dengan dinamika industri teknologi saat ini.
                </p>
                <p>
                  Keahlian saya dalam <span className="text-indigo-400">Teknik Jaringan Komputer dan Telekomunikasi</span> mencakup administrasi server, instalasi jaringan fiber optik, hingga keamanan jaringan. Saya percaya bahwa keterampilan teknis harus berjalan selaras dengan etika profesi di ruang siber.
                </p>
                <p>
                  Selama menjalani PPL di <span className="text-white font-bold">SMKN 10 Makassar</span>, saya fokus mengembangkan modul ajar yang interaktif menggunakan alat simulasi jaringan modern, guna memastikan setiap siswa memiliki pengalaman belajar yang kontekstual dan bermakna.
                </p>
              </div>

              <div className="mt-8 p-5 border-l-4 border-indigo-500 bg-indigo-500/5 italic text-gray-300 rounded-r-xl">
                "Teknologi hanyalah alat. Dalam hal membuat anak-anak bekerja sama dan memotivasi mereka, guru adalah yang paling utama."
              </div>
            </div>
          </div>
        </div>

        {/* --- REFLEKSI AKHIR PPL TERBIMBING (VERSI TJKT) --- */}
        <div className="mt-20 pt-12 border-t border-indigo-500/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-3">
              Refleksi Akhir PPL Terbimbing
            </h2>
            <p className="text-gray-400 flex items-center justify-center gap-2">
              <Sparkles size={18} className="text-indigo-400" /> Fondasi Dasar Karakter Guru Profesional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-zinc-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-indigo-500/30 transition-all">
              <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-white">
                <MapPin size={22} className="text-indigo-400" /> Profil & Inspirasi
              </h3>
              <p className="text-gray-400 leading-relaxed text-justify text-sm sm:text-base">
                Sebagai pendidik di era digital, saya terinspirasi untuk mempersempit kesenjangan akses teknologi di daerah. Fokus saya adalah melahirkan teknisi jaringan yang tidak hanya ahli secara teknis, tetapi juga memiliki integritas tinggi dalam menjaga keamanan data dan etika berkomunikasi di ruang siber.
              </p>
            </div>

            <div className="bg-zinc-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-indigo-500/30 transition-all">
              <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-white">
                <Target size={22} className="text-indigo-400" /> Model Guru Masa Depan
              </h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div>
                  <h4 className="text-indigo-400 font-bold uppercase text-xs tracking-widest mb-1">Misi Utama</h4>
                  <p className="text-gray-400 italic">"Membangun ekosistem belajar IT yang adaptif, inovatif, dan berstandar industri."</p>
                </div>
                <ul className="text-gray-400 list-disc ml-5 space-y-2">
                  <li>Ahli dalam administrasi infrastruktur jaringan dan cloud computing.</li>
                  <li>Fasilitator yang mengutamakan <i>hands-on experience</i> dan desain berpikir.</li>
                  <li>Pembelajar sepanjang hayat yang relevan dengan perkembangan IoT dan Cyber Security.</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 bg-zinc-900/40 p-10 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-indigo-500/30 transition-all">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-white">
                <Sparkles size={24} className="text-indigo-400" /> Analisis Artefak Pembelajaran
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm sm:text-base text-justify">
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-bold mb-1">Kendala Proses</p>
                    <p className="text-gray-400">Menjelaskan konsep abstrak seperti protokol jaringan dan subnetting agar mudah dipahami siswa tanpa mengabaikan standar teknis yang rumit.</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">Konsep Pedagogi</p>
                    <p className="text-gray-400">Menerapkan <i>Teaching at the Right Level (TaRL)</i> melalui pembagian level kesulitan praktikum jaringan berdasarkan kemampuan awal siswa.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-bold mb-1">Faktor Keberhasilan</p>
                    <p className="text-gray-400">Implementasi simulasi virtual menggunakan Cisco Packet Tracer dan GNS3 yang terbukti meningkatkan kepercayaan diri siswa sebelum menyentuh perangkat fisik.</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">Adaptasi & Perubahan</p>
                    <p className="text-gray-400">Mengintegrasikan tren <i>Smart Networking</i> dan konfigurasi mikrotik berbasis studi kasus nyata yang sering ditemukan di dunia kerja (IDUKA).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION DOKUMENTASI PPL --- */}
        <h2 className="text-3xl font-bold mt-32 mb-10 text-center">Dokumentasi PPL</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listFotoPPL.map((ppl) => (
            <div 
              key={ppl.id} 
              onClick={() => setSelectedItem(ppl)} 
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 h-64 shadow-lg"
              data-aos="zoom-in"
            >
              <img 
                src={ppl.gambar} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt={ppl.nama}
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold text-sm">{ppl.nama}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- PROJECT SECTION --- */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up">
          <h1 className="text-center text-4xl font-bold mb-2">Jurnal PPL</h1>
          <div className="proyek-box">
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
            />
          </div>
        </div>

        {/* --- CONTACT SECTION --- */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Kolom Kiri: Media Sosial */}
            <div className="flex-1 bg-zinc-900/50 border border-white/5 p-10 rounded-2xl backdrop-blur-sm" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
              <p className="text-gray-400 mb-8">
                Mari berdiskusi lebih lanjut mengenai pendidikan vokasi atau teknologi melalui media sosial saya.
              </p>
              
              <div className="flex flex-col gap-4">
                {/* Instagram */}
                <a href="https://instagram.com/salmanhidayat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-500/50 border border-transparent transition-all group">
                  <div className="p-3 bg-zinc-700 rounded-lg group-hover:bg-indigo-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Instagram</h4>
                    <p className="text-xs text-gray-500">@salmanhidayat</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/628XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-500/50 border border-transparent transition-all group">
                  <div className="p-3 bg-zinc-700 rounded-lg group-hover:bg-indigo-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">WhatsApp</h4>
                    <p className="text-xs text-gray-500">Kirim Pesan Langsung</p>
                  </div>
                </a>

                {/* LinkedIn / GitHub Optional */}
                <a href="#" className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-500/50 border border-transparent transition-all group">
                  <div className="p-3 bg-zinc-700 rounded-lg group-hover:bg-indigo-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">LinkedIn</h4>
                    <p className="text-xs text-gray-500">Salman Hidayat</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Email Form (FormSubmit) */}
            <div className="flex-1" data-aos="fade-left">
              <form 
                action="https://formsubmit.co/GANTI_EMAIL_KAMU@gmail.com" 
                method="POST" 
                className="bg-zinc-900/50 border border-white/5 p-10 w-full rounded-2xl backdrop-blur-sm"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.location.href} />

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-300 text-sm">Full Name</label>
                    <input type="text" name="name" placeholder="Nama Anda..." className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:border-indigo-500 outline-none transition-all text-white" required />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-300 text-sm">Message</label>
                    <textarea name="message" rows="6" placeholder="Tulis pesan refleksi atau pertanyaan di sini..." className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl outline-none focus:border-indigo-500 transition-all text-white" required></textarea>
                  </div>

                  <button type="submit" className="bg-indigo-600 p-4 rounded-xl hover:bg-indigo-500 transition-all font-bold text-white shadow-lg shadow-indigo-900/20">
                    SEND TO EMAIL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* MODALS */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
      
      <GalleryModal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        image={selectedItem} 
      />
    </>
  )
}

export default App;