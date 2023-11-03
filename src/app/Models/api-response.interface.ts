export interface ApiResponse {
    name: string;
    capitalCity: string;
    region: { value: string };
    incomeLevel: { value: string }
    iso2Code: string;
    latitude: string;
    longitude: string;
}