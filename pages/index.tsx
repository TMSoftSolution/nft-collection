import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Search from "@/components/Search";
import Spinner from "@/components/Spinner";
import { OwnedNft } from "alchemy-sdk";
import { useState } from "react";
import WAValidator from 'wallet-address-validator';

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [nfts, setNfts] = useState<Array<OwnedNft>>([]);
  const [selectedNft, setSelectedNft] = useState<OwnedNft>();
  const [showModal, setShowModal] = useState(false);
  const url = process.env.NEXT_PUBLIC_API_URL;

  const onSearch = async (address: string) => {
    console.log(address);
    if (address.length == 0) {
      alert("Please enter the Wallet address.");
    } else {
      if (
        WAValidator.validate(address, "eth")
      ) {
        setNfts([]);
        await fetchNFTs(address);
      } else {
        alert("Please enter the valid Wallet address.");
      }
    }
  };

  const fetchNFTs = async (address: string) => {
    setLoading(true);
    await fetch(`${url}/api/get-nfts?address=${address}`)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setNfts(result);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  const onNftClicked = (nft: OwnedNft) => {
    setShowModal(true);
    setSelectedNft(nft);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen items-center mx-auto px-8 py-16 bg-gray-700">
        <Search onSearch={(address: string) => onSearch(address)} />
        {nfts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full py-8">
            {nfts.map((nft, index) => {
              return (
                <Card
                  nft={nft}
                  nftClicked={(nft: OwnedNft) => onNftClicked(nft)}
                  key={index}
                />
              );
            })}
          </div>
        ) : isLoading ? (
          <></>
        ) : (
          <div className="text-white text-2xl my-auto">No NFTs Funded.</div>
        )}
      </div>
      {showModal && <Modal nft={selectedNft} onClose={() => closeModal()} />}
      {isLoading && <Spinner />}
    </>
  );
}
