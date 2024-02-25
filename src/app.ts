const KEY = "44a0e39d42c57ef4ab6cadcd610c0ef4";
const form = document.querySelector("form") as HTMLFormElement;
const inputVal = document.querySelector("input") as HTMLInputElement;
const cityName = document.querySelector("h2") as HTMLHeadingElement;
const countryName = document.querySelector("#country") as HTMLSpanElement;
const weather = document.querySelector("h3") as HTMLHeadingElement;
const temp = document.querySelector("#temp") as HTMLHeadingElement;
const img = document.querySelector("img") as HTMLImageElement;
const details = document.getElementById("#details") as HTMLDivElement;
const body = document.querySelector("body") as HTMLBodyElement;
let cityNameVal: string, Url: string;

const getData = async () => {

  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameVal}&units=metric&appid=${KEY}`;
  try {
    const req = await fetch(Url);
    if (req.status !== 200) {
      throw new Error("No data");
    }
    const data = await req.json();
    cityName.textContent = `${data.name},`;
    countryName.textContent = `${data.sys.country}`;
    img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weather.textContent = `${data.weather[0].main}`;
    temp.textContent = `${Math.floor(data.main.temp)}℃`;
  } catch (error) {
    console.log("xatolik bor");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cityNameVal = inputVal.value.trim();
  if (cityNameVal) {
    getData();
  } else {
    console.log("Enter location again");
  }
});
