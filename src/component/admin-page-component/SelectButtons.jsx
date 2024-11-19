import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 *
 * @param {*SelectItem}
 * แก้ให้เป็น map จาก fetch
 * รอแก้หลังเปลี่ยนเป็น Cloud DB
 * @returns
 */
export function SelectCategory({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  const array = [1, 2, 3, 4];
  console.log(categories);
  return (
    <Select
      value={selectedCategory}
      onValueChange={(value) => setSelectedCategory(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((cate, index) => {
          return (
            <SelectItem key={index} value={cate}>
              {cate}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

export function SelectStatus({ selectedStatus, setSelectedStatus }) {
  return (
    <Select
      value={selectedStatus}
      onValueChange={(value) => setSelectedStatus(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem>Published</SelectItem>
        <SelectItem>Draft</SelectItem>
      </SelectContent>
    </Select>
  );
}
