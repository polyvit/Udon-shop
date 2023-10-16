export type Sort = {
  name: string;
  sortProperty: string;
};

export interface FilterSliceState {
  categoryId: number;
  searchValue: string;
  sort: Sort;
  currentPage: number;
}