# Respuestas

## 1. ¿Qué ventaja tiene usar TypeScript y definir la clase Serie en lugar de usar objetos literales genéricos (any) como lo haríamos en JavaScript puro al iterar la tabla?

Usar TypeScript y una clase `Serie` permite definir una estructura clara para los datos, con atributos y tipos específicos. Esto ayuda a detectar errores antes de ejecutar el programa, por ejemplo si falta una propiedad o si un atributo tiene un tipo incorrecto. En cambio, con `any` se pierde esa validación y el código queda más expuesto a errores en tiempo de ejecución.

## 2. En tu función que calcula el promedio, ¿por qué es recomendable usar variables let para el acumulador de la suma y const para el arreglo de datos?

Se usa `let` para el acumulador porque su valor cambia en cada iteración al ir sumando las temporadas. Se usa `const` para el arreglo porque la referencia al arreglo no cambia: se recorren sus elementos, pero no se reasigna la variable. Esto hace el código más claro y evita reasignaciones accidentales.

## 3. ¿Qué pasaría en tiempo de compilación si intentas asignar el valor "cinco" al atributo seasons de una Serie en el archivo data.ts?

TypeScript mostraría un error de compilación porque `seasons` está definido como `number` en la clase `Serie`, y `"cinco"` es un `string`. Esa incompatibilidad de tipos impediría compilar correctamente hasta corregir el valor.
