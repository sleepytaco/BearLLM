"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CircleHelp } from "lucide-react"
import Link from "next/link"

export function AboutDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mt-auto rounded-lg"
          aria-label="Help"
          >
              <CircleHelp className="size-5" />
          </Button>
      </DialogTrigger>
      <DialogContent className="lg">
        <DialogHeader>
          <DialogTitle>About The Bear</DialogTitle>
          <DialogDescription>
              The Bear is a LLM-based platform to generate, bookmark, and share recipes.
              A LLM nicknamed Bear will help you create recipes based on your preferences.
               This app is named after the critically-acclaimed show <Link href="https://www.rottentomatoes.com/tv/the_bear" target="_blank" className="underline text-blue-600 hover:text-blue-800">The Bear</Link>.
          </DialogDescription>
        </DialogHeader>
        {/* <ProfileForm /> */}
      </DialogContent>
    </Dialog>
  )
}
