export type DropdownType = {
  label: string
  id: string
  items: {
    itemLabel: string
    nest?: DropdownType
    id: string
  }[]
}
