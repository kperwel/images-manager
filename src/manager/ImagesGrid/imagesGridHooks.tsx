import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListStatus } from "../selectors";
import actions from "../actions";
import { LIST_STATUS } from "../types";

export function useInitialListFetch() {
  const dispatch = useDispatch();
  const listStatus = useSelector(getListStatus);

  useEffect(() => {
    if (listStatus === LIST_STATUS.INIT) {
      dispatch(actions.getImages());
    }
  }, [listStatus, dispatch]);
}
