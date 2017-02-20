#CUADERNO DE C y C++
Lenguaje multiplataforma, compilado y de propósito general, lo usaría para hacer API potentes de consola porque apps con interfaz prefiero Java + FX <br><br>

**Índice** <br>
1. Entornos de desarrollo <br>
2. Hola mundo <br>
3. Variables y constantes <br>
4. Operadores <br>
5. Punteros y referencias <br>
6. Entrada y salida estándar <br>
7. Control del flujo <br>
8. Arrays <br>
9. Cadenas <br>
10. Estructuras <br>
11. Funciones <br>
12. Ficheros en C y C++ <br>
13. Estructuras dinámicas <br>
14. POO <br>
15. Técnicas de programación <br>
16. Algoritmos de ordenación y búsqueda <br>
17. Control de errores y validación de datos <br>

<br>

## 1 - Entornos de desarrollo
A día de hoy uso el entorno CodeBlocks aunque probablemente me cambie a otro más bonito en apariencia por ejemplo SublimeText o Atom.

## 2 - Hola mundo
Un **hola mundo** convencional en C tiene el siguiente formato:

```c
#include <stdio.h>

/* Función principal */
int main (int argc,char **argv)
{
   /* Impresión por pantalla y salida del programa*/
   printf("Hola mundo\n");
   return 0;
}
```

Mientras que en C++ se veria como el siguiente:

```c++
#include <iostream>

using namespace std;

/* Función principal */
int main (int argc,char **argv)
{
   /* Impresión por pantalla y salida del programa*/
   cout << "Hola mundo" << endl; 
   return 0;
}
```

## 3 - Variables y constantes
En C y C++ existe varios **tipos de datos** que se deben poner al definir una variable.
Tipos de datos:
```c++
* INT = 1
* CHAR = ‘A’
* FLOAT = 3.14
* DOUBLE = 3.119e6
* VOID = no valor
* BOOL (solo C++) = true
```
A el tipo INT se le puede añadir short o long al principio.
**Sintaxis de variables:** `tipo identificador, identificador;`

Las constates se definen de dos maneras ambas se colocan después de include: 
* `#define IDENTIFICADOR valor`		NO TIPO DATO!
* `const tipo IDENTIFICADOR valor;`  OJO PUNTO Y COMA!

## 4 - Operadores
Son los mismos que en JS

## 5 - Punteros y Referencias
**Puntero**: ubicacion del trozo de memoria que guarda una variable.

Ejemplo Puntero:
```c++
int main(void){
  //Creo un puntero con el * antes del identificador
  int *miPuntero;
  int miVariable;
  
  //Indico a el puntero a que variable quiero apuntar
  miPuntero = &miVariable;
  
  return 0;
}
```

Operadores de puntero:
* **miPuntero** = Retorna la ubicacion de la variable a la que apunta
* **&miPuntero** = Retorna la ubicacion del puntero
* ***miPuntero** = Retorna el valor de la variable a la que apunta

## 6 - Entrada y salida estandar
La divido en dos partes, primero C y despues C++

#### C
Pausa hasta presionar cualquier tecla.
```c
#include <stdio.h>

int main(void){
  //Mensaje de salida
  printf("\nPresiona cualquier tecla para continuar...");
  
  //Funcion que detiene el flujo y coje un char
  getchar();
  
  return 0;
}
```

Funciones: 
* getchar() = Recoje un caracter ingresado por teclado
* printf("%d", 10) = Imprime el texto entre ""
* scanf("%d", &entero) = Recoje caracteres del teclado y los almacena en la variable
* fflush(stdin) = Limpia cache

####C++
* cout << "Hola mundo" = Muestra texto en pantalla
* cin >> miVariable = Guarda lo introducido por teclado en una variable

## 7 - Control de flujo
Las principales estructuras de control de flujo son: if-else, for, while, do-while, switch.
```c++
#include <iostream>
using namespace std;

int main(void){
  //CONDICIONAL IF
  if(condicion){
    //Comandos
  } else if(condicion){
    //Comandos
  } else {
    //Comandos
  }
  
  //CONDICIONAL SWITCH
  switch (variable){
    case valor:
      //Comandos
      break;
    default:
      //Comandos
  }
  
  //BLUCLE FOR
  for(i=0; i>valor; i++){
    //Comandos
  }
  
  //BUCLE WHILE
  while(condicion){
    //Comandos
  }
  
  //BUCLE DO-WHILE
  do{
    //Comandos
  }while(condicion)
  
  return 0;
}
```

## 8 - Arrays
Existen dos tipos de arrays, unidireccionales y bidireccionales. Todos los elementos dentro de un array deben ser del mismo tipo.

```c++
#include <iostream>
using namespace std;

int main(){
  //Definicion de un array unidireccional (definir tamaño)
  int miArray[10] = {10,1,1,1,1,1,1,1};
  
  //Definicion de array bidireccional (filas, columnas)
  int arrayBidireccional[3][3] = {
    0,1,0, //Ojo coma al final
    0,0,1,
    1,1,1
  };
  
  return 0;
}
```

## 9 - Cadenas
Se declaran como si fueran un array de caracteres. Siempre tienes que poner un caracter de mas ya que el ultimo hueco del array se completa con '\0'. En C añadir < string.h >

Funciones:
* gets(variable) = Recoje cadenas con espacios incluidos
* printf("%s", &variable) = Imprime una cadena
* strcat(destino, origen) = Copia la cadena del segundo parametro a continuacion de la primera
* strlen(cadena) = Indica el tamaño de la cadena
* strstr(cadena1, cadena2) = Buscar la cadena dos dentro de la primera
* strlwr(cadena) = Convierte una cadena a minusculas
* strupr(cadena) = Convierte una cadena a mayusculas
* atoi(cadena) = Convierte una cadena a int

```c
//Funcion strtok()
#include <stdio.h>
#include <string.h>

int main(){
  //Declaramos un puntero y una cadena
  char cadena[100] = "platano, manzana, pera";
  char *cachos;
  
  //Definimos el puntero
  p = strtok(cadena, ",");
  
  //Comprobamos si hay fragmentos
  if(p){
    printf("\n%s", p);
  }
  
  //Seguimos comprobando mas fragmentos (OJO NULL)
  while(p = strtok(NULL, ",")){
    printf("\n%s", p);
  }
  
  return 0;
}
```

## 10 - Estructuras
Son arrays que pueden almacenar diferentes tipos de datos.
