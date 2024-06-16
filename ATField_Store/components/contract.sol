// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// contract CollectionContract is ERC721 {
//   using Counters for Counters.Counter;

//   Counters.Counter private _tokenIds;

//   constructor() ERC721("Tên bộ sưu tập", "TCT") {}

//   function mint(address to) public {
//     _tokenIds.increment();

//     uint256 newItemId = _tokenIds.current();
//     _mint(to, newItemId);
//   }

//   function tokenURI(uint256 tokenId) public view override returns (string memory) {
//     // Lấy URL metadata cho NFT dựa trên tokenId
//     // Ví dụ: trả về "https://ipfs.io/ipfs/Qm..."
//     return "https://ipfs.io/ipfs/Qm...";
//   }
// }
