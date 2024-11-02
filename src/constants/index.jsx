import { UserRoundPlus } from 'lucide-react';
import { Fingerprint } from "lucide-react";
import { LayoutPanelTop } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { GlobeLock } from "lucide-react";
import { MailPlus } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <UserRoundPlus />,
    text: "Boost User Base",
    description:
      "Easily design and advertise your brand and its services with effective SEO and a user-friendly interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build a landing page visible across all platforms including mobile and desktop displays of all sizes.",
  },
  {
    icon: <LayoutPanelTop />,
    text: "Pre-optimized Templates",
    description:
      "Jumpstart your business with a pre-built landing page template to visually satisfy your clients.",
  },
  {
    icon: <GlobeLock />,
    text: "Data Safety",
    description:
      "Stores your confidential information using the industry-standard AES256 encryption, ensuring data security across all platforms.",
  },
  {
    icon: <UsersRound />,
    text: "Collaborate With Developers",
    description:
      "Work together with your developers 1-on-1 to ensure a smooth deployment and maintenance for your landing page.",
  },
  {
    icon: <MailPlus />,
    text: "Ease of Contact",
    description:
      "Prevents the loss of valuable leads by ensuring a stress-free process in contacting your business for its top-quality services.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Plan 1",
    price: "$X",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
    ],
  },
  {
    title: "Plan 2",
    price: "$XX",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
    ],
  },
  {
    title: "Plan 3",
    price: "$XXX",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
