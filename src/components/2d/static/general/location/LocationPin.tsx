import "./LocationPin.css";
import LocationPinSVG from "./svg/LocationPinSVG";

interface LocationPinProps {
  location: string;
  pinColor: string;
}

export default function LocationPin({
  location = "Spain",
  pinColor = "black",
}: LocationPinProps) {
  return (
    <div className="location-pin-wrapper">
      <div className="location-pin-scale">
        <div className="location-pin-shadow">
          <div className="location-pin">
            <LocationPinSVG color={pinColor} />
            <span className="location-pin-text">
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}