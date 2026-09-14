import { useEffect } from "react";

export function useKey(KEY, action) {
  useEffect(
    //put this effect in the moviedetails component so that when this component is deleted,this effect wont run
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === KEY.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callBack);
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, KEY],
  );
}
