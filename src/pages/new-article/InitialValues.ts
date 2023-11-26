export interface ArticleValuesInterface {
  name: string;
  brand?: string;
  type: string;
  image: string;
  size?: string;
  color?: string;
}

export const initialValues: ArticleValuesInterface = {
  name: "",
  brand: "",
  type: "",
  image: "",
  size: "",
  color: "",
};
