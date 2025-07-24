'use client'
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

import { Calendar, Video, Globe, LinkIcon, BarChart } from "lucide-react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
const categories = ["Site", "Statscenter", "Livestats", "Instagram", "TikTok", "YouTube"];

const links = [
  // {
  //   title: "Calendrier de Jade",
  //   url: "https://monsite.com/calendrier",
  //   icon: <Calendar className="w-5 h-5 mr-4" />,
  // },
  // {
  //   title: "Dernière vidéo YouTube",
  //   url: "https://youtube.com/ma-video",
  //   icon: <Video className="w-5 h-5 mr-4" />,
  // },
   { title: "Site de Carla", url: "https://monsite.com", icon: <Globe className="w-5 h-5 mr-4" />, category: "Site" },
  { title: "Statscenter de Carla", url: "https://monsite.com", icon: <BarChart className="w-5 h-5 mr-4" />, category: "Statscenter" },
  { title: "Livestats de Carla", url: "https://monsite.com", icon: <BarChart className="w-5 h-5 mr-4" />, category: "Livestats" },
  { title: "Statscenter de Lucile", url: "https://monsite.com", icon: <BarChart className="w-5 h-5 mr-4" />, category: "Statscenter" },
  { title: "Livestats de Lucile", url: "https://monsite.com", icon: <BarChart className="w-5 h-5 mr-4" />, category: "Livestats" },
  { title: "Instagram d'Inès", url: "https://www.instagram.com/lena_jade_backcourt/", icon: <FaInstagram className="w-5 h-5 mr-4" />, category: "Instagram" },
  { title: "Tiktok d'Inès", url: "https://www.tiktok.com/@lena_jade_backcourt", icon: <FaTiktok className="w-5 h-5 mr-4" />, category: "TikTok" },
  { title: "Youtube de Inès & Carla", url: "https://www.youtube.com/@mona_lisa_bk", icon: <FaYoutube className="w-5 h-5 mr-4" />, category: "YouTube" },
  { title: "Youtube de Maëlys", url: "https://www.youtube.com/@mona_lisa_bk", icon: <FaYoutube className="w-5 h-5 mr-4" />, category: "YouTube" },
  { title: "Youtube de Lucile", url: "https://www.youtube.com/@mona_lisa_bk", icon: <FaYoutube className="w-5 h-5 mr-4" />, category: "YouTube" },
  { title: "Tiktok de Carla", url: "https://www.tiktok.com/@lena_jade_backcourt", icon: <FaTiktok className="w-5 h-5 mr-4" />, category: "TikTok" },
  { title: "Tiktok de Lucile", url: "https://www.tiktok.com/@lena_jade_backcourt", icon: <FaTiktok className="w-5 h-5 mr-4" />, category: "TikTok" },
  { title: "Instagram de Carla", url: "https://www.instagram.com/lena_jade_backcourt/", icon: <FaInstagram className="w-5 h-5 mr-4" />, category: "Instagram" },
  { title: "Instagram de Lucile", url: "https://www.instagram.com/lena_jade_backcourt/", icon: <FaInstagram className="w-5 h-5 mr-4" />, category: "Instagram" },

 
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Site");

  const filteredLinks = links.filter(link => link.category === selectedCategory);

  return (
    <main className="min-h-screen flex flex-col justify-between items-center bg-purple-800 px-6 pt-6 text-white">
      {/* Header */}
      <div className="w-full max-w-md mb-6 mt-20">
        <h1 className="text-3xl font-bold text-center mb-6">Carla Fan Links</h1>

        {/* Menu déroulant */}
        <div className=" mt-8 mb-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full bg-white text-purple-900 font-semibold">
              <SelectValue placeholder="Choisis une catégorie" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Liste des liens */}
      <div className="w-full max-w-md space-y-4 flex-grow">
        {filteredLinks.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-purple-700 hover:bg-purple-600 transition rounded-xl px-4 py-3 text-lg font-medium"
          >
            {link.icon}
            {link.title}
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-screen bg-gradient-to-b from-purple-800 to-purple-900 py-6 mt-10">
        <p className="text-sm text-white text-opacity-70 text-center mx-auto w-full max-w-none">
          Fait avec{" "}
          <span className="text-2xl -mt-0.5 mr-1 ml-1 inline-block text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.7)]">
            &hearts;
          </span>{" "}
          par <strong>Carla Fan Account</strong>
        </p>
      </footer>
    </main>
  );
}