import {
  Command,
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

export function CommandExample() {
  return (
    <Command className="bg-card/50 overflow-hidden rounded-lg border outline-none">
      <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
        <CommandInput
          className={
            "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-none"
          }
          placeholder="Search for apps and commands..."
        />
      </div>
      <CommandList className="max-h-80 overflow-y-auto px-1 py-2 outline-none">
        <CommandEmpty className="mx-auto flex items-center justify-center py-8">
          <span className="text-muted-foreground">No results found</span>
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
