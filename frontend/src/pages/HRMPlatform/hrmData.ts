export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  status: "Active" | "On Leave" | "Remote";
  location: string;
  avatar: string;
  email: string;
}

export interface Candidate {
  id: string;
  name: string;
  avatar: string;
  status: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  feedback: {
    category: string;
    rating: number;
  }[];
  details: {
    label: string;
    value: string;
  }[];
  skills: {
    name: string;
    proficiency: "Beginner" | "Average" | "Fluent" | "Expert";
    progress: number;
  }[];
  documents: {
    name: string;
    date: string;
    type: "pdf" | "png" | "xls" | "jpg";
    size?: string;
  }[];
}

export const hrmStats = [
  { label: "Total Employees", value: "254", trend: "+12%", color: "blue" },
  { label: "Open Positions", value: "18", trend: "Stable", color: "emerald" },
  { label: "New Applications", value: "42", trend: "+5%", color: "indigo" },
  {
    label: "Avg. Time to Hire",
    value: "14 days",
    trend: "-2 days",
    color: "purple",
  },
];

export const employees: Employee[] = [
  {
    id: "1",
    name: "Philipp Davidson",
    role: "HR Manager",
    department: "Human Resources",
    status: "Active",
    location: "Berlin, Germany",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    email: "p.davidson@axythic.com",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Senior Developer",
    department: "Engineering",
    status: "Remote",
    location: "Singapore",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    email: "s.chen@axythic.com",
  },
  {
    id: "3",
    name: "Marcus Thorne",
    role: "Product Designer",
    department: "Design",
    status: "Active",
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    email: "m.thorne@axythic.com",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    role: "Marketing Lead",
    department: "Marketing",
    status: "On Leave",
    location: "Madrid, Spain",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    email: "e.rodriguez@axythic.com",
  },
];

export const emiliaMitchell: Candidate = {
  id: "emilia-1",
  name: "Emilia Mitchell",
  avatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  status: "Contract offered",
  role: "Webdeveloper Ruby on Rails",
  location: "Musterstraße 1, Berlin",
  phone: "+49 970 192 381",
  email: "anna.podrez.design@gmail.com",
  feedback: [
    { category: "Overall impression", rating: 5 },
    { category: "Professional competence", rating: 4 },
    { category: "Quality of submitted documents", rating: 3 },
  ],
  details: [
    { label: "Desired salary", value: "65.000 EUR" },
    { label: "Channel", value: "Homepage, listed since 07.11.2019" },
    { label: "Period of notice", value: "3 months" },
    { label: "Company", value: "Agency" },
  ],
  skills: [
    { name: "Database and SQL", proficiency: "Expert", progress: 90 },
    { name: "Containers", proficiency: "Beginner", progress: 30 },
    { name: "English", proficiency: "Fluent", progress: 85 },
    { name: "Web development", proficiency: "Average", progress: 65 },
  ],
  documents: [
    { name: "Contract #193.pdf", date: "1 Jul 2022", type: "pdf" },
    { name: "NDA document.pdf", date: "1 Jul 2022", type: "pdf" },
    { name: "List of requirem....xls", date: "28 Jun 2022", type: "xls" },
    { name: "Invoice.jpg", date: "28 Jun 2022", type: "jpg" },
    { name: "Scan 10:17 16.0...png", date: "28 Jun 2022", type: "png" },
  ],
};

export const upcomingInterviews = [
  {
    name: "James Wilson",
    time: "10:00 AM",
    interviewer: "Philipp Davidson",
    role: "UX Designer",
  },
  {
    name: "Linda May",
    time: "01:30 PM",
    interviewer: "Sarah Chen",
    role: "Frontend Engineer",
  },
  {
    name: "Robert Fox",
    time: "04:00 PM",
    interviewer: "Marcus Thorne",
    role: "Legal Counsel",
  },
];

export const recentHirings = [
  {
    name: "Alex Rivera",
    role: "Backend Dev",
    dept: "Engineering",
    date: "2 days ago",
  },
  {
    name: "Sophie Grant",
    role: "Copywriter",
    dept: "Marketing",
    date: "5 days ago",
  },
];
