import { BookOpen, Play, CheckCircle } from "lucide-react";

export default function MyCourses() {
  const ongoingCourses = [
    {
      title: "Workflow Automation Masterclass",
      mentor: "Sofia Lindberg",
      progress: 98,
      totalHours: 12,
      completedHours: 11.8,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      status: "ongoing",
    },
    {
      title: "Project Management Essentials",
      mentor: "Daniel Scott",
      progress: 67,
      totalHours: 8,
      completedHours: 5.3,
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400",
      status: "ongoing",
    },
    {
      title: "Data Visualization with Python",
      mentor: "Alex Chang",
      progress: 42,
      totalHours: 20,
      completedHours: 8.4,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      status: "ongoing",
    },
    {
      title: "Advanced React Context & Hooks",
      mentor: "Elena Rodriguez",
      progress: 15,
      totalHours: 6,
      completedHours: 0.9,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400",
      status: "ongoing",
    },
    {
      title: "Cybersecurity Fundamentals",
      mentor: "Marcus Vance",
      progress: 82,
      totalHours: 15,
      completedHours: 12.3,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
      status: "ongoing",
    },
    {
      title: "Creative Writing Workshop",
      mentor: "Sarah Jenkins",
      progress: 5,
      totalHours: 10,
      completedHours: 0.5,
      image:
        "at&fit=crop&q=80&w=400",
      status: "ongoing",
    },
  ];

  const completedCourses = [
    {
      title: "Introduction to Figma Design",
      mentor: "Jessica Parker",
      completedDate: "Jan 12, 2025",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Digital Marketing 101",
      mentor: "Tom Hardy",
      completedDate: "Dec 05, 2024",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "JavaScript Basics for Web",
      mentor: "Chris Evans",
      completedDate: "Oct 22, 2024",
      image:
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Public Speaking Confidence",
      mentor: "Oprah W.",
      completedDate: "Sep 14, 2024",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-[#5E2ADA]" /> My Courses
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Track your progress and access your enrolled programs.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Ongoing Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
            >
              <div className="h-40 rounded-xl overflow-hidden relative mb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Mentor: {course.mentor}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-600 font-medium">
                  <span>{course.progress}% Complete</span>
                  <span>
                    {course.completedHours} / {course.totalHours} hrs
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#5E2ADA] h-full rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Completed Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {completedCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-4"
            >
              <img
                src={course.image}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-500">Mentor: {course.mentor}</p>
                <p className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-2">
                  <CheckCircle className="w-3 h-3 inline-block -mt-0.5 mr-1" />
                  {course.completedDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
