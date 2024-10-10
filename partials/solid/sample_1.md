## Пример 1

Есть базовый класс электроприборов Devise предоставляющий потомкам свойство power (номинальная мощность), 
метод isOn() (состояние вкл./выкл.) и метод getInputPower(), возвращающий значение потребляемой мощности
в зависимости от состояния прибора.

Есть его потомок класс Lamp (лампочка), со своим уникальным свойством dimmer, 
принимающим значение от 0 до 100 (%) и ограничивающим потребляемую лампочкой мощность.

```
class Device {
    ...

    isOn() {
        return this._state === STATE_ON;
    }

    getInputPower() {
        return this.isOn() ? this.getPower() : 0;
    }
}

class Lamp extends Device {
    _dimmer = 100;  // значение диммера 0-100%

    getDimmer() {
        return this._dimmer;
    }
}

```

Реализация метода getInputPower(), учитывающая особенности конкретного класса-потомка, в классе-предке
была-бы нарушением принципа "открытости-закрытости". Базовый класс показывал-бы необоснованную осведомлённость о свойствах потомков. Кроме того, если появятся потомки с другим алгоритмом расчёта мощности пришлось-бы снова модифицировать метод базового класса для учёта их особенностей.

```
class Device {
    ...

    isOn() {
        return this._state === STATE_ON;
    }

    getInputPower() {
        let p =  this.isOn() ? this.getPower() : 0;

        if (this.getClassName() === 'Lamp')
            p = p * this.getDimmer() / 100;

        return p;    
    }
}

class Lamp extends Device {
    _dimmer = 100;  // значение диммера 0-100%

    getDimmer() {
        return this._dimmer;
    }
}

```

Поэтому, руководствуясь принципом "открытости-закрытости" SOLID, метод getInputPower() выполнен полиморфно и потомки могут реализовать этот метод самостоятельно.
При этом базовый класс не будет нуждаться в изменениях при появлении новых потомков или изменениях в их методы getInputPower().

```
class Device {
    ...

    isOn() {
        return this._state === STATE_ON;
    }

    getInputPower() {
        return this.isOn() ? this.getPower() : 0;
    }
}

class Lamp extends Device {
    _dimmer = 100;  // значение диммера 0-100%

    getDimmer() {
        return this._dimmer;
    }

    getInputPower() {
        return super.getInputPower() * this.getDimmer() / 100;
    }
}

```


[< Н А З А Д](../../README.md)

