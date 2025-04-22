import Link from "next/link"
import { ArrowLeft, Calendar, Tag, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for a single project
const PROJECT = {
  id: 1,
  title: "Holographic Social Network",
  category: "STARTUP",
  year: 2019,
  creator: "Alex Chen",
  duration: "18 months",
  description:
    "A social platform that would allow users to interact with holographic representations of their friends.",
  story: `
    I started this project after being inspired by sci-fi movies where people could interact with holograms. The idea was to create a social network where instead of just seeing photos or videos of your friends, you could see and interact with their full-body holograms in your living room.
    
    We had developed a prototype using AR glasses and were working on the software to capture and render 3D models of people in real-time. The technical challenges were immense, but we were making progress.
    
    Unfortunately, our funding dried up after our main investor pulled out due to concerns about the timeline and market readiness. We tried to pivot to a simpler version, but the team eventually disbanded as members needed to find more stable employment.
    
    Looking back, I think we were too early. The technology wasn't quite there yet, and the cost of the hardware was prohibitive for most consumers. Maybe in another 5-10 years, someone else will bring this vision to life.
  `,
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  color: "bg-red-600",
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the project data based on the ID
  // const { id } = params;

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Button
          asChild
          variant="outline"
          className="mb-6 border-2 border-black rounded-none hover:bg-black hover:text-white transition-colors"
        >
          <Link href="/explore">
            <ArrowLeft className="mr-2" size={16} /> BACK TO EXPLORE
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border-4 border-black overflow-hidden mb-8">
              <div className={`${PROJECT.color} border-b-4 border-black p-6`}>
                <h1 className="text-4xl md:text-5xl font-black">{PROJECT.title}</h1>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 font-mono">
                  <div className="flex items-center">
                    <Tag className="mr-2" size={18} />
                    <span>{PROJECT.category}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={18} />
                    <span>{PROJECT.year}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2" size={18} />
                    <span>{PROJECT.creator}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2" size={18} />
                    <span>{PROJECT.duration}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">THE VISION</h2>
                <p className="font-mono mb-6">{PROJECT.description}</p>

                <h2 className="text-2xl font-bold mb-4">THE STORY</h2>
                <div className="font-mono whitespace-pre-line">{PROJECT.story}</div>
              </div>
            </div>

            <div className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold mb-4">GALLERY</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECT.images.map((image, index) => (
                  <div key={index} className="border-2 border-black overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${PROJECT.title} image ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="border-4 border-black sticky top-4">
              <div className={`${PROJECT.color} border-b-4 border-black p-4`}>
                <h2 className="text-2xl font-bold">RELATED PROJECTS</h2>
              </div>

              <div className="p-4">
                <div className="space-y-4">
                  {[
                    {
                      id: 2,
                      title: "Infinite Canvas",
                      category: "ARTWORK",
                      year: 2021,
                      color: "bg-blue-500",
                    },
                    {
                      id: 3,
                      title: "Quantum Computing OS",
                      category: "CODE",
                      year: 2020,
                      color: "bg-yellow-400",
                    },
                    {
                      id: 6,
                      title: "Universal Translator App",
                      category: "STARTUP",
                      year: 2017,
                      color: "bg-red-600",
                    },
                  ].map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      href={`/project/${relatedProject.id}`}
                      className="block border-2 border-black hover:translate-x-1 hover:-translate-y-1 transition-transform"
                    >
                      <div className={`${relatedProject.color} border-b-2 border-black p-2`}>
                        <span className="font-bold text-sm">{relatedProject.category}</span>
                      </div>
                      <div className="p-3">
                        <h3 className="font-bold mb-1">{relatedProject.title}</h3>
                        <p className="text-sm font-mono">{relatedProject.year}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 p-4 border-2 border-black bg-yellow-400">
                  <h3 className="text-xl font-bold mb-4">SUBMIT YOUR OWN</h3>
                  <p className="font-mono mb-4">Have an unfinished project to share with the world?</p>
                  <Button asChild className="w-full bg-black hover:bg-gray-800 text-white rounded-none">
                    <Link href="/submit">SUBMIT NOW</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
