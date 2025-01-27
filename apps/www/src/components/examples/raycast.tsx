import {
  Command,
  CommandEmpty,
  CommandGroup as CommandGroupBase,
  CommandInput,
  CommandItem as CommandItemBase,
  CommandList,
  CommandSeparator,
} from "cmdk-base"

import {
  ClipboardIcon,
  CursorIcon,
  DiscordIcon,
  FigmaIcon,
  NotionIcon,
  RaycastIcon,
  SearchIcon,
  WarpIcon,
} from "@/components/icons"

const suggestions = [
  { name: "Cursor", icon: <CursorIcon /> },
  { name: "Warp", icon: <WarpIcon /> },
  { name: "Notion", icon: <NotionIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Discord", icon: <DiscordIcon /> },
  { name: "Raycast", icon: <RaycastIcon /> },
]

const commands = [
  { name: "Clipboard History", icon: <ClipboardIcon /> },
  { name: "Search Files", icon: <SearchIcon /> },
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

const CommandItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <CommandItemBase className="data-[selected=true]:bg-muted data-[selected=true]:text-fg relative flex h-10 cursor-default select-none items-center gap-4 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
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

export function Raycast() {
  return (
    <Command className="bg-subtle/80 border-muted bg-opacity/80 overflow-hidden rounded-lg border bg-clip-padding outline-none backdrop-blur-sm">
      <div
        className="border-muted flex items-center border-b px-3"
        cmdk-input-wrapper=""
      >
        <CommandInput
          className={
            "placeholder:text-muted-fg flex h-10 w-full bg-transparent py-3 text-sm outline-none"
          }
          placeholder="Search for apps and commands..."
        />
      </div>
      <CommandList className="max-h-80 overflow-y-auto px-1 py-2">
        <CommandEmpty className="mx-auto flex items-center justify-center py-8">
          <span className="text-muted-fg">No results found</span>
        </CommandEmpty>
        <CommandGroup heading="Suggestions">
          {suggestions.map((item) => (
            <CommandItem key={item.name}>
              {item.icon}
              <span>{item.name}</span>
              <CommandMeta>Application</CommandMeta>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator className="bg-muted my-2 h-px w-full" />
        <CommandGroup heading="Commands">
          {commands.map((item) => (
            <CommandItem key={item.name}>
              {item.icon}
              <span>{item.name}</span>
              <CommandMeta>Command</CommandMeta>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
