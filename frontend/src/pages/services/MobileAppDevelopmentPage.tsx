import ServicePage, {
  type ServicePageContent,
} from "../../components/ServicePage";

const content: ServicePageContent = {
  eyebrow: "Mobile app development",
  title: "Mobile App Development Grounded in Useful Product Flows",
  shortTitle: "Mobile App Development",
  description:
    "Shape mobile product ideas into clear journeys, responsive interfaces, and scoped implementation decisions based on real users, devices, data, and release requirements.",
  overviewTitle: "Mobile products start with the user journey",
  overview: [
    "A useful mobile experience starts with the tasks people need to complete away from a desktop. Early work should define navigation, input states, notifications or device capabilities if required, network conditions, and the data a user can view or change.",
    "Axythic's portfolio includes a mobile-focused fitness interface demonstration and responsive React experiences. Native platform delivery, store submission, offline behaviour, device integrations, and a cross-platform framework would be confirmed only when they are part of an agreed project scope.",
  ],
  suitableNeeds: [
    "Turning a mobile product idea into a reviewable interface and interaction prototype.",
    "Designing a focused customer, member, student, or field-user journey.",
    "Creating a companion experience for an existing web service or approved API.",
    "Testing information hierarchy and key actions on smaller screens before full implementation.",
    "Defining whether responsive web, cross-platform, or platform-specific delivery best fits the requirement.",
  ],
  capabilitiesTitle: "Capabilities for focused mobile experiences",
  capabilities: [
    {
      title: "Mobile-first interface design",
      description:
        "Focused screen layouts, navigation, forms, feedback states, and touch-friendly controls for smaller viewports.",
    },
    {
      title: "Interactive prototypes",
      description:
        "Reviewable product flows that help clarify screen relationships and behaviour before production scope is fixed.",
    },
    {
      title: "Stateful user journeys",
      description:
        "Interfaces can model onboarding, dashboards, task flows, progress, lists, detail views, and settings.",
    },
    {
      title: "API-ready planning",
      description:
        "Screen states and data needs can be mapped against an existing or proposed service interface.",
    },
    {
      title: "Responsive companion experiences",
      description:
        "A mobile-oriented web experience may be considered when installation or device-specific capabilities are not required.",
    },
    {
      title: "Release requirement review",
      description:
        "Platform, device, privacy, authentication, offline, notification, and store needs are identified before delivery claims are made.",
    },
  ],
  approachTitle: "From mobile requirement to delivery decision",
  approach: [
    {
      title: "Define users",
      description:
        "Clarify who uses the experience, where they use it, and the small set of tasks that matter most.",
    },
    {
      title: "Map journeys",
      description:
        "Describe screens, navigation, empty states, errors, permissions, and data dependencies.",
    },
    {
      title: "Prototype",
      description:
        "Build and review key flows at mobile sizes before widening the implementation scope.",
    },
    {
      title: "Confirm delivery",
      description:
        "Select responsive web, cross-platform, or native delivery only after technical and release constraints are known.",
    },
  ],
  relatedDemos: [
    {
      title: "Fitness App Concept",
      description:
        "A mobile-focused fitness interface demonstration with dashboard, workout, and progress-oriented screens.",
      to: "/fitness-app",
    },
    {
      title: "Shopcart",
      description:
        "A responsive shopping-flow concept with product, cart, and checkout interactions relevant to smaller screens.",
      to: "/shopcart",
    },
    {
      title: "EduQuest Student Experience",
      description:
        "A learning interface concept with courses, inbox, tasks, team, account, and help views.",
      to: "/eduquest/student",
    },
  ],
  faqs: [
    {
      question: "Is the fitness demonstration a published client app?",
      answer:
        "No. It is an Axythic portfolio demonstration using sample content. It is provided to explore an interface concept, not as a client case study or a claim of app-store availability.",
    },
    {
      question: "Should a project use native or cross-platform development?",
      answer:
        "That decision depends on device features, performance needs, team constraints, release platforms, maintenance expectations, and budget. A specific approach should be confirmed after those requirements are reviewed.",
    },
    {
      question: "Can a mobile project start as a responsive web prototype?",
      answer:
        "Yes, when the goal is to review information hierarchy and workflows without relying on native device features. A web prototype should not be described as a production native application.",
    },
  ],
};

export default function MobileAppDevelopmentPage() {
  return <ServicePage content={content} />;
}
