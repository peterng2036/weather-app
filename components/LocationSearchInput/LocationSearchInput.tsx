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
    <div className="flex w-full min-w-80 justify-between rounded-full bg-gray-200 p-4 px-6">
      <input
        type="text"
        className="w-10/12 truncate bg-gray-200 outline-none"
        defaultValue={`${region}, ${country}`}
      />
      <Image
        src={searchIcon}
        alt="Search"
        height={20}
        width={20}
        className="cursor-pointer"
      />
    </div>
  );
};

export default LocationSearchInput;
