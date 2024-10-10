## Пример 1

До применения методологии БЭМ именование классов произвольное.

```
    <div class="styles">
        <div class="container styles-container">

            <div class="styles-nav">

                <div class="styles-title">
                    We realize your wildest fantasies
                </div>

                <ul class="styles-nav-list">
                    <li><a class="selected" href="#">American classic</a></li>
                    <li><a href="#">Empire</a></li>
                    <li><a href="#">Classical</a></li>
                    <li><a href="#">Loft</a></li>
                    <li><a href="#">Minimalism</a></li>
                    <li><a href="#">Provence</a></li>
                    <li><a href="#">Romanticism</a></li>
                    <li><a href="#">Scandinavian style</a></li>
                    <li><a href="#">Mediterranean style</a></li>
                    <li><a href="#">High tech</a></li>
                    <li><a href="#">Eclecticism</a></li>
                </ul>

            </div>

            <div class="styles-img-group styles-img-group-1">
                <img src="./assets/images/styles_1.jpg" alt="American classic 1">
                <img src="./assets/images/styles_2.jpg" alt="American classic 2">
            </div>
            <div class="styles-img-group styles-img-group-2">
                <img src="./assets/images/styles_3.jpg" alt="American classic 3">
                <img src="./assets/images/styles_4.jpg" alt="American classic 4">
            </div>

        </div>
    </div>

```

Изменим именование css-классов в соответствие с методологией "Блок, Элемент, Модификатор" (БЭМ).
Отказываемся от использования в css селекторов тэгов (и идентификаторов). 
Каждый html-элемент получает свой класс.

```
    <div class="styles">
        <div class="container styles__container">

            <div class="styles__nav">

                <div class="styles__nav_title">
                    We realize your wildest fantasies
                </div>

                <ul class="styles__nav_list">
                    <li class="styles__nav_item styles__nav_item_selected">
                        <a  href="#">American classic</a>
                    </li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">Empire</a></li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">Classical</a></li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">Loft</a></li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">Minimalism</a></li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">Provence</a></li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">Romanticism</a></li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">Scandinavian style</a></li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">Mediterranean style</a></li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">High tech</a></li>
                    <li class="styles__nav_item"><a class="styles__anchor" href="#">Eclecticism</a></li>
                </ul>

            </div>

            <div class="styles__img-group styles__img-group--1">
                <img class="styles__img" src="./assets/images/styles_1.jpg" alt="American classic 1">
                <img class="styles__img" src="./assets/images/styles_2.jpg" alt="American classic 2">
            </div>
            <div class="styles__img-group styles__img-group--2">
                <img class="styles__img" src="./assets/images/styles_3.jpg" alt="American classic 3">
                <img class="styles__img" src="./assets/images/styles_4.jpg" alt="American classic 4">
            </div>

        </div>
    </div>

```


[< Н А З А Д](../../README.md)

