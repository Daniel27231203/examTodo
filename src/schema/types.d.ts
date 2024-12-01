interface ProductGet {
  _id?: number;
  title: string;
  description: string;
  img: string;
}

interface ProductCreate {
  // files: string[];
  title: string;
  description: string;
  img: string;
}
