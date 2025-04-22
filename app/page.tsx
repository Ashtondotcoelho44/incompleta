import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import ProjectGrid from "@/components/project-grid"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b-8 border-black">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-6">
                VIRTUAL MUSEUM OF <span className="text-red-600">UNFINISHED DREAMS</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-mono">
                A collection of abandoned, incomplete, and failed projects that could have been.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-yellow-400 hover:bg-yellow-500 text-black text-xl px-8 py-6 h-auto rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Link href="/explore">
                    EXPLORE <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-6 h-auto rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Link href="/submit">
                    SUBMIT <Plus className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-80 md:h-96 bg-red-600 border-8 border-black relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="bg-white border-4 border-black flex items-center justify-center">
                      <span className="text-4xl font-black">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-black text-white bg-black px-4 py-2 rotate-12">DREAMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-black uppercase">FEATURED PROJECTS</h2>
          <Link
            href="/explore"
            className="text-xl font-bold underline decoration-4 underline-offset-8 hover:text-red-600 transition-colors"
          >
            VIEW ALL
          </Link>
        </div>
        <ProjectGrid />
      </section>

      {/* About Section */}
      <section className="py-16 bg-yellow-400 border-y-8 border-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-black uppercase mb-6">ABOUT THE MUSEUM</h2>
              <p className="text-xl font-mono mb-4">
                The Virtual Museum of Unfinished Dreams is a digital archive of projects that never reached completion.
              </p>
              <p className="text-xl font-mono mb-4">
                Every abandoned startup, unfinished artwork, or incomplete code repository tells a story of what could
                have been.
              </p>
              <p className="text-xl font-mono">
                By preserving these unfinished dreams, we honor the creative process and learn from our collective
                failures.
              </p>
            </div>
            <div className="bg-white border-8 border-black p-8">
              <h3 className="text-3xl font-black mb-4 uppercase">SUBMIT YOUR UNFINISHED DREAM</h3>
              <p className="text-lg font-mono mb-6">
                Do you have an abandoned project gathering dust? Share it with the world and preserve its memory.
              </p>
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-6 h-auto rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all w-full"
              >
                <Link href="/submit">
                  SUBMIT NOW <Plus className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-black uppercase mb-8">CATEGORIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "STARTUPS", color: "bg-red-600" },
            { name: "ARTWORKS", color: "bg-blue-500" },
            { name: "CODE", color: "bg-yellow-400" },
            { name: "INVENTIONS", color: "bg-green-500" },
          ].map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.name.toLowerCase()}`}
              className={`${category.color} border-4 border-black p-8 hover:translate-x-1 hover:-translate-y-1 transition-transform`}
            >
              <h3 className="text-2xl font-black">{category.name}</h3>
              <ArrowRight className="mt-4" size={24} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
