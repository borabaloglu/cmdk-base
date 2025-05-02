import {
  CommandGroup as CommandGroupBase,
  CommandItem as CommandItemBase,
} from "cmdk-base"

const CommandGroup = ({
  children,
  heading,
}: {
  children: React.ReactNode
  heading: string
}) => {
  return (
    <CommandGroupBase
      className="[&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold"
      heading={heading}
    >
      {children}
    </CommandGroupBase>
  )
}

const CommandItem = ({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<
  typeof CommandItemBase
>) => {
  return (
    <CommandItemBase
      className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground relative flex h-10 cursor-default select-none items-center gap-4 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      {...props}
    >
      {children}
    </CommandItemBase>
  )
}

const CommandMeta = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-muted-foreground ml-auto text-xs font-medium">
      {children}
    </span>
  )
}

export { CommandGroup, CommandItem, CommandMeta }
