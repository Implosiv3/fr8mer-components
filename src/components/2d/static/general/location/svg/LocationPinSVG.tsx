interface LocationPinSVGProps {
  color: string;
}

export default function LocationPinSVG({
    color = "#2A9CFF",
}: LocationPinSVGProps) {
    return (
        <svg
            className="location-pin-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 10a8 8 0 1 0-16 0c0 6 8 12 8 12s8-6 8-12Zm-5.4 0a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
            fill={color}
            />
        </svg>
    )
};