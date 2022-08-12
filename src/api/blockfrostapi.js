import { BLOCKFROST_KEY_MAINNET, BLOCKFROST_KEY_TESTNET , BLOCKFROST_API_URL_MAINNET , BLOCKFROST_API_URL_TESTNET } from "../utils/Constants";

export const latestBlock = async (networkID) => {
    const URL = networkID == 0 ? BLOCKFROST_API_URL_TESTNET : BLOCKFROST_API_URL_MAINNET;
    const KEY = networkID == 0 ? BLOCKFROST_KEY_TESTNET : BLOCKFROST_KEY_MAINNET;
    const requestOptions = {
        method: 'GET',
        headers: {project_id: KEY},
    };

    let res = await fetch(URL + "/blocks/latest", requestOptions);
    return res.json()
}

export const getEpoch = async (networkID,epoch) => {
    const URL = networkID == 0 ? BLOCKFROST_API_URL_TESTNET : BLOCKFROST_API_URL_MAINNET;
    const KEY = networkID == 0 ? BLOCKFROST_KEY_TESTNET : BLOCKFROST_KEY_MAINNET;
    const requestOptions = {
        method: 'GET',
        headers: {project_id: KEY},
    };

    let res = await fetch(URL + `/epochs/${epoch}/parameters`, requestOptions);
    return res.json()
}

export const setprotocolparmeter = async (networkId) => {
    let latestblock = await latestBlock(networkId);
    const slot = latestblock.slot;
    let epoch = await getEpoch(networkId,latestblock.epoch);
    
    return {
        linearFee:{
            minFeeA:epoch.min_fee_a.toString(),
            minFeeB:epoch.min_fee_b.toString()
        },
        minUtxo : epoch.min_utxo,
        poolDeposit : epoch.pool_deposit,
        keyDeposit : epoch.key_deposit,
        maxValSize : parseInt(epoch.max_val_size),
        maxTxSize : epoch.max_tx_size,
        priceMem : epoch.price_mem,
        priceStep : epoch.price_step,
        coinsPerUtxoWord :epoch.coins_per_utxo_word,
        slot : slot
    }
}

export const getAssests = async (stakeaddr,networkID) => {
    const URL = networkID == 0 ? BLOCKFROST_API_URL_TESTNET : BLOCKFROST_API_URL_MAINNET;
    const KEY = networkID == 0 ? BLOCKFROST_KEY_TESTNET : BLOCKFROST_KEY_MAINNET;
    
    const requestOptions = {
        method: 'GET',
        headers: {project_id: KEY},
    };

    let res = await fetch(URL + `/accounts/${stakeaddr}/addresses/assets`, requestOptions);
    return res.json();
}

export const getMetadata = async (assests,networkID) => {
    const URL = networkID == 0 ? BLOCKFROST_API_URL_TESTNET : BLOCKFROST_API_URL_MAINNET;
    const KEY = networkID == 0 ? BLOCKFROST_KEY_TESTNET : BLOCKFROST_KEY_MAINNET;
    
    const requestOptions = {
        method: 'GET',
        headers: {project_id: KEY},
    };

    let res = await fetch(URL + `/assets/${assests}`, requestOptions);
    return res.json();
}