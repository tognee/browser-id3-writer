export function uint32ToUint8Array(uint32) {
  const eightBitMask = 0xff;

  return [
    (uint32 >>> 24) & eightBitMask,
    (uint32 >>> 16) & eightBitMask,
    (uint32 >>> 8) & eightBitMask,
    uint32 & eightBitMask,
  ];
}

export function uint28ToUint7Array(uint28) {
  const sevenBitMask = 0x7f;

  return [
    (uint28 >>> 21) & sevenBitMask,
    (uint28 >>> 14) & sevenBitMask,
    (uint28 >>> 7) & sevenBitMask,
    uint28 & sevenBitMask,
  ];
}

export function uint7ArrayToUint28(uint7Array) {
  return (
    (uint7Array[0] << 21) +
    (uint7Array[1] << 14) +
    (uint7Array[2] << 7) +
    uint7Array[3]
  );
}

export function uint32ToUintVarArray(uint32, pad){
  const eightBitMask = 0xff;
  const byteCount = Math.ceil(Math.log2(uint32+1)/8);
  const bytesArray = [];
  for (let i = 0; i < Math.max(byteCount, pad); i++){
    bytesArray.push((uint32 / Math.pow(2, 8*i)) & eightBitMask);
  }
  return bytesArray.reverse();
}