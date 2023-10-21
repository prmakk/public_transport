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

const navBusBtn = document.querySelector('.navBus');
const navMiniBusBtn = document.querySelector('.navMiniBus');

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

function clearInfo(){
    tableFirst.style = 'display: none';
    tableSecond.style = 'display: none';
    infoTitle.style = 'display: none';
    firstTableStations.style = 'display: none';
    secondTableStations.style = 'display: none';
    routeBlock.style = 'display: none';
}

function busChosen(){
    location.href = "#mainInfo";
    title.innerHTML = 'Розклад руху автобусів Кривий Ріг';
    infoTitle.style = 'display: none';
    clearMinibusButtons();
    activateBusButtons();
    clearInfo();
    busChooseBtn.style = `background-color: ${activeBg}`;
    minibusChooseBtn.style = `background-color: ${defaultBg}`;
    numbers.style = 'display: flex';
}

function miniBusChosen(){
    location.href = "#mainInfo";
    title.innerHTML = 'Розклад руху маршруток Кривий Ріг';
    infoTitle.style = 'display: none';
    clearBusButtons();
    activateMinibusButtons();
    clearInfo();
    minibusChooseBtn.style = `background-color: ${activeBg}`;
    busChooseBtn.style = `background-color: ${defaultBg}`;
    numbers.style = 'display: flex';
}

logoBtn.onclick = () =>{
    clearBusButtons();
    clearMinibusButtons();
    clearInfo();
    numbers.style = 'display: none';
}

//BUS SECTION
navBusBtn.onclick = () =>{
    busChosen();
}

busChooseBtn.onclick = () =>{
    busChosen();
}

busChooseBtn.addEventListener('mouseover', () => {
    busChooseBtn.style = `background-color: ${hoverColor}`;
});

busChooseBtn.addEventListener('mouseout', () => {
    busChooseBtn.style = `background-color: ${defaultBg}`;
});

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
        </thead>
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
        </thead>
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
        </thead>
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
        </thead>
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
        </thead>
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
        </thead>
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
        </thead>
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
        </thead>
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
        </thead>
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

minibusChooseBtn.addEventListener('mouseover', () => {
    minibusChooseBtn.style = `background-color: ${hoverColor}`;
});

minibusChooseBtn.addEventListener('mouseout', () => {
    minibusChooseBtn.style = `background-color: ${defaultBg}`;
});

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
        </thead>
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