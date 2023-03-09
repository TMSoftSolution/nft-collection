export function makeOpenseaUrl(
  network: string,
  address?: string,
  tokenId?: string
) {
  return `https://opensea.io/assets/${network}/${address}/${tokenId}`;
}
