import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectGrid from "@/components/project-grid"
import { Button } from "@/components/ui/button"

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button
            asChild
            variant="outline"
            className="mb-6 border-2 border-black rounded-none hover:bg-black hover:text-white transition-colors"
          >
            <Link href="/">
              <ArrowLeft className="mr-2" size={16} /> BACK TO HOME
            </Link>
          </Button>
          <h1 className="text-6xl font-black uppercase">EXPLORE PROJECTS</h1>
          <div className="w-24 h-4 bg-red-600 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="border-4 border-black p-6 sticky top-4">
              <h2 className="text-2xl font-black mb-6 uppercase">FILTER</h2>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">CATEGORIES</h3>
                <div className="space-y-2 font-mono">
                  {["ALL", "STARTUPS", "ARTWORKS", "CODE", "INVENTIONS"].map((category) => (
                    <div key={category} className="flex items-center">
                      <input type="checkbox" id={category} className="w-5 h-5 border-2 border-black mr-3" />
                      <label htmlFor={category}>{category}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">YEAR</h3>
                <div className="space-y-2 font-mono">
                  {["2022-2023", "2020-2021", "2018-2019", "BEFORE 2018"].map((year) => (
                    <div key={year} className="flex items-center">
                      <input type="checkbox" id={year} className="w-5 h-5 border-2 border-black mr-3" />
                      <label htmlFor={year}>{year}</label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-none py-3">APPLY FILTERS</Button>
            </div>
          </div>

          <div className="md:col-span-3">
            <ProjectGrid />
          </div>
        </div>
      </div>
    </main>
  )
}
