import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadItems } from "../../features/cards/cards-slice";
import { selectItemsBySearch } from "../../features/filters/filter-slice";
import { RootState, useAppDispatch } from "../../features/store";

const useCards = () => {
  const dispatch = useAppDispatch();
  const { status } = useSelector((state: RootState) => state.cards);
  const { categoryId, searchValue, sort, currentPage } = useSelector(
    (state: RootState) => state.filter
  );
  const result = useSelector(({ cards: { items } }) =>
    selectItemsBySearch(items, searchValue)
  );

  const getParams = () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "desc" : "asc";
    const category = categoryId > 0 ? String(categoryId) : "";
    return {
      page: currentPage,
      limit: 8,
      search: searchValue,
      sortBy,
      order,
      category,
    };
  };

  useEffect(() => {
    dispatch(loadItems(getParams()));
  }, [categoryId, searchValue, sort.sortProperty, currentPage]);

  return { result, status };
};

export default useCards;
