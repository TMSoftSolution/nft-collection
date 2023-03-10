import { OwnedNft } from "alchemy-sdk";
import Image from "next/image";

type PropsType = {
  nft: OwnedNft | undefined;
};

export default function DetailCard({ nft }: PropsType) {
  const media = nft?.media[0];

  return (
    <div className="grid place-items-center bg-gray-800">
      <div className="rounded shadow-lg">
        <div className="flex">
          <div className="flex-none pl-8">
            <Image
              src={media?.gateway ? media.gateway : "/nft-placeholder.svg"}
              alt="pic"
              className="h-72 w-60 rounded-md transform border-4 border-gray-300 shadow-lg"
              height={300}
              width={300}
            />
          </div>
          <div className="flex-col break-all text-gray-300 px-8">
            <p className="text-3xl font-bold">{nft?.title}</p>
            <p className="pt-4">{nft?.description}</p>
            <div className="my-4">
              <p className="text-2xl font-semibold" >Contract Information</p>
              <p className="mt-2"><span className="font-semibold italic">Address:</span> {nft?.contract.address}</p>
              <p className="mt-1"><span className="font-semibold italic">Deployer:</span> {nft?.contract.contractDeployer}</p>
              <p className="mt-1"><span className="font-semibold italic">Token ID:</span> {nft?.tokenId}</p>
              <p className="mt-1"><span className="font-semibold italic">Token Type:</span> {nft?.contract.tokenType}</p>
              <p className="mt-1"><span className="font-semibold italic">Symbol: </span>{nft?.contract.symbol}</p>
              <p className="mt-1"><span className="font-semibold italic">Total Supply: </span>{nft?.contract.totalSupply}</p>
            </div>
            <div className="my-4">
              <p className="text-2xl font-semibold" >Marketplace</p>
              <p className="mt-2"><span className="font-semibold italic">Collection Name:</span> {nft?.contract.openSea?.collectionName}</p>
              <p className="mt-1"><span className="font-semibold italic">Description: </span>{nft?.contract.openSea?.description}</p>
              <p className="mt-1"><span className="font-semibold italic">Price: </span>{nft?.contract.openSea?.floorPrice}</p>
              <p className="mt-1"><span className="font-semibold italic">Website:</span> {nft?.contract.openSea?.externalUrl}</p>
              <p className="mt-1"><span className="font-semibold italic">Discord:</span> {nft?.contract.openSea?.discordUrl}</p>
              <p className="mt-1"><span className="font-semibold italic">Twitter: </span>{nft?.contract.openSea?.twitterUsername}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
