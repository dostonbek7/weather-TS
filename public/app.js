"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const KEY = "44a0e39d42c57ef4ab6cadcd610c0ef4";
const form = document.querySelector("form");
const inputVal = document.querySelector("input");
const cityName = document.querySelector("h2");
const countryName = document.querySelector("#country");
const weather = document.querySelector("h3");
const temp = document.querySelector("#temp");
const img = document.querySelector("img");
const details = document.getElementById("#details");
const body = document.querySelector("body");
let cityNameVal, Url;
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameVal}&units=metric&appid=${KEY}`;
    try {
        const req = yield fetch(Url);
        if (req.status !== 200) {
            throw new Error("No data");
        }
        const data = yield req.json();
        cityName.textContent = `${data.name},`;
        countryName.textContent = `${data.sys.country}`;
        img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weather.textContent = `${data.weather[0].main}`;
        temp.textContent = `${Math.floor(data.main.temp)}℃`;
    }
    catch (error) {
        console.log("xatolik bor");
    }
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    cityNameVal = inputVal.value.trim();
    if (cityNameVal) {
        getData();
    }
    else {
        console.log("Enter location again");
    }
});
