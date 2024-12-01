interface ProductGet {
  _id?: number;
  title: string;
  img?: string;
}

interface ProductCreate {
  files?: string[];
  title: string;
  img?: string;
}
