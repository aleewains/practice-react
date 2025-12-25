import type { Chai } from "../types";
import SimpleCard from "./SimpleCard";
interface ChaiListProps {
  items: Chai[];
}
export default function ChaiList({ items }: ChaiListProps) {
  return (
    <div>
      {items.map((chai) => (
        <SimpleCard
          key={chai.id}
          name={chai.name}
          price={chai.price}
          isSpecial={chai.price > 30}
        />
      ))}
    </div>
  );
}
