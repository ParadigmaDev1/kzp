export const map = () => {
  const mapsObj = document.querySelectorAll(".map");
  if (mapsObj) {
    mapsObj.forEach((mapObj) => {
      if (mapObj.dataset.center) {
        let center = mapObj.dataset.center.split(" ").map(Number);
        let zoom = mapObj.dataset.zoom;
        let placeholder = mapObj.dataset.placeholder;
        function init() {
          let map = new ymaps.Map(mapObj, {
            center: center,
            zoom: zoom ?? 17,
          });
          if (map) {
            if (placeholder !== "false") {
              let placemark = new ymaps.Placemark(
                center,
                {},
                {
                  iconLayout: "default#image",
                  iconImageHref: "/local/templates/s1/img/pin.svg",
                  iconImageSize: [101, 61],
                  iconImageOffset: [-50, -64],
                }
              );
              map.geoObjects.add(placemark);
            }

            map.controls.remove("geolocationControl"); // удаляем геолокацию
            map.controls.remove("searchControl"); // удаляем поиск
            map.controls.remove("typeSelector"); // удаляем тип
            map.controls.remove("rulerControl"); // удаляем контрол правил
            map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
            if (mapObj.dataset.pins) {
              let pins = mapObj.dataset.pins.trim().split(",");
              pins.forEach((pin, index) => {
                const pinCoords = pin.trim().split(" ").map(Number);
                let placemark = new ymaps.Placemark(
                  pinCoords,
                  {},
                  {
                    iconLayout: "default#image",
                    iconImageHref: "/local/templates/s1/img/pin2.svg",
                    iconImageSize: [28, 36],
                    iconImageOffset: [-14, -37],
                  }
                );
                map.geoObjects.add(placemark);
              });
            }
            if (window.innerWidth <= 630) {
              map.controls.remove("trafficControl"); // удаляем контроль трафика
              map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
              map.controls.remove("zoomControl"); // удаляем контрол зуммирования
              map.behaviors.disable(["drag"]);
              // mapWrapper.addEventListener("click", () => {
              //   mapWrapper.classList.add("active");
              //   map.behaviors.enable(["drag"]);
              // });
              // window.addEventListener("scroll", () => {
              //   mapWrapper.classList.remove("active");
              //   map.behaviors.disable(["drag"]);
              // });
            }
          }
        }

        ymaps.ready(init);
      } else {
      }
    });
  }
};
