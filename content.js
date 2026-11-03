/*
  КОНТИНУУМ — всё, что меняется по ходу переговоров.
  Вёрстку трогать не нужно: дописали строку — она появилась на сайте.
*/
window.CONTENT = {
  event: {
    // Время начала уточнить; обратный отсчёт идёт до этой минуты (московское время).
    start: "2026-12-05T00:00:00+03:00",
    city: "Москва",
    venue: "Конгресс-отель «Бородино»",   // Пусто — строка на сайте не показывается.
    venueAddress: "Русаковская ул., 13, стр. 5",
    mapUrl: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x46b53583a00afb89:0x25440bd13bd7b328",
  },

  // Фильм-тур по площадке (собран скриптом video_build.py).
  venueFilm: { src: "assets/venue-film.mp4", poster: "assets/venue-film.jpg", duration: "0:38" },

  // Пространства площадки: короткие беззвучные петли. Пусто — блок «Площадка» скрыт.
  venueSpaces: [
    { src: "assets/loop-hall.mp4",   poster: "assets/loop-hall.jpg",   label: "Большой зал",   title: "Конференция и выпускной", text: "Сцена, амфитеатр и VIP-ряды для гостей и партнёров." },
    { src: "assets/loop-lunch.mp4",  poster: "assets/loop-lunch.jpg",  label: "Банкетный зал", title: "Обед",                    text: "Обед для гостей между конференцией и выпускным." },
    { src: "assets/loop-vip.mp4",    poster: "assets/loop-vip.jpg",    label: "Зелёный зал",   title: "VIP-кофе-брейк",          text: "Классический зал с портретом Дениса Давыдова." },
    { src: "assets/loop-dinner.mp4", poster: "assets/loop-dinner.jpg", label: "Ресторан",      title: "Закрытый ужин",           text: "Ужин с VIP-гостями и интервью для прессы." },
    { src: "assets/loop-foyer.mp4",  poster: "assets/loop-foyer.jpg",  label: "Фойе",          title: "Между залами",            text: "Открытое пространство с колоннами и баром." },
  ],

  // Связь. Телефон на сайте не показываем — только мессенджеры.
  contact: {
    personName: "Гульнара Мишкина",       // Заменить на стратегического директора, когда он появится.
    personRole: "Автор и продюсер проекта",
    telegram: "GulyaMishkina",            // без @
    whatsapp: "",                         // номер в формате 79991234567; пусто — кнопка скрыта
    formEndpoint: "",                     // адрес приёма заявок (Formspree, бот и т. п.); пусто — заявка уходит в Telegram
  },

  // Для формы по закону о персональных данных (152-ФЗ) нужны оператор и политика.
  legal: {
    operator: "",      // например: ИП Мишкина Г. · ИНН 000000000000
    privacyUrl: "",    // ссылка на текст политики конфиденциальности
  },

  // Сколько мест ещё свободно.
  seats: { tables: 10, tablesTotal: 10, tv: 4, tvTotal: 4 },

  // Подтверждённые эксперты и звёзды. Пример строки:
  // { name: "Имя Фамилия", role: "Регалии одной строкой", photo: "assets/name.webp", url: "https://..." }
  people: [],

  // Подтверждённые партнёры. Логотип лучше в SVG или PNG на прозрачном фоне.
  // group: "media" и "tv" — в блок «Где выйдет „Континуум“»; "clinic" | "brand" | "partner" — в «Экосистему».
  // { name: "Название", logo: "assets/logo-name.svg", group: "media", url: "https://..." }
  logos: [],
};
