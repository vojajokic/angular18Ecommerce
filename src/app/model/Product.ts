// 
export interface APIResponseModel {
  total: number,
  skip: number,
  limit: number,
  products: any,
}

// export interface ProductList {
//     courseId: number
//     courseName: string
//     createdDate: string
//     totalHours: string
//     totalVideos: number
//     courseDescription: string
//     thumbnailUrl: string
//   }

  // export interface ProductList {
  //   id: number
  //   title: string
  //   price: number
  //   description: string
  //   category: string
  //   image: string
  //   rating:any
  // }

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

export interface ProductList {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  thumbnail: string
  images: string[]
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}
