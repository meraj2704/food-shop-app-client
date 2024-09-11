export interface IProductInformation {
    name: string;
    price:number;
    description: string;
} 

export interface ProductCartProps {
    imageSrc: string;
    productInformation: IProductInformation
}

export interface PostMethodPropsI{
    endpoint: string;
    key: string;
}