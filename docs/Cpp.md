# CUADERNO DE C y C++
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
En C y C++ existe varios **tipos de datos** que se deben poner al definir una variable. <br>
Tipos de datos:
```c++
* INT = 1
* CHAR = ‘A’
* FLOAT = 3.14
* DOUBLE = 3.119e6
* VOID = no valor
* BOOL (solo C++) = true
```
A el tipo INT se le puede añadir short o long al principio.<br>
**Sintaxis de variables:** `tipo identificador, identificador;`

Las constates se definen de dos maneras ambas se colocan después de include: 
* `#define IDENTIFICADOR valor`		NO TIPO DATO!
* `const tipo IDENTIFICADOR valor;`  OJO PUNTO Y COMA!

## 4 - Operadores
Son los mismos que en JS

## 5 - Punteros y Referencias
**Puntero**: ubicacion del trozo de memoria que guarda una variable. <br>

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

**Operadores de puntero:**
* miPuntero = Retorna la ubicacion de la variable a la que apunta
* &miPuntero = Retorna la ubicacion del puntero
* *miPuntero = Retorna el valor de la variable a la que apunta

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

**Funciones:** 
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

**Funciones:**
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
Son arrays que pueden almacenar diferentes tipos de datos. <br>
**Concepto:** Es como cuando defines el modelo de una db. Como un tipo de dato. <br>
**Consejo:** Empezar las estructuras con tipoNombre.<br>
```c++
/* Aqui includes y constantes */

//Se define la estructura
struct tipoLibro{
  int paginas;
  char autor[100];
}

int main(void){
  //La variable no se declara
  struct tipoLibro variable;
  variable.paginas = 100;
  variable.autor = "Yo";
}
```

## 11 - Funciones
Son piezas individuales de codigo reusables y con argumentos.
```c++
//Includes

//OJO A ESTO
void hola(char mensaje);

//Funcion main
void hola(char mensaje){
  cout<< mensaje <<endl;
  
  //Si tiene valor de retorno se cambia el void
}
```
Para acceder a una variable desde una funcion se usan punteros o referencias.
```c++
void incrementar (int *n);

int main (void){
  int numero = 1;
  
  //Ojo con el &
  incrementar(&numero);
}

void incrementar (int *n){
  *n = *n + 1;
}
```

## 12 - Ficheros en C y C++
#### Ficheros en C
```c
FILE *archivo;

//Abrir un fichero
archivo = fopen("db.txt", modo);

/* Modos de abrir un archivo (aniadir t al final para txt)
r = read
a = append
r+ = leer y modificar
w+ = crea y lee
*/

//Cerrar el archivo
fclose(archivo);

//Escribir en un fichero
fputs("Hola mundo", archivo);

//Leer un caracter
fgetc(archivo);

//Ver si se ha llegado al final del archivo (while con anterior)
feof(archivo);

//Escribir en archivo
fwrite(direccion_dato, tamanio, veces, archivo);

//Leer cualquier cosa
fread(direccion_dato, tamanio, veces, archivo);
```

#### Ficheros en C++
Para manejar ficheros en C++ necesitamos llamar una biblioteca especial, hay dos tipos de variable de archivo uno que crea (ofstream)  y otro que solo abre (ifstream).
```c++
//

#include <fstream>
#include <iostream>
using namespace std;

int main(void){
  //Creamos variable fichero
  ifstream miArchivo;
  miArchivo.open(archivo, modo);
  
  /* Modos Abrir Archivo
  ios::app = Añade datos al final del archivo
  ios::in = Lee datos, por defecto ifstream
  ios::out = Escribe datos, por defecto ofstream
  ios::binary = Abrir modo binario
  ios::ate = Coloca un apuntador del fichero al final del mismo
  ios::nocreate = Si el archivo no existe no abre
  ios::noreplace = No remplaza archivo
  ios::trunc = Sobreescribe el archivo
  */
  
  //Escribir datos en un archivo
  miArchivo << "Hola mundo"; 
  
  //Detectar el final archivo (en un while)
  miArchivo.eof();
  
  //Leer cadenas archivo
  miArchivo >> cadena;
  cout << cadena;
}
```
Ahora un ejemplo de persistencia de estructuras en archivos .dat
```c++
//Base de datos Twitter

#include <fstream>
#include <iostream>
using namespace std;

//Defino estructura
struct tipoUser {
  char nombre[30];
  char username[10];
};

int main(void){
  //Asigna variable a la estructura
  struct tipoUser usuario;
  
  //Crea variable archivo
  ofstream db;
  //Abro el archivo en modo binario
  db.open("db.dat", ios::out | ios::binary);
  
  if(!db){
    cout << "No se ha podido crear el fichero";
  } else {
    //Pedimos tres usuarios
    for (int i=0; i<=3; i++){
      cout << "Escriba su nombre >> ";
      cin << usuario.nombre;
      cout << "Escriba su usuario >> ";
      cin << usuario.username;
      
      //Añadimos el nombre al fichero || sizeof() = Indica tamaño
      db.write((char *) &usuario, sizeof(usuario));
    }
    //Cierro fichero
    db.close();
  }
}
```
Para leer los datos anteriormente metidos en db.dat
```c++
//Abrimos fichero modo lectura binario
db.open("db.dat", ios::in | ios::binary);

//Leemos todo ojo sizeof()
db.read((char *) $usuario, sizeof(struct tipoUser));

//Bucle hasta final archivo
while(db.eof()){
  //Imprimimos resultados
  cout << "Nombre = " << usuario.nombre << endl;
  cout << "Usuario = " << usuario.username << endl;
  
  //Volvemos a leer otro registro
  db.read((char *) $usuario, sizeof(struct tipoUser));
}
```
Mirar uso de seekp y seekg.

## 13 - Estructuras dinamicas
Es una forma de crear "arrays" con un tamaño dinamico, es decir, se adaptan a datos nuevos. Es importante eliminarlos al final con `delete();` <br>
Esto se consigue reservando memoria y liberandola, ver siguiente ejemplo.

```c++
#include <iostream>
#include <stdlib.h> //Libreria requerida para reservar memoria

//Creamos la estructura nodo
struct nodo{
  int ip; //Definimos datos del nodo
  
  //Definimos un puntero que apunta a el siguiente elemento
  struct nodo *siguiente; 
}

//Definimos un tipo de dato tipoNodo
typedef struct nodo *tipoNodo;

//Funciones
void insertarInicio(tipoNodo &miNodo, int valor);
void insertarFinal(tipoNodo &miNodo, int valor);
tipoNodo buscarNodo(tipoNodo &miNodo, int valor);

//Funcion principal
int main(void){
  tipoNodo miNodo = NULL; //Igualamos el nodo principal a NULL
  tipoNodo resultado;
  int valor;

  insertarInicio(miNodo, valor);
  insertarFinal(miNodo, valor);
  
  resultado = buscarNodo(miNodo, valor);
}

void insertarInicio(tipoNodo &miNodo, int valor){
  tipoNodo nd; //Definicion variable tipoNodo
  nd = new(struct nodo); //Asignamos espacio dinamico a la variable nd
  
  //Decimos que el ip es igual a valor, se accede a ip con "->"
  nd->ip = valor; 
  nd->siguiente = miNodo; //Siguiente = miNodo pasado por parametro
  miNodo = nd; //Hago que miNodo valga el nuevo nodo nd
}

void insertarFinal(tipoNodo &miNodo, int valor){
  tipoNodo nd1, nd2 = new(struct nodo); //Creo dos variables una dinamica
  
  //Relleno los datos de el nodo
  nd2->ip = valor;
  nd2->siguiente = null; //Para que e¡sea el ultimo
  
  //Si es el unico nodo ponlo el primero
  if(miNodo == NULL) miNodo = nd2;
  
  else
  	nd1 = miNodo;
  	
  	//Mientras el nodo no tenga siguiente se cambia de nodo
  	while(nd1->siguiente != NULL){
  	  //Cambio a el parametro siguiente del siguiente nodo
      nd1 = nd1->siguiente; 
  	}
  	nd1->siguiente = nd2;
}

tipoNodo buscarNodo(tipoNodo &miNodo, int valor){
  tipoNodo nd = miNodo;
  
  /*
  Mientras el parametro siguiente del nodo no sea null
  se verifica si el apartado ip es igual al valor,
  si es asi se retorna el nodo nd.
  */
  while(nd1->siguiente != NULL){
    if(nd->ip == valor) return nd;
    else
      nd = nd->siguiente;
  }
}
```