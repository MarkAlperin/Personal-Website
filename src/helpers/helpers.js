const helpers = {
  getDocHeight: () => {
    var D = document;
    return Math.max(
      D.body.scrollHeight,
      D.documentElement.scrollHeight,
      D.body.offsetHeight,
      D.documentElement.offsetHeight,
      D.body.clientHeight,
      D.documentElement.clientHeight
    );
  },

  amountscrolled: () => {
    // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    var winheight =
      window.innerHeight ||
      (document.documentElement || document.body).clientHeight;
    var docheight = helpers.getDocHeight();
    var scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    var trackLength = docheight - winheight;
    var pctScrolled = Math.floor((scrollTop / trackLength) * 100);
    // console.log(pctScrolled + "% scrolled");
    return pctScrolled;
  },
};

export default helpers;