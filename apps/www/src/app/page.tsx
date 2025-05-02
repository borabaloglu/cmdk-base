"use client"

import * as React from "react"
import { GithubIcon } from "lucide-react"

import { Background } from "@/components/background"
import { Button } from "@/components/button"
import { CommandExample } from "@/components/examples/command"
import { Dialog } from "@/components/examples/dialog"
import { Kbd } from "@/components/kbd"

export default function Home() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Background />
      <div className="flex h-full flex-col">
        <div className="mt-10 flex flex-col items-center justify-center sm:mt-20">
          <h1 className="mt-8 font-serif text-6xl sm:text-8xl">⌘K - Base</h1>
          <p className="text-muted-foreground mt-4 w-full text-center sm:w-full">
            Fast, composable, unstyled command menu for React, built with Base
            UI.
          </p>
        </div>
        <nav className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://github.com/borabaloglu/cmdk-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-background text-foreground hover:border-primary relative z-10 gap-2 rounded-full border brightness-75 transition-all duration-200 hover:no-underline hover:brightness-100"
              variant="link"
            >
              <GithubIcon className="size-3.5" />
              borabaloglu/cmdk-base
            </Button>
          </a>
        </nav>
        <div className="mx-auto mt-10 w-full max-w-screen-md space-y-4">
          <div className="text-muted-foreground flex items-center justify-center gap-1 text-center text-sm">
            <Kbd>⌘</Kbd> + <Kbd>K</Kbd> or click
            <span
              className="text-foreground cursor-pointer font-medium underline-offset-4 hover:underline"
              onClick={() => setOpen(true)}
            >
              here
            </span>
            to open in dialog
          </div>
          <CommandExample />
          <Dialog open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  )
}
