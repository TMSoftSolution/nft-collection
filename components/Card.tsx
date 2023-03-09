import { OwnedNft } from "alchemy-sdk";
import Image from "next/image";

type PropsType = {
  nft: OwnedNft;
  nftClicked: (nft: OwnedNft) => any;
};

export default function Card({ nft, nftClicked }: PropsType) {
  const media = nft.media[0];

  return (
    <div
      className="relative mx-auto w-full shadow p-4 rounded-lg bg-gray-800 cursor-pointer transition-transform hover:-translate-y-2"
      onClick={() => {
        nftClicked(nft);
      }}
      data-te-toggle="modal"
      data-te-target="#exampleModalFullscreen"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <Image
        className="rounded-lg w-full object-cover h-80"
        src={media?.gateway ? media?.gateway : "/nft-placeholder.svg"}
        alt="temp"
        width={300}
        height={300}
      />
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2 text-white">
          {nft.title ? nft.title : ""}
        </p>
        <p className="text-base line-clamp-3 text-white">
          {nft.description ? nft.description : ""}
        </p>
      </div>
    </div>
  );
}
