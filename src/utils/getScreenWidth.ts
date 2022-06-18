type Callback = (innerWidth: number) => void;

export const getScreenWidth = (cb: Callback) => {
  window.onresize = function () {
    cb(window.innerWidth);
  };
};
