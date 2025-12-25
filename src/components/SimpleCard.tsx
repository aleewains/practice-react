interface SimpleCard {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export default function SimpleCard({
  name,
  price,
  isSpecial = false,
}: SimpleCard) {
  return (
    <article>
      <h2>
        {name} {isSpecial && <span>✨</span>}
      </h2>
      <p>{price}</p>
    </article>
  );
}
