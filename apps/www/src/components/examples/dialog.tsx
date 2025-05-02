import * as React from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "cmdk-base"

import {
  CommandGroup,
  CommandItem,
  CommandMeta,
} from "@/components/examples/components"
import {
  CmdkIcon,
  GithubIcon,
  NineUiIcon,
  VaulBaseIcon,
  XIcon,
} from "@/components/icons"

const links = [
  {
    name: "@borabalogluu",
    icon: <XIcon />,
    keywords: ["x", "twitter"],
    onSelect: () => window.open("https://x.com/borabalogluu", "_blank"),
  },
  {
    name: "@borabaloglu",
    icon: <GithubIcon />,
    keywords: ["github"],
    onSelect: () => window.open("https://github.com/borabaloglu", "_blank"),
  },
  {
    name: "Examples",
    icon: <GithubIcon />,
    keywords: ["github"],
    onSelect: () =>
      window.open(
        "https://github.com/borabaloglu/cmdk-base/tree/main/apps/www/src/components/examples",
        "_blank"
      ),
  },
  {
    name: "⌘K by Paco Coursey",
    icon: <GithubIcon />,
    keywords: ["github"],
    onSelect: () =>
      window.open("https://github.com/pacocoursey/cmdk", "_blank"),
  },
]

const projects = [
  {
    name: "Vaul Base",
    icon: <VaulBaseIcon />,
    keywords: ["project"],
    onSelect: () => window.open("https://vaul-base.vercel.app", "_blank"),
  },
  {
    name: "⌘K - Base",
    icon: <CmdkIcon />,
    keywords: ["project"],
    onSelect: () => window.open("https://cmdk-base.vercel.app", "_blank"),
  },
  {
    name: "9ui",
    icon: <NineUiIcon className="p-0.5" />,
    keywords: ["project"],
    onSelect: () => window.open("https://9ui.vercel.app", "_blank"),
  },
]

interface DialogProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function Dialog({ open, setOpen }: DialogProps) {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        setOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      overlayClassName="fixed inset-0 h-dvh bg-black/80 transition-all duration-200 [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0"
      contentClassName="fixed left-1/2 top-1/2 z-50 grid w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 duration-200 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 md:max-w-screen-md text-foreground font-sans"
      className="bg-popover/50 overflow-hidden rounded-lg border outline-none backdrop-blur-sm"
    >
      <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
        <CommandInput
          className={
            "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-none"
          }
          placeholder="Search for links or projects..."
        />
      </div>
      <CommandList className="max-h-96 overflow-y-auto px-1 py-2 outline-none">
        <CommandEmpty className="mx-auto flex items-center justify-center py-8">
          <span className="text-muted-foreground">No results found</span>
        </CommandEmpty>
        <CommandGroup heading="Links">
          {links.map((item) => (
            <CommandItem
              key={item.name}
              onSelect={item.onSelect}
              keywords={item.keywords}
            >
              {item.icon}
              <span>{item.name}</span>
              <CommandMeta>Open ↵</CommandMeta>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator className="bg-muted my-2 h-px w-full" />
        <CommandGroup heading="Projects">
          {projects.map((item) => (
            <CommandItem
              key={item.name}
              onSelect={item.onSelect}
              keywords={item.keywords}
            >
              {item.icon}
              <span>{item.name}</span>
              <CommandMeta>Open ↵</CommandMeta>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
