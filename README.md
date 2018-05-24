# Coderoom Helper CLI
## ¿Qué debes hacer?
1. Clona este repositorio `git clone git@github.com:CodeRoomMX/helper.git`
2. En la terminal ve a la carpeta clonada, y una vez dentro ejecuta el comando `npm install`, este comando instalará dos bibliotecas de codigo muy útiles:
  
  * [**colors**](https://www.npmjs.com/package/colors) que permite mandar a consola texto de diferente color y formato.
  
  * [**commander**](https://www.npmjs.com/package/commander) que nos permite crear nuevas instrucciones para nuestra línea de comandos.

3. Una vez se haya completado la instalación ejecuta el comando: `./coderoom todo` para saber cuales son los pasos a seguir en este reto.
4. Los comandos indicados en el todo se deben agregar al archivo coderoom que se encuentra en la raíz del directorio del proyecto.
5. En este reto cuenta mucho el como se ve la información reflejada(usando colores o estilos de texto) y que tan claras son tus instrucciones.
6. *Bonus!!!* Si ya terminaste y deseas un bonus, agrega un nuevo comando `costo` que nos saque en consola el costo de tu trabajo con respecto al valor de tus horas. Suponiendo que mi costo por hora es de $150:
```
$ ./coderoom costo 8
$ $1,200
```