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
    company: "Company",
    image: user1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dictum turpis non bibendum. Maecenas orci augue, aliquam et mi eget, condimentum semper est.",
  },
  {
    user: "Jane Smith",
    company: "Company",
    image: user2,
    text: "Praesent eget mollis leo. Proin fringilla orci elit, vitae consectetur ex euismod sed. Duis sit amet purus lacus. Aliquam erat volutpat.",
  },
  {
    user: "David Johnson",
    company: "Company",
    image: user3,
    text: "Pellentesque sed nisi turpis. Aliquam erat volutpat. Ut luctus scelerisque viverra. Vivamus ornare consequat felis, iaculis suscipit eros varius et.",
  },
  {
    user: "Ronee Brown",
    company: "Company",
    image: user4,
    text: "Quisque in dolor vel turpis gravida placerat. Quisque vestibulum sapien sit amet pulvinar venenatis. Donec gravida felis in mollis dapibus. Nunc quis purus diam",
  },
  {
    user: "Michael Wilson",
    company: "Company",
    image: user5,
    text: "Praesent tellus lectus, posuere molestie lorem id, luctus hendrerit nibh. Nam ut risus turpis. Aliquam erat volutpat. Sed tellus enim, dapibus sollicitudin tellus et, tincidunt mollis nulla. ",
  },
  {
    user: "Emily Davis",
    company: "Company",
    image: user6,
    text: "Ut sit amet lorem tincidunt, malesuada arcu ac, dapibus odio. Nulla iaculis dignissim rutrum. Vivamus volutpat congue enim, blandit venenatis sapien facilisis eget. Suspendisse libero odio, dignissim non rutrum quis, rutrum nec tellus.",
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
  { href: "#", text: "Book an Appointment" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Support" },
  { href: "#", text: "Leave a Review" },
];

export const contactInfo = [
  { href: "#", text: "sean.huang16@hotmail.com" },
  { href: "#", text: "647-631-0882" },
  { href: "#", text: "Toronto, ON, Canada" },

];
