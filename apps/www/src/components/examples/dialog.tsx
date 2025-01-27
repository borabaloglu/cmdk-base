import * as React from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup as CommandGroupBase,
  CommandInput,
  CommandItem as CommandItemBase,
  CommandList,
  CommandSeparator,
} from "cmdk-base"

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
    name: "CMDK Base",
    icon: <CmdkIcon />,
    keywords: ["project"],
    onSelect: () => window.open("https://cmdk-base.vercel.app", "_blank"),
  },
  {
    name: "9ui",
    icon: <NineUiIcon />,
    keywords: ["project"],
    onSelect: () => window.open("https://9ui.vercel.app", "_blank"),
  },
]

const CommandGroup = ({
  children,
  heading,
}: {
  children: React.ReactNode
  heading: string
}) => {
  return (
    <CommandGroupBase
      className="[&_[cmdk-group-heading]]:text-muted-fg overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold"
      heading={heading}
    >
      {children}
    </CommandGroupBase>
  )
}

const CommandItem = ({
  children,
  onSelect,
  keywords,
}: {
  children: React.ReactNode
  onSelect: () => void
  keywords?: string[]
}) => {
  return (
    <CommandItemBase
      className="data-[selected=true]:bg-muted data-[selected=true]:text-fg relative flex h-10 cursor-default select-none items-center gap-4 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      onSelect={onSelect}
      keywords={keywords}
    >
      {children}
    </CommandItemBase>
  )
}

const CommandMeta = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-muted-fg ml-auto text-xs font-medium">
      {children}
    </span>
  )
}

export function Dialog() {
  const [open, setOpen] = React.useState(false)

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
      overlayClassName="fixed inset-0 h-dvh bg-black/70 transition-all duration-200 [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0"
      contentClassName="fixed left-1/2 top-1/2 z-50 grid w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 duration-200 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 md:max-w-screen-md text-fg font-sans"
      className="bg-subtle border-muted bg-pacity/80 overflow-hidden rounded-lg border bg-clip-padding outline-none backdrop-blur-sm"
    >
      <div
        className="border-muted flex items-center border-b px-3"
        cmdk-input-wrapper=""
      >
        <CommandInput
          className={
            "placeholder:text-muted-fg flex h-10 w-full bg-transparent py-3 text-sm outline-none"
          }
          placeholder="Search for links or projects..."
        />
      </div>
      <CommandList className="max-h-96 overflow-y-auto px-1 py-2">
        <CommandEmpty className="mx-auto flex items-center justify-center py-8">
          <span className="text-muted-fg">No results found</span>
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
