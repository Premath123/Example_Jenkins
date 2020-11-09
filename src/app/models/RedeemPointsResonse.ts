export class RedeemPointsResponse {
    "$class": string;
        "avon": string;
        "buyer": string;
        "store": string;
        "product": [
            string,
            string
        ];
        "billAmount": number;
        "pointsRedeemed": number;
        "transactionId": string;
        "timestamp": string;
}