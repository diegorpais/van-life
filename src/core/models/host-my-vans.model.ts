export default interface MyVansModel {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
  visibility: string;
  gallery: Array<gallery>;
}

interface gallery {
  imageUrl: string;
}