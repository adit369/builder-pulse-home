import { useState } from "react";
import { ChevronRight } from "lucide-react";

const mockWebtoons = [
  {
    id: 1,
    title: "Lookism",
    genre: "Drama",
    thumbnail: "/placeholder.svg",
    isNew: false,
    isUp: false,
  },
  {
    id: 2,
    title: "Osora",
    genre: "Fantasy",
    thumbnail: "/placeholder.svg",
    isNew: true,
    isUp: false,
  },
  {
    id: 3,
    title: "The Mafia Nanny",
    genre: "Romance",
    thumbnail: "/placeholder.svg",
    isNew: true,
    isUp: false,
  },
  {
    id: 4,
    title: "Tears on a Withered Flower",
    genre: "Romance",
    thumbnail: "/placeholder.svg",
    isNew: true,
    isUp: false,
  },
  {
    id: 5,
    title: "Degree of Love",
    genre: "Romance",
    thumbnail: "/placeholder.svg",
    isNew: false,
    isUp: false,
  },
];

const mockWebtoonsRow2 = [
  {
    id: 6,
    title: "SubZero",
    genre: "Romance",
    thumbnail: "/placeholder.svg",
    isNew: true,
    isUp: true,
  },
  {
    id: 7,
    title: "True Beauty",
    genre: "Romance",
    thumbnail: "/placeholder.svg",
    isNew: false,
    isUp: false,
  },
  {
    id: 8,
    title: "Lore Olympus",
    genre: "Romance",
    thumbnail: "/placeholder.svg",
    isNew: false,
    isUp: false,
  },
  {
    id: 9,
    title: "Tower of God",
    genre: "Fantasy",
    thumbnail: "/placeholder.svg",
    isNew: false,
    isUp: false,
  },
  {
    id: 10,
    title: "Unordinary",
    genre: "Drama",
    thumbnail: "/placeholder.svg",
    isNew: false,
    isUp: false,
  },
];

export function TrendingSection() {
  const [activeTab, setActiveTab] = useState<"trending" | "popular">(
    "trending",
  );

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-webtoon-text">
            Trending & Popular Series
          </h2>
          <ChevronRight className="w-6 h-6 text-webtoon-text/60" />
        </div>

        {/* Tabs */}
        <div className="flex mb-8">
          <button
            onClick={() => setActiveTab("trending")}
            className={`px-6 py-3 text-sm font-semibold rounded-full mr-4 transition-colors ${
              activeTab === "trending"
                ? "bg-webtoon-text text-white"
                : "bg-webtoon-gray text-webtoon-text hover:bg-webtoon-text/10"
            }`}
          >
            Trending
          </button>
          <button
            onClick={() => setActiveTab("popular")}
            className={`px-6 py-3 text-sm font-semibold rounded-full transition-colors ${
              activeTab === "popular"
                ? "bg-webtoon-text text-white"
                : "bg-webtoon-gray text-webtoon-text hover:bg-webtoon-text/10"
            }`}
          >
            Popular
          </button>
        </div>

        {/* Content Grid */}
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mockWebtoons.map((webtoon, index) => (
              <WebtoonCard
                key={webtoon.id}
                webtoon={webtoon}
                ranking={index + 1}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mockWebtoonsRow2.map((webtoon, index) => (
              <WebtoonCard
                key={webtoon.id}
                webtoon={webtoon}
                ranking={index + 6}
              />
            ))}
          </div>
        </div>

        {/* Get the app banner */}
        <div className="mt-12 text-center">
          <button className="bg-webtoon-gray hover:bg-webtoon-border text-webtoon-text px-8 py-3 rounded-full font-semibold transition-colors">
            Get the app
          </button>
        </div>
      </div>
    </section>
  );
}

interface WebtoonCardProps {
  webtoon: {
    id: number;
    title: string;
    genre: string;
    thumbnail: string;
    isNew: boolean;
    isUp: boolean;
  };
  ranking: number;
}

function WebtoonCard({ webtoon, ranking }: WebtoonCardProps) {
  return (
    <div className="webtoon-card group cursor-pointer">
      <div className="relative">
        {/* Thumbnail */}
        <div className="aspect-[3/4] bg-webtoon-gray rounded-lg mb-3 relative overflow-hidden">
          <img
            src={webtoon.thumbnail}
            alt={webtoon.title}
            className="w-full h-full object-cover"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {webtoon.isNew && (
              <span className="webtoon-badge webtoon-badge-new">NEW</span>
            )}
            {webtoon.isUp && (
              <span className="webtoon-badge webtoon-badge-up">UP</span>
            )}
          </div>
        </div>

        {/* Ranking */}
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-webtoon-text text-white rounded-full flex items-center justify-center text-sm font-bold">
          {ranking}
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className="font-semibold text-webtoon-text text-sm mb-1 line-clamp-2 group-hover:text-webtoon-green transition-colors">
          {webtoon.title}
        </h3>
        <p className="text-xs text-webtoon-text/60">{webtoon.genre}</p>
      </div>
    </div>
  );
}
