const header = document.querySelector("#header"),
  headerContainer = document.querySelector(".header__container"),
  navigation = document.querySelector(".navigation"),
  headerContent = document.querySelector(".header__content");

const setHeaderHeight = () => {
  headerContainer.style.minHeight = header.style.minHeight =
    Math.min(
      window.offsetHeight,
      navigation.offsetHeight + headerContent.offsetHeight
    ) + "px";
  headerContainer.style.paddingTop = navigation.offsetHeight + "px";
};

setHeaderHeight();

window.onresize = setHeaderHeight;
