## Пример 1

В классе необходимо реализовать метод, подсчитывающий общую мощность включенных электроприборов.

Первая версия метода делала это с помощью цикла

```
    this._items = [];

    getInputPower() {
        let sum = 0;

        for (i = 0; i < this._items.length; i++) {
            sum = sum + this._items[i].getInputPower();
        }

        return sum;
    }
```

Применив принцип KISS сделаем это проще, методом массива reduce

```
    getInputPower() {
        return this._items.reduce(
            (sum, item) => sum + item.getInputPower()
            , 0
        );
    }
```

Код сократился и стал читаться легче.


[< Н А З А Д](../../README.md)

