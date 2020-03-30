import { useReducer, useEffect, useCallback } from "react";

interface Option {
  // 记录勾选状态的key
  key?: string;
}

type CheckedMap = {
  [key: string]: boolean;
};

const CHECKED_CHANGE = "CHECKED_CHANGE";

const CHECKED_ALL_CHANGE = "CHECKED_ALL_CHANGE";

const SET_CHECKED_MAP = "SET_CHECKED_MAP";

type CheckedChange<T> = {
  type: typeof CHECKED_CHANGE;
  payload: {
    dataItem: T;
    checked: boolean;
  };
};

type CheckedAllChange = {
  type: typeof CHECKED_ALL_CHANGE;
  payload: boolean;
};

type SetCheckedMap = {
  type: typeof SET_CHECKED_MAP;
  payload: CheckedMap;
};

type Action<T> = CheckedChange<T> | CheckedAllChange | SetCheckedMap;
export type OnCheckedChange<T> = (item: T, checked: boolean) => any;

/**
 * 提供勾选、全选、反选等功能
 * 提供筛选勾选中的数据的函数
 * 在数据更新的时候自动剔除陈旧项
 */

export const useChecked = <T extends Record<string, any>>(
  dataSource: T[],
  { key = "id" }: Option = {}
) => {
  const [checkedMap, dispatch] = useReducer(
    (checkedMapParam: checkedMap, action: Action<T>) => {
      switch (action.type) {
        case CHECKED_CHANGE: {
          const { payload } = action;
          const { dataItem, checked } = payload;
          const { [key]: id } = dataItem;
          return {
            ...checkedMapParam,
            [id]: checked
          };
        }
        case CHECKED_ALL_CHANGE: {
          const { payload: newCheckedAll } = action;
          const newCheckedMap: CheckedMap = {};
          // 全选
          if (newCheckedAll) {
            dataSource.forEach(dataItem => {
              newCheckedMap[dataItem.id] = true;
            });
          }
          return newCheckedMap;
        }
        case SET_CHECKED_MAP: {
          return action.payload;
        }
        default:
          return checkedMapParam;
      }
    },
    {}
  );
};
