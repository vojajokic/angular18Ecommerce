export interface APIResponseModel {
    message: string,
    result: boolean,
    data: any
}

export interface ProductList {
    courseId: number
    courseName: string
    createdDate: string
    totalHours: string
    totalVideos: number
    courseDescription: string
    thumbnailUrl: string
  }

// export interface ProductList {
//     productId: number;
//     productSku: string;
//     productName: string;
//     productPrice: number;
//     productShortName: string;
//     productDescription: string;
//     createdDate: string;
//     deliveryTimeSpan: string;
//     categoryId: number;
//     productImageUrl: string;
//     categoryName: string;
// }