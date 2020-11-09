export class RedeemPointsRequest {
    "$class": string;
        "avon": string;
        "buyer": string;
        "store": string;
        "product": [
            string
        ];
        "billAmount": number;
        "pointsRedeemed": number;
        "transactionId": string;
        "timestamp": string;
}