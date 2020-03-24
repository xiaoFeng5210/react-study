import { useReducer, useEffect, useCallback } from "react";

interface Option {
  // 记录勾选状态的key
  key?: string;
}

type CheckedMap = {
  [key: string]: boolean;
};
