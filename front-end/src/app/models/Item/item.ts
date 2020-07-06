export class Item {
    _id : string;
    name : string;
    quantity : number;
    quantity_unit : string;
    buy_price_per_unit : number;
    sell_price_per_unit : number;

    constructor(_id, name, quantity, quantity_unit, buy_price_per_unit, sell_price_per_unit){
        this._id = _id;
        this.name = name;
        this.quantity = quantity;
        this.quantity_unit = quantity_unit;
        this.buy_price_per_unit = buy_price_per_unit;
        this.sell_price_per_unit = sell_price_per_unit;
    }
}