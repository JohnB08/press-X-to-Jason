const clipArray = [
  "https://www.youtube.com/embed/OYQDnV092hI?start=0&end=2&autoplay=1",
  "https://www.youtube.com/embed/OYQDnV092hI?start=4&end=6&autoplay=1",
  "https://www.youtube.com/embed/OYQDnV092hI?start=8&end=10&autoplay=1",
  "https://www.youtube.com/embed/OYQDnV092hI?start=11&end=14&autoplay=1",
  "https://www.youtube.com/embed/OYQDnV092hI?start=15&end=17&autoplay=1",
  "https://www.youtube.com/embed/OYQDnV092hI?start=22&end=24&autoplay=1",
];

function makeElement(type, properties) {
  const element = document.createElement(type);
  Object.entries(properties).forEach((property) => {
    let [propertyName, propertyValue] = property;
    element[propertyName] = propertyValue;
  });
  return element;
}

const promiseAwait = (duration) => {
  const myPromise = new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
  return myPromise;
};

const iFrame = makeElement("iframe", {
  width: "560",
  height: "315",
  src: "#",
  title: "YouTube video player",
  frameborder: "0",
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowFullscreen: true,
});

console.log(iFrame);
const pressXContainer = makeElement("div", { className: "pressXContainer" });
const pressText = makeElement("h1", {
  textContent: "PRESS",
  className: "text",
});
const buttonX = makeElement("button", {
  textContent: "X",
  className: "buttonX",
});
pressXContainer.append(pressText, buttonX);
document.body.append(pressXContainer);
const randomSrc = () =>
  (src = clipArray[Math.floor(Math.random() * clipArray.length)]);

const playVideo = async () => {
  iFrame.src = randomSrc();
  iFrame.autoplay = true;
  document.body.append(iFrame);
  await promiseAwait(4000);
  iFrame.remove();
};

buttonX.addEventListener("click", () => playVideo());

window.addEventListener("keydown", (event) => {
  if (event.code != "KeyX") return;
  else playVideo();
});
