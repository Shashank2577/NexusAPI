"use client";
import { ContainerScroll } from "@/components/ui/aceternity/container-scroll";

const users = [
  {
    name: "John Doe",
    designation: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
  },
  {
    name: "Sarah Smith",
    designation: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Michael Johnson",
    designation: "Head of Product",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Emily Brown",
    designation: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "David Wilson",
    designation: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Lisa Anderson",
    designation: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793",
  }
];

export function CompanyTeam() {
  return (
    <div className="relative">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-center mb-4">
              Meet Our Team
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-center">
              We're a team of passionate individuals dedicated to creating the best communication tools for developers.
            </p>
          </>
        }
      />
    </div>
  );
}
