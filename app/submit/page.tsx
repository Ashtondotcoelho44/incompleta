"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SubmitPage() {
  const [formState, setFormState] = useState({
    title: "",
    category: "",
    year: "",
    description: "",
    reason: "",
    images: [] as File[],
  })

  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormState((prev) => ({
        ...prev,
        images: [...prev.images, ...Array.from(e.target.files as FileList)],
      }))
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      setFormState((prev) => ({
        ...prev,
        images: [...prev.images, ...Array.from(e.dataTransfer.files)],
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formState)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="border-8 border-black bg-yellow-400 p-12 text-center">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">THANK YOU!</h1>
            <p className="text-xl font-mono mb-8">
              Your unfinished dream has been submitted to the museum. It will be reviewed and added to our collection.
            </p>
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white text-xl px-8 py-6 h-auto rounded-none border-4 border-white"
            >
              <Link href="/">RETURN TO HOME</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
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
          <h1 className="text-5xl md:text-6xl font-black uppercase">SUBMIT YOUR UNFINISHED DREAM</h1>
          <div className="w-24 h-4 bg-blue-500 mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="border-4 border-black p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="title" className="block text-lg font-bold mb-2">
                PROJECT TITLE
              </label>
              <Input
                id="title"
                name="title"
                value={formState.title}
                onChange={handleChange}
                required
                className="border-2 border-black rounded-none p-3 w-full font-mono"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-lg font-bold mb-2">
                CATEGORY
              </label>
              <Select value={formState.category} onValueChange={(value) => handleSelectChange("category", value)}>
                <SelectTrigger className="border-2 border-black rounded-none p-3 h-auto font-mono">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="border-2 border-black rounded-none font-mono">
                  <SelectItem value="startup">STARTUP</SelectItem>
                  <SelectItem value="artwork">ARTWORK</SelectItem>
                  <SelectItem value="code">CODE</SelectItem>
                  <SelectItem value="invention">INVENTION</SelectItem>
                  <SelectItem value="other">OTHER</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="year" className="block text-lg font-bold mb-2">
              YEAR
            </label>
            <Select value={formState.year} onValueChange={(value) => handleSelectChange("year", value)}>
              <SelectTrigger className="border-2 border-black rounded-none p-3 h-auto font-mono">
                <SelectValue placeholder="Select a year" />
              </SelectTrigger>
              <SelectContent className="border-2 border-black rounded-none font-mono">
                {Array.from({ length: 10 }, (_, i) => 2023 - i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
                <SelectItem value="before_2013">BEFORE 2013</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-lg font-bold mb-2">
              PROJECT DESCRIPTION
            </label>
            <Textarea
              id="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
              required
              rows={4}
              className="border-2 border-black rounded-none p-3 w-full font-mono"
              placeholder="Describe what your project was meant to be..."
            />
          </div>

          <div className="mb-6">
            <label htmlFor="reason" className="block text-lg font-bold mb-2">
              WHY DID IT REMAIN UNFINISHED?
            </label>
            <Textarea
              id="reason"
              name="reason"
              value={formState.reason}
              onChange={handleChange}
              required
              rows={4}
              className="border-2 border-black rounded-none p-3 w-full font-mono"
              placeholder="Tell us the story of why this dream was never realized..."
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-bold mb-2">IMAGES (OPTIONAL)</label>
            <div
              className={`border-2 border-dashed ${isDragging ? "border-blue-500 bg-blue-50" : "border-black"} rounded-none p-8 text-center cursor-pointer transition-colors`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Upload className="mx-auto mb-4" size={40} />
              <p className="font-mono mb-2">Drag and drop images here or click to browse</p>
              <p className="text-sm text-gray-500 font-mono">
                Upload sketches, prototypes, or any visual representation of your project
              </p>
            </div>

            {formState.images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {formState.images.map((file, index) => (
                  <div key={index} className="border-2 border-black p-2">
                    <div className="h-24 bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={URL.createObjectURL(file) || "/placeholder.svg"}
                        alt={`Uploaded image ${index + 1}`}
                        className="h-full object-contain"
                      />
                    </div>
                    <p className="text-xs font-mono truncate mt-1">{file.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-6 h-auto rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all w-full"
          >
            SUBMIT YOUR UNFINISHED DREAM
          </Button>
        </form>
      </div>
    </main>
  )
}
