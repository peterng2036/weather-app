import Image from "next/image";
import searchIcon from "@/public/search.svg";

const LocationSearchInput = ({
  region,
  country,
}: {
  region: string;
  country: string;
}) => {
  return (
    <div className="flex w-full justify-between rounded-full bg-gray-200 p-4 px-6">
      {region}, {country}
      <Image src={searchIcon} alt="Search" height={20} width={20} />
    </div>
  );
};

export default LocationSearchInput;
