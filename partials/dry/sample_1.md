## Пример 1

В скрипте демонстрации работы кода требовалось выводить значение текущей потребляемой мощности электроприборов.

Первая версия метода делала это с помощью повторяющейся конструкции вида

```
    console.log(`Total input power is ${devices.getInputPower()} wt`);
    ...
    console.log(`Total input power is ${devices.getInputPower()} wt`);
    ...
    console.log(`Total input power is ${devices.getInputPower()} wt`);

```

Применив принцип DRY оформим этот код в виде функции

```

function logTotalInputPower(devices) {
    console.log(`Total input power is ${devices.getInputPower()} wt`);
}

```

Данное решение соответствует принципу DRY и улучшает сопровождаемость кода.


[< Н А З А Д](../../README.md)

