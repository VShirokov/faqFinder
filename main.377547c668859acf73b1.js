!function(e){function n(n){for(var r,i,s=n[0],a=n[1],c=n[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(f&&f(n);p.length;)p.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,s=1;s<t.length;s++){var a=t[s];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={0:0},u=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var f=a;u.push([121,1]),t()}({121:function(e,n,t){t(122),e.exports=t(310)},309:function(e,n,t){},310:function(e,n,t){"use strict";t.r(n);var r=function(e){for(var n={},t=[],r=/((^|\s)[а-я]{1,3}\s)|\-/g,o=/\s* \s*/g,u=0;u<e.length;u++)t.push(e[u].answer);for(var i=function(t){e[t].question.toLowerCase().replace(/[!@#$%^&«?»+,—*]/g,"").replace(r," ").split(o).filter((function(e){return e})).forEach((function(e){n[e]?n[e].push(t):n[e]=[t]}))},s=0;s<e.length;s++)i(s);return n},o=[{question:"Как войти в Личный кабинет, получить или сменить пароль?",answer:"Откройте страницу входа Личного кабинета, введите свой номер телефона, пароль и нажмите кнопку «Войти». Номер можно набирать в любом формате — начиная с «8», «+7» или «9XХ YYY-YY-YY». Чтобы получить пароль, наберите на телефоне команду *105*00#. Пароль придёт в SMS."},{question:"Личный кабинет — это платный сервис?",answer:"Личный кабинет — это бесплатный сервис для всех абонентов МегаФона. При использовании Личного кабинета трафик бесплатный, интернет на вашем тарифе или интернет-опции не расходуется дома и в поездках по России за исключением Республики Крым и г. Севастополь."},{question:"Как узнать баланс?",answer:"Чтобы сумма на счёте всегда отображалась на экране телефона или планшета, установите виджет Личного кабинета. Чтобы узнавать баланс других абонентов МегаФона (родственников или друзей), подключите услугу Баланс близких."},{question:"Как посмотреть детализацию счёта?",answer:"В Личном кабинете вы можете заказать детализацию за последние 6 календарных месяцев. Информацию за более ранний срок можно заказать в ближайшем салоне."},{question:"Почему не ловит сеть?",answer:"Нестабильный сигнал сети. На вашем счёте недостаточно денег. Неверное подключение к сети. Телефон или SIM-карта неисправны."},{question:"Как узнать стоимость услуг связи в поездке по миру?",answer:"В путешествиях по миру звонки оплачиваются с первой секунды."},{question:"Почему телефон не ловит сеть в роуминге?",answer:"На вашем счёте недостаточно денег. Проверьте баланс и при необходимости пополните его. В некоторых странах для работы услуг связи баланс Лицевого счёта должен быть положительным и достигать определённой величины.Чтобы продолжить пользоваться связью в экзотических странах, необходимо подключить специальную услугу Расширенный международный роуминг в салоне МегаФона. Не забудьте взять с собой паспорт."},{question:"Как перейти в МегаФон со своим номером?",answer:"Чтобы перейти в «МегаФон» со своим номером, необходимо оставить заявку на сайте или в ближайшем офисе МегаФона. Для оформления вам понадобится паспорт или иной документ, удостоверяющий личность, по которому вы подключались к сети прежнего сотового оператора."},{question:"Есть ли какие-нибудь особые условия, без которых номер не будет перенесён?",answer:"Сменить оператора можно только в границах одного региона. Чтобы узнать, к какому региону привязан ваш номер МегаФона, введите номер телефона в поле «Проверить регион» на странице"},{question:"Почему не отправляются SMS-сообщения?",answer:"Для корректной работы укажите номер SMS-центра +79262909090 (на большинстве моделей телефонов он находится в меню «Настройки»). Через меню телефона выберите формат сообщений «Текст». Срок доставки сообщения рекомендуем установить максимальный. Попытки доставить сообщение продолжаются в течение 5 дней с момента отправления, если оно не было получено. Для активации «iMessage» отправьте SMS на номер +447786205094. Оно тарифицируется как международное, вы увидите предупреждение об этом."},{question:"Сколько символов можно отправить в SMS?",answer:"Максимальная длина одного сообщения — 160 символов латиницей или 70 символов кириллицей."}],u=document.querySelector(".input"),i=document.querySelector(".list"),s=r(o),a=[],c=function(){return i.innerHTML=""},f=function(e){c(),e.map((function(e){var n,t;n=o[e].question,(t=document.createElement("li")).textContent=n,i.append(t)}))};u.addEventListener("input",(function(e){var n=e.target.value,t=n.length;t>2?Object.keys(s).map((function(e){-1!==e.indexOf(n)&&function(e){s[e].map((function(e){if(a.includes(e))return null;a.push(e)}))}(e)})):0===t&&(c(),a=[]),f(a)}));t(308),t(309)}});