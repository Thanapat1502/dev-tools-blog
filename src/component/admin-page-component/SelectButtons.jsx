import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectCategory() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="general">General</SelectItem>
        <SelectItem value="cat">Cat</SelectItem>
        <SelectItem value="inspiration">Inspiration</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SelectStatus() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="published">Published</SelectItem>
        <SelectItem value="drafted">Drafted</SelectItem>
      </SelectContent>
    </Select>
  );
}
