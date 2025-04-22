"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for projects
const PROJECTS = [
  {
    id: 1,
    title: "Holographic Social Network",
    category: "STARTUP",
    year: 2019,
    description:
      "A social platform that would allow users to interact with holographic representations of their friends.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-red-600",
  },
  {
    id: 2,
    title: "Infinite Canvas",
    category: "ARTWORK",
    year: 2021,
    description: "An interactive digital art installation that would respond to the collective emotions of viewers.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Quantum Computing OS",
    category: "CODE",
    year: 2020,
    description: "An operating system designed specifically for the first generation of consumer quantum computers.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-yellow-400",
  },
  {
    id: 4,
    title: "Self-Sustaining Greenhouse",
    category: "INVENTION",
    year: 2018,
    description: "A completely automated greenhouse system that would operate indefinitely without human intervention.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-green-500",
  },
  {
    id: 5,
    title: "Dream Recorder",
    category: "INVENTION",
    year: 2022,
    description: "A device that would record dreams and play them back as visual experiences.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-purple-500",
  },
  {
    id: 6,
    title: "Universal Translator App",
    category: "STARTUP",
    year: 2017,
    description: "An app that would translate any language in real-time, including extinct and fictional languages.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-red-600",
  },
]

export default function ProjectGrid() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project) => (
        <Link
          href={`/project/${project.id}`}
          key={project.id}
          className="block group"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="border-4 border-black overflow-hidden relative">
            <div
              className={`absolute top-0 right-0 z-10 ${project.color} border-l-4 border-b-4 border-black px-4 py-2`}
            >
              <span className="font-bold">{project.category}</span>
            </div>

            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
              >
                <Button className="bg-white text-black rounded-none border-2 border-black font-bold">
                  VIEW PROJECT <ArrowUpRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>

            <div className="p-4 border-t-4 border-black bg-white">
              <h3 className="text-xl font-black mb-2">{project.title}</h3>
              <p className="text-sm font-mono mb-2">{project.year}</p>
              <p className="font-mono line-clamp-2">{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
