import React, { useEffect } from "react";
import { Property } from "../../lib/deal";

type PropertyHeaderProps = {
  property: Property;
};

export default function PropertyHeader({ property }: PropertyHeaderProps) {
  useEffect(() => { 
    localStorage.setItem("property", JSON.stringify(property.nickname));
    localStorage.setItem("address", JSON.stringify(property.address));
    localStorage.setItem("address2", JSON.stringify(property.address2));
    localStorage.setItem("city", JSON.stringify(property.city));
    localStorage.setItem("state", JSON.stringify(property.state));
    localStorage.setItem("zip", JSON.stringify(property.zip));
  }, [property]);
  return (
    <div>
      <div className="text-center mt-16">
        <div className="">
          <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
            {property.nickname}
          </h1>
        </div>
        <div className="">
          <h4 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
            {`${property.address} ${
              property.address2 ? property.address2 : ""
            } ${property.city}, ${property.state} ${property.zip}`}
          </h4>
        </div>
      </div>
    </div>
  );
}
