
export type ProductSummary = {
    id: number,
    attributes: {
        name: string;
        sizes: any;
        updatedAt: string;
        price: number;
        slug: string
        images: {
            data: {
                id: number;
                attributes: any;
            }[]
        }
    }
}


export type Product = {
    id: number,
    attributes: {
        name: string;
        sizes: any;
        description: string;
        updatedAt: string;
        price: number;
        slug: string
        images: {
            data: {
                id: number;
                attributes: any;
            }[]
        }
    }
}