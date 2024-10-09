## Пример 1

Есть прототип с общими свойствами и методом toString(), возвращающим текстовое описание объекта.
Есть его потомки, со своими уникальными свойствами и реализацией методов toString().

```
const device = {
    ...

    toString() {
        ...
    }
}

const lamp = {
    __proto__: device,

    this.toString = function() {
        if (this.getModel()) {
            return `${this.getSelfName()}('${this.getModel()}', ${this.getPower()}wt)`
        } else {
            return `${this.getSelfName()}(${this.getPower()}wt)`
        }
    }
}


```

Применив принцип SOLID (Принцип открытости-закрытости), с учётом минимальных требований к реализации метода toString(), реализуем в прототипе схематичный вывод свойств унифицированным способом, избавив потомков от собственных реализаций метода toString().

```
const device = {
    ...

    toString() {
        const keys = Object.getOwnPropertyNames(this);
        const props = [];

        keys.forEach(
            (key) => props.push(`${key}: ${this[key]}`)
        );

        return `Device(${props.join(', ')})`;
    }
}

const lamp = {
    __proto__: device,
}

```

Код потомков значительно сократился а общий код модуля стал лучше сопровождаемым.


[< Н А З А Д](../../README.md)

