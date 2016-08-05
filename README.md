### Internet of things project ####

Here I use Edison Intel chip with Arduino kit.
Reading light sensor installed on my desk, I save the data in the ThingsSpeak and let the web site read this date and show in a special format.

Hardware: Intel Edison chip
Software on Edison: Linux + Node.js + Cylon.js
On server: Node.js + Express.js (which make requests to ThingSpeak).

### Интернет вещей ####

В данном проекте я использую сенсорный датчик света, который стоит у меня на столе, который подключен к плате Ардуино Intel Edison с Linux.
На Linux'e запущен node.js, который  через библиотеку Cylon.js считывает показания датчика и отправляет данные на сайт Things Speak.

Сайт же ROI-IOT при рендеринге делает запрос к ThingSpeak и рендерит их.
НА сервере стоит Node/Express.
