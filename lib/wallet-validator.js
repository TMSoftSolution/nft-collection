import WAValidator from 'wallet-address-validator';

export function validate(address, currency){
    return  WAValidator.validate(address, currency)
}