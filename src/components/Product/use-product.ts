import { useAppDispatch } from './../../features/store';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadItemById } from "../../features/cards/cards-slice";
import { RootState } from '../../features/store';

const useProduct = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { currentDish, status } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    if (id) {
      dispatch(loadItemById(id));
    }
  }, []);

  return { currentDish, status };
};

export default useProduct;
