import ServicePage, {
  type ServicePageContent,
} from "../../components/ServicePage";

const content: ServicePageContent = {
  eyebrow: "Custom software development",
  title: "Custom Software Development for Real Business Workflows",
  shortTitle: "Custom Software Development",
  description:
    "Plan and build focused software around specific users, processes, and operational requirements instead of forcing every need into a generic product.",
  overviewTitle: "Purpose-built software for specific processes",
  overview: [
    "Custom software is most useful when an organisation has a clear workflow or service requirement that off-the-shelf tools do not address cleanly. The work can begin with a new product idea, an internal process, or a clearer interface for information already spread across several systems.",
    "Axythic can combine React interfaces, Express API services, dashboards, forms, role-oriented screens, and responsive experiences when those capabilities fit the requirement. A project scope would be confirmed only after its users, data, integrations, security needs, and release environment are understood.",
  ],
  suitableNeeds: [
    "Replacing repetitive spreadsheet, email, or manual hand-off steps with a defined workflow.",
    "Creating an internal dashboard or operational interface for a specific team.",
    "Prototyping a software product before committing to a broader implementation.",
    "Connecting a user-facing interface to a purpose-built API or approved external service.",
    "Improving an existing application whose navigation or workflows have become difficult to maintain.",
  ],
  capabilitiesTitle: "A practical foundation for a maintainable product",
  capabilities: [
    {
      title: "React application interfaces",
      description:
        "Responsive, component-based screens for public applications, internal tools, dashboards, and multi-step workflows.",
    },
    {
      title: "Express API services",
      description:
        "Server-side endpoints for application workflows, validation, and approved service integrations.",
    },
    {
      title: "Dashboard experiences",
      description:
        "Information-rich layouts, navigation systems, forms, tables, and visual summaries designed for specific user tasks.",
    },
    {
      title: "Role-oriented flows",
      description:
        "Interfaces can be organised around different user responsibilities when the access rules and data boundaries are defined.",
    },
    {
      title: "Responsive theming",
      description:
        "Layouts and theme-aware components that remain usable across desktop and smaller screen sizes.",
    },
    {
      title: "Validation and hand-off",
      description:
        "Linting, type checks, production builds, and documented release considerations can be included in the agreed delivery scope.",
    },
  ],
  approachTitle: "A clear path from requirements to release-ready work",
  approach: [
    {
      title: "Clarify",
      description:
        "Identify users, tasks, constraints, data sources, and the outcome the software should support.",
    },
    {
      title: "Shape",
      description:
        "Turn requirements into flows, interface states, technical boundaries, and a reviewable scope.",
    },
    {
      title: "Build",
      description:
        "Implement in testable increments so behaviour and priorities can be reviewed during development.",
    },
    {
      title: "Validate",
      description:
        "Check agreed functionality, responsive behaviour, build quality, and deployment requirements before release.",
    },
  ],
  relatedDemos: [
    {
      title: "Axythic Fin Suite",
      description:
        "A finance-dashboard concept showing navigation, summary cards, tables, and operations-oriented screens.",
      to: "/axythicfin/dashboard",
    },
    {
      title: "HRM Platform",
      description:
        "A human-resources interface concept with dashboard, personnel, candidate, and workflow views.",
      to: "/hrm/dashboard",
    },
    {
      title: "EduQuest LMS",
      description:
        "A learning-management concept with student, course, inbox, task, team, and administration views.",
      to: "/eduquest/student",
    },
  ],
  faqs: [
    {
      question: "Does every custom software project use the same stack?",
      answer:
        "No. This repository uses React, TypeScript, Vite, and Express, but a project should select technology after its requirements, existing systems, deployment environment, and maintenance needs are reviewed.",
    },
    {
      question: "Can an existing system or external service be integrated?",
      answer:
        "Integration needs can be assessed during scoping. Access methods, documentation, data ownership, security constraints, and service limits must be reviewed before any specific integration is confirmed.",
    },
    {
      question: "Can work begin with a prototype?",
      answer:
        "Yes, when a prototype is the appropriate way to test navigation, workflow, or interface assumptions. A prototype should be clearly distinguished from production-ready software in the agreed scope.",
    },
  ],
};

export default function CustomSoftwareDevelopmentPage() {
  return <ServicePage content={content} />;
}
