import {
  MoreVertical,
  CloudDownload,
  Settings,
  List,
  ChevronLeft,
  ChevronRight,
  PenSquare,
} from "lucide-react";

export default function CourseManager() {
  const courses = [
    {
      title: "Introduction to UIUX Design",
      category: "Design",
      instructor: "Tony Stark",
      price: "$50",
      originalPrice: "$100",
      discount: "50% off",
      image:
        "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Full Stack JavaScript Development",
      category: "Development",
      instructor: "David Smith",
      price: "$25",
      originalPrice: "$100",
      discount: "75% off",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Data Science & Machine Learning",
      category: "Machine Learning",
      instructor: "Arthur Taylor",
      price: "$90",
      originalPrice: "$100",
      discount: "10% off",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Cloud Architecture Fundamentals",
      category: "Architecture",
      instructor: "Harry Potter",
      price: "$75",
      originalPrice: "$150",
      discount: "50% off",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Product Management Masterclass",
      category: "Management",
      instructor: "John Wick",
      price: "$80",
      originalPrice: "$100",
      discount: "20% off",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Basics of Digital Marketing Strategy",
      category: "Marketing",
      instructor: "Wei Chang",
      price: "$40",
      originalPrice: "$100",
      discount: "60% off",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Advance Cybersecurity Essentials",
      category: "Cybersecurity",
      instructor: "Frank Gary",
      price: "$75",
      originalPrice: "$150",
      discount: "50% off",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-gray-900">Course manager</h1>
            <span
              className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 text-xs text-center leading-none mt-0.5"
              title="Manage your courses"
            >
              ?
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Review and manage your school courses.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <CloudDownload className="w-4 h-4" /> Import Course
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Settings className="w-4 h-4" /> Manage Categories
          </button>
          <button className="px-5 py-2 text-sm font-medium text-white bg-[#5E2ADA] rounded-lg shadow-sm hover:bg-[#4d22b3] transition-colors">
            Create Course
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex-1 min-w-[200px] relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search courses"
            className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5E2ADA] focus:border-[#5E2ADA]"
          />
        </div>

        <select className="border border-gray-200 bg-white text-gray-700 text-sm rounded-lg focus:ring-[#5E2ADA] focus:border-[#5E2ADA] block p-2">
          <option>All courses</option>
        </select>
        <select className="border border-gray-200 bg-white text-gray-700 text-sm rounded-lg focus:ring-[#5E2ADA] focus:border-[#5E2ADA] block p-2">
          <option>All categories</option>
        </select>
        <select className="border border-gray-200 bg-white text-gray-700 text-sm rounded-lg focus:ring-[#5E2ADA] focus:border-[#5E2ADA] block p-2">
          <option>All authors</option>
        </select>

        <div className="ml-auto">
          <button className="p-2 border border-gray-200 text-gray-600 bg-white rounded-lg hover:bg-gray-50">
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid of Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
          >
            <div className="h-40 overflow-hidden relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-lg text-gray-600 hover:text-gray-900 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 flex flex-col flex-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded flex-col self-start mb-2">
                {course.category}
              </span>

              <h3 className="font-bold text-gray-900 mb-4 line-clamp-2 min-h-[48px] leading-snug">
                {course.title}
              </h3>

              <div className="mt-auto flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">
                    By{" "}
                    <span className="font-semibold text-gray-900">
                      {course.instructor}
                    </span>
                  </p>
                </div>
                <div className="text-right flex items-end gap-1">
                  <div className="flex flex-col items-end leading-none translate-y-0.5">
                    <span className="text-[10px] text-gray-500">
                      {course.discount}
                    </span>
                    <span className="text-[10px] text-gray-400 line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    {course.price}
                  </span>
                </div>
              </div>

              <button className="mt-4 w-full py-2 bg-[#5E2ADA]/5 text-[#5E2ADA] text-sm font-semibold rounded-lg hover:bg-[#5E2ADA]/10 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}

        {/* Create Catalog Custom Banner Card */}
        <div className="bg-white border text-center border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center min-h-[350px]">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Expand your catalog
          </h3>
          <p className="text-xs text-gray-500 mb-6 max-w-[200px] mx-auto leading-relaxed">
            Build your own courses with our AI assistant - or license ready-made
            ones from top providers.
          </p>
          <button className="flex items-center gap-2 px-6 py-2 border border-[#5E2ADA] text-[#5E2ADA] text-sm font-semibold rounded-lg hover:bg-[#5E2ADA]/5 transition-colors">
            <PenSquare className="w-4 h-4" /> Create course
          </button>
        </div>
      </div>

      {/* Pagination Container */}
      <div className="flex items-center justify-between pt-4 pb-8">
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium bg-white border border-gray-200 text-gray-900">
            1
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-50">
            2
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-50">
            3
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-50">
            4
          </button>
          <span className="w-8 h-8 flex items-center justify-center text-gray-400 tracking-widest">
            ...
          </span>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-50">
            13
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center text-sm text-gray-500 gap-3">
          <span>Show:</span>
          <select className="border-none bg-transparent font-medium text-gray-900 focus:ring-0 cursor-pointer">
            <option>08</option>
            <option>16</option>
            <option>24</option>
          </select>
          <span className="ml-2">Per Page</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>1 - 08 of 150</span>
        </div>
      </div>
    </div>
  );
}
