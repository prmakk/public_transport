'use strict';

const bus1Btn = document.querySelector('.bus1');
const bus1aBtn = document.querySelector('.bus1A')
const bus4Btn = document.querySelector('.bus4');
const bus8Btn = document.querySelector('.bus8');
const bus228Btn = document.querySelector('.bus228');
const bus228aBtn = document.querySelector('.bus228A');
const bus244Btn = document.querySelector('.bus244');
const bus302Btn = document.querySelector('.bus302');
const minibus479Btn = document.querySelector('.minibus479');
const tram1Btn = document.querySelector('.tram1');
const tram2Btn = document.querySelector('.tram2');
const tram3Btn = document.querySelector('.tram3');
const tram4Btn = document.querySelector('.tram4');
const tram5Btn = document.querySelector('.tram5');
const tram6Btn = document.querySelector('.tram6');
const tram7Btn = document.querySelector('.tram7');
const tram8Btn = document.querySelector('.tram8');
const tram9Btn = document.querySelector('.tram9');
const tram10Btn = document.querySelector('.tram10');
const tram11Btn = document.querySelector('.tram11');
const tram12Btn = document.querySelector('.tram12');
const tram13Btn = document.querySelector('.tram13');
const tram14Btn = document.querySelector('.tram14');
const tram22Btn = document.querySelector('.tram22');
const tram25Btn = document.querySelector('.tram25');
const tram27Btn = document.querySelector('.tram27');

const navBusBtn = document.querySelector('.navBus');
const navMiniBusBtn = document.querySelector('.navMiniBus');
const navTramBtn = document.querySelector('.navTram');

const logoBtn = document.querySelector('.nav-branding');
const tableFirst = document.querySelector('.hero__table-first');
const firstTableStations = document.querySelector('.hero__table-first-title');
const secondTableStations = document.querySelector('.hero__table-second-title');
const tableSecond = document.querySelector('.hero__table-second');
const numbers = document.querySelector('.hero__numbers');
const infoTitle = document.querySelector('.hero__infoTitle');
const title = document.querySelector('.title');
const routeBlock = document.querySelector('.hero__route');
const routeImage = document.querySelector('.routeImage');
const routeMoreBtn = document.querySelector('.routeMore');

const busChooseBtn = document.querySelector('.busChoose');
const minibusChooseBtn = document.querySelector('.minibusChoose');
const tramChooseBtn = document.querySelector('.tramChoose');

let defaultBg = '#710586';
let activeBg = '#d000b3';
let hoverColor = '#d000b3';

tableFirst.style = 'display: none';
tableSecond.style = 'display: none';
routeBlock.style = 'display: none';
infoTitle.style = 'display: none';

function clearBusButtons(){
    bus1Btn.style = 'display: none';
    bus1aBtn.style = 'display: none';
    bus4Btn.style = 'display: none';
    bus8Btn.style = 'display: none';
    bus228Btn.style = 'display: none';
    bus228aBtn.style = 'display: none';
    bus244Btn.style = 'display: none';
    bus302Btn.style = 'display: none';
}

function activateBusButtons(){
    tableFirst.style = 'display: none';
    bus1Btn.style = 'display: flex';
    bus1aBtn.style = 'display: flex';
    bus4Btn.style = 'display: flex';
    bus8Btn.style = 'display: flex';
    bus228Btn.style = 'display: flex';
    bus228aBtn.style = 'display: flex';
    bus244Btn.style = 'display: flex';
    bus302Btn.style = 'display: flex';
}

function clearMinibusButtons(){
    minibus479Btn.style = 'display: none';
}

function activateMinibusButtons(){
    tableFirst.style = 'display: none';
    minibus479Btn.style = 'display: flex';
}

function clearTramButtons(){
    tram1Btn.style = 'display: none';
    tram2Btn.style = 'display: none';
    tram3Btn.style = 'display: none';
    tram4Btn.style = 'display: none';
    tram5Btn.style = 'display: none';
    tram6Btn.style = 'display: none';
    tram7Btn.style = 'display: none';
    tram8Btn.style = 'display: none';
    tram9Btn.style = 'display: none';
    tram10Btn.style = 'display: none';
    tram11Btn.style = 'display: none';
    tram12Btn.style = 'display: none';
    tram13Btn.style = 'display: none';
    tram14Btn.style = 'display: none';
    tram22Btn.style = 'display: none';
    tram25Btn.style = 'display: none';
    tram27Btn.style = 'display: none';
}

function activateTramButtons(){
    tableFirst.style = 'display: none';
    tram1Btn.style = 'display: flex';
    tram2Btn.style = 'display: flex';
    tram3Btn.style = 'display: flex';
    tram4Btn.style = 'display: flex';
    tram5Btn.style = 'display: flex';
    tram6Btn.style = 'display: flex';
    tram7Btn.style = 'display: flex';
    tram8Btn.style = 'display: flex';
    tram9Btn.style = 'display: flex';
    tram10Btn.style = 'display: flex';
    tram11Btn.style = 'display: flex';
    tram12Btn.style = 'display: flex';
    tram13Btn.style = 'display: flex';
    tram14Btn.style = 'display: flex';
    tram22Btn.style = 'display: flex';
    tram25Btn.style = 'display: flex';
    tram27Btn.style = 'display: flex';
}

function clearInfo(){
    tableFirst.style = 'display: none';
    tableSecond.style = 'display: none';
    infoTitle.style = 'display: none';
    firstTableStations.style = 'display: none';
    secondTableStations.style = 'display: none';
    routeBlock.style = 'display: none';
}

function busChosen(){
    location.href = "#timetable";
    title.innerHTML = 'Розклад руху автобусів Кривий Ріг';
    infoTitle.style = 'display: none';
    clearTramButtons();
    clearMinibusButtons();
    activateBusButtons();
    clearInfo();
    busChooseBtn.style = `background-color: ${activeBg}`;
    minibusChooseBtn.style = `background-color: ${defaultBg}`;
    tramChooseBtn.style = `background-color: ${defaultBg}`;
    numbers.style = 'display: flex';
}

function miniBusChosen(){
    location.href = "#timetable";
    title.innerHTML = 'Розклад руху маршруток Кривий Ріг';
    infoTitle.style = 'display: none';
    clearTramButtons();
    clearBusButtons();
    activateMinibusButtons();
    clearInfo();
    minibusChooseBtn.style = `background-color: ${activeBg}`;
    busChooseBtn.style = `background-color: ${defaultBg}`;
    tramChooseBtn.style = `background-color: ${defaultBg}`;
    numbers.style = 'display: flex';
}

function tramChosen(){
    location.href = "#timetable";
    title.innerHTML = 'Розклад руху трамваїв Кривий Ріг';
    infoTitle.style = 'display: none';
    clearMinibusButtons();
    clearBusButtons();
    activateTramButtons();
    clearInfo();
    tramChooseBtn.style = `background-color: ${activeBg}`;
    minibusChooseBtn.style = `background-color: ${defaultBg}`;
    busChooseBtn.style = `background-color: ${defaultBg}`;
    numbers.style = 'display: flex';
}

logoBtn.onclick = () =>{
    clearInfo();
    numbers.style = 'display: none';
    busChooseBtn.style = `background-color: ${defaultBg}`;
    minibusChooseBtn.style = `background-color: ${defaultBg}`;
    tramChooseBtn.style = `background-color: ${defaultBg}`;
}

//BUS SECTION
navBusBtn.onclick = () =>{
    busChosen();
}

busChooseBtn.onclick = () =>{
    busChosen();
}

bus1Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Автобус №1';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'пл. Визволення – пл. Визволення» (кільцевий, через вул. Прорізна, Карачуни, мкр Всебратське-2, вул. Старовокзальна, Центральний ринок Центрально-Міського району)';

    tableSecond.style = 'display: none';
    secondTableStations.style = 'display: none';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/bus1.jpg');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/205');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>пл. Визволення</th>
        <th>мкрн. "Макулан"</th>
    </tr>
    <tr>
        <td>05:50</td>
        <td>06:20</td>
    </tr>
    <tr>
        <td>06:25</td>
        <td>06:55</td>
    </tr>
    <tr>
        <td>07:00</td>
        <td>07:30</td>
    </tr>
    <tr>
        <td>07:35</td>
        <td>08:05</td>
    </tr>
    <tr>
        <td>08:10</td>
        <td>08:40</td>
    </tr>
    <tr>
        <td>08:45</td>
        <td>09:15</td>
    </tr>
    <tr>
        <td>09:25</td>
        <td>09:55</td>
    </tr>
    <tr>
        <td>10:00</td>
        <td>10:30</td>
    </tr>
    <tr>
        <td>11:20</td>
        <td>11:50</td>
    </tr>
    <tr>
        <td>11:55</td>
        <td>12:25</td>
    </tr>
    <tr>
        <td>12:30</td>
        <td>13:00</td>
    </tr>
    <tr>
        <td>13:05</td>
        <td>13:35</td>
    </tr>
    <tr>
        <td>13:50</td>
        <td>14:20</td>
    </tr>
    <tr>
        <td>14:20</td>
        <td>14:50</td>
    </tr>
    <tr>
        <td>14:55</td>
        <td>15:25</td>
    </tr>
    <tr>
        <td>15:30</td>
        <td>16:00</td>
    </tr>
    <tr>
        <td>16:10</td>
        <td>16:40</td>
    </tr>
    <tr>
        <td>16:45</td>
        <td>17:15</td>
    </tr>
    <tr>
        <td>17:20</td>
        <td>17:50</td>
    </tr>
    <tr>
        <td>18:30</td>
        <td>19:00</td>
    </tr>
    <tr>
        <td>19:15</td>
        <td>19:45</td>
    </tr>
    <tr>
        <td>19:50</td>
        <td>20:20</td>
    </tr>
    <tr>
        <td>20:25</td>
        <td>20:55</td>
    </tr>
    <tr>
        <td>21:00</td>
        <td>21:30</td>
    </tr>
    
    </table>`;
}

bus1aBtn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Автобус №1A';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = '«пл. Визволення – пл. Визволення» (кільцевий, через Центральний ринок Центрально-Міського району, вул. Старовокзальна,мкр Всебратське-2,Карачуни,вул. Прорізна)';

    tableSecond.style = 'display: none';
    secondTableStations.style = 'display: none';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/bus1a.jpg');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/206');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>пл. Визволення</th>
        <th>мкрн. "Макулан"</th>
    </tr>
    <tr>
        <td>05:35</td>
        <td>06:05</td>
    </tr>
    <tr>
        <td>06:08</td>
        <td>06:38</td>
    </tr>
    <tr>
        <td>06:43</td>
        <td>07:13</td>
    </tr>
    <tr>
        <td>07:18</td>
        <td>07:48</td>
    </tr>
    <tr>
        <td>07:53</td>
        <td>08:23</td>
    </tr>
    <tr>
        <td>08:28</td>
        <td>08:58</td>
    </tr>
    <tr>
        <td>09:08</td>
        <td>09:38</td>
    </tr>
    <tr>
        <td>09:43</td>
        <td>10:13</td>
    </tr>
    <tr>
        <td>11:03</td>
        <td>11:33</td>
    </tr>
    <tr>
        <td>11:38</td>
        <td>12:08</td>
    </tr>
    <tr>
        <td>12:13</td>
        <td>12:43</td>
    </tr>
    <tr>
        <td>12:48</td>
        <td>13:18</td>
    </tr>
    <tr>
        <td>13:23</td>
        <td>13:53</td>
    </tr>
    <tr>
        <td>14:03</td>
        <td>14:33</td>
    </tr>
    <tr>
        <td>14:38</td>
        <td>15:08</td>
    </tr>
    <tr>
        <td>15:13</td>
        <td>15:43</td>
    </tr>
    <tr>
        <td>15:48</td>
        <td>16:18</td>
    </tr>
    <tr>
        <td>16:23</td>
        <td>16:53</td>
    </tr>
    <tr>
        <td>17:03</td>
        <td>17:33</td>
    </tr>
    <tr>
        <td>17:48</td>
        <td>18:18</td>
    </tr>
    <tr>
        <td>18:58</td>
        <td>19:28</td>
    </tr>
    <tr>
        <td>19:33</td>
        <td>20:03</td>
    </tr>
    <tr>
        <td>20:08</td>
        <td>20:38</td>
    </tr>
    <tr>
        <td>20:43</td>
        <td>21:13</td>
    </tr>
    <tr>
        <td>21:18</td>
        <td>21:48</td>
    </tr>
    
    </table>`;
}

bus4Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Автобус №4';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'В напрямку РЗФ №1';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'В напрямку мкр-н 4й Зарічний (вул.Десантна)';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/bus4.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/207');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        мкр-н 4й Зарічний
        </th>
        <th>
        СШТ &quot;Електрозаводська&quot;
        </th>
        <th>
        Спорткомплекс
        </th>
        <th>
        вул. Самотічна
        </th>
        <th>
        Індустріальний технікум
        </th>
        <th>
        РЗФ-1
        </th>
        </tr>
        <tr>
        <td>05:58</td>
        <td>06:02</td>
        <td>06:22</td>
        <td>06:38</td>
        <td>07:04</td>
        <td>07:10</td>
        </tr>
        <tr>
        <td>06:23</td>
        <td>06:27</td>
        <td>06:47</td>
        <td>07:03</td>
        <td>07:29</td>
        <td>07:35</td>
        </tr>
        <tr>
        <td>07:29</td>
        <td>07:33</td>
        <td>07:53</td>
        <td>08:09</td>
        <td>08:35</td>
        <td>08:41</td>
        </tr>
        <tr>
        <td>08:48</td>
        <td>08:52</td>
        <td>09:12</td>
        <td>09:28</td>
        <td>09:54</td>
        <td>10:00</td>
        </tr>
        <tr>
        <td>09:23</td>
        <td>09:27</td>
        <td>09:47</td>
        <td>10:03</td>
        <td>10:29</td>
        <td>10:35</td>
        </tr>
        <tr>
        <td>10:42</td>
        <td>10:46</td>
        <td>11:06</td>
        <td>11:22</td>
        <td>11:48</td>
        <td>11:54</td>
        </tr>
        <tr>
        <td>12:05</td>
        <td>12:09</td>
        <td>12:29</td>
        <td>12:45</td>
        <td>13:11</td>
        <td>13:17</td>
        </tr>
        <tr>
        <td>12:55</td>
        <td>12:59</td>
        <td>13:19</td>
        <td>13:35</td>
        <td>14:01</td>
        <td>14:07</td>
        </tr>
        <tr>
        <td>13:24</td>
        <td>13:28</td>
        <td>13:48</td>
        <td>14:04</td>
        <td>14:30</td>
        <td>14:36</td>
        </tr>
        <tr>
        <td>14:56</td>
        <td>15:00</td>
        <td>15:20</td>
        <td>15:36</td>
        <td>16:02</td>
        <td>16:08</td>
        </tr>
        <tr>
        <td>15:41</td>
        <td>15:45</td>
        <td>16:05</td>
        <td>16:21</td>
        <td>16:47</td>
        <td>16:53</td>
        </tr>
        <tr>
        <td>17:50</td>
        <td>17:54</td>
        <td>18:14</td>
        <td>18:30</td>
        <td>18:56</td>
        <td>19:02</td>
        </tr>
        <tr>
        <td>18:40</td>
        <td>18:44</td>
        <td>19:04</td>
        <td>19:20</td>
        <td>19:46</td>
        <td>19:52</td>
        </tr>
        <tr>
        <td>21:01</td>
        <td>21:05</td>
        <td>21:23</td>
        <td>21:39</td>
        <td>22:05</td>
        <td>22:11</td>
        </tr>
    
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        РЗФ-1
        </th>
        <th>
        Індустріальний технікум
        </th>
        <th>
        вул. Самотічна
        </th>
        <th>
        Спорткомплекс
        </th>
        <th>
        СШТ &quot;Електрозаводська&quot;
        </th>
        <th>
        мкр-н 4й Зарічний
        </th>
        </tr>
        <tr>
        <td>07:18</td>
        <td>07:24</td>
        <td>07:49</td>
        <td>08:06</td>
        <td>08:27</td>
        <td>08:31</td>
        </tr>
        <tr>
        <td>07:45</td>
        <td>07:51</td>
        <td>08:16</td>
        <td>08:33</td>
        <td>08:54</td>
        <td>08:58</td>
        </tr>
        <tr>
        <td>08:59</td>
        <td>09:05</td>
        <td>09:30</td>
        <td>09:47</td>
        <td>10:08</td>
        <td>10:12</td>
        </tr>
        <tr>
        <td>10:40</td>
        <td>10:46</td>
        <td>11:11</td>
        <td>11:28</td>
        <td>11:49</td>
        <td>11:53</td>
        </tr>
        <tr>
        <td>11:34</td>
        <td>11:40</td>
        <td>12:05</td>
        <td>12:22</td>
        <td>12:43</td>
        <td>12:47</td>
        </tr>
        <tr>
        <td>12:00</td>
        <td>12:06</td>
        <td>12:31</td>
        <td>12:48</td>
        <td>13:09</td>
        <td>13:13</td>
        </tr>
        <tr>
        <td>13:32</td>
        <td>13:38</td>
        <td>14:03</td>
        <td>14:20</td>
        <td>14:44</td>
        <td>14:48</td>
        </tr>
        <tr>
        <td>14:17</td>
        <td>14:23</td>
        <td>14:48</td>
        <td>15:05</td>
        <td>15:29</td>
        <td>15:33</td>
        </tr>
        <tr>
        <td>14:46</td>
        <td>14:52</td>
        <td>15:17</td>
        <td>15:34</td>
        <td>15:55</td>
        <td>15:59</td>
        </tr>
        <tr>
        <td>16:18</td>
        <td>16:24</td>
        <td>16:49</td>
        <td>17:06</td>
        <td>17:27</td>
        <td>17:31</td>
        </tr>
        <tr>
        <td>17:08</td>
        <td>17:14</td>
        <td>17:39</td>
        <td>17:56</td>
        <td>18:17</td>
        <td>18:21</td>
        </tr>
        <tr>
        <td>19:45</td>
        <td>19:51</td>
        <td>20:16</td>
        <td>20:33</td>
        <td>20:54</td>
        <td>20:58</td>
        </tr>
        <tr>
        <td>20:35</td>
        <td>20:41</td>
        <td>21:06</td>
        <td>21:23</td>
        <td>21:44</td>
        <td>21:48</td>
        </tr>
        <tr>
        <td>22:19</td>
        <td>22:25</td>
        <td>22:50</td>
        <td>23:07</td>
        <td>23:28</td>
        <td>23:32</td>
        </tr>
    </table>`
}

bus8Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Автобус №8';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'ст. Кривий Ріг - Головний - Пл. Толстого';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'Пл. Толстого - ст. Кривий Ріг - Головний';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/bus8.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/213');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>Ст. Кривий Ріг - Головний</th>
        <th>Тролейбусне депо #2</th>
        <th>Пл. Горького(95)</th>
        <th>вул. Бикова</th>
        <th>173 кв.</th>
        <th>Торгівельний центр</th>
        <th>Спорткомплекс</th>
        <th>Пл. Толстого</th>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>04:43</td>
        <td>04:59</td>
        <td>05:10</td>
        <td>05:29</td>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:17</td>
        <td>05:33</td>
        <td>05:44</td>
        <td>06:03</td>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:41</td>
        <td>05:57</td>
        <td>06:08</td>
        <td>06:27</td>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>06:10</td>
        <td>06:26</td>
        <td>06:37</td>
        <td>06:56</td>
    </tr>
    <tr>
        <td>05:40</td>
        <td>05:56</td>
        <td>06:08</td>
        <td>06:14</td>
        <td>06:40</td>
        <td>06:56</td>
        <td>07:07</td>
        <td>07:26</td>
    </tr>
    <tr>
        <td>06:09</td>
        <td>06:25</td>
        <td>06:37</td>
        <td>06:43</td>
        <td>07:09</td>
        <td>07:25</td>
        <td>07:36</td>
        <td>07:55</td>
    </tr>
    <tr>
        <td>06:38</td>
        <td>06:54</td>
        <td>07:06</td>
        <td>07:12</td>
        <td>07:38</td>
        <td>07:54</td>
        <td>08:05</td>
        <td>08:24</td>
    </tr>
    <tr>
        <td>07:08</td>
        <td>07:24</td>
        <td>07:36</td>
        <td>07:42</td>
        <td>08:08</td>
        <td>08:24</td>
        <td>08:35</td>
        <td>08:54</td>
    </tr>
    <tr>
        <td>07:52</td>
        <td>08:08</td>
        <td>08:20</td>
        <td>08:26</td>
        <td>08:52</td>
        <td>09:08</td>
        <td>09:19</td>
        <td>09:38</td>
    </tr>
    <tr>
        <td>08:21</td>
        <td>08:37</td>
        <td>08:49</td>
        <td>08:55</td>
        <td>09:21</td>
        <td>09:37</td>
        <td>09:48</td>
        <td>10:07</td>
    </tr>
    <tr>
        <td>08:50</td>
        <td>09:06</td>
        <td>09:18</td>
        <td>09:24</td>
        <td>09:50</td>
        <td>10:06</td>
        <td>10:17</td>
        <td>10:36</td>
    </tr>
    <tr>
        <td>09:09</td>
        <td>09:25</td>
        <td>09:37</td>
        <td>09:43</td>
        <td>10:09</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    <tr>
        <td>10:19</td>
        <td>10:35</td>
        <td>10:47</td>
        <td>10:53</td>
        <td>11:19</td>
        <td>11:35</td>
        <td>11:46</td>
        <td>12:05</td>
    </tr>
    <tr>
        <td>10:48</td>
        <td>11:04</td>
        <td>11:16</td>
        <td>11:22</td>
        <td>11:48</td>
        <td>12:04</td>
        <td>12:15</td>
        <td>12:34</td>
    </tr>
    <tr>
        <td>11:17</td>
        <td>11:33</td>
        <td>11:45</td>
        <td>11:51</td>
        <td>12:17</td>
        <td>12:33</td>
        <td>12:44</td>
        <td>13:03</td>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>12:50</td>
        <td>13:06</td>
        <td>13:17</td>
        <td>13:36</td>
    </tr>
    <tr>
        <td>12:16</td>
        <td>12:32</td>
        <td>12:44</td>
        <td>12:50</td>
        <td>13:16</td>
        <td>13:32</td>
        <td>13:43</td>
        <td>14:02</td>
    </tr>
    <tr>
        <td>12:45</td>
        <td>13:01</td>
        <td>13:13</td>
        <td>13:19</td>
        <td>13:45</td>
        <td>14:04</td>
        <td>14:15</td>
        <td>14:34</td>
    </tr>
    <tr>
        <td>13:14</td>
        <td>13:30</td>
        <td>13:42</td>
        <td>13:48</td>
        <td>14:14</td>
        <td>14:33</td>
        <td>14:44</td>
        <td>15:03</td>
    </tr>
    <tr>
        <td>13:46</td>
        <td>14:02</td>
        <td>14:14</td>
        <td>14:20</td>
        <td>14:46</td>
        <td>15:02</td>
        <td>15:13</td>
        <td>15:32</td>
    </tr>
    <tr>
        <td>14:16</td>
        <td>14:32</td>
        <td>14:44</td>
        <td>14:50</td>
        <td>15:16</td>
        <td>15:32</td>
        <td>15:43</td>
        <td>16:02</td>
    </tr>
    <tr>
        <td>14:45</td>
        <td>15:01</td>
        <td>15:13</td>
        <td>15:19</td>
        <td>15:45</td>
        <td>16:01</td>
        <td>16:12</td>
        <td>16:31</td>
    </tr>
    <tr>
        <td>15:14</td>
        <td>15:30</td>
        <td>15:42</td>
        <td>15:48</td>
        <td>16:14</td>
        <td>16:30</td>
        <td>16:41</td>
        <td>17:00</td>
    </tr>
    <tr>
        <td>15:44</td>
        <td>16:00</td>
        <td>16:12</td>
        <td>16:18</td>
        <td>16:44</td>
        <td>17:00</td>
        <td>17:11</td>
        <td>17:30</td>
    </tr>
    <tr>
        <td>16:18</td>
        <td>16:34</td>
        <td>16:46</td>
        <td>16:52</td>
        <td>17:18</td>
        <td>17:34</td>
        <td>17:45</td>
        <td>18:04</td>
    </tr>
    <tr>
        <td>16:47</td>
        <td>17:03</td>
        <td>17:15</td>
        <td>17:21</td>
        <td>17:47</td>
        <td>18:03</td>
        <td>18:14</td>
        <td>18:33</td>
    </tr>
    <tr>
        <td>17:16</td>
        <td>17:32</td>
        <td>17:44</td>
        <td>17:50</td>
        <td>18:16</td>
        <td>18:32</td>
        <td>18:43</td>
        <td>19:02</td>
    </tr>
    <tr>
        <td>17:45</td>
        <td>18:01</td>
        <td>18:13</td>
        <td>18:19</td>
        <td>18:45</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    <tr>
        <td>18:55</td>
        <td>19:11</td>
        <td>19:23</td>
        <td>19:29</td>
        <td>19:55</td>
        <td>20:11</td>
        <td>20:22</td>
        <td>20:41</td>
    </tr>
    <tr>
        <td>19:24</td>
        <td>19:40</td>
        <td>19:52</td>
        <td>19:58</td>
        <td>20:24</td>
        <td>20:40</td>
        <td>20:51</td>
        <td>21:10</td>
    </tr>
    <tr>
        <td>20:08</td>
        <td>20:24</td>
        <td>20:36</td>
        <td>20:42</td>
        <td>21:08</td>
        <td>21:24</td>
        <td>21:35</td>
        <td>21:54</td>
    </tr>
    <tr>
        <td>20:52</td>
        <td>21:08</td>
        <td>21:20</td>
        <td>21:26</td>
        <td>21:52</td>
        <td>22:08</td>
        <td>22:19</td>
        <td>22:38</td>
    </tr>
    <tr>
        <td>21:21</td>
        <td>21:37</td>
        <td>21:49</td>
        <td>21:55</td>
        <td>22:21</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    <tr>
        <td>21:50</td>
        <td>22:06</td>
        <td>22:18</td>
        <td>22:24</td>
        <td>22:50</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>Пл. Толстого</th>
        <th>Спорткомплекс</th>
        <th>Торгівельний центр</th>
        <th>173 кв.</th>
        <th>вул. Бикова</th>
        <th>Пл. Горького(95)</th>
        <th>Тролейбусне депо #2</th>
        <th>Ст. Кривий Ріг - Головний</th>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>04:30</td>
        <td>04:56</td>
        <td>05:02</td>
        <td>05:14</td>
        <td>05:30</td>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>04:59</td>
        <td>05:25</td>
        <td>05:31</td>
        <td>05:43</td>
        <td>05:59</td>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:28</td>
        <td>05:54</td>
        <td>06:00</td>
        <td>06:12</td>
        <td>06:28</td>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:57</td>
        <td>06:24</td>
        <td>06:30</td>
        <td>06:42</td>
        <td>06:58</td>
    </tr>
    <tr>
        <td>05:34</td>
        <td>05:53</td>
        <td>06:05</td>
        <td>06:21</td>
        <td>06:48</td>
        <td>06:54</td>
        <td>07:06</td>
        <td>07:22</td>
    </tr>
    <tr>
        <td>06:13</td>
        <td>06:32</td>
        <td>06:44</td>
        <td>07:00</td>
        <td>07:27</td>
        <td>07:33</td>
        <td>07:45</td>
        <td>08:01</td>
    </tr>
    <tr>
        <td>06:37</td>
        <td>06:56</td>
        <td>07:08</td>
        <td>07:24</td>
        <td>07:51</td>
        <td>07:57</td>
        <td>08:09</td>
        <td>08:25</td>
    </tr>
    <tr>
        <td>07:06</td>
        <td>07:25</td>
        <td>07:37</td>
        <td>07:53</td>
        <td>08:20</td>
        <td>08:26</td>
        <td>08:38</td>
        <td>08:54</td>
    </tr>
    <tr>
        <td>07:51</td>
        <td>08:10</td>
        <td>08:22</td>
        <td>08:38</td>
        <td>09:05</td>
        <td>09:11</td>
        <td>09:23</td>
        <td>09:39</td>
    </tr>
    <tr>
        <td>08:25</td>
        <td>08:44</td>
        <td>08:56</td>
        <td>09:12</td>
        <td>09:39</td>
        <td>09:45</td>
        <td>09:57</td>
        <td>10:13</td>
    </tr>
    <tr>
        <td>08:49</td>
        <td>09:08</td>
        <td>09:20</td>
        <td>09:36</td>
        <td>10:03</td>
        <td>10:09</td>
        <td>10:21</td>
        <td>10:37</td>
    </tr>
    <tr>
        <td>09:09</td>
        <td>09:28</td>
        <td>09:40</td>
        <td>09:56</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    <tr>
        <td>10:18</td>
        <td>10:37</td>
        <td>10:49</td>
        <td>11:05</td>
        <td>11:32</td>
        <td>11:38</td>
        <td>11:50</td>
        <td>12:06</td>
    </tr>
    <tr>
        <td>10:47</td>
        <td>11:06</td>
        <td>11:18</td>
        <td>11:34</td>
        <td>12:01</td>
        <td>12:07</td>
        <td>12:19</td>
        <td>12:35</td>
    </tr>
    <tr>
        <td>11:16</td>
        <td>11:35</td>
        <td>11:47</td>
        <td>12:03</td>
        <td>12:30</td>
        <td>12:36</td>
        <td>12:48</td>
        <td>13:04</td>
    </tr>
    <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>12:35</td>
        <td>13:02</td>
        <td>13:08</td>
        <td>13:20</td>
        <td>13:36</td>
    </tr>
    <tr>
        <td>12:15</td>
        <td>12:34</td>
        <td>12:46</td>
        <td>13:05</td>
        <td>13:32</td>
        <td>13:38</td>
        <td>13:50</td>
        <td>14:06</td>
    </tr>
    <tr>
        <td>12:44</td>
        <td>13:03</td>
        <td>13:15</td>
        <td>13:34</td>
        <td>14:01</td>
        <td>14:07</td>
        <td>14:19</td>
        <td>14:35</td>
    </tr>
    <tr>
        <td>13:13</td>
        <td>13:32</td>
        <td>13:44</td>
        <td>14:03</td>
        <td>14:30</td>
        <td>14:36</td>
        <td>14:48</td>
        <td>15:04</td>
    </tr>
    <tr>
        <td>13:46</td>
        <td>14:05</td>
        <td>14:17</td>
        <td>14:33</td>
        <td>15:00</td>
        <td>15:06</td>
        <td>15:18</td>
        <td>15:34</td>
    </tr>
    <tr>
        <td>14:12</td>
        <td>14:31</td>
        <td>14:43</td>
        <td>15:02</td>
        <td>15:29</td>
        <td>15:35</td>
        <td>15:47</td>
        <td>16:03</td>
    </tr>
    <tr>
        <td>14:44</td>
        <td>15:03</td>
        <td>15:15</td>
        <td>15:31</td>
        <td>15:58</td>
        <td>16:04</td>
        <td>16:16</td>
        <td>16:32</td>
    </tr>
    <tr>
        <td>15:13</td>
        <td>15:32</td>
        <td>15:44</td>
        <td>16:00</td>
        <td>16:27</td>
        <td>16:33</td>
        <td>16:45</td>
        <td>17:01</td>
    </tr>
    <tr>
        <td>15:47</td>
        <td>16:06</td>
        <td>16:18</td>
        <td>16:34</td>
        <td>17:01</td>
        <td>17:07</td>
        <td>17:19</td>
        <td>17:35</td>
    </tr>
    <tr>
        <td>16:27</td>
        <td>16:46</td>
        <td>16:58</td>
        <td>17:14</td>
        <td>17:41</td>
        <td>17:47</td>
        <td>17:59</td>
        <td>18:15</td>
    </tr>
    <tr>
        <td>16:56</td>
        <td>17:15</td>
        <td>17:27</td>
        <td>17:43</td>
        <td>18:10</td>
        <td>18:16</td>
        <td>18:28</td>
        <td>18:44</td>
    </tr>
    <tr>
        <td>17:25</td>
        <td>17:44</td>
        <td>17:56</td>
        <td>18:12</td>
        <td>18:39</td>
        <td>18:45</td>
        <td>18:57</td>
        <td>19:13</td>
    </tr>
    <tr>
        <td>17:55</td>
        <td>18:14</td>
        <td>18:26</td>
        <td>18:42</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    <tr>
        <td>18:39</td>
        <td>18:58</td>
        <td>19:10</td>
        <td>19:26</td>
        <td>19:53</td>
        <td>19:59</td>
        <td>20:11</td>
        <td>20:27</td>
    </tr>
    <tr>
        <td>19:23</td>
        <td>19:42</td>
        <td>19:54</td>
        <td>20:10</td>
        <td>20:37</td>
        <td>20:43</td>
        <td>20:55</td>
        <td>21:11</td>
    </tr>
    <tr>
        <td>19:52</td>
        <td>20:11</td>
        <td>20:23</td>
        <td>20:39</td>
        <td>21:06</td>
        <td>21:12</td>
        <td>21:24</td>
        <td>21:40</td>
    </tr>
    <tr>
        <td>20:51</td>
        <td>21:10</td>
        <td>21:22</td>
        <td>21:38</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    <tr>
        <td>21:20</td>
        <td>21:39</td>
        <td>21:51</td>
        <td>22:07</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    <tr>
        <td>22:04</td>
        <td>22:23</td>
        <td>22:35</td>
        <td>22:51</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    <tr>
        <td>22:48</td>
        <td>23:07</td>
        <td>23:19</td>
        <td>23:35</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
    </tr>
    </table>`
}

bus228Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Автобус №228';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'пл. Визволення - зуп. "Рудозбагачувальна фабрика №1" (через мкр-н Даманський)';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'зуп. "Рудозбагачувальна фабрика №1" - пл. Визволення';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/bus228.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/173');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        Пл. Визволення
        </th>
        <th>
        Пл. Горького
        </th>
        <th>
        173 кв.
        </th>
        <th>
        Спорткомплекс
        </th>
        <th>
        8 міська лікарня
        </th>
        <th>
        вул. Доватора
        </th>
        <th>
        Р3Ф-1
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>04:35</td>
        <td>04:56</td>
        <td>05:14</td>
        <td>05:38</td>
        <td>05:46</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:22</td>
        <td>05:43</td>
        <td>06:01</td>
        <td>06:25</td>
        <td>06:33</td>
        </tr>
        <tr>
        <td>05:30</td>
        <td>05:42</td>
        <td>06:05</td>
        <td>06:25</td>
        <td>06:43</td>
        <td>07:07</td>
        <td>07:15</td>
        </tr>
        <tr>
        <td>07:06</td>
        <td>07:18</td>
        <td>07:42</td>
        <td>08:03</td>
        <td>08:21</td>
        <td>08:45</td>
        <td>08:53</td>
        </tr>
        <tr>
        <td>08:03</td>
        <td>08:15</td>
        <td>08:39</td>
        <td>09:00</td>
        <td>09:18</td>
        <td>09:42</td>
        <td>09:50</td>
        </tr>
        <tr>
        <td>09:05</td>
        <td>09:17</td>
        <td>09:41</td>
        <td>10:02</td>
        <td>10:20</td>
        <td>10:44</td>
        <td>10:52</td>
        </tr>
        <tr>
        <td>09:52</td>
        <td>10:04</td>
        <td>10:28</td>
        <td>10:49</td>
        <td>11:07</td>
        <td>11:31</td>
        <td>11:39</td>
        </tr>
        <tr>
        <td>11:45</td>
        <td>11:57</td>
        <td>12:21</td>
        <td>12:42</td>
        <td>13:00</td>
        <td>13:24</td>
        <td>13:32</td>
        </tr>
        <tr>
        <td>13:19</td>
        <td>13:31</td>
        <td>13:55</td>
        <td>14:19</td>
        <td>14:37</td>
        <td>15:01</td>
        <td>15:09</td>
        </tr>
        <tr>
        <td>14:06</td>
        <td>14:18</td>
        <td>14:42</td>
        <td>15:06</td>
        <td>15:24</td>
        <td>15:48</td>
        <td>15:56</td>
        </tr>
        <tr>
        <td>15:42</td>
        <td>15:54</td>
        <td>16:18</td>
        <td>16:39</td>
        <td>16:57</td>
        <td>17:21</td>
        <td>17:29</td>
        </tr>
        <tr>
        <td>16:34</td>
        <td>16:46</td>
        <td>17:10</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>17:21</td>
        <td>17:33</td>
        <td>17:57</td>
        <td>18:18</td>
        <td>18:36</td>
        <td>19:00</td>
        <td>19:08</td>
        </tr>
        <tr>
        <td>18:26</td>
        <td>18:38</td>
        <td>19:02</td>
        <td>19:23</td>
        <td>19:41</td>
        <td>20:05</td>
        <td>20:13</td>
        </tr>
        <tr>
        <td>20:09</td>
        <td>20:21</td>
        <td>20:41</td>
        <td>20:59</td>
        <td>21:17</td>
        <td>21:41</td>
        <td>21:49</td>
        </tr>
        <tr>
        <td>21:53</td>
        <td>22:05</td>
        <td>22:23</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        РЗФ-1
        </th>
        <th>
        Вул. Доватора
        </th>
        <th>
        8 міська лікарня
        </th>
        <th>
        Спорткомплекс
        </th>
        <th>
        173 кв.
        </th>
        <th>
        Пл. Горького
        </th>
        <th>
        Пл. Визволення
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>04:50</td>
        <td>05:08</td>
        <td>05:20</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>06:22</td>
        <td>06:46</td>
        <td>06:58</td>
        </tr>
        <tr>
        <td>05:58</td>
        <td>06:06</td>
        <td>06:30</td>
        <td>06:48</td>
        <td>07:09</td>
        <td>07:33</td>
        <td>07:45</td>
        </tr>
        <tr>
        <td>06:43</td>
        <td>06:51</td>
        <td>07:15</td>
        <td>07:33</td>
        <td>07:54</td>
        <td>08:18</td>
        <td>08:30</td>
        </tr>
        <tr>
        <td>07:30</td>
        <td>07:38</td>
        <td>08:02</td>
        <td>08:20</td>
        <td>08:41</td>
        <td>09:05</td>
        <td>09:17</td>
        </tr>
        <tr>
        <td>09:18</td>
        <td>09:26</td>
        <td>09:50</td>
        <td>10:08</td>
        <td>10:29</td>
        <td>10:53</td>
        <td>11:05</td>
        </tr>
        <tr>
        <td>09:55</td>
        <td>10:03</td>
        <td>10:27</td>
        <td>10:45</td>
        <td>11:06</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>11:22</td>
        <td>11:30</td>
        <td>11:54</td>
        <td>12:12</td>
        <td>12:33</td>
        <td>12:57</td>
        <td>13:09</td>
        </tr>
        <tr>
        <td>12:09</td>
        <td>12:17</td>
        <td>12:41</td>
        <td>12:59</td>
        <td>13:20</td>
        <td>13:44</td>
        <td>13:56</td>
        </tr>
        <tr>
        <td>13:42</td>
        <td>13:50</td>
        <td>14:14</td>
        <td>14:32</td>
        <td>14:56</td>
        <td>15:20</td>
        <td>15:32</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>15:48</td>
        <td>16:12</td>
        <td>16:24</td>
        </tr>
        <tr>
        <td>15:27</td>
        <td>15:35</td>
        <td>15:59</td>
        <td>16:17</td>
        <td>16:38</td>
        <td>17:02</td>
        <td>17:14</td>
        </tr>
        <tr>
        <td>16:06</td>
        <td>16:14</td>
        <td>16:38</td>
        <td>16:56</td>
        <td>17:17</td>
        <td>17:41</td>
        <td>17:53</td>
        </tr>
        <tr>
        <td>17:54</td>
        <td>18:02</td>
        <td>18:26</td>
        <td>18:44</td>
        <td>19:02</td>
        <td>19:22</td>
        <td>19:34</td>
        </tr>
        <tr>
        <td>18:31</td>
        <td>18:39</td>
        <td>19:03</td>
        <td>19:21</td>
        <td>19:39</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>20:05</td>
        <td>20:13</td>
        <td>20:35</td>
        <td>20:53</td>
        <td>21:11</td>
        <td>21:31</td>
        <td>21:43</td>
        </tr>
        <tr>
        <td>20:40</td>
        <td>20:48</td>
        <td>21:12</td>
        <td>21:30</td>
        <td>21:48</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>21:59</td>
        <td>22:07</td>
        <td>22:31</td>
        <td>22:49</td>
        <td>23:07</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`
}

bus228aBtn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Автобус №228A';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'пл. Визволення - зуп. РЗФ №1 (ч/з Юрія Смірнова)';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'зуп. РЗФ №1 - пл. Визволення';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/bus228a.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/203');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        Пл. Визволення
        </th>
        <th>
        Пл. Горького
        </th>
        <th>
        173 кв.
        </th>
        <th>
        Спорткомплекс
        </th>
        <th>
        8 міська лікарня
        </th>
        <th>
        Індустріальний технікум
        </th>
        <th>
        Р3Ф-1
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>04:59</td>
        <td>05:20</td>
        <td>05:38</td>
        <td>06:04</td>
        <td>06:10</td>
        </tr>
        <tr>
        <td>05:59</td>
        <td>06:10</td>
        <td>06:34</td>
        <td>06:55</td>
        <td>07:13</td>
        <td>07:39</td>
        <td>07:45</td>
        </tr>
        <tr>
        <td>06:32</td>
        <td>06:46</td>
        <td>07:10</td>
        <td>07:31</td>
        <td>07:49</td>
        <td>08:15</td>
        <td>08:21</td>
        </tr>
        <tr>
        <td>08:27</td>
        <td>08:39</td>
        <td>09:03</td>
        <td>09:24</td>
        <td>09:42</td>
        <td>10:08</td>
        <td>10:14</td>
        </tr>
        <tr>
        <td>10:15</td>
        <td>10:27</td>
        <td>10:51</td>
        <td>11:12</td>
        <td>11:30</td>
        <td>11:56</td>
        <td>12:02</td>
        </tr>
        <tr>
        <td>10:42</td>
        <td>10:54</td>
        <td>11:18</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>12:56</td>
        <td>13:08</td>
        <td>13:32</td>
        <td>13:56</td>
        <td>14:14</td>
        <td>14:40</td>
        <td>14:46</td>
        </tr>
        <tr>
        <td>14:32</td>
        <td>14:44</td>
        <td>15:08</td>
        <td>15:29</td>
        <td>15:47</td>
        <td>16:13</td>
        <td>16:19</td>
        </tr>
        <tr>
        <td>15:19</td>
        <td>15:31</td>
        <td>15:55</td>
        <td>16:16</td>
        <td>16:34</td>
        <td>17:00</td>
        <td>17:06</td>
        </tr>
        <tr>
        <td>16:58</td>
        <td>17:10</td>
        <td>17:34</td>
        <td>17:55</td>
        <td>18:13</td>
        <td>18:39</td>
        <td>18:45</td>
        </tr>
        <tr>
        <td>19:10</td>
        <td>19:22</td>
        <td>19:42</td>
        <td>20:00</td>
        <td>20:18</td>
        <td>20:44</td>
        <td>20:50</td>
        </tr>
        <tr>
        <td>19:24</td>
        <td>19:36</td>
        <td>19:56</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>22:03</td>
        <td>22:15</td>
        <td>22:33</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        РЗФ-1
        </th>
        <th>
        Індустріальний технікум
        </th>
        <th>
        8 міська лікарня
        </th>
        <th>
        Спорткомплекс
        </th>
        <th>
        173 кв.
        </th>
        <th>
        Пл. Горького
        </th>
        <th>
        Пл. Визволення
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:18</td>
        <td>05:36</td>
        <td>05:48</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:50</td>
        <td>06:14</td>
        <td>06:26</td>
        </tr>
        <tr>
        <td>06:20</td>
        <td>06:26</td>
        <td>06:52</td>
        <td>07:10</td>
        <td>07:31</td>
        <td>07:55</td>
        <td>08:07</td>
        </tr>
        <tr>
        <td>07:53</td>
        <td>07:59</td>
        <td>08:25</td>
        <td>08:43</td>
        <td>09:04</td>
        <td>09:28</td>
        <td>09:40</td>
        </tr>
        <tr>
        <td>08:45</td>
        <td>08:51</td>
        <td>09:17</td>
        <td>09:35</td>
        <td>09:56</td>
        <td>10:20</td>
        <td>10:32</td>
        </tr>
        <tr>
        <td>10:59</td>
        <td>11:05</td>
        <td>11:31</td>
        <td>11:49</td>
        <td>12:10</td>
        <td>12:34</td>
        <td>12:46</td>
        </tr>
        <tr>
        <td>12:32</td>
        <td>12:38</td>
        <td>13:04</td>
        <td>13:22</td>
        <td>13:46</td>
        <td>14:10</td>
        <td>14:22</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>14:33</td>
        <td>14:57</td>
        <td>15:09</td>
        </tr>
        <tr>
        <td>14:56</td>
        <td>15:02</td>
        <td>15:28</td>
        <td>15:46</td>
        <td>16:07</td>
        <td>16:31</td>
        <td>16:43</td>
        </tr>
        <tr>
        <td>16:44</td>
        <td>16:50</td>
        <td>17:16</td>
        <td>17:34</td>
        <td>17:55</td>
        <td>18:19</td>
        <td>18:31</td>
        </tr>
        <tr>
        <td>17:27</td>
        <td>17:33</td>
        <td>17:59</td>
        <td>18:17</td>
        <td>18:38</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>19:35</td>
        <td>19:41</td>
        <td>20:07</td>
        <td>20:25</td>
        <td>20:43</td>
        <td>21:03</td>
        <td>21:15</td>
        </tr>
        <tr>
        <td>21:08</td>
        <td>21:14</td>
        <td>21:40</td>
        <td>21:58</td>
        <td>22:16</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`
}

bus244Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Автобус №244';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = '«пр. Південний – вул. Альохіна» ( ч/з сел.Руднічне, Рахманівка, Степове)';

    tableSecond.style = 'display: none';
    secondTableStations.style = 'display: none';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/bus244.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/127');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        пр. Південний
        </th>
        <th>
        с. Руднічне
        </th>
        <th>
        с. Степове
        </th>
        <th>
        пр. Південний
        </th>
        </tr>
        <tr>
        <td>07:00</td>
        <td>07:40/45</td>
        <td>08:20/25</td>
        <td>09:05</td>
        </tr>
        <tr>
        <td>09:15</td>
        <td>09:55/10:00</td>
        <td>10:35/50</td>
        <td>15:55</td>
        </tr>
        <tr>
        <td>13:35</td>
        <td>14:20/25</td>
        <td>15:05/10</td>
        <td>15:40</td>
        </tr>
        <tr>
        <td>14:45</td>
        <td>15:25/30</td>
        <td>16:05/10</td>
        <td>16:50</td>
        </tr>
        <tr>
        <td>19:25</td>
        <td>20:05/10</td>
        <td>20:45/50</td>
        <td>21:30</td>
        </tr>
    </table>`;
}

bus302Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Автобус №302';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'Пл.Визволення – АС “Інгулець”';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'АС “Інгулець” – Пл.Визволення';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/bus302.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/102');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        пл. Визволення
        </th>
        <th>
        95 кв
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        АС “Інгулець”
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>05:02</td>
        <td>05:26</td>
        <td>06:16</td>
        </tr>
        <tr>
        <td>05:21</td>
        <td>05:33</td>
        <td>05:57</td>
        <td>06:47</td>
        </tr>
        <tr>
        <td>05:53</td>
        <td>06:05</td>
        <td>06:29</td>
        <td>07:19</td>
        </tr>
        <tr>
        <td>06:58</td>
        <td>07:10</td>
        <td>07:34</td>
        <td>08:24</td>
        </tr>
        <tr>
        <td>08:08</td>
        <td>08:20</td>
        <td>08:44</td>
        <td>09:34</td>
        </tr>
        <tr>
        <td>08:41</td>
        <td>08:53</td>
        <td>09:17</td>
        <td>10:07</td>
        </tr>
        <tr>
        <td>09:13</td>
        <td>09:25</td>
        <td>09:49</td>
        <td>10:39</td>
        </tr>
        <tr>
        <td>10:18</td>
        <td>10:30</td>
        <td>10:54</td>
        <td>11:44</td>
        </tr>
        <tr>
        <td>11:43</td>
        <td>11:55</td>
        <td>12:19</td>
        <td>13:09</td>
        </tr>
        <tr>
        <td>12:16</td>
        <td>12:28</td>
        <td>12:52</td>
        <td>13:42</td>
        </tr>
        <tr>
        <td>12:51</td>
        <td>13:03</td>
        <td>13:27</td>
        <td>14:17</td>
        </tr>
        <tr>
        <td>13:56</td>
        <td>14:08</td>
        <td>14:32</td>
        <td>15:22</td>
        </tr>
        <tr>
        <td>15:01</td>
        <td>15:13</td>
        <td>15:37</td>
        <td>16:27</td>
        </tr>
        <tr>
        <td>15:34</td>
        <td>15:46</td>
        <td>16:10</td>
        <td>17:00</td>
        </tr>
        <tr>
        <td>16:03</td>
        <td>16:13</td>
        <td>16:39</td>
        <td>17:29</td>
        </tr>
        <tr>
        <td>17:07</td>
        <td>17:19</td>
        <td>17:43</td>
        <td>18:30</td>
        </tr>
        <tr>
        <td>18:21</td>
        <td>18:33</td>
        <td>18:57</td>
        <td>19:47</td>
        </tr>
        <tr>
        <td>18:54</td>
        <td>19:06</td>
        <td>19:30</td>
        <td>20:20</td>
        </tr>
        <tr>
        <td>19:26</td>
        <td>19:38</td>
        <td>20:02</td>
        <td>20:52</td>
        </tr>
        <tr>
        <td>20:27</td>
        <td>20:39</td>
        <td>21:03</td>
        <td>21:50</td>
        </tr>
        <tr>
        <td>22:15</td>
        <td>22:27</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>22:29</td>
        <td>22:41</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        АС “Інгулець”
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        95 кв
        </th>
        <th>
        пл. Визволення
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>04:59</td>
        <td>05:11</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:31</td>
        <td>05:43</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>06:36</td>
        <td>06:48</td>
        </tr>
        <tr>
        <td>06:29</td>
        <td>07:19</td>
        <td>07:41</td>
        <td>07:53</td>
        </tr>
        <tr>
        <td>07:02</td>
        <td>07:52</td>
        <td>08:14</td>
        <td>08:26</td>
        </tr>
        <tr>
        <td>07:34</td>
        <td>08:24</td>
        <td>08:46</td>
        <td>08:58</td>
        </tr>
        <tr>
        <td>08:39</td>
        <td>09:29</td>
        <td>09:51</td>
        <td>10:03</td>
        </tr>
        <tr>
        <td>10:09</td>
        <td>10:59</td>
        <td>11:21</td>
        <td>11:33</td>
        </tr>
        <tr>
        <td>10:42</td>
        <td>11:32</td>
        <td>11:54</td>
        <td>12:06</td>
        </tr>
        <tr>
        <td>11:14</td>
        <td>12:04</td>
        <td>12:26</td>
        <td>12:38</td>
        </tr>
        <tr>
        <td>12:19</td>
        <td>13:09</td>
        <td>13:31</td>
        <td>13:43</td>
        </tr>
        <tr>
        <td>13:24</td>
        <td>14:14</td>
        <td>14:36</td>
        <td>14:48</td>
        </tr>
        <tr>
        <td>13:57</td>
        <td>14:47</td>
        <td>15:09</td>
        <td>15:21</td>
        </tr>
        <tr>
        <td>14:29</td>
        <td>15:19</td>
        <td>15:41</td>
        <td>15:53</td>
        </tr>
        <tr>
        <td>15:37</td>
        <td>16:25</td>
        <td>16:47</td>
        <td>16:59</td>
        </tr>
        <tr>
        <td>16:42</td>
        <td>17:32</td>
        <td>17:54</td>
        <td>18:06</td>
        </tr>
        <tr>
        <td>17:15</td>
        <td>18:05</td>
        <td>18:27</td>
        <td>18:39</td>
        </tr>
        <tr>
        <td>17:47</td>
        <td>18:37</td>
        <td>18:59</td>
        <td>19:11</td>
        </tr>
        <tr>
        <td>18:40</td>
        <td>19:30</td>
        <td>19:52</td>
        <td>20:04</td>
        </tr>
        <tr>
        <td>19:00</td>
        <td>19:47</td>
        <td>20:09</td>
        <td>20:21</td>
        </tr>
        <tr>
        <td>20:22</td>
        <td>21:12</td>
        <td>21:34</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>20:55</td>
        <td>21:45</td>
        <td>22:07</td>
        <td>22:19</td>
        </tr>
        <tr>
        <td>21:27</td>
        <td>22:17</td>
        <td>22:39</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>21:55</td>
        <td>22:42</td>
        <td>23:04</td>
        <td>--:--</td>
        </tr>
    </table>`
}


//MINIBUS SECTION

navMiniBusBtn.onclick = () =>{
    miniBusChosen();
}

minibusChooseBtn.onclick = () =>{
    miniBusChosen();
}

minibus479Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Маршрутка №479';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'Інгулець - Південний ГЗК - Інгулець';

    tableSecond.style = 'display: none';
    secondTableStations.style = 'display: none';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/minibus479.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/190');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        Інгулець (відправлення)
        </th>
        <th>
        Південний ГЗК (відправлення)
        </th>
        </tr>
        <tr>
        <td>05:55</td>
        <td>06:20</td>
        </tr>
        <tr>
        <td>06:20</td>
        <td>06:30</td>
        </tr>
        <tr>
        <td>06:45</td>
        <td>06:50</td>
        </tr>
        <tr>
        <td>07:05</td>
        <td>07:10</td>
        </tr>
        <tr>
        <td>07:25</td>
        <td>07:30</td>
        </tr>
        <tr>
        <td>07:45</td>
        <td>07:50</td>
        </tr>
        <tr>
        <td>08:05</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>08:25</td>
        <td>08:10</td>
        </tr>
        <tr>
        <td>08:45</td>
        <td>08:30</td>
        </tr>
        <tr>
        <td>09:05</td>
        <td>08:50</td>
        </tr>
        <tr>
        <td>09:25</td>
        <td>09:10</td>
        </tr>
        <tr>
        <td>09:45</td>
        <td>09:30</td>
        </tr>
        <tr>
        <td>10:10</td>
        <td>09:50</td>
        </tr>
        <tr>
        <td>10:35</td>
        <td>10:10</td>
        </tr>
        <tr>
        <td>11:00</td>
        <td>10:35</td>
        </tr>
        <tr>
        <td>11:25</td>
        <td>11:00</td>
        </tr>
        <tr>
        <td>11:50</td>
        <td>11:25</td>
        </tr>
        <tr>
        <td>12:15</td>
        <td>11:50</td>
        </tr>
        <tr>
        <td>12:40</td>
        <td>12:15</td>
        </tr>
        <tr>
        <td>13:05</td>
        <td>12:40</td>
        </tr>
        <tr>
        <td>13:30</td>
        <td>13:05</td>
        </tr>
        <tr>
        <td>13:55</td>
        <td>13:30</td>
        </tr>
        <tr>
        <td>14:20</td>
        <td>13:55</td>
        </tr>
        <tr>
        <td>14:45</td>
        <td>14:20</td>
        </tr>
        <tr>
        <td>15:10</td>
        <td>14:45</td>
        </tr>
        <tr>
        <td>15:35</td>
        <td>15:10</td>
        </tr>
        <tr>
        <td>16:00</td>
        <td>15:35</td>
        </tr>
        <tr>
        <td>16:30</td>
        <td>16:00</td>
        </tr>
        <tr>
        <td>17:00</td>
        <td>16:30</td>
        </tr>
        <tr>
        <td>17:30</td>
        <td>17:00</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>17:30</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>18:00</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>18:30</td>
        </tr>
    </table>`;
}


//TRAM SECTION

navTramBtn.onclick = () =>{
    tramChosen();
}

tramChooseBtn.onclick = () =>{
    tramChosen();
}

tram1Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №1';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Українська – зуп. «Пивзавод»';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'зуп. «Пивзавод» - вул. Українська';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram1.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/1');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        вул. Українська
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        Пивзавод
        </th>
        </tr>
        <tr>
        <td>06:06</td>
        <td>06:15</td>
        <td>06:23</td>
        </tr>
        <tr>
        <td>06:48</td>
        <td>06:57</td>
        <td>07:05</td>
        </tr>
        <tr>
        <td>07:31</td>
        <td>07:40</td>
        <td>07:48</td>
        </tr>
        <tr>
        <td>08:13</td>
        <td>08:21</td>
        <td>08:30</td>
        </tr>
        <tr>
        <td>08:55</td>
        <td>09:04</td>
        <td>09:12</td>
        </tr>
        <tr>
        <td>15:59</td>
        <td>16:08</td>
        <td>16:16</td>
        </tr>
        <tr>
        <td>16:43</td>
        <td>16:52</td>
        <td>17:00</td>
        </tr>
        <tr>
        <td>17:25</td>
        <td>17:34</td>
        <td>17:42</td>
        </tr>
        <tr>
        <td>18:09</td>
        <td>18:18</td>
        <td>18:26</td>
        </tr>
        <tr>
        <td>18:50</td>
        <td>18:59</td>
        <td>19:07</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        Пивзавод
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        вул. Українська
        </th>
        </tr>
    <tr>
        <td>06:27</td>
        <td>06:35</td>
        <td>06:44</td>
    </tr>
    <tr>
        <td>07:09</td>
        <td>07:17</td>
        <td>07:26</td>
    </tr>
    <tr>
        <td>07:52</td>
        <td>08:00</td>
        <td>08:08</td>
    </tr>
    <tr>
        <td>08:35</td>
        <td>08:43</td>
        <td>08:52</td>
    </tr>
    <tr>
        <td>09:15</td>
        <td>09:23</td>
        <td>09:32</td>
    </tr>
    <tr>
        <td>16:21</td>
        <td>16:29</td>
        <td>16:38</td>
    </tr>
    <tr>
        <td>17:03</td>
        <td>17:11</td>
        <td>17:20</td>
    </tr>
    <tr>
        <td>17:47</td>
        <td>17:55</td>
        <td>18:04</td>
    </tr>
    <tr>
        <td>18:30</td>
        <td>18:38</td>
        <td>18:47</td>
    </tr>
    <tr>
        <td>19:10</td>
        <td>19:18</td>
        <td>19:27</td>
    </tr>
    </table>`
}

tram2Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №2';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'пл. Домобудівників – вул. Буковинська';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'вул. Буковинська – пл. Домобудівників';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram2.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/2');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        Пл. Домнобудівників
        </th>
        <th>
        Вул. Соборності
        </th>
        <th>
        Вул. Вітчизни
        </th>
        <th>
        Трампарк
        </th>
        <th>
        Вул. Українська
        </th>
        <th>
        Вул.Ньютона
        </th>
        <th>
        Вул. Буковинська
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 04:32</td>
        <td>04:33</td>
        <td>04:47</td>
        <td>04:54</td>
        <td>05:03</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 04:54</td>
        <td>04:55</td>
        <td>05:09</td>
        <td>05:17</td>
        <td>05:26</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 05:09</td>
        <td>05:10</td>
        <td>05:25</td>
        <td>05:33</td>
        <td>05:42</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 05:15</td>
        <td>05:16</td>
        <td>05:31</td>
        <td>05:40</td>
        <td>05:48</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 05:37</td>
        <td>05:38</td>
        <td>05:52</td>
        <td>06:00</td>
        <td>06:09</td>
        </tr>
        <tr>
        <td>05:35</td>
        <td>05:48</td>
        <td>05:55</td>
        <td>06:03</td>
        <td>06:17</td>
        <td>06:24</td>
        <td>06:33</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 06:15</td>
        <td>06:16</td>
        <td>06:31</td>
        <td>06:39</td>
        <td>06:48</td>
        </tr>
        <tr>
        <td>06:10</td>
        <td>06:23</td>
        <td>06:30</td>
        <td>06:38</td>
        <td>06:52</td>
        <td>07:00</td>
        <td>07:09</td>
        </tr>
        <tr>
        <td>06:19</td>
        <td>06:32</td>
        <td>06:39</td>
        <td>06:47</td>
        <td>07:02</td>
        <td>07:10</td>
        <td>07:19</td>
        </tr>
        <tr>
        <td>06:37</td>
        <td>06:50</td>
        <td>06:58</td>
        <td>07:06</td>
        <td>07:20</td>
        <td>07:28</td>
        <td>07:37</td>
        </tr>
        <tr>
        <td>06:52</td>
        <td>07:05</td>
        <td>07:12</td>
        <td>07:20</td>
        <td>07:35</td>
        <td>07:42</td>
        <td>07:51</td>
        </tr>
        <tr>
        <td>07:05</td>
        <td>07:18</td>
        <td>07:26</td>
        <td>07:34</td>
        <td>07:49</td>
        <td>07:57</td>
        <td>08:06</td>
        </tr>
        <tr>
        <td>07:19</td>
        <td>07:32</td>
        <td>07:39</td>
        <td>07:47</td>
        <td>08:02</td>
        <td>8:10</td>
        <td>08:19</td>
        </tr>
        <tr>
        <td>07:41</td>
        <td>07:54</td>
        <td>08:01</td>
        <td>08:09</td>
        <td>08:24</td>
        <td>08:32</td>
        <td>08:41</td>
        </tr>
        <tr>
        <td>07:58</td>
        <td>08:11</td>
        <td>08:17</td>
        <td>08:25</td>
        <td>08:39</td>
        <td>08:46</td>
        <td>08:55</td>
        </tr>
        <tr>
        <td>08:10</td>
        <td>08:23</td>
        <td>08:30</td>
        <td>08:39</td>
        <td>08:54</td>
        <td>09:03</td>
        <td>09:11</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 07:39</td>
        <td>07:40</td>
        <td>07:55</td>
        <td>08:04</td>
        <td>08:13</td>
        </tr>
        <tr>
        <td>08:18</td>
        <td>08:31</td>
        <td>08:38</td>
        <td>08:46 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>08:28</td>
        <td>08:41</td>
        <td>08:48</td>
        <td>08:56</td>
        <td>09:11</td>
        <td>09:20</td>
        <td>09:29</td>
        </tr>
        <tr>
        <td>08:44</td>
        <td>08:57</td>
        <td>09:04</td>
        <td>09:12</td>
        <td>09:27</td>
        <td>09:35</td>
        <td>09:44</td>
        </tr>
        <tr>
        <td>08:59</td>
        <td>09:12</td>
        <td>09:19</td>
        <td>09:27</td>
        <td>9:42</td>
        <td>9:51</td>
        <td>9:59</td>
        </tr>
        <tr>
        <td>09:13</td>
        <td>09:26</td>
        <td>09:33</td>
        <td>09:41</td>
        <td>09:55</td>
        <td>10:02</td>
        <td>10:11</td>
        </tr>
        <tr>
        <td>09:30</td>
        <td>09:43</td>
        <td>09:50</td>
        <td>09:59</td>
        <td>10:14</td>
        <td>10:23</td>
        <td>10:32</td>
        </tr>
        <tr>
        <td>09:27</td>
        <td>09:40</td>
        <td>09:47</td>
        <td>09:55 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>09:48</td>
        <td>10:01</td>
        <td>10:08</td>
        <td>10:16</td>
        <td>10:30</td>
        <td>10:39</td>
        <td>10:48</td>
        </tr>
        <tr>
        <td>10:01</td>
        <td>10:14</td>
        <td>10:21</td>
        <td>10:29</td>
        <td>10:44</td>
        <td>10:52</td>
        <td>11:01</td>
        </tr>
        <tr>
        <td>10:18</td>
        <td>10:31</td>
        <td>10:38</td>
        <td>10:47</td>
        <td>11:02</td>
        <td>11:11</td>
        <td>11:20</td>
        </tr>
        <tr>
        <td>10:30 вул: Героїв АТО</td>
        <td>10:37</td>
        <td>10:44</td>
        <td>10:52</td>
        <td>11:07</td>
        <td>11:15</td>
        <td>11:24</td>
        </tr>
        <tr>
        <td>10:53</td>
        <td>11:06</td>
        <td>11:13</td>
        <td>11:21</td>
        <td>1:35</td>
        <td>11:43</td>
        <td>11:52</td>
        </tr>
        <tr>
        <td>11:18</td>
        <td>11:31</td>
        <td>11:37</td>
        <td>11:45</td>
        <td>12:00</td>
        <td>12:08</td>
        <td>12:17</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>12:07</td>
        <td>12:22</td>
        <td>12:31</td>
        <td>12:39</td>
        </tr>
        <tr>
        <td>11:56</td>
        <td>12:09</td>
        <td>12:16</td>
        <td>12:24</td>
        <td>12:38</td>
        <td>12:47</td>
        <td>12:56</td>
        </tr>
        <tr>
        <td>12:09</td>
        <td>12:22</td>
        <td>12:29</td>
        <td>12:37</td>
        <td>12:52</td>
        <td>13:01</td>
        <td>13:10</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>12:56</td>
        <td>13:11</td>
        <td>13:20</td>
        <td>13:29</td>
        </tr>
        <tr>
        <td>12:37</td>
        <td>12:51</td>
        <td>12:59</td>
        <td>13:08</td>
        <td>13:23</td>
        <td>13:32</td>
        <td>13:41</td>
        </tr>
        <tr>
        <td>12:59</td>
        <td>13:12</td>
        <td>13:19</td>
        <td>13:29</td>
        <td>13:44</td>
        <td>13:51</td>
        <td>14:00</td>
        </tr>
        <tr>
        <td>13:25</td>
        <td>13:38</td>
        <td>13:45</td>
        <td>13:53</td>
        <td>14:08</td>
        <td>14:16</td>
        <td>14:25</td>
        </tr>
        <tr>
        <td>13:47</td>
        <td>14:00</td>
        <td>14:07</td>
        <td>14:15</td>
        <td>14:30</td>
        <td>14:39</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>14:05</td>
        <td>14:18</td>
        <td>14:25</td>
        <td>14:33</td>
        <td>14:47</td>
        <td>14:55</td>
        <td>15:04</td>
        </tr>
        <tr>
        <td>14:22</td>
        <td>14:35</td>
        <td>14:42</td>
        <td>14:50 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>14:36</td>
        <td>14:49</td>
        <td>14:56</td>
        <td>15:04</td>
        <td>15:19</td>
        <td>15:28</td>
        <td>15:37</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 15:05</td>
        <td>15:06</td>
        <td>15:21</td>
        <td>15:30</td>
        <td>15:39</td>
        </tr>
        <tr>
        <td>14:53</td>
        <td>15:06</td>
        <td>15:13</td>
        <td>15:21</td>
        <td>15:36</td>
        <td>15:44</td>
        <td>15:53</td>
        </tr>
        <tr>
        <td>15:08</td>
        <td>15:21</td>
        <td>15:28</td>
        <td>15:36</td>
        <td>15:51</td>
        <td>15:59</td>
        <td>16:08</td>
        </tr>
        <tr>
        <td>15:15</td>
        <td>15:28</td>
        <td>15:35</td>
        <td>15:43</td>
        <td>15:58</td>
        <td>16:06</td>
        <td>16:15</td>
        </tr>
        <tr>
        <td>15:31</td>
        <td>15:44</td>
        <td>15:52</td>
        <td>16:00</td>
        <td>16:14</td>
        <td>16:21</td>
        <td>16:29</td>
        </tr>
        <tr>
        <td>15:45</td>
        <td>15:58</td>
        <td>16:05</td>
        <td>16:13 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>15:51</td>
        <td>16:04</td>
        <td>16:11</td>
        <td>16:19</td>
        <td>16:34</td>
        <td>16:41</td>
        <td>16:50</td>
        </tr>
        <tr>
        <td>16:13</td>
        <td>16:26</td>
        <td>16:33</td>
        <td>16:41</td>
        <td>16:55</td>
        <td>17:03</td>
        <td>17:12</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>16:48 АМКР</td>
        <td>16:50</td>
        <td>16:58</td>
        <td>17:12</td>
        <td>17:20</td>
        <td>17:29</td>
        </tr>
        <tr>
        <td>16:49</td>
        <td>17:02</td>
        <td>17:10</td>
        <td>17:18</td>
        <td>17:33</td>
        <td>17:40</td>
        <td>17:49</td>
        </tr>
        <tr>
        <td>17:03</td>
        <td>17:16</td>
        <td>17:23</td>
        <td>17:31</td>
        <td>17:45</td>
        <td>17:52</td>
        <td>18:01</td>
        </tr>
        <tr>
        <td>17:15</td>
        <td>17:28</td>
        <td>17:35</td>
        <td>17:43</td>
        <td>7:58</td>
        <td>18:06</td>
        <td>18:15</td>
        </tr>
        <tr>
        <td>17:25</td>
        <td>17:38</td>
        <td>17:45</td>
        <td>17:53 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>17:37</td>
        <td>17:50</td>
        <td>17:57</td>
        <td>18:05</td>
        <td>18:19</td>
        <td>18:26</td>
        <td>18:35</td>
        </tr>
        <tr>
        <td>17:57</td>
        <td>18:10</td>
        <td>18:17</td>
        <td>18:25</td>
        <td>18:40</td>
        <td>18:48</td>
        <td>18:57</td>
        </tr>
        <tr>
        <td>18:20</td>
        <td>18:33</td>
        <td>18:40</td>
        <td>18:48</td>
        <td>19:03</td>
        <td>19:11</td>
        <td>19:20</td>
        </tr>
        <tr>
        <td>18:36</td>
        <td>18:49</td>
        <td>18:55</td>
        <td>19:03</td>
        <td>19:17</td>
        <td>19:25</td>
        <td>19:34</td>
        </tr>
        <tr>
        <td>19:07</td>
        <td>19:20</td>
        <td>19:27</td>
        <td>19:35</td>
        <td>19:49</td>
        <td>19:56</td>
        <td>20:05</td>
        </tr>
        <tr>
        <td>19:25</td>
        <td>19:38</td>
        <td>19:45</td>
        <td>19:53</td>
        <td>20:07</td>
        <td>20:15</td>
        <td>20:24</td>
        </tr>
        <tr>
        <td>19:42</td>
        <td>19:55</td>
        <td>20:02</td>
        <td>20:10</td>
        <td>20:25</td>
        <td>20:33</td>
        <td>20:42</td>
        </tr>
        <tr>
        <td>20:28</td>
        <td>20:41</td>
        <td>20:48</td>
        <td>20:56 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>20:41</td>
        <td>20:54</td>
        <td>21:01</td>
        <td>21:09</td>
        <td>21:24</td>
        <td>21:32</td>
        <td>21:42</td>
        </tr>
        <tr>
        <td>21:11</td>
        <td>21:24</td>
        <td>21:30</td>
        <td>21:38</td>
        <td>21:52</td>
        <td>21:59</td>
        <td>22:08</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        Вул. Буковинська
        </th>
        <th>
        Вул. Ньютона
        </th>
        <th>
        Вул. Українська
        </th>
        <th>
        Трампарк
        </th>
        <th>
        Вул. Вітчизни
        </th>
        <th>
        Вул. Соборності
        </th>
        <th>
        Пл. Домнобудівників
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 05:01</td>
        <td>05:02</td>
        <td>05:12</td>
        <td>05:19</td>
        <td>05:32</td>
        </tr>
        <tr>
        <td>05:06</td>
        <td>05:15</td>
        <td>05:24</td>
        <td>05:38</td>
        <td>05:47</td>
        <td>05:54</td>
        <td>06:07</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 05:45</td>
        <td>05:46</td>
        <td>05:55</td>
        <td>06:02</td>
        <td>06:15</td>
        </tr>
        <tr>
        <td>05:30</td>
        <td>05:39</td>
        <td>05:50</td>
        <td>06:04</td>
        <td>06:14</td>
        <td>06:21</td>
        <td>06:34</td>
        </tr>
        <tr>
        <td>05:45</td>
        <td>05:54</td>
        <td>06:04</td>
        <td>06:19</td>
        <td>06:29</td>
        <td>06:36</td>
        <td>06:49</td>
        </tr>
        <tr>
        <td>05:52</td>
        <td>06:01</td>
        <td>06:12</td>
        <td>06:26</td>
        <td>06:36</td>
        <td>06:44</td>
        <td>06:57</td>
        </tr>
        <tr>
        <td>06:12</td>
        <td>06:21</td>
        <td>06:31</td>
        <td>06:45</td>
        <td>06:55</td>
        <td>07:02</td>
        <td>07:15</td>
        </tr>
        <tr>
        <td>06:36</td>
        <td>06:45</td>
        <td>06:54</td>
        <td>07:08</td>
        <td>07:18</td>
        <td>07:25</td>
        <td>07:38</td>
        </tr>
        <tr>
        <td>06:51</td>
        <td>07:00</td>
        <td>07:11</td>
        <td>07:25</td>
        <td>07:33</td>
        <td>07:40</td>
        <td>07:53</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 07:35</td>
        <td>07:36</td>
        <td>07:46</td>
        <td>07:53</td>
        <td>08:06</td>
        </tr>
        <tr>
        <td>07:12</td>
        <td>07:21</td>
        <td>07:30</td>
        <td>07:44</td>
        <td>07:54</td>
        <td>08:01</td>
        <td>08:14</td>
        </tr>
        <tr>
        <td>07:23</td>
        <td>07:32</td>
        <td>07:41</td>
        <td>07:55</td>
        <td>08:05</td>
        <td>08:12</td>
        <td>08:25</td>
        </tr>
        <tr>
        <td>07:40</td>
        <td>07:49</td>
        <td>07:58</td>
        <td>08:12</td>
        <td>08:21</td>
        <td>08:28</td>
        <td>08:41</td>
        </tr>
        <tr>
        <td>07:54</td>
        <td>08:03</td>
        <td>08:12</td>
        <td>08:26</td>
        <td>08:36</td>
        <td>08:43</td>
        <td>08:56</td>
        </tr>
        <tr>
        <td>10:02</td>
        <td>10:11</td>
        <td>10:19</td>
        <td>10:34 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>08:09</td>
        <td>08:17</td>
        <td>08:26</td>
        <td>08:40</td>
        <td>08:49</td>
        <td>08:57</td>
        <td>09:10</td>
        </tr>
        <tr>
        <td>08:16</td>
        <td>08:25</td>
        <td>08:34</td>
        <td>08:49</td>
        <td>08:58</td>
        <td>09:05</td>
        <td>09:18</td>
        </tr>
        <tr>
        <td>08:22</td>
        <td>08:31</td>
        <td>08:40</td>
        <td>08:54</td>
        <td>09:03</td>
        <td>09:11</td>
        <td>09:24</td>
        </tr>
        <tr>
        <td>08:44</td>
        <td>08:53</td>
        <td>09:02</td>
        <td>09:16</td>
        <td>09:25</td>
        <td>09:32</td>
        <td>09:45</td>
        </tr>
        <tr>
        <td>08:58</td>
        <td>09:07</td>
        <td>09:15</td>
        <td>09:29</td>
        <td>09:38</td>
        <td>09:45</td>
        <td>09:58</td>
        </tr>
        <tr>
        <td>09:14</td>
        <td>09:23</td>
        <td>09:31</td>
        <td>09:46</td>
        <td>09:55</td>
        <td>10:02</td>
        <td>10:15</td>
        </tr>
        <tr>
        <td>09:32</td>
        <td>09:42</td>
        <td>09:50</td>
        <td>10:04</td>
        <td>10:14</td>
        <td>10:21</td>
        <td>10:28 вул: Героїв АТО</td>
        </tr>
        <tr>
        <td>09:47</td>
        <td>09:56</td>
        <td>10:05</td>
        <td>10:19</td>
        <td>10:29</td>
        <td>10:36</td>
        <td>10:49</td>
        </tr>
        <tr>
        <td>10:14</td>
        <td>10:23</td>
        <td>10:32</td>
        <td>10:46</td>
        <td>10:55</td>
        <td>11:02</td>
        <td>11:15</td>
        </tr>
        <tr>
        <td>10:35</td>
        <td>10:44</td>
        <td>10:53</td>
        <td>11:08</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>10:51</td>
        <td>11:00</td>
        <td>11:09</td>
        <td>11:23</td>
        <td>11:32</td>
        <td>11:40</td>
        <td>11:53</td>
        </tr>
        <tr>
        <td>11:04</td>
        <td>11:13</td>
        <td>11:22</td>
        <td>11:36</td>
        <td>11:45</td>
        <td>11:52</td>
        <td>12:05</td>
        </tr>
        <tr>
        <td>11:23</td>
        <td>11:32</td>
        <td>11:41</td>
        <td>11:56</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>11:28</td>
        <td>11:37</td>
        <td>11:46</td>
        <td>12:00</td>
        <td>12:10</td>
        <td>12:17</td>
        <td>12:30</td>
        </tr>
        <tr>
        <td>11:55</td>
        <td>12:04</td>
        <td>12:13</td>
        <td>12:27</td>
        <td>12:36</td>
        <td>12:43</td>
        <td>12:56</td>
        </tr>
        <tr>
        <td>12:20</td>
        <td>12:29</td>
        <td>12:37</td>
        <td>12:53</td>
        <td>13:02</td>
        <td>13:09</td>
        <td>13:22</td>
        </tr>
        <tr>
        <td>12:42</td>
        <td>12:51</td>
        <td>13:00</td>
        <td>13:15</td>
        <td>13:23</td>
        <td>13:30</td>
        <td>13:43</td>
        </tr>
        <tr>
        <td>12:59</td>
        <td>13:08</td>
        <td>13:17</td>
        <td>13:31</td>
        <td>13:42</td>
        <td>13:49</td>
        <td>14:02</td>
        </tr>
        <tr>
        <td>13:14</td>
        <td>13:23</td>
        <td>13:34</td>
        <td>13:49</td>
        <td>13:59</td>
        <td>14:06</td>
        <td>14:19</td>
        </tr>
        <tr>
        <td>13:32</td>
        <td>13:42</td>
        <td>13:49</td>
        <td>14:04</td>
        <td>14:12</td>
        <td>14:19</td>
        <td>14:32</td>
        </tr>
        <tr>
        <td>13:44</td>
        <td>13:53</td>
        <td>14:04</td>
        <td>14:20</td>
        <td>14:30</td>
        <td>14:37</td>
        <td>14:50</td>
        </tr>
        <tr>
        <td>14:03</td>
        <td>14:12</td>
        <td>14:21</td>
        <td>14:35</td>
        <td>14:45</td>
        <td>14:52</td>
        <td>15:05</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 14:41</td>
        <td>14:42</td>
        <td>14:52</td>
        <td>14:59</td>
        <td>15:12</td>
        </tr>
        <tr>
        <td>14:28</td>
        <td>14:37</td>
        <td>14:45</td>
        <td>14:59</td>
        <td>15:08</td>
        <td>15:15</td>
        <td>15:28</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>14:47</td>
        <td>14:56</td>
        <td>15:11</td>
        <td>15:19</td>
        <td>15:27</td>
        <td>15:40</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 15:17</td>
        <td>15:18</td>
        <td>15:28</td>
        <td>15:35</td>
        <td>15:48</td>
        </tr>
        <tr>
        <td>15:07</td>
        <td>15:16</td>
        <td>15:25</td>
        <td>15:39</td>
        <td>15:49</td>
        <td>15:56</td>
        <td>16:09</td>
        </tr>
        <tr>
        <td>15:40</td>
        <td>15:48</td>
        <td>15:56</td>
        <td>16:11 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 16:31</td>
        <td>16:32</td>
        <td>16:42</td>
        <td>16:44 АМКР</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>15:42</td>
        <td>15:51</td>
        <td>16:00</td>
        <td>16:14</td>
        <td>16:24</td>
        <td>16:31</td>
        <td>16:44</td>
        </tr>
        <tr>
        <td>15:56</td>
        <td>16:05</td>
        <td>16:14</td>
        <td>16:28</td>
        <td>16:38</td>
        <td>16:45</td>
        <td>16:58</td>
        </tr>
        <tr>
        <td>16:11</td>
        <td>16:20</td>
        <td>16:29</td>
        <td>16:43</td>
        <td>16:52</td>
        <td>16:59</td>
        <td>17:12</td>
        </tr>
        <tr>
        <td>16:18</td>
        <td>16:27</td>
        <td>16:36</td>
        <td>16:50</td>
        <td>17:00</td>
        <td>17:07</td>
        <td>17:20</td>
        </tr>
        <tr>
        <td>16:32</td>
        <td>16:41</td>
        <td>16:49</td>
        <td>17:04</td>
        <td>17:14</td>
        <td>17:21</td>
        <td>17:34</td>
        </tr>
        <tr>
        <td>16:53</td>
        <td>17:02</td>
        <td>17:10</td>
        <td>17:24</td>
        <td>17:34</td>
        <td>17:41</td>
        <td>17:54</td>
        </tr>
        <tr>
        <td>17:15</td>
        <td>17:24</td>
        <td>17:32</td>
        <td>17:46</td>
        <td>17:56</td>
        <td>18:03</td>
        <td>18:16</td>
        </tr>
        <tr>
        <td>17:32</td>
        <td>17:41</td>
        <td>17:49</td>
        <td>18:03</td>
        <td>18:13</td>
        <td>18:20</td>
        <td>18:33</td>
        </tr>
        <tr>
        <td>17:52</td>
        <td>18:01</td>
        <td>18:10</td>
        <td>18:24 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>18:04</td>
        <td>18:13</td>
        <td>18:21</td>
        <td>18:35</td>
        <td>18:44</td>
        <td>18:51</td>
        <td>19:04</td>
        </tr>
        <tr>
        <td>18:18</td>
        <td>18:27</td>
        <td>18:36</td>
        <td>18:50</td>
        <td>19:00</td>
        <td>19:07</td>
        <td>19:20</td>
        </tr>
        <tr>
        <td>18:38</td>
        <td>18:47</td>
        <td>18:55</td>
        <td>19:09</td>
        <td>19:18</td>
        <td>19:26</td>
        <td>19:39</td>
        </tr>
        <tr>
        <td>19:01</td>
        <td>19:10</td>
        <td>19:19</td>
        <td>19:35 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>19:23</td>
        <td>19:32</td>
        <td>19:42</td>
        <td>19:56</td>
        <td>20:05</td>
        <td>20:12</td>
        <td>20:25</td>
        </tr>
        <tr>
        <td>19:37</td>
        <td>19:46</td>
        <td>19:54</td>
        <td>20:08</td>
        <td>20:18</td>
        <td>20:25</td>
        <td>20:38</td>
        </tr>
        <tr>
        <td>20:08</td>
        <td>20:17</td>
        <td>20:26</td>
        <td>20:40</td>
        <td>20:49</td>
        <td>20:55</td>
        <td>21:08</td>
        </tr>
        <tr>
        <td>20:27</td>
        <td>20:36</td>
        <td>20:46</td>
        <td>21:00 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>20:53</td>
        <td>21:02</td>
        <td>21:13</td>
        <td>21:27 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>21:45</td>
        <td>21:54</td>
        <td>22:05</td>
        <td>22:20 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>22:10</td>
        <td>22:19</td>
        <td>22:27</td>
        <td>22:41 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`
}

tram3Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №3';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Буковинська – вул. Акціонерна';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'вул. Акціонерна – вул. Буковинська';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram3.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/3');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        вул. Буковинська
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        вул. Українська
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        ПАТ АМКР
        </th>
        <th>
        вул. Акціонерна
        </th>
        </tr>
        <tr>
        <td>05:13</td>
        <td>05:22</td>
        <td>05:31</td>
        <td>05:44</td>
        <td>05:54</td>
        <td>05:56</td>
        <td>06:12</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>06:57</td>
        <td>07:11</td>
        <td>07:20</td>
        <td>07:22</td>
        <td>07:38</td>
        </tr>
        <tr>
        <td>14:56</td>
        <td>15:05</td>
        <td>15:14</td>
        <td>15:28</td>
        <td>15:38</td>
        <td>15:40</td>
        <td>15:56</td>
        </tr>
        <tr>
        <td>17:04</td>
        <td>17:13</td>
        <td>17:24</td>
        <td>17:38</td>
        <td>17:48</td>
        <td>17:50</td>
        <td>18:05</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        вул. Акціонерна
        </th>
        <th>
        ПАТ АМКР
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Українська
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        вул. Буковинська
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>з депо 04:39</td>
        <td>04:40</td>
        <td>04:54</td>
        <td>05:01</td>
        <td>05:10</td>
        </tr>
        <tr>
        <td>06:15</td>
        <td>06:30</td>
        <td>06:32</td>
        <td>06:40</td>
        <td>06:54</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>07:50</td>
        <td>08:06</td>
        <td>08:08</td>
        <td>08:16 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>з депо 14:21</td>
        <td>14:22</td>
        <td>14:37</td>
        <td>14:44</td>
        <td>14:53</td>
        </tr>
        <tr>
        <td>16:03</td>
        <td>16:19</td>
        <td>16:21</td>
        <td>16:29</td>
        <td>16:44</td>
        <td>16:52</td>
        <td>17:01</td>
        </tr>
        <tr>
        <td>18:08</td>
        <td>18:23</td>
        <td>18:25</td>
        <td>18:33 в депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`
}

tram4Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №4';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Буковинська - ПАТ ПівдГЗК';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'ПАТ ПівдГЗК - вул. Буковинська';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram4.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/171');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        вул. Буковинська
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        вул. Українська
        </th>
        <th>
        Трампарк
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        ПАТ ПГЗК
        </th>
        </tr>
        <tr>
        <td>05:15</td>
        <td>05:24</td>
        <td>05:35</td>
        <td>05:50</td>
        <td>06:05</td>
        <td>06:15</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>07:01</td>
        <td>07:15</td>
        <td>07:31</td>
        <td>07:39</td>
        </tr>
        <tr>
        <td>08:40</td>
        <td>08:49</td>
        <td>09:00</td>
        <td>09:14 в депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>16:05</td>
        <td>16:14</td>
        <td>16:23</td>
        <td>16:37</td>
        <td>16:52</td>
        <td>17:02</td>
        </tr>
        <tr>
        <td>18:12</td>
        <td>18:21</td>
        <td>18:32</td>
        <td>18:46 в депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        ПАТ ПГЗК
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Українська
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        вул. Буковинська
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 04:41</td>
        <td>04:42</td>
        <td>04:56</td>
        <td>05:03</td>
        <td>05:12</td>
        </tr>
        <tr>
        <td>06:18</td>
        <td>06:26</td>
        <td>06:42</td>
        <td>06:57</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>07:42</td>
        <td>07:50</td>
        <td>08:05</td>
        <td>08:20</td>
        <td>08:28</td>
        <td>08:37</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 15:57</td>
        <td>15:28</td>
        <td>15:43</td>
        <td>15:54</td>
        <td>16:01</td>
        </tr>
        <tr>
        <td>17:09</td>
        <td>17:17</td>
        <td>17:34</td>
        <td>17:50</td>
        <td>17:59</td>
        <td>18:08</td>
        </tr>
    </table>`
}

tram5Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №5';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'пл. Домнобудівників – ПАТ ПівдГЗК';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'ПАТ ПівдГЗК – пл. Домнобудівників';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram5.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/5');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        Пл. Домнобудівників
        </th>
        <th>
        Вул. Соборності
        </th>
        <th>
        Вул. Вітчизни
        </th>
        <th>
        Трампарк
        </th>
        <th>
        Пр. Південний
        </th>
        <th>
        ПАТ “ПГЗК”
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 04:49</td>
        <td>04:50</td>
        <td>05:06</td>
        <td>05:14</td>
        </tr>
        <tr>
        <td>05:07</td>
        <td>05:20</td>
        <td>05:27</td>
        <td>05:35</td>
        <td>05:50</td>
        <td>05:58</td>
        </tr>
        <tr>
        <td>05:25</td>
        <td>05:38</td>
        <td>05:46</td>
        <td>05:54</td>
        <td>06:09</td>
        <td>06:18</td>
        </tr>
        <tr>
        <td>05:56</td>
        <td>06:09</td>
        <td>06:17</td>
        <td>06:26</td>
        <td>06:44</td>
        <td>06:52</td>
        </tr>
        <tr>
        <td>06:15</td>
        <td>06:28</td>
        <td>06:36</td>
        <td>06:44</td>
        <td>07:00</td>
        <td>07:08</td>
        </tr>
        <tr>
        <td>06:29</td>
        <td>06:42</td>
        <td>06:49</td>
        <td>06:57</td>
        <td>07:15</td>
        <td>07:23</td>
        </tr>
        <tr>
        <td>07:00</td>
        <td>07:13</td>
        <td>07:20</td>
        <td>07:28</td>
        <td>07:45</td>
        <td>07:53</td>
        </tr>
        <tr>
        <td>07:22</td>
        <td>07:35</td>
        <td>07:43</td>
        <td>07:51</td>
        <td>08:07</td>
        <td>08:15</td>
        </tr>
        <tr>
        <td>09:15</td>
        <td>09:28</td>
        <td>09:35</td>
        <td>09:45 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>07:54</td>
        <td>08:07</td>
        <td>08:14</td>
        <td>08:22</td>
        <td>08:37</td>
        <td>08:44</td>
        </tr>
        <tr>
        <td>08:07</td>
        <td>08:20</td>
        <td>08:27</td>
        <td>08:35</td>
        <td>08:51</td>
        <td>08:59</td>
        </tr>
        <tr>
        <td>08:23</td>
        <td>08:36</td>
        <td>08:43</td>
        <td>08:51</td>
        <td>09:06</td>
        <td>09:14</td>
        </tr>
        <tr>
        <td>08:52</td>
        <td>09:05</td>
        <td>09:12</td>
        <td>09:20 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>09:42</td>
        <td>09:55</td>
        <td>10:02</td>
        <td>10:10</td>
        <td>10:26</td>
        <td>10:34</td>
        </tr>
        <tr>
        <td>10:14</td>
        <td>10:27</td>
        <td>10:34</td>
        <td>10:42</td>
        <td>10:57</td>
        <td>11:04</td>
        </tr>
        <tr>
        <td>11:35</td>
        <td>11:48</td>
        <td>11:55</td>
        <td>12:03</td>
        <td>12:20</td>
        <td>12:28</td>
        </tr>
        <tr>
        <td>12:02</td>
        <td>12:15</td>
        <td>12:22</td>
        <td>12:30</td>
        <td>12:46</td>
        <td>12:54</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 15:20</td>
        <td>15:21</td>
        <td>15:36</td>
        <td>15:44</td>
        </tr>
        <tr>
        <td>13:29</td>
        <td>13:42</td>
        <td>13:49</td>
        <td>13:57</td>
        <td>14:12</td>
        <td>14:20</td>
        </tr>
        <tr>
        <td>15:39</td>
        <td>15:52</td>
        <td>15:59</td>
        <td>16:07</td>
        <td>16:23</td>
        <td>16:30</td>
        </tr>
        <tr>
        <td>13:57</td>
        <td>14:10</td>
        <td>14:17</td>
        <td>14:25</td>
        <td>14:40</td>
        <td>14:48</td>
        </tr>
        <tr>
        <td>16:17</td>
        <td>16:30</td>
        <td>16:37</td>
        <td>16:45</td>
        <td>17:01</td>
        <td>17:09</td>
        </tr>
        <tr>
        <td>16:45</td>
        <td>16:58</td>
        <td>17:05</td>
        <td>17:13</td>
        <td>17:28</td>
        <td>17:35</td>
        </tr>
        <tr>
        <td>15:19</td>
        <td>15:32</td>
        <td>15:39</td>
        <td>15:47</td>
        <td>16:03</td>
        <td>16:11</td>
        </tr>
        <tr>
        <td>17:30</td>
        <td>17:43</td>
        <td>17:50</td>
        <td>17:58</td>
        <td>18:13</td>
        <td>18:20</td>
        </tr>
        <tr>
        <td>15:48</td>
        <td>16:01</td>
        <td>16:08</td>
        <td>16:16</td>
        <td>16:32</td>
        <td>16:40</td>
        </tr>
        <tr>
        <td>18:10</td>
        <td>18:23</td>
        <td>18:29</td>
        <td>18:37 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>18:34</td>
        <td>18:47</td>
        <td>18:54</td>
        <td>19:03 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>17:13</td>
        <td>17:26</td>
        <td>17:33</td>
        <td>17:41</td>
        <td>17:56</td>
        <td>18:04</td>
        </tr>
        <tr>
        <td>17:41</td>
        <td>17:54</td>
        <td>18:01</td>
        <td>18:09</td>
        <td>18:25</td>
        <td>18:33</td>
        </tr>
        <tr>
        <td>19:02</td>
        <td>19:15</td>
        <td>19:22</td>
        <td>19:30</td>
        <td>19:45</td>
        <td>19:53</td>
        </tr>
        <tr>
        <td>19:33</td>
        <td>19:46</td>
        <td>19:53</td>
        <td>20:01</td>
        <td>20:16</td>
        <td>20:24</td>
        </tr>
        <tr>
        <td>20:52</td>
        <td>21:05</td>
        <td>21:11</td>
        <td>21:18 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>21:20</td>
        <td>21:32</td>
        <td>21:38</td>
        <td>21:46</td>
        <td>22:01</td>
        <td>22:09 Вул. Збагачувальна</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        ПАТ “ПГЗК”
        </th>
        <th>
        Пр. Південний
        </th>
        <th>
        Трампарк
        </th>
        <th>
        Вул. Вітчизни
        </th>
        <th>
        Вул. Соборності
        </th>
        <th>
        Пл. Домнобудівників
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>З депо 04:35</td>
        <td>04:36</td>
        <td>04:44</td>
        <td>04:51</td>
        <td>05:04</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>З депо 04:53</td>
        <td>04:54</td>
        <td>05:03</td>
        <td>05:10</td>
        <td>05:22</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>З депо 05:23</td>
        <td>05:24</td>
        <td>05:34</td>
        <td>05:40</td>
        <td>05:53</td>
        </tr>
        <tr>
        <td>05:19</td>
        <td>05:27</td>
        <td>05:42</td>
        <td>05:52</td>
        <td>05:59</td>
        <td>06:12</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>З депо 05:55</td>
        <td>05:56</td>
        <td>06:06</td>
        <td>06:13</td>
        <td>06:26</td>
        </tr>
        <tr>
        <td>06:01</td>
        <td>06:08</td>
        <td>06:23</td>
        <td>06:33</td>
        <td>06:40</td>
        <td>06:53</td>
        </tr>
        <tr>
        <td>06:27</td>
        <td>06:35</td>
        <td>06:51</td>
        <td>07:00</td>
        <td>07:07</td>
        <td>07:19</td>
        </tr>
        <tr>
        <td>06:57</td>
        <td>07:06</td>
        <td>07:21</td>
        <td>07:30</td>
        <td>07:38</td>
        <td>07:51</td>
        </tr>
        <tr>
        <td>07:12</td>
        <td>07:19</td>
        <td>07:34</td>
        <td>07:44</td>
        <td>07:51</td>
        <td>08:04</td>
        </tr>
        <tr>
        <td>07:27</td>
        <td>07:34</td>
        <td>07:50</td>
        <td>08:00</td>
        <td>08:07</td>
        <td>08:20</td>
        </tr>
        <tr>
        <td>07:56</td>
        <td>08:03</td>
        <td>08:19</td>
        <td>08:28</td>
        <td>08:36</td>
        <td>08:49</td>
        </tr>
        <tr>
        <td>08:18</td>
        <td>08:26</td>
        <td>08:42</td>
        <td>8:52</td>
        <td>9:00</td>
        <td>9:12</td>
        </tr>
        <tr>
        <td>08:47</td>
        <td>08:55</td>
        <td>09:10</td>
        <td>09:19</td>
        <td>09:26</td>
        <td>09:39</td>
        </tr>
        <tr>
        <td>09:03</td>
        <td>09:11</td>
        <td>09:26 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>09:17</td>
        <td>09:25</td>
        <td>09:40</td>
        <td>09:50</td>
        <td>09:57</td>
        <td>10:10</td>
        </tr>
        <tr>
        <td>10:38</td>
        <td>10:46</td>
        <td>11:01</td>
        <td>11:11</td>
        <td>11:18</td>
        <td>11:31</td>
        </tr>
        <tr>
        <td>11:07</td>
        <td>11:15</td>
        <td>11:30</td>
        <td>11:39</td>
        <td>11:46</td>
        <td>11:59</td>
        </tr>
        <tr>
        <td>12:31</td>
        <td>12:39</td>
        <td>12:56</td>
        <td>13:06</td>
        <td>13:13</td>
        <td>13:26</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>З депо 15:04</td>
        <td>15:05</td>
        <td>15:15</td>
        <td>15:22</td>
        <td>15:35</td>
        </tr>
        <tr>
        <td>12:57</td>
        <td>13:05</td>
        <td>13:22</td>
        <td>13:32</td>
        <td>13:39</td>
        <td>13:52</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>З депо 15:40</td>
        <td>15:41</td>
        <td>15:51</td>
        <td>15:58</td>
        <td>16:12</td>
        </tr>
        <tr>
        <td>15:47</td>
        <td>15:55</td>
        <td>16:11</td>
        <td>16:21</td>
        <td>16:28</td>
        <td>16:41</td>
        </tr>
        <tr>
        <td>14:23</td>
        <td>14:31</td>
        <td>14:46</td>
        <td>14:56</td>
        <td>15:03</td>
        <td>15:16</td>
        </tr>
        <tr>
        <td>16:33</td>
        <td>16:40</td>
        <td>16:56</td>
        <td>17:06</td>
        <td>17:13</td>
        <td>17:26</td>
        </tr>
        <tr>
        <td>14:51</td>
        <td>14:58</td>
        <td>15:13</td>
        <td>15:23</td>
        <td>15:30</td>
        <td>15:43</td>
        </tr>
        <tr>
        <td>17:13</td>
        <td>17:21</td>
        <td>17:36</td>
        <td>17:46</td>
        <td>17:53</td>
        <td>18:06</td>
        </tr>
        <tr>
        <td>17:38</td>
        <td>17:46</td>
        <td>18/01/</td>
        <td>18:11</td>
        <td>18:18</td>
        <td>18:31</td>
        </tr>
        <tr>
        <td>16:16</td>
        <td>16:24</td>
        <td>16:39</td>
        <td>16:49</td>
        <td>16:56</td>
        <td>17:09</td>
        </tr>
        <tr>
        <td>18:23</td>
        <td>18:31</td>
        <td>18:46 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>16:44</td>
        <td>16:52</td>
        <td>17:08</td>
        <td>17:18</td>
        <td>17:25</td>
        <td>17:38</td>
        </tr>
        <tr>
        <td>18:07</td>
        <td>18:15</td>
        <td>18:30</td>
        <td>18:39</td>
        <td>18:46</td>
        <td>18:59</td>
        </tr>
        <tr>
        <td>18:37</td>
        <td>18:45</td>
        <td>19:00</td>
        <td>19:10</td>
        <td>19:17</td>
        <td>19:30</td>
        </tr>
        <tr>
        <td>19:56</td>
        <td>20:04</td>
        <td>20:19</td>
        <td>20:29</td>
        <td>20:36</td>
        <td>20:49</td>
        </tr>
        <tr>
        <td>20:27</td>
        <td>20:35</td>
        <td>20:50</td>
        <td>20:59</td>
        <td>21:05</td>
        <td>21:18</td>
        </tr>
        <tr>
        <td>22:11 Вул. Збагачувальна</td>
        <td>22:19</td>
        <td>22:34 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`
}

tram6Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №6';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Буковинська – вул. Збагачувальна';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'вул. Збагачувальна – вул. Буковинська';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram6.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/6');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        вул. Буковинська
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        вул. Українська
        </th>
        <th>
        Трампарк
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        вул. Збагачувальна
        </th>
        </tr>
        <tr>
        <td>04:54</td>
        <td>05:03</td>
        <td>05:14</td>
        <td>05:30</td>
        <td>05:46</td>
        <td>05:55</td>
        </tr>
        <tr>
        <td>07:00</td>
        <td>07:09</td>
        <td>07:18</td>
        <td>07:32</td>
        <td>07:47</td>
        <td>07:56</td>
        </tr>
        <tr>
        <td>08:56</td>
        <td>09:05</td>
        <td>09:13</td>
        <td>09:26 в депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>з депо 15:57</td>
        <td>15:58</td>
        <td>16:15</td>
        <td>16:23</td>
        </tr>
        <tr>
        <td>17:26</td>
        <td>17:35</td>
        <td>17:46</td>
        <td>18:00 в депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        вул. Збагачувальна
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Українська
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        вул. Буковинська
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 04:22</td>
        <td>04:23</td>
        <td>04:36</td>
        <td>04:43</td>
        <td>04:51</td>
        </tr>
        <tr>
        <td>06:00</td>
        <td>06:09</td>
        <td>06:25</td>
        <td>06:40</td>
        <td>06:48</td>
        <td>06:57</td>
        </tr>
        <tr>
        <td>07:59</td>
        <td>08:07</td>
        <td>08:22</td>
        <td>08:37</td>
        <td>08:44</td>
        <td>08:53</td>
        </tr>
        <tr>
        <td>16:26</td>
        <td>16:35</td>
        <td>16:50</td>
        <td>17:05</td>
        <td>17:14</td>
        <td>17:23</td>
        </tr>
    </table>`
}

tram7Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №7';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'пл. Домнобудівників – вул. Збагачувальна';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'вул. Збагачувальна – пл. Домнобудівників';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram7.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/7');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        Пл. Домнобудівників
        </th>
        <th>
        Вул. Соборності
        </th>
        <th>
        Вул. Вітчизни
        </th>
        <th>
        Трампарк
        </th>
        <th>
        Пр. Південний
        </th>
        <th>
        Вул. Збагачувальна
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 03:29</td>
        <td>03:30</td>
        <td>03:45</td>
        <td>03:54</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 04:14</td>
        <td>04:15</td>
        <td>04:30</td>
        <td>04:40</td>
        </tr>
        <tr>
        <td>05:15</td>
        <td>05:28</td>
        <td>05:36</td>
        <td>05:44</td>
        <td>06:00</td>
        <td>06:09</td>
        </tr>
        <tr>
        <td>05:46</td>
        <td>05:59</td>
        <td>06:07</td>
        <td>06:15</td>
        <td>06:30</td>
        <td>06:39</td>
        </tr>
        <tr>
        <td>06:42</td>
        <td>06:55</td>
        <td>07:02</td>
        <td>07:10</td>
        <td>07:26</td>
        <td>07:35</td>
        </tr>
        <tr>
        <td>07:10</td>
        <td>07:23</td>
        <td>07:30</td>
        <td>07:38</td>
        <td>07:53</td>
        <td>08:02</td>
        </tr>
        <tr>
        <td>07:39</td>
        <td>07:52</td>
        <td>07:59</td>
        <td>08:07</td>
        <td>08:22</td>
        <td>08:31</td>
        </tr>
        <tr>
        <td>08:35</td>
        <td>08:48</td>
        <td>08:55</td>
        <td>09:03</td>
        <td>09:18</td>
        <td>09:27</td>
        </tr>
        <tr>
        <td>09:01</td>
        <td>09:14</td>
        <td>09:21</td>
        <td>09:29 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>10:27</td>
        <td>10:40</td>
        <td>10:47</td>
        <td>10:55</td>
        <td>11:10</td>
        <td>11:19</td>
        </tr>
        <tr>
        <td>12:18</td>
        <td>12:31</td>
        <td>12:39</td>
        <td>12:47</td>
        <td>13:02</td>
        <td>13:11</td>
        </tr>
        <tr>
        <td>14:12</td>
        <td>14:25</td>
        <td>14:32</td>
        <td>14:41</td>
        <td>14:56</td>
        <td>15:04</td>
        </tr>
        <tr>
        <td>14:40</td>
        <td>14:53</td>
        <td>15:00</td>
        <td>15:09</td>
        <td>15:24</td>
        <td>15:33</td>
        </tr>
        <tr>
        <td>16:03</td>
        <td>16:16</td>
        <td>16:23</td>
        <td>16:31</td>
        <td>16:46</td>
        <td>16:54</td>
        </tr>
        <tr>
        <td>16:34</td>
        <td>16:47</td>
        <td>16:54</td>
        <td>17:02</td>
        <td>17:17</td>
        <td>17:26</td>
        </tr>
        <tr>
        <td>16:58</td>
        <td>17:11</td>
        <td>17:18</td>
        <td>17:27</td>
        <td>17:42</td>
        <td>17:51</td>
        </tr>
        <tr>
        <td>17:55</td>
        <td>18:08</td>
        <td>18:15</td>
        <td>18:23</td>
        <td>18:39</td>
        <td>18:48</td>
        </tr>
        <tr>
        <td>18:26</td>
        <td>18:39</td>
        <td>18:46</td>
        <td>18:54</td>
        <td>19:09</td>
        <td>19:18</td>
        </tr>
        <tr>
        <td>18:52</td>
        <td>19:05</td>
        <td>19:12</td>
        <td>19:20</td>
        <td>19:35</td>
        <td>19:44</td>
        </tr>
        <tr>
        <td>19:55</td>
        <td>20:08</td>
        <td>20:15</td>
        <td>20:23</td>
        <td>20:38</td>
        <td>20:47</td>
        </tr>
        <tr>
        <td>20:20</td>
        <td>20:33</td>
        <td>20:40</td>
        <td>20:48</td>
        <td>21:04</td>
        <td>21:13</td>
        </tr>
        <tr>
        <td>22:18 Ст. Кр.Ріг-Гол.</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>22:28</td>
        <td>22:40</td>
        <td>22:46</td>
        <td>22:54 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        Вул. Збагачувальна
        </th>
        <th>
        Пр. Південний
        </th>
        <th>
        Трампарк
        </th>
        <th>
        Вул. Вітчизни
        </th>
        <th>
        Вул. Соборності
        </th>
        <th>
        Пл. Домнобудівників
        </th>
        </tr>
        <tr>
        <td>03:56</td>
        <td>04:05</td>
        <td>04:20</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>04:44</td>
        <td>04:54</td>
        <td>05:00</td>
        <td>05:12</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>04:45</td>
        <td>04:54</td>
        <td>05:10</td>
        <td>05:20</td>
        <td>05:28</td>
        <td>05:41</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>З депо 06:05</td>
        <td>06:09</td>
        <td>06:19</td>
        <td>06:26</td>
        <td>06:39</td>
        </tr>
        <tr>
        <td>06:12</td>
        <td>06:21</td>
        <td>06:37</td>
        <td>06:47</td>
        <td>06:54</td>
        <td>07:07</td>
        </tr>
        <tr>
        <td>06:42</td>
        <td>06:51</td>
        <td>07:06</td>
        <td>07:16</td>
        <td>07:23</td>
        <td>07:36</td>
        </tr>
        <tr>
        <td>07:39</td>
        <td>07:48</td>
        <td>08:03</td>
        <td>08:13</td>
        <td>08:19</td>
        <td>08:32</td>
        </tr>
        <tr>
        <td>08:06</td>
        <td>08:15</td>
        <td>08:30</td>
        <td>08:39</td>
        <td>08:45</td>
        <td>08:58</td>
        </tr>
        <tr>
        <td>08:34</td>
        <td>08:43</td>
        <td>08:58 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>09:30</td>
        <td>09:39</td>
        <td>09:54</td>
        <td>10:03</td>
        <td>10:10</td>
        <td>10:23</td>
        </tr>
        <tr>
        <td>11:22</td>
        <td>11:31</td>
        <td>11:46</td>
        <td>11:55</td>
        <td>12:02</td>
        <td>12:15</td>
        </tr>
        <tr>
        <td>13:14</td>
        <td>13:23</td>
        <td>13:38</td>
        <td>13:48</td>
        <td>13:55</td>
        <td>14:08</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>З депо 14:07</td>
        <td>14:08</td>
        <td>14:17</td>
        <td>14:24</td>
        <td>14:37</td>
        </tr>
        <tr>
        <td>15:07</td>
        <td>15:15</td>
        <td>15:30</td>
        <td>15:40</td>
        <td>15:47</td>
        <td>16:00</td>
        </tr>
        <tr>
        <td>15:36</td>
        <td>15:45</td>
        <td>16:00</td>
        <td>16:10</td>
        <td>16:18</td>
        <td>16:31</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>З депо 16:24</td>
        <td>16:25</td>
        <td>16:35</td>
        <td>16:42</td>
        <td>16:55</td>
        </tr>
        <tr>
        <td>16:56</td>
        <td>17:05</td>
        <td>17:20</td>
        <td>17:30</td>
        <td>17:37</td>
        <td>17:50</td>
        </tr>
        <tr>
        <td>17:29</td>
        <td>17:38</td>
        <td>17:53</td>
        <td>18:03</td>
        <td>18:10</td>
        <td>18:23</td>
        </tr>
        <tr>
        <td>17:55</td>
        <td>18:04</td>
        <td>18:19</td>
        <td>18:28</td>
        <td>18:36</td>
        <td>18:49</td>
        </tr>
        <tr>
        <td>18:53</td>
        <td>19:02</td>
        <td>19:18</td>
        <td>19:28</td>
        <td>19:35</td>
        <td>19:48</td>
        </tr>
        <tr>
        <td>19:21</td>
        <td>19:30</td>
        <td>19:45</td>
        <td>19:55</td>
        <td>20:02</td>
        <td>20:15</td>
        </tr>
        <tr>
        <td>19:47</td>
        <td>19:56</td>
        <td>20:11 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>20:50</td>
        <td>20:59</td>
        <td>21:15 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>21:16</td>
        <td>21:25</td>
        <td>21:41</td>
        <td>21:48</td>
        <td>21:54</td>
        <td>22:06</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>22:16 Ст. Кр.Ріг-Гол.</td>
        </tr>
    </table>`
}

tram8Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №8';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'ПАТ ПГЗК - вул. Збагачувальна';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'вул. Збагачувальна - ПАТ ПГЗК';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram8.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/8');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        ПАТ ПГЗК
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        вул. Збагачувальна
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>06:07</td>
        <td>06:17</td>
        </tr>
        <tr>
        <td>06:42</td>
        <td>06:50</td>
        <td>06:59</td>
        </tr>
        <tr>
        <td>07:25</td>
        <td>07:33</td>
        <td>07:42</td>
        </tr>
        <tr>
        <td>08:05</td>
        <td>08:13</td>
        <td>08:22</td>
        </tr>
        <tr>
        <td>15:45</td>
        <td>15:53</td>
        <td>16:02</td>
        </tr>
        <tr>
        <td>16:27</td>
        <td>16:35</td>
        <td>16:44</td>
        </tr>
        <tr>
        <td>17:11</td>
        <td>17:19-17:21</td>
        <td>17:30</td>
        </tr>
        <tr>
        <td>17:52</td>
        <td>18:00</td>
        <td>18:09</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        вул. Збагачувальна
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        ПАТ ПГЗК
        </th>
        </tr>
        <tr>
        <td>06:22</td>
        <td>06:31</td>
        <td>06:39</td>
        </tr>
        <tr>
        <td>07:03</td>
        <td>07:12</td>
        <td>07:20</td>
        </tr>
        <tr>
        <td>07:45</td>
        <td>07:54</td>
        <td>08:01</td>
        </tr>
        <tr>
        <td>08:25</td>
        <td>08:35</td>
        <td>08:50 депо</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>15:30</td>
        <td>15:40</td>
        </tr>
        <tr>
        <td>16:05</td>
        <td>16:14-16:16</td>
        <td>16:24</td>
        </tr>
        <tr>
        <td>16:49</td>
        <td>16:58</td>
        <td>17:06</td>
        </tr>
        <tr>
        <td>17:33</td>
        <td>17:42</td>
        <td>17:49</td>
        </tr>
        <tr>
        <td>18:12</td>
        <td>18:20</td>
        <td>в депо 18:35</td>
        </tr>
    </table>`
}

tram9Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №9';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Акціонерна - ст. Кривий Ріг-Головний';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'ст. Кривий Ріг-Головний - вул. Акціонерна';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram9.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/9');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        Трампарк
        </th>
        <th>
        вул. Акціонерна
        </th>
        <th>
        АМКР
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        вул. Соборності
        </th>
        <th>
        пл. Домнобудівників
        </th>
        <th>
        ст. Кривий Ріг-Гол.
        </th>
        </tr>
        <tr>
        <td>04:52</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:01</td>
        <td>05:08</td>
        <td>05:20</td>
        <td>05:32</td>
        </tr>
        <tr>
        <td>04:57</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:06</td>
        <td>05:12</td>
        <td>05:24</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>05:08</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:17</td>
        <td>05:24</td>
        <td>05:37</td>
        <td>05:49</td>
        </tr>
        <tr>
        <td>05:18</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:28</td>
        <td>05:35</td>
        <td>05:48</td>
        <td>05:59</td>
        </tr>
        <tr>
        <td>05:36</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:45</td>
        <td>05:52</td>
        <td>06:05</td>
        <td>06:17</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>05:41</td>
        <td>05:56</td>
        <td>05:58</td>
        <td>06:05</td>
        <td>06:18</td>
        <td>06:30</td>
        </tr>
        <tr>
        <td>06:07</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>06:17</td>
        <td>06:24</td>
        <td>06:37</td>
        <td>06:48</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>06:08</td>
        <td>06:23</td>
        <td>06:25</td>
        <td>06:32</td>
        <td>06:45</td>
        <td>06:57</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>06:31</td>
        <td>06:47</td>
        <td>06:49</td>
        <td>06:56</td>
        <td>07:09</td>
        <td>07:20</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>06:47</td>
        <td>07:03</td>
        <td>07:05</td>
        <td>07:12</td>
        <td>07:25</td>
        <td>07:37</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>07:02</td>
        <td>07:18</td>
        <td>07:20</td>
        <td>07:27</td>
        <td>07:40</td>
        <td>07:51</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>07:18</td>
        <td>07:33</td>
        <td>07:35</td>
        <td>07:42</td>
        <td>07:55</td>
        <td>08:06</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>07:30</td>
        <td>07:46</td>
        <td>07:48</td>
        <td>07:55</td>
        <td>08:08</td>
        <td>08:20</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>07:44</td>
        <td>08:00</td>
        <td>08:02</td>
        <td>08:09</td>
        <td>08:22</td>
        <td>08:33</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>07:58</td>
        <td>08:14</td>
        <td>08:16</td>
        <td>08:23</td>
        <td>08:36</td>
        <td>08:47</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>08:16</td>
        <td>08:32</td>
        <td>08:34</td>
        <td>08:41</td>
        <td>08:54</td>
        <td>09:05</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>08:45</td>
        <td>08:59</td>
        <td>09:01</td>
        <td>09:08</td>
        <td>09:21-10:08 обід</td>
        <td>10:20</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>09:00</td>
        <td>09:14</td>
        <td>09:16</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>10:17</td>
        <td>10:19</td>
        <td>10:26</td>
        <td>10:39</td>
        <td>10:50</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>10:46</td>
        <td>10:48</td>
        <td>10:55</td>
        <td>11:08</td>
        <td>11:19</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>11:28</td>
        <td>11:30</td>
        <td>11:37</td>
        <td>11:50</td>
        <td>12:02</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>11:56</td>
        <td>11:58</td>
        <td>12:04</td>
        <td>12:17</td>
        <td>12:28</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>12:27</td>
        <td>12:29</td>
        <td>12:35</td>
        <td>12:48</td>
        <td>12:59</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>13:11</td>
        <td>13:13</td>
        <td>13:20</td>
        <td>13:35</td>
        <td>13:46</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>13:42</td>
        <td>13:44</td>
        <td>13:51</td>
        <td>14:04-14:06</td>
        <td>14:17</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>14:12</td>
        <td>14:14</td>
        <td>14:21</td>
        <td>14:34</td>
        <td>14:45</td>
        </tr>
        <tr>
        <td>14:35</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>14:43</td>
        <td>14:50</td>
        <td>15:03</td>
        <td>15:15</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>14:59</td>
        <td>15:01</td>
        <td>15:08</td>
        <td>15:21</td>
        <td>15:32</td>
        </tr>
        <tr>
        <td>15:00</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>15:10</td>
        <td>15:17</td>
        <td>15:30</td>
        <td>15:42</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>15:28</td>
        <td>15:30</td>
        <td>15:37</td>
        <td>15:50</td>
        <td>16:01</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>15:26</td>
        <td>15:41</td>
        <td>15:43</td>
        <td>15:50</td>
        <td>16:03</td>
        <td>16:14</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>15:42</td>
        <td>15:58</td>
        <td>16:00</td>
        <td>16:07</td>
        <td>16:20</td>
        <td>16:32</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>15:50</td>
        <td>16:06</td>
        <td>16:08</td>
        <td>16:16</td>
        <td>16:29</td>
        <td>16:41</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>16:09</td>
        <td>16:24</td>
        <td>16:26</td>
        <td>16:33</td>
        <td>16:46</td>
        <td>16:58</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>16:24</td>
        <td>16:39</td>
        <td>16:41</td>
        <td>16:48</td>
        <td>17:01</td>
        <td>17:12</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>16:42</td>
        <td>16:58</td>
        <td>17&quot;00</td>
        <td>17:07</td>
        <td>17:20</td>
        <td>17:32</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>16:53</td>
        <td>17:08</td>
        <td>17:10</td>
        <td>17:17</td>
        <td>17:30</td>
        <td>17:41</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>17:10</td>
        <td>17:26</td>
        <td>17:28</td>
        <td>17:35</td>
        <td>17:48</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>17:34</td>
        <td>17:50</td>
        <td>17:52</td>
        <td>17:59</td>
        <td>18:12-19:00</td>
        <td>19:12</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>17:46</td>
        <td>18:02</td>
        <td>18:04</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>17:56</td>
        <td>18:11</td>
        <td>18:13</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>18:29</td>
        <td>18:45</td>
        <td>18:47</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>19:14</td>
        <td>19:29</td>
        <td>19:31</td>
        <td>19:38</td>
        <td>19:51</td>
        <td>20:03</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>19:41</td>
        <td>19:57</td>
        <td>19:59</td>
        <td>20:06</td>
        <td>20:19</td>
        <td>20:30</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>18:43</td>
        <td>18:57</td>
        <td>18:59</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>20:13</td>
        <td>20:29</td>
        <td>20:31</td>
        <td>20:38</td>
        <td>20:51</td>
        <td>21:02</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>20:56</td>
        <td>21:10</td>
        <td>21:12</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
    <tr>
        <th>
        cт. Кривий Ріг-Гол.
        </th>
        <th>
        пл. Домнобудівників
        </th>
        <th>
        вул. Соборності
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        АМКР
        </th>
        <th>
        вул. Акціонерна
        </th>
        <th>
        Трампарк
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>05:27</td>
        <td>05:40</td>
        <td>05:47</td>
        <td>05:49</td>
        <td>06:05</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>05:36</td>
        <td>05:48</td>
        <td>06:01</td>
        <td>08:08</td>
        <td>06:10</td>
        <td>06:26</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>05:52</td>
        <td>06:04</td>
        <td>06:17</td>
        <td>06:25</td>
        <td>06:27</td>
        <td>06:43</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:21</td>
        <td>05:23</td>
        <td>05:38</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>06:02</td>
        <td>06:13</td>
        <td>06:26</td>
        <td>06:33</td>
        <td>06:35</td>
        <td>06:51</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>06:20</td>
        <td>06:32</td>
        <td>06:45</td>
        <td>06:52</td>
        <td>06:54</td>
        <td>07:10</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>06:33</td>
        <td>06:45</td>
        <td>06:58</td>
        <td>07:05</td>
        <td>07:07</td>
        <td>07:23</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>06:51</td>
        <td>07:02</td>
        <td>07:15</td>
        <td>07:22</td>
        <td>07:24</td>
        <td>07:40</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>07:02</td>
        <td>07:14</td>
        <td>07:27</td>
        <td>07:34</td>
        <td>07:36</td>
        <td>07:52</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>07:23</td>
        <td>07:35</td>
        <td>07:48</td>
        <td>07:55</td>
        <td>07:57</td>
        <td>08:13</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>07:40</td>
        <td>07:51</td>
        <td>08:04</td>
        <td>08:11</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>08:19</td>
        </tr>
        <tr>
        <td>07:54</td>
        <td>08:05</td>
        <td>08:18</td>
        <td>08:25</td>
        <td>08:27</td>
        <td>08:42</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>08:09</td>
        <td>08:20</td>
        <td>08:33</td>
        <td>08:40</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>08:49</td>
        </tr>
        <tr>
        <td>08:23</td>
        <td>08:34-09:18 обід</td>
        <td>09:31</td>
        <td>09:39</td>
        <td>09:41</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>08:36</td>
        <td>08:47-08:49</td>
        <td>09:02</td>
        <td>09:09</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>09:18</td>
        </tr>
        <tr>
        <td>08:50</td>
        <td>09:01-09:50 обід</td>
        <td>10:03</td>
        <td>10:10</td>
        <td>10:12</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>09:08</td>
        <td>09:21</td>
        <td>09:34</td>
        <td>09:41</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>09:49</td>
        </tr>
        <tr>
        <td>10:24</td>
        <td>10:36</td>
        <td>10:49</td>
        <td>10:56</td>
        <td>10:57</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>10:53</td>
        <td>11:04</td>
        <td>11:17</td>
        <td>11:24</td>
        <td>11:25</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>11:22</td>
        <td>11:33</td>
        <td>11:46</td>
        <td>11:53</td>
        <td>11:55</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>12:05</td>
        <td>12:16</td>
        <td>12:29</td>
        <td>12:36</td>
        <td>12:38</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>12:31</td>
        <td>12:43</td>
        <td>12:56</td>
        <td>13:03</td>
        <td>13:05</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>13:02</td>
        <td>13:16</td>
        <td>13::29</td>
        <td>13:36</td>
        <td>13:38</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>13:49</td>
        <td>14:00</td>
        <td>14:13</td>
        <td>14:20</td>
        <td>14:22</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>14:20</td>
        <td>14:31</td>
        <td>14:44</td>
        <td>14:51</td>
        <td>14:53</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>15:06</td>
        <td>15:08</td>
        <td>15:23</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>14:48</td>
        <td>14:59</td>
        <td>15:12</td>
        <td>15:19</td>
        <td>15:21</td>
        <td>15:37</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>15:30</td>
        <td>15:32</td>
        <td>15:47</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>15:18</td>
        <td>15:29</td>
        <td>15:42</td>
        <td>15:49</td>
        <td>15:51</td>
        <td>16:06</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>15:35</td>
        <td>15:46</td>
        <td>15:59</td>
        <td>16:06</td>
        <td>16:07</td>
        <td>16:22</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>15:45</td>
        <td>15:56</td>
        <td>16:09</td>
        <td>16:16</td>
        <td>16:18</td>
        <td>16:34</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>16:04</td>
        <td>16:15</td>
        <td>16:28</td>
        <td>16:35</td>
        <td>16:37</td>
        <td>16:51</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>16:17</td>
        <td>16:28</td>
        <td>16:41</td>
        <td>16:48</td>
        <td>16:50</td>
        <td>17:06</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>16:35</td>
        <td>16:47</td>
        <td>17:00</td>
        <td>17:08</td>
        <td>17:10</td>
        <td>17:26</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>16:55</td>
        <td>17:06</td>
        <td>17:19</td>
        <td>17:26</td>
        <td>17:28</td>
        <td>17:43</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>17:05</td>
        <td>17:17-18:04</td>
        <td>17:30</td>
        <td>17:38</td>
        <td>17:40</td>
        <td>17:54</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>17:15</td>
        <td>17:27-18:24 обід</td>
        <td>18:37</td>
        <td>18:44</td>
        <td>18:46</td>
        <td>19:02</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>17:36</td>
        <td>17:48</td>
        <td>18:01</td>
        <td>18:09</td>
        <td>18:11</td>
        <td>18:26</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>17:44</td>
        <td>17:55-18:50 обід</td>
        <td>19:03</td>
        <td>19:10</td>
        <td>19:12</td>
        <td>19:28</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>18:04</td>
        <td>18:17</td>
        <td>18:24</td>
        <td>18:26</td>
        <td>18:40</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>19:16</td>
        <td>19:28</td>
        <td>19:41</td>
        <td>19:48</td>
        <td>19:50</td>
        <td>20:06</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>20:06</td>
        <td>20:17</td>
        <td>20:30</td>
        <td>20:37</td>
        <td>20:39</td>
        <td>20:53</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>20:32</td>
        <td>20:43</td>
        <td>20:56</td>
        <td>21:03</td>
        <td>21:05</td>
        <td>21:20</td>
        <td>--:--</td>
        </tr>
    </table>`
}

tram10Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №10';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Героїв АТО - ПАТ ПГЗК';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'ПАТ ПГЗК - вул. Героїв АТО';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram10.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/10');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        вул. Героїв АТО
        </th>
        <th>
        вул. Святогеоргієвська
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        Трампарк
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        ПАТ ПГЗК
        </th>
        </tr>
        <tr>
        <td>05:44</td>
        <td>05:51</td>
        <td>05:58</td>
        <td>06:05</td>
        <td>06:20</td>
        <td>06:28</td>
        </tr>
        <tr>
        <td>07:20</td>
        <td>07:27</td>
        <td>07:34</td>
        <td>07:42</td>
        <td>07:57</td>
        <td>08:05</td>
        </tr>
        <tr>
        <td>14:25</td>
        <td>14:32</td>
        <td>14:39</td>
        <td>14:47</td>
        <td>15:02</td>
        <td>15:09</td>
        </tr>
        <tr>
        <td>16:03</td>
        <td>16:10</td>
        <td>16:17</td>
        <td>16:25</td>
        <td>16:40</td>
        <td>16:48</td>
        </tr>
        <tr>
        <td>17:45</td>
        <td>17:52</td>
        <td>17:59</td>
        <td>18:07 в депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
        <tr>
        <th>
        ПАТ ПГЗК
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        вул. Святогеоргієвська
        </th>
        <th>
        вул. Героїв АТО
        </th>
        </tr>
        </thead>
        <tr>
        <td>--:--</td>
        <td>з депо 05:14</td>
        <td>05:15</td>
        <td>05:25</td>
        <td>05:32</td>
        <td>05:39</td>
        </tr>
        <tr>
        <td>06:31</td>
        <td>06:39</td>
        <td>06:54</td>
        <td>07:03</td>
        <td>07:10</td>
        <td>07:17</td>
        </tr>
        <tr>
        <td>08:09</td>
        <td>08:17</td>
        <td>08:32</td>
        <td>депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 13:57</td>
        <td>13:58</td>
        <td>14:08</td>
        <td>14:15</td>
        <td>14:22</td>
        </tr>
        <tr>
        <td>15:12</td>
        <td>15:20</td>
        <td>15:35</td>
        <td>15:45</td>
        <td>15:52</td>
        <td>15:59</td>
        </tr>
        <tr>
        <td>16:53</td>
        <td>17:01</td>
        <td>17:16</td>
        <td>17:26</td>
        <td>17:34</td>
        <td>17:41</td>
        </tr>
    </table>`
}

tram11Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №11';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Героїв АТО – вул. Збагачувальна';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'вул. Збагачувальна – вул. Героїв АТО';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram11.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/11');

    tableFirst.innerHTML = `<table>
    <tr>
        <th>
        вул. Героїв АТО
        </th>
        <th>
        вул. Святогеоргієвська
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        Трампарк
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        вул. Збагачувальна
        </th>
        </tr>
        <tr>
        <td>05:18</td>
        <td>05:25</td>
        <td>05:32</td>
        <td>05:40</td>
        <td>05:56</td>
        <td>06:05</td>
        </tr>
        <tr>
        <td>07:01</td>
        <td>07:08</td>
        <td>07:15</td>
        <td>07:23</td>
        <td>07:39</td>
        <td>07:48</td>
        </tr>
        <tr>
        <td>08:44</td>
        <td>08:51</td>
        <td>08:58</td>
        <td>09:06 в депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>з депо 14:32</td>
        <td>14:33</td>
        <td>14:49</td>
        <td>14:58</td>
        </tr>
        <tr>
        <td>15:51</td>
        <td>15:58</td>
        <td>16:05</td>
        <td>16:14</td>
        <td>16:29</td>
        <td>16:38</td>
        </tr>
        <tr>
        <td>17:30</td>
        <td>17:37</td>
        <td>17:44</td>
        <td>17:52 в депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
        <tr>
        <th>
        вул. Збагачувальна
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        вул. Святогеоргієвська
        </th>
        <th>
        вул. Героїв АТО
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 04:54</td>
        <td>04:55</td>
        <td>05:04</td>
        <td>05:10</td>
        <td>05:16</td>
        </tr>
        <tr>
        <td>06:10</td>
        <td>06:19</td>
        <td>06:35</td>
        <td>06:44</td>
        <td>06:51</td>
        <td>06:58</td>
        </tr>
        <tr>
        <td>07:51</td>
        <td>08:00</td>
        <td>08:15</td>
        <td>08:25</td>
        <td>08:32</td>
        <td>08:39</td>
        </tr>
        <tr>
        <td>15:02</td>
        <td>15:11</td>
        <td>15:26</td>
        <td>15:36</td>
        <td>15:42</td>
        <td>15:49</td>
        </tr>
        <tr>
        <td>16:41</td>
        <td>16:50</td>
        <td>17:06</td>
        <td>17:15</td>
        <td>17:21</td>
        <td>17:28</td>
        </tr>
    </table>`
}

tram12Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №12';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Героїв АТО - вул. Акціонерна';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'вул. Акціонерна- вул. Героїв АТО';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram12.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/12');

    tableFirst.innerHTML = `<table>
        <tr>
        <th>
        вул. Героїв АТО
        </th>
        <th>
        вул. Святогеоргіївська
        </th>
        <th>
        вул.Вітчизни
        </th>
        <th>
        ПАТ АМКР
        </th>
        <th>
        вул. Акціонерна
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:02</td>
        <td>05:04</td>
        <td>05:20</td>
        </tr>
        <tr>
        <td>06:00</td>
        <td>06:08</td>
        <td>06:15</td>
        <td>06:17</td>
        <td>06:32</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
        <tr>
        <th>
        вул. Акціонерна
        </th>
        <th>
        ПАТ АМКР
        </th>
        <th>
        ПАТ АМКР
        </th>
        <th>
        вул. Святогеоргіївська
        </th>
        <th>
        вул. Героїв АТО
        </th>
        </tr>
        <tr>
        <td>05:25</td>
        <td>05:40</td>
        <td>05:42</td>
        <td>05:50</td>
        <td>05:57</td>
        </tr>
        <tr>
        <td>06:35</td>
        <td>06:50</td>
        <td>06:52</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`
}

tram13Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №13';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'ПАТ "АМКР" - вул.Акціонерна';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'вул.Акціонерна- ПАТ "АМКР"';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tramNone.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/');

    tableFirst.innerHTML = `<table>
        <tr>
        <th>
        Трампарк
        </th>
        <th>
        ПАТ &quot;АМКР&quot;
        </th>
        <th>
        вул. Акціонерна
        </th>
        </tr>
        <tr>
        <td>04:57</td>
        <td>05:08</td>
        <td>05:23</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>05:48</td>
        <td>06:03</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>06:24</td>
        <td>06:39</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>07:02</td>
        <td>07:17</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
        <tr>
        <th>
        вул. Акціонерна
        </th>
        <th>
        ПАТ &quot;АМКР&quot;
        </th>
        <th>
        Трампарк
        </th>
        </tr>
        <tr>
        <td>05:26</td>
        <td>05:41</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>06:06</td>
        <td>06:21</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>06:42</td>
        <td>06:57</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>07:22</td>
        <td>07:37</td>
        <td>07:47</td>
        </tr>
    </table>`
}

tram14Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №14';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'ст. Кривий Ріг-Головний - вул.Героїв АТО';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'вул.Героїв АТО - ст. Кривий Ріг-Головний';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram14.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/13');

    tableFirst.innerHTML = `<table>
        <tr>
        <th>
        Ст. Кривий Ріг-Гол.
        </th>
        <th>
        Пл. Домнобудівників
        </th>
        <th>
        Вул. Соборності
        </th>
        <th>
        Вул. Героїв АТО
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>05:52</td>
        <td>05:59</td>
        </tr>
        <tr>
        <td>05:47</td>
        <td>05:58</td>
        <td>06:11</td>
        <td>06:18</td>
        </tr>
        <tr>
        <td>05:57</td>
        <td>06:08</td>
        <td>06:21</td>
        <td>06:28</td>
        </tr>
        <tr>
        <td>06:05</td>
        <td>06:17</td>
        <td>06:30</td>
        <td>06:37</td>
        </tr>
        <tr>
        <td>06:37</td>
        <td>06:49</td>
        <td>07:02</td>
        <td>07:09</td>
        </tr>
        <tr>
        <td>06:55</td>
        <td>07:07</td>
        <td>07:20</td>
        <td>07:27</td>
        </tr>
        <tr>
        <td>07:05</td>
        <td>07:17</td>
        <td>07:30</td>
        <td>07:37</td>
        </tr>
        <tr>
        <td>07:15</td>
        <td>07:26</td>
        <td>07:39</td>
        <td>07:46</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>07:32</td>
        <td>07:45</td>
        <td>07:52</td>
        </tr>
        <tr>
        <td>07:32</td>
        <td>07:44</td>
        <td>07:57</td>
        <td>08:04</td>
        </tr>
        <tr>
        <td>07:45</td>
        <td>07:57</td>
        <td>08:09</td>
        <td>08:16</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>07:04</td>
        <td>07:11</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>07:23</td>
        <td>07:30</td>
        </tr>
        <tr>
        <td>08:04</td>
        <td>08:15</td>
        <td>08:28</td>
        <td>08:35</td>
        </tr>
        <tr>
        <td>08:07</td>
        <td>08:18</td>
        <td>08:31</td>
        <td>08:38</td>
        </tr>
        <tr>
        <td>08:14</td>
        <td>08:25</td>
        <td>08:38</td>
        <td>08:45</td>
        </tr>
        <tr>
        <td>08:25</td>
        <td>08:37</td>
        <td>08:50</td>
        <td>08:57</td>
        </tr>
        <tr>
        <td>08:31</td>
        <td>08:42</td>
        <td>08:55</td>
        <td>09:02</td>
        </tr>
        <tr>
        <td>08:43</td>
        <td>08:54</td>
        <td>09:07</td>
        <td>09:14</td>
        </tr>
        <tr>
        <td>08:53</td>
        <td>09:04</td>
        <td>09:17</td>
        <td>09:24</td>
        </tr>
        <tr>
        <td>07:51</td>
        <td>08:03</td>
        <td>08:16</td>
        <td>08:23</td>
        </tr>
        <tr>
        <td>09:14</td>
        <td>09:25</td>
        <td>09:37</td>
        <td>09:43</td>
        </tr>
        <tr>
        <td>09:17</td>
        <td>09:29</td>
        <td>09:42</td>
        <td>09:49</td>
        </tr>
        <tr>
        <td>09:21</td>
        <td>09:32</td>
        <td>09:45</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>09:33</td>
        <td>09:44</td>
        <td>09:57</td>
        <td>10:03</td>
        </tr>
        <tr>
        <td>09:41</td>
        <td>09:53</td>
        <td>10:06</td>
        <td>10:13</td>
        </tr>
        <tr>
        <td>09:52</td>
        <td>10:03</td>
        <td>10:16</td>
        <td>10:23</td>
        </tr>
        <tr>
        <td>10:01</td>
        <td>10:12</td>
        <td>10:25</td>
        <td>10:32</td>
        </tr>
        <tr>
        <td>09:00</td>
        <td>9:11</td>
        <td>09:24</td>
        <td>09:31</td>
        </tr>
        <tr>
        <td>10:27</td>
        <td>10:39</td>
        <td>10:52</td>
        <td>10:59</td>
        </tr>
        <tr>
        <td>10:40</td>
        <td>10:51</td>
        <td>11:04</td>
        <td>11:11</td>
        </tr>
        <tr>
        <td>10:49</td>
        <td>11:00</td>
        <td>11:13</td>
        <td>11:20</td>
        </tr>
        <tr>
        <td>11:01</td>
        <td>11:12</td>
        <td>11:25</td>
        <td>11:32</td>
        </tr>
        <tr>
        <td>11:09</td>
        <td>11:20</td>
        <td>11:33</td>
        <td>11:40</td>
        </tr>
        <tr>
        <td>10:08</td>
        <td>10:20</td>
        <td>10:33</td>
        <td>10:40</td>
        </tr>
        <tr>
        <td>11:37</td>
        <td>11:49</td>
        <td>12:02</td>
        <td>12:09</td>
        </tr>
        <tr>
        <td>11:47</td>
        <td>11:58</td>
        <td>12:11</td>
        <td>12:18</td>
        </tr>
        <tr>
        <td>11:57</td>
        <td>12:08</td>
        <td>12:21</td>
        <td>12:28</td>
        </tr>
        <tr>
        <td>12:09</td>
        <td>12:20</td>
        <td>12:33</td>
        <td>12:40</td>
        </tr>
        <tr>
        <td>12:16</td>
        <td>12:27</td>
        <td>12:40</td>
        <td>12:47</td>
        </tr>
        <tr>
        <td>11:16</td>
        <td>11:27</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>12:46</td>
        <td>12:57</td>
        <td>13:10</td>
        <td>13:17</td>
        </tr>
        <tr>
        <td>12:56</td>
        <td>13:07</td>
        <td>13:20</td>
        <td>13:27</td>
        </tr>
        <tr>
        <td>13:07</td>
        <td>13:18</td>
        <td>13:31</td>
        <td>13:38</td>
        </tr>
        <tr>
        <td>13:16</td>
        <td>13:27</td>
        <td>13:40</td>
        <td>13:47</td>
        </tr>
        <tr>
        <td>13:23</td>
        <td>13:34</td>
        <td>13:47</td>
        <td>13:54</td>
        </tr>
        <tr>
        <td>12:23</td>
        <td>12:35</td>
        <td>12:48</td>
        <td>12:55</td>
        </tr>
        <tr>
        <td>13:57</td>
        <td>14:09</td>
        <td>14:22</td>
        <td>14:29</td>
        </tr>
        <tr>
        <td>14:03</td>
        <td>14:14 14:16</td>
        <td>14:29</td>
        <td>14:36</td>
        </tr>
        <tr>
        <td>14:14</td>
        <td>14:25</td>
        <td>14:38</td>
        <td>14:45</td>
        </tr>
        <tr>
        <td>14:24</td>
        <td>14:35</td>
        <td>14:48</td>
        <td>14:55</td>
        </tr>
        <tr>
        <td>14:32</td>
        <td>14:43</td>
        <td>14:56</td>
        <td>15:03</td>
        </tr>
        <tr>
        <td>13:32</td>
        <td>13:43</td>
        <td>13:56</td>
        <td>14:03</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>15:26</td>
        <td>15:33</td>
        </tr>
        <tr>
        <td>15:07</td>
        <td>15:19 15:21</td>
        <td>15:34</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>15:13</td>
        <td>15:24</td>
        <td>15:37</td>
        <td>15:44</td>
        </tr>
        <tr>
        <td>15:22</td>
        <td>15:33</td>
        <td>15:46</td>
        <td>15:53</td>
        </tr>
        <tr>
        <td>15:32</td>
        <td>15:43</td>
        <td>15:56</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>15:41</td>
        <td>15:53</td>
        <td>16:06</td>
        <td>16:13</td>
        </tr>
        <tr>
        <td>14:40</td>
        <td>14:51</td>
        <td>15:04</td>
        <td>15:11</td>
        </tr>
        <tr>
        <td>15:59</td>
        <td>16:10 16:11</td>
        <td>16:24</td>
        <td>16:31</td>
        </tr>
        <tr>
        <td>16:09</td>
        <td>16:21</td>
        <td>16:34</td>
        <td>16:41</td>
        </tr>
        <tr>
        <td>16:21</td>
        <td>16:32</td>
        <td>16:45</td>
        <td>16:52</td>
        </tr>
        <tr>
        <td>16:50</td>
        <td>17:01</td>
        <td>17:14</td>
        <td>17:21</td>
        </tr>
        <tr>
        <td>-</td>
        <td>15:37</td>
        <td>15:50</td>
        <td>15:57</td>
        </tr>
        <tr>
        <td>17:08</td>
        <td>17:19</td>
        <td>17:32</td>
        <td>17:39</td>
        </tr>
        <tr>
        <td>17:19</td>
        <td>17:30 17:32</td>
        <td>17:45</td>
        <td>17:52</td>
        </tr>
        <tr>
        <td>17:28</td>
        <td>17:39</td>
        <td>17:52</td>
        <td>17:59</td>
        </tr>
        <tr>
        <td>17:57</td>
        <td>18:08</td>
        <td>18:21</td>
        <td>18:28</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>18:18</td>
        <td>18:31</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>18:16</td>
        <td>18:27</td>
        <td>18:40</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>18:36</td>
        <td>18:47-48</td>
        <td>19:01</td>
        <td>19:08</td>
        </tr>
        <tr>
        <td>19:05</td>
        <td>19:16</td>
        <td>19:29</td>
        <td>19:36</td>
        </tr>
        <tr>
        <td>19:49</td>
        <td>20:00</td>
        <td>20:13</td>
        <td>20:20</td>
        </tr>
        <tr>
        <td>20:13</td>
        <td>20:24</td>
        <td>20:37</td>
        <td>20:44</td>
        </tr>
        <tr>
        <td>20:57</td>
        <td>21:08</td>
        <td>21:21</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
        <tr>
        <th>
        Вул. Героїв АТО
        </th>
        <th>
        Вул. Соборності
        </th>
        <th>
        Пл. Домнобудівників
        </th>
        <th>
        Ст. Кривий Ріг-Гол.
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>05:20</td>
        <td>05:33</td>
        <td>05:44</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>05:30</td>
        <td>05:43</td>
        <td>05:54</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>05:38</td>
        <td>05:51</td>
        <td>06:02</td>
        </tr>
        <tr>
        <td>06:02</td>
        <td>06:09</td>
        <td>06:22</td>
        <td>06:34</td>
        </tr>
        <tr>
        <td>06:20</td>
        <td>06:27</td>
        <td>06:40</td>
        <td>06:52</td>
        </tr>
        <tr>
        <td>06:30</td>
        <td>06:37</td>
        <td>06:50</td>
        <td>07:02</td>
        </tr>
        <tr>
        <td>06:41</td>
        <td>06:48</td>
        <td>07:01</td>
        <td>07:12</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>07:14</td>
        <td>07:27</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>07:00</td>
        <td>07:13</td>
        <td>07:25</td>
        </tr>
        <tr>
        <td>07:11</td>
        <td>07:18</td>
        <td>07:31</td>
        <td>07:42</td>
        </tr>
        <tr>
        <td>07:29</td>
        <td>07:36</td>
        <td>07:49</td>
        <td>08:01</td>
        </tr>
        <tr>
        <td>07:40</td>
        <td>07:47</td>
        <td>08:00</td>
        <td>08:11</td>
        </tr>
        <tr>
        <td>07:50</td>
        <td>07:57</td>
        <td>08:10</td>
        <td>08:22</td>
        </tr>
        <tr>
        <td>07:57</td>
        <td>08:04</td>
        <td>08:17</td>
        <td>08:28</td>
        </tr>
        <tr>
        <td>08:09</td>
        <td>08:16</td>
        <td>08:29</td>
        <td>08:40</td>
        </tr>
        <tr>
        <td>08:19</td>
        <td>08:26</td>
        <td>08:39</td>
        <td>08:50</td>
        </tr>
        <tr>
        <td>07:14</td>
        <td>07:21</td>
        <td>07:34</td>
        <td>07:46</td>
        </tr>
        <tr>
        <td>07:33</td>
        <td>07:40</td>
        <td>07:53</td>
        <td>08:04</td>
        </tr>
        <tr>
        <td>08:40</td>
        <td>08:47</td>
        <td>09:00</td>
        <td>09:11</td>
        </tr>
        <tr>
        <td>08:43</td>
        <td>08:50</td>
        <td>09:03</td>
        <td>09:15</td>
        </tr>
        <tr>
        <td>08:48</td>
        <td>08:55</td>
        <td>09:08</td>
        <td>09:19</td>
        </tr>
        <tr>
        <td>08:59</td>
        <td>09:06</td>
        <td>09:19</td>
        <td>09:30</td>
        </tr>
        <tr>
        <td>09:06</td>
        <td>09:13</td>
        <td>09:26</td>
        <td>09:38</td>
        </tr>
        <tr>
        <td>09:17</td>
        <td>09:24</td>
        <td>09:37</td>
        <td>09:49</td>
        </tr>
        <tr>
        <td>09:27</td>
        <td>09:34</td>
        <td>09:47</td>
        <td>09:58</td>
        </tr>
        <tr>
        <td>08:26</td>
        <td>08:33</td>
        <td>08:46</td>
        <td>08:57</td>
        </tr>
        <tr>
        <td>09:46</td>
        <td>09:53</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>09:52</td>
        <td>09:59</td>
        <td>10:12</td>
        <td>10:24</td>
        </tr>
        <tr>
        <td>10:06</td>
        <td>10:13</td>
        <td>10:26</td>
        <td>10:37</td>
        </tr>
        <tr>
        <td>10:15</td>
        <td>10:22</td>
        <td>10:35</td>
        <td>10:46</td>
        </tr>
        <tr>
        <td>10:27</td>
        <td>10:34</td>
        <td>10:47</td>
        <td>10:58</td>
        </tr>
        <tr>
        <td>10:35</td>
        <td>10:42</td>
        <td>10:55</td>
        <td>11:06</td>
        </tr>
        <tr>
        <td>09:34</td>
        <td>09:41</td>
        <td>09:54</td>
        <td>10:05</td>
        </tr>
        <tr>
        <td>11:02</td>
        <td>11:09</td>
        <td>11:22</td>
        <td>11:34</td>
        </tr>
        <tr>
        <td>11:13</td>
        <td>11:20</td>
        <td>11:33</td>
        <td>11:44</td>
        </tr>
        <tr>
        <td>11:23</td>
        <td>11:30</td>
        <td>11:43</td>
        <td>11:54</td>
        </tr>
        <tr>
        <td>11:35</td>
        <td>11:42</td>
        <td>11:55</td>
        <td>12:06</td>
        </tr>
        <tr>
        <td>11:42</td>
        <td>11:49</td>
        <td>12:02</td>
        <td>12:13</td>
        </tr>
        <tr>
        <td>10:42</td>
        <td>10:49</td>
        <td>11:02</td>
        <td>11:13</td>
        </tr>
        <tr>
        <td>12:12</td>
        <td>12:19</td>
        <td>12:32</td>
        <td>12:43</td>
        </tr>
        <tr>
        <td>12:22</td>
        <td>12:29</td>
        <td>12:42</td>
        <td>12:53</td>
        </tr>
        <tr>
        <td>12:33</td>
        <td>12:40</td>
        <td>12:53</td>
        <td>13:04</td>
        </tr>
        <tr>
        <td>12:42</td>
        <td>12:49</td>
        <td>13:02</td>
        <td>13:13</td>
        </tr>
        <tr>
        <td>12:49</td>
        <td>12:56</td>
        <td>13:09</td>
        <td>13:20</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>12:09</td>
        <td>12:20</td>
        </tr>
        <tr>
        <td>13:21</td>
        <td>13:28</td>
        <td>13:42</td>
        <td>13:54</td>
        </tr>
        <tr>
        <td>13:29</td>
        <td>13:36</td>
        <td>13:49</td>
        <td>14:00</td>
        </tr>
        <tr>
        <td>13:40</td>
        <td>13:47</td>
        <td>14:00</td>
        <td>14:11</td>
        </tr>
        <tr>
        <td>13:50</td>
        <td>13:57</td>
        <td>14:10</td>
        <td>14:21</td>
        </tr>
        <tr>
        <td>13:56</td>
        <td>14:03</td>
        <td>14:16-18</td>
        <td>14:29</td>
        </tr>
        <tr>
        <td>12:58</td>
        <td>13:05</td>
        <td>13:18</td>
        <td>13:29</td>
        </tr>
        <tr>
        <td>14:32</td>
        <td>14:39</td>
        <td>14:52</td>
        <td>15:04</td>
        </tr>
        <tr>
        <td>14:39</td>
        <td>14:46</td>
        <td>14:59</td>
        <td>15:10</td>
        </tr>
        <tr>
        <td>14:47</td>
        <td>14:54</td>
        <td>15:07</td>
        <td>15:19</td>
        </tr>
        <tr>
        <td>14:58</td>
        <td>15:05</td>
        <td>15:18</td>
        <td>15:29</td>
        </tr>
        <tr>
        <td>15:06</td>
        <td>15:13</td>
        <td>15:26</td>
        <td>15:38</td>
        </tr>
        <tr>
        <td>14:05</td>
        <td>14:12</td>
        <td>14:25</td>
        <td>14:37</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>15:32</td>
        <td>15:45</td>
        <td>15:56</td>
        </tr>
        <tr>
        <td>15:35</td>
        <td>15:42</td>
        <td>15:55</td>
        <td>16:06</td>
        </tr>
        <tr>
        <td>15:46</td>
        <td>15:53</td>
        <td>16:07</td>
        <td>16:18</td>
        </tr>
        <tr>
        <td>15:55</td>
        <td>16:02</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>16:16</td>
        <td>16:23</td>
        <td>16:36</td>
        <td>16:47</td>
        </tr>
        <tr>
        <td>15:14</td>
        <td>15:21</td>
        <td>15:34</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>16:33</td>
        <td>16:40</td>
        <td>16:53 16:54</td>
        <td>17:05</td>
        </tr>
        <tr>
        <td>16:45</td>
        <td>16:52</td>
        <td>17:05</td>
        <td>17:16</td>
        </tr>
        <tr>
        <td>16:54</td>
        <td>17:01</td>
        <td>17:14</td>
        <td>17:25</td>
        </tr>
        <tr>
        <td>17:23</td>
        <td>17:30</td>
        <td>17:43</td>
        <td>17:54</td>
        </tr>
        <tr>
        <td>16:00</td>
        <td>16:07</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>17:42</td>
        <td>17:49</td>
        <td>18:02</td>
        <td>18:13</td>
        </tr>
        <tr>
        <td>17:55</td>
        <td>18:02</td>
        <td>18:15</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>18:02</td>
        <td>18:08</td>
        <td>18:21</td>
        <td>18:33</td>
        </tr>
        <tr>
        <td>18:31</td>
        <td>18:38</td>
        <td>18:51</td>
        <td>19:02</td>
        </tr>
        <tr>
        <td>19:14</td>
        <td>19:21</td>
        <td>19:34</td>
        <td>19:46</td>
        </tr>
        <tr>
        <td>19:39</td>
        <td>19:46</td>
        <td>19:59</td>
        <td>20:10</td>
        </tr>
        <tr>
        <td>20:23</td>
        <td>20:30</td>
        <td>20:43</td>
        <td>20:54</td>
        </tr>
        <tr>
        <td>20:47</td>
        <td>20:54 - 20:56</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`
}

tram22Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №22';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Буковинська – ст. Кривий Ріг-Головний';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'ст. Кривий Ріг-Головний - вул. Буковинська';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram22.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/196');

    tableFirst.innerHTML = `<table>
        <tr>
        <th>
        вул. Буковинська
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        вул. Українська
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        вул. Соборності
        </th>
        <th>
        пл. Домнобудівників
        </th>
        <th>
        ст. Кр. Ріг-Гол.
        </th>
        </tr>
        <tr>
        <td>03:49</td>
        <td>03:57</td>
        <td>04:05</td>
        <td>04:20/04:44</td>
        <td>04:56</td>
        <td>05:02</td>
        <td>05:14</td>
        <td>05:26</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>06:39</td>
        <td>06:48</td>
        <td>07:02</td>
        <td>07:12</td>
        <td>07:20</td>
        <td>07:32</td>
        <td>07:44</td>
        </tr>
        <tr>
        <td>09:17</td>
        <td>09:26</td>
        <td>09:35</td>
        <td>09:49</td>
        <td>09:58</td>
        <td>10:05</td>
        <td>10:18</td>
        <td>10:29</td>
        </tr>
        <tr>
        <td>11:47</td>
        <td>11:56</td>
        <td>12:05</td>
        <td>12:19/12:21</td>
        <td>12:31</td>
        <td>12:38</td>
        <td>12:51</td>
        <td>13:03</td>
        </tr>
        <tr>
        <td>14:34</td>
        <td>14:43</td>
        <td>14:52/14:54</td>
        <td>15:08</td>
        <td>15:18</td>
        <td>15:25</td>
        <td>15:38</td>
        <td>15:49</td>
        </tr>
        <tr>
        <td>17:11</td>
        <td>17:20</td>
        <td>17:28</td>
        <td>17:42/18:23</td>
        <td>18:33</td>
        <td>18:40</td>
        <td>18:53</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>20:00</td>
        <td>20:09</td>
        <td>20:18</td>
        <td>20:32 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
        <tr>
        <th>
        ст. Кр. Ріг-Гол.
        </th>
        <th>
        пл. Домнобудівників
        </th>
        <th>
        вул. Соборності
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Українська
        </th>
        <th>
        вул. Ньютона
        </th>
        <th>
        вул. Буковинська
        </th>
        </tr>
        </thead>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>З депо 03:19</td>
        <td>03:20</td>
        <td>03:32</td>
        <td>03:38</td>
        <td>03:46</td>
        </tr>
        <tr>
        <td>05:31</td>
        <td>05:43</td>
        <td>05:56</td>
        <td>06:03</td>
        <td>06:11</td>
        <td>06;26</td>
        <td>06:35</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>08:02</td>
        <td>08:13</td>
        <td>08:26</td>
        <td>08:34</td>
        <td>08:42</td>
        <td>08:57</td>
        <td>09:05</td>
        <td>09:14</td>
        </tr>
        <tr>
        <td>10:32</td>
        <td>10:43</td>
        <td>10:56</td>
        <td>11:03</td>
        <td>11:11</td>
        <td>11:26</td>
        <td>11:35</td>
        <td>11:44</td>
        </tr>
        <tr>
        <td>13:19</td>
        <td>13:31</td>
        <td>13:44</td>
        <td>13:51</td>
        <td>13:59</td>
        <td>14:14</td>
        <td>14:22</td>
        <td>14:31</td>
        </tr>
        <tr>
        <td>15:52</td>
        <td>16:04</td>
        <td>16:17</td>
        <td>16:25</td>
        <td>16:33</td>
        <td>16:48</td>
        <td>16:56</td>
        <td>17:06</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>18:57</td>
        <td>19:10</td>
        <td>19:17</td>
        <td>19:25</td>
        <td>19:40</td>
        <td>19:48</td>
        <td>19:57</td>
        </tr>
    </table>`
}

tram25Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №25';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'ПАТ ПГЗК - станція Кривий Ріг-Головний';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'станція Кривий Ріг-Головний - ПАТ ПГЗК';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram25.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/197');

    tableFirst.innerHTML = `<table>
        <tr>
        <th>
        ПАТ ПГЗК
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        вул. Соборності
        </th>
        <th>
        пл. Домнобудівників
        </th>
        <th>
        ст. Кр.Ріг-Гол.
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 04:39</td>
        <td>04:40</td>
        <td>04:49</td>
        <td>04:56</td>
        <td>05:08</td>
        <td>05:19</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 05:39</td>
        <td>05:40</td>
        <td>05:50</td>
        <td>05:57</td>
        <td>06:10</td>
        <td>06:21</td>
        </tr>
        <tr>
        <td>06:36</td>
        <td>06:43</td>
        <td>06:59</td>
        <td>07:09</td>
        <td>07:16</td>
        <td>07:29</td>
        <td>07:40</td>
        </tr>
        <tr>
        <td>07:33</td>
        <td>07:41</td>
        <td>07:57</td>
        <td>08:07</td>
        <td>08:14</td>
        <td>08:27</td>
        <td>08:38</td>
        </tr>
        <tr>
        <td>08:55</td>
        <td>09:03</td>
        <td>09:18 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>09:50</td>
        <td>09:58</td>
        <td>10:13</td>
        <td>10:23</td>
        <td>10:30</td>
        <td>10:43</td>
        <td>10:54</td>
        </tr>
        <tr>
        <td>12:20</td>
        <td>12:28</td>
        <td>12:44</td>
        <td>12:56</td>
        <td>13:03</td>
        <td>13:16</td>
        <td>13:28</td>
        </tr>
        <tr>
        <td>15:00</td>
        <td>15:08</td>
        <td>15:23</td>
        <td>15:33</td>
        <td>15:40</td>
        <td>15:53</td>
        <td>16:04</td>
        </tr>
        <tr>
        <td>16:22</td>
        <td>16:30</td>
        <td>16:46</td>
        <td>16:56</td>
        <td>17:03</td>
        <td>17:16</td>
        <td>17:28</td>
        </tr>
        <tr>
        <td>17:18</td>
        <td>17:25</td>
        <td>17:40</td>
        <td>17:50</td>
        <td>17:57</td>
        <td>18:10</td>
        <td>18:22</td>
        </tr>
        <tr>
        <td>18:42</td>
        <td>18:50</td>
        <td>19:06 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>19:36</td>
        <td>19:43</td>
        <td>19:58</td>
        <td>20:08</td>
        <td>20:15</td>
        <td>20:28</td>
        <td>20:40</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
        <tr>
        <th>
        ст. Кр.Ріг-Гол.
        </th>
        <th>
        пл. Домнобудівників
        </th>
        <th>
        вул. Соборності
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        Трампарк
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        ПАТ ПГЗК
        </th>
        </tr>
        <tr>
        <td>05:29</td>
        <td>05:41</td>
        <td>05:54</td>
        <td>06:01</td>
        <td>06:09</td>
        <td>06:25</td>
        <td>06:33</td>
        </tr>
        <tr>
        <td>06:24</td>
        <td>06:35</td>
        <td>06:48</td>
        <td>06:56</td>
        <td>07:04</td>
        <td>07:20</td>
        <td>07:28</td>
        </tr>
        <tr>
        <td>07:49</td>
        <td>08:01</td>
        <td>08:14</td>
        <td>08:21</td>
        <td>08:29</td>
        <td>08:44</td>
        <td>08:52</td>
        </tr>
        <tr>
        <td>08:45</td>
        <td>08:57</td>
        <td>09:10</td>
        <td>09:17</td>
        <td>09:25</td>
        <td>09:40</td>
        <td>09:47</td>
        </tr>
        <tr>
        <td>10:57</td>
        <td>11:08</td>
        <td>11:21</td>
        <td>11:28</td>
        <td>11:37</td>
        <td>11:53-55</td>
        <td>12:03</td>
        </tr>
        <tr>
        <td>13:38</td>
        <td>13:50</td>
        <td>14:03</td>
        <td>14:10</td>
        <td>14:18</td>
        <td>14:33</td>
        <td>14:41</td>
        </tr>
        <tr>
        <td>16:13</td>
        <td>16:25</td>
        <td>16:38</td>
        <td>16:45</td>
        <td>16:53</td>
        <td>17:08</td>
        <td>17:15</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>з депо 15:51</td>
        <td>15:52</td>
        <td>16:08-10</td>
        <td>16:18</td>
        </tr>
        <tr>
        <td>17:33</td>
        <td>17:45</td>
        <td>17:58</td>
        <td>18:05</td>
        <td>18:13</td>
        <td>18:29</td>
        <td>18:37</td>
        </tr>
        <tr>
        <td>18:30</td>
        <td>18:42</td>
        <td>18:55</td>
        <td>19:02</td>
        <td>19:10</td>
        <td>19:25</td>
        <td>19:33</td>
        </tr>
        <tr>
        <td>20:45</td>
        <td>20:57</td>
        <td>21:10</td>
        <td>21:17</td>
        <td>21:25 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`
}

tram27Btn.onclick = () =>{
    infoTitle.style = 'display: flex';
    infoTitle.innerHTML = 'Трамвай №27';
    tableFirst.style = 'display: flex';
    firstTableStations.style = 'display: block';
    firstTableStations.innerHTML = 'вул. Збагачувальна - станція Кривий Ріг-Головний';

    tableSecond.style = 'display: flex';
    secondTableStations.style = 'display: block';
    secondTableStations.innerHTML = 'станція Кривий Ріг-Головний- вул. Збагачувальна';

    routeBlock.style = 'display: flex';
    routeImage.setAttribute('src', 'images/tram27.png');
    routeMoreBtn.setAttribute('href', 'https://www.eway.in.ua/ru/cities/kryvyirih/routes/200');

    tableFirst.innerHTML = `<table>
        <tr>
        <th>
        вул. Збагачувальна
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        Трампарк
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        вул. Соборності
        </th>
        <th>
        пл. Домнобудівників
        </th>
        <th>
        ст. Кр.Ріг-Гол.
        </th>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 03:04</td>
        <td>03:05</td>
        <td>03:10</td>
        <td>03:16</td>
        <td>03:23</td>
        <td>03:32</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 03:59</td>
        <td>04:00</td>
        <td>04:08</td>
        <td>04:14</td>
        <td>04:27</td>
        <td>04:37</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>з депо 04:59</td>
        <td>05:00</td>
        <td>05:09</td>
        <td>05:16</td>
        <td>05:28</td>
        <td>05:39</td>
        </tr>
        <tr>
        <td>05:01</td>
        <td>05:10</td>
        <td>05:26</td>
        <td>05:35</td>
        <td>05:42</td>
        <td>05:55</td>
        <td>06:07</td>
        </tr>
        <tr>
        <td>05:51</td>
        <td>06:01</td>
        <td>06:17</td>
        <td>06:27</td>
        <td>06:34</td>
        <td>06:47</td>
        <td>06:59</td>
        </tr>
        <tr>
        <td>06:49</td>
        <td>06:58</td>
        <td>07:14</td>
        <td>07:24</td>
        <td>07:31</td>
        <td>07:44</td>
        <td>07:56</td>
        </tr>
        <tr>
        <td>07:18</td>
        <td>07:27</td>
        <td>07:42</td>
        <td>07:52</td>
        <td>07:59</td>
        <td>08:12</td>
        <td>08:24</td>
        </tr>
        <tr>
        <td>08:23</td>
        <td>08:31</td>
        <td>08:46</td>
        <td>08:56</td>
        <td>09:03</td>
        <td>09:16</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>09:09</td>
        <td>09:18</td>
        <td>09:34 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>10:52</td>
        <td>11:01</td>
        <td>11:17</td>
        <td>11:27</td>
        <td>11:34</td>
        <td>11:47</td>
        <td>11:59</td>
        </tr>
        <tr>
        <td>13:28</td>
        <td>13:37</td>
        <td>13:52</td>
        <td>14:02</td>
        <td>14:09</td>
        <td>14:22</td>
        <td>14:33</td>
        </tr>
        <tr>
        <td>15:54</td>
        <td>16:03</td>
        <td>16:19</td>
        <td>16:29</td>
        <td>16:37</td>
        <td>16:50</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>16:07</td>
        <td>16:16</td>
        <td>16:32-34</td>
        <td>16:43</td>
        <td>16:50</td>
        <td>17:03</td>
        <td>17:14</td>
        </tr>
        <tr>
        <td>17:03</td>
        <td>17:12</td>
        <td>17:28</td>
        <td>17:38</td>
        <td>17:45</td>
        <td>17:58</td>
        <td>18:10</td>
        </tr>
        <tr>
        <td>17:49</td>
        <td>17:58</td>
        <td>18:14</td>
        <td>18:24</td>
        <td>18:31</td>
        <td>18:44</td>
        <td>18:56</td>
        </tr>
        <tr>
        <td>18:30</td>
        <td>18:39</td>
        <td>18:54 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>20:10</td>
        <td>20:23</td>
        <td>20:34</td>
        <td>20:44</td>
        <td>20:50</td>
        <td>21:03</td>
        <td>--:--</td>
        </tr>
    </table>`;

    tableSecond.innerHTML = `<table>
        <tr>
        <th>
        ст. Кр.Ріг-Гол.
        </th>
        <th>
        пл. Домнобудівників
        </th>
        <th>
        вул. Соборності
        </th>
        <th>
        вул. Вітчизни
        </th>
        <th>
        Трампарк
        </th>
        <th>
        пр. Південний
        </th>
        <th>
        вул. Збагачувальна
        </th>
        </tr>
        <tr>
        <td>03:34</td>
        <td>03:43</td>
        <td>04:07</td>
        <td>04:13</td>
        <td>04:20-33</td>
        <td>04:48</td>
        <td>04:57</td>
        </tr>
        <tr>
        <td>04:40</td>
        <td>04:51</td>
        <td>05:04</td>
        <td>05:12</td>
        <td>05:20</td>
        <td>05:36-38</td>
        <td>05:48</td>
        </tr>
        <tr>
        <td>05:42</td>
        <td>05:54</td>
        <td>06:07</td>
        <td>06:14</td>
        <td>06:22</td>
        <td>06:37</td>
        <td>06:46</td>
        </tr>
        <tr>
        <td>07:17</td>
        <td>07:28</td>
        <td>07:41</td>
        <td>07:48</td>
        <td>07:56</td>
        <td>08:11</td>
        <td>08:20</td>
        </tr>
        <tr>
        <td>07:59</td>
        <td>08:11</td>
        <td>08:24</td>
        <td>08:31</td>
        <td>08:39</td>
        <td>08:56</td>
        <td>09:05</td>
        </tr>
        <tr>
        <td>08:29</td>
        <td>08:40</td>
        <td>08:53</td>
        <td>09:00</td>
        <td>09:08 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>09:56</td>
        <td>10:09</td>
        <td>10:16</td>
        <td>10:24</td>
        <td>10:40</td>
        <td>10:49</td>
        </tr>
        <tr>
        <td>12:20</td>
        <td>12:31</td>
        <td>12:44</td>
        <td>12:51</td>
        <td>12:59-13:01</td>
        <td>13:16</td>
        <td>13:25</td>
        </tr>
        <tr>
        <td>14:36</td>
        <td>14:47</td>
        <td>15:00</td>
        <td>15:08</td>
        <td>15:16</td>
        <td>15:32</td>
        <td>15:41</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>з депо 15:38</td>
        <td>15:39</td>
        <td>15:55</td>
        <td>16:04</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>--:--</td>
        <td>--:--</td>
        <td>з депо 16:34</td>
        <td>16:35</td>
        <td>16:61</td>
        <td>17:00</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>16:53</td>
        <td>17:06</td>
        <td>17:13</td>
        <td>17:21</td>
        <td>17:37</td>
        <td>17:46</td>
        </tr>
        <tr>
        <td>17:23</td>
        <td>17:34</td>
        <td>17:47</td>
        <td>17:54</td>
        <td>18:02</td>
        <td>18:18</td>
        <td>18:27</td>
        </tr>
        <tr>
        <td>18:21</td>
        <td>18:33</td>
        <td>18:47</td>
        <td>18:53</td>
        <td>19:01 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
        <tr>
        <td>19:01</td>
        <td>19:13</td>
        <td>19:26</td>
        <td>19:34</td>
        <td>19:42</td>
        <td>19:58</td>
        <td>20:07</td>
        </tr>
        <tr>
        <td>--:--</td>
        <td>21:06</td>
        <td>21:19</td>
        <td>21:26</td>
        <td>21:34 депо</td>
        <td>--:--</td>
        <td>--:--</td>
        </tr>
    </table>`
}


//TROLLEYBUS SECTION