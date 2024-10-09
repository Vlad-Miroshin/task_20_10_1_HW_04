## Пример 2

В классе необходимо реализовать метод, возвращающий в виде строки список электроприборов.
Каждый прибор имеет свой метод toString(), возвращающий своё название.

Первая версия метода делала это с помощью цикла

```
    this._items = [];

function toString() {
    const captions = [];

    for (i = 0; i < this_items.length; i++) {
        captions.push(this_items[i].toString());
    }

    return captions.join(', ');
}
```

Применив принцип KISS сделаем это проще, методом массива map

```
    toString(separator = ', ') {
        const captions = this._items.map(item => item.toString());
        return captions.join(separator);
    }
```

Код сократился, стал читаться легче и сделался более универсальным (можно указать разделитель при вызове метода).


[< Н А З А Д](../../README.md)

