// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Alchemy, Network } from "alchemy-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const address =
    req.query.address as string
  const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);
  const nfts = await alchemy.nft.getNftsForOwner(
    address
  );
  // Print NFTs
  console.log(nfts);
  res.status(200).json(nfts.ownedNfts);
}
