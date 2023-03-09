import { makeOpenseaUrl } from "@/utils/utils";
import { OwnedNft } from "alchemy-sdk";
import Link from "next/link";
import React from "react";
import DetailCard from "./DetailCard";

type PropsType = {
  nft: OwnedNft | undefined;
  onClose: () => any;
};

export default function Modal({ nft, onClose }: PropsType) {
  const openseaUrl = makeOpenseaUrl(
    "ethereum",
    nft?.contract.address,
    nft?.tokenId
  );
  return (
    <>
      <div className="fixed top-0 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none">
        <div className="w-full my-6 mx-auto max-w-3xl rounded-lg">
          {/*content*/}
          <div className="rounded-lg shadow-lg flex flex-col w-full bg-gray-800">
            {/*header*/}
            <div className="flex items-start justify-between p-5">
              <button
                className="p-1 ml-auto border-0 text-white float-right font-semibold"
                onClick={() => {
                  onClose();
                }}
              >
                <span className="h-6 w-6 text-2xl block">x</span>
              </button>
            </div>
            {/*body*/}
            <DetailCard nft={nft} />
            {/*footer*/}
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end py-4">
              <Link
                type="button"
                className="rounded bg-gray-500 text-white px-8 py-4 mx-8 text-xs font-bold uppercase"
                href={openseaUrl}
                target="_blank"
                onClick={() => {onClose()}}
              >
                BUY
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
