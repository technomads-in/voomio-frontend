import CardanoWasm from "@emurgo/cardano-serialization-lib-asmjs";

export const basetoAdress = async (baseaddr) =>{
    return CardanoWasm.Address.from_bytes(Buffer.from(baseaddr, "hex")).to_bech32();
}