export class CouponTypes{
    public constructor(
        public types: string[] = ["RESTAURANTS","ELECTRICITY","FOOD","HEALTH","SPORTS","CAMPING","TRAVELLING"]
    ){}
    getTypes(){
        return this.types;
    }
}