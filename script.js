const endDate = new Date('2025-06-30T23:59:59');
// Функция для обновления счётчика
function updateCountdown() {
    const now = new Date();
    const timeRemaining = endDate - now;
    // Вычисление дней, часов, минут и секунд
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    // Обновление текста счётчика
    document.getElementById('countdown').innerHTML = `${days} д ${hours} ч ${minutes} мин ${seconds} с`;
}
// Обновление счётчика каждую секунду
setInterval(updateCountdown, 1000);
// Инициальное обновление счётчика
updateCountdown();