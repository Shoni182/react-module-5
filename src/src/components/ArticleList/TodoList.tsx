import type { List } from "../../types/list";

interface ListProps {
  items: List[];
}

export default function TodosList({ items }: ListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.userId}>{item.title}</li>
      ))}
    </ul>
  );
}
