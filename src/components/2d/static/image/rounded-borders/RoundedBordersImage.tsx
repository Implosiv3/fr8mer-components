import "./RoundedBordersImage.css";


interface RoundedBorderImageProps {
  img: string;
  alt?: string;
}

export function RoundedBordersImage({
  img,
  alt = "Rounded borders image"
}: RoundedBorderImageProps) {
  return (
    <div className="rounded-image-card">
      <img
        src={img}
        alt={alt}
        className="rounded-image"
      />
    </div>
  );
}