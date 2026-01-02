import * as React from "react"
import { cn } from "@/lib/utils"

/* ROOT */
function TabSectionCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="tab-card"
      className={cn(
        "rounded-lg p-8 transition-colors duration-200 ease-in-out hover:bg-gray-100",
        className
      )}
      {...props}
    />
  )
}

/* ICON */
function TabSectionCardIcon({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="tab-card-icon"
      className={cn(
        "mb-4 flex h-15 w-15 items-center justify-center rounded-full bg-white border-black",
        className
      )}
      {...props}
    />
  )
}

/* HEADING */
function TabSectionCardHeading({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="tab-card-heading"
      className={cn("mb-2 text-xl font-semibold", className)}
      {...props}
    />
  )
}

/* DESCRIPTION */
function TabSectionCardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="tab-card-description"
      className={cn("text-md font-medium", className)}
      {...props}
    />
  )
}

export {
  TabSectionCard,
  TabSectionCardIcon,
  TabSectionCardHeading,
  TabSectionCardDescription,
}
