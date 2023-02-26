import { galleryItems } from "./gallery-items.js"; //галерея
// Change code below this line

const galleryRef = document.querySelector(".gallery"); //выбираем елемент галереи
const markup = craeteMarkup(galleryItems); // созданиу html разметки  которая принимает массив объектов galleryItems и возвращает строку с HTML-разметкой для каждого изображения в массиве.
galleryRef.innerHTML = markup; //устанавливает содержимое элемента galleryRef равным markup, что отображает HTML-разметку галереи изображений на странице.

function craeteMarkup(items) {
  //функция createMarkup, которая создает HTML-разметку для каждого изображения в массиве items.
  return items
    .map(({ preview, original, description }) => {
      //использует метод массива map(), чтобы создать массив строк с HTML-разметкой для каждого изображения ,используется деструктуризация объекта для извлечения значений свойств preview, original и description из каждого объекта в массиве items.
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a>
        </div>`;
    })
    .join(""); // чтобы объединить все элементы массива в одну строку
}

galleryRef.addEventListener("click", (e) => {
  //добавление слушателя на клик
  e.preventDefault(); //отмены действия по умолчанию
  if (e.target.nodeName !== "IMG") {
    //проверяется тип элемента, если не изображение то функция завершаеться
    return;
  } else {
    const instance = basicLightbox.create(
      //если это изображение функция создает модальное окно
      `<div class="modal"><img src="${e.target.dataset.source}" alt='${e.target.alt}'></div>`, //модальное окно с параметрами оригинального изображениея
      {
        onShow: (instance) => {
          //создаем оброботчик события при открытии мод-окна
          window.addEventListener(
            //добавляем слушателя на объект window, для отслеживания нажатия клавиши Escape
            "keydown",
            (event) => {
              if (event.code === "Escape") {
                //если пользователь нажмет клавишу Escape
                instance.close(); // ото закрываем модальное окно с помощью метода instance.close().
              }
            },
            { once: true } //чтобы событие обработалось только один раз и не всплывало далее.
          );
        },
      }
    );
    instance.show(); //чтобы показать модальное окно
  }
});
console.log(galleryItems);
