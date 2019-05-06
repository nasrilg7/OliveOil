export class FarmOlive {
    constructor(
        public universalProductCode: number,
        public farmingTimeRelativeToEpoch: number,
        public irrigationAmount: number,
        public evapotranspiration: number,
        public referenceEvapotranspiration: number,
        public fertilizersUsed: string,
        public pesticidesUsed: string) {
    }
}

export class HarvestOlive {
    constructor(
        public universalProductCode: number,
        public harvestingTimeRelativeToEpoch: number) {
    }
}

export class TransportOlive {
    constructor(
        public universalProductCode: number,
        public transportationTimeRelativeToEpoch: number) {
    }
}

export class InspectOlive {
    constructor(
        public universalProductCode: number,
        public inspectionTimeRelativeToEpoch: number,        
        public inspectionFertilizersReport: string,
        public inspectionPesticidesReport: string) {
    }
}

export class WarehouseOlive {
    constructor(
        public universalProductCode: number,
        public weightInGrams: number,        
        public warehousingTimeRelativeToEpoch: string) {
    
    }
}

export class ProcessOil {
    constructor(
        public universalProductCode: number,
        public weightInGrams: number,        
        public processingTimeRelativeToEpoch: string) {
    
    }
}

export class PackOil {
    constructor(
        public universalProductCode: number) {
    
    }
}

export class MarkOilForSale {
    constructor(
        public universalProductCode: number,
        public price: number,
        public markForSaleTimeRelativeToEpoch: number) {
    
    }
}

export class BuyOliveOil {
    constructor(
        public universalProductCode: number,
        public sellingTimeRelativeToEpoch: number) {
    
    }
}


export class ShipOliveOil {
    constructor(
        public universalProductCode: number,
        public shipmentTimeRelativeToEpoch: number) {
    
    }
}

export class ReceiveOliveOil {
    constructor(
        public universalProductCode: number,
        public receivedTimeRelativeToEpoch: number) {    
    }
}

export class SetOliveOilForPurchase {
    constructor(
        public universalProductCode: number,
        public price: number,
        public markForPurchaseTimeRelativeToEpoch: number) {    
    }
}

export class PurchaseOliveOil {
    constructor(
        public universalProductCode: number,
        public purchaseTimeRelativeToEpoch: number) {    
    }
}

export class ConsumeOliveOil {
    constructor(
        public universalProductCode: number,
        public consumptionTimeRelativeToEpoch: number) {    
    }
}

export class GetOliveUnitDetails1 {
    constructor(
        public universalProductCode: number) {    
    }
}

export class GetOliveUnitDetails1ReturnedValue {
    constructor(
        public _stockKeepingUnit: number,
        public universalProductCode: number,
        public farmerID: string,
        public oilWeightInGrams: number,
        public oliveWeightInGrams: number,
        public transportationTimeRelativeToEpoch: number,
        public processingTimeRelativeToEpoch: number,
        public inspectionTimeRelativeToEpoch: number) {    
    }
}

export class GetOliveUnitDetails2 {
    constructor(
        public universalProductCode: number) {    
    }
}

export class GetOliveUnitDetails2ReturnedValue {
    constructor(
        public harvestingTimeRelativeToEpoch: number,
        public farmingTimeRelativeToEpoch: number,
        public receivedTimeRelativeToEpoch: string,
        public warehousingTimeRelativeToEpoch: number,
        public purchaseTimeRelativeToEpoch: number,
        public sellingTimeRelativeToEpoch: number,
        public markForSaleTimeRelativeToEpoch: number,
        public markForPurchaseTimeRelativeToEpoch: number) {    
    }
}

export class GetOliveUnitDetails3 {
    constructor(
        public universalProductCode: number) {    
    }
}

export class GetOliveUnitDetails3ReturnedValue {
    constructor(
        public consumptionTimeRelativeToEpoch: number,
        public shipmentTimeRelativeToEpoch: number,
        public productPrice: string,
        public productFinalPrice: number,
        public oliveState: string,
        public productID: number,
        public sellerID: string) {    
    }
}

export class GetOliveUnitDetails4 {
    constructor(
        public universalProductCode: number) {    
    }
}

export class GetOliveUnitDetails4ReturnedValue {
    constructor(
        public inspectorID: string,
        public consumerID: string,
        public ownerID: string,
        public referenceEvapotranspiration: number,
        public evapotranspiration: number,
        public irrigationAmount: number,
        public fertilizersUsed: string,
        public pesticidesUsed: string,
        public inspectionFertilizersReport: string,
        public inspectionPesticidesReport: string) {    
    }
}