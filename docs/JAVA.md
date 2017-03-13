#CUADERNO DE JAVA
Lenguaje de programacion de proposito general completamente orientado a objetos. Tiene dos manera de trabajo con el mismo:

* JSE (Java Standart Edition) incluye el lenguaje de programacion, el runtime y un conjunto de herramientas de desarrollo.
* JEE (Java Enterprise Edition) biblioteca orientada al desarrollo de aplicaciones empresariales.
  <br><br>

**INDICE**<br>
1. Introduccion al lenguaje JAVA<br>
2. POO<br>
3. Acceso a bases de datos (JDBC)<br>
4. Disenio de aplicaciones JAVA (1/2)<br>
5. Interfaces graficas (GUI)<br>
6. Multithreading (hilos)<br>
7. Networking<br>
8. Disenio de aplicaciones JAVA (2/2)<br>
9. Estructuras de datos dinamicas<br>
10. Parametrizacion mediante XML<br>
11. Introspeccion de clases y objetos<br>
12. Generalizaciones y desarrollo de frameworks<br>
13. Entrada/Salida<br>
14. Consideraciones finales<br>
15. ORM y persistencia de datos<br>
16. Inversion de control por inyeccion de dependencias<br>
17. Actualizacion a Java 8<br>

<br>

## 1 - Introduccion al lenguaje JAVA
Un hola mundo en java se veria de la siguiente manera: 
```java
 package libro.cap1;
 
 public class HolaMundo{
	 public static void Main(String[] args){
		 system.out.printIn("Hola Mundo!");
	 }
 }
```
Ahora vamos a probar a leer datos por teclado.
```java
 package libro.cap1;
 
 import java.util.Scanner; //Import clase
 
 public class HolaMundo{
	 public static void Main(String[] args){
		//Esta clase permite leer datos por teclado
		Scanner scanner = new Scanner(System.in);
		System.out.print("Introduce su nombre >> ");
		
		//Leemos valor
		String nombre = scanner.nextLine();
		System.out.println("Te llamas: " + nombre);
	 }
 }
```
> Dato: println agrega un salto de linea al final y print normal no

#### Declaracion de variables
Se hace como en C++, se indica el tipo y luego el identificador. Para leer por teclado se usa `scanner.nextInt()` se varia int por el tipo de dato y con string se omite. <br>
> Admite datos String y boolean.

#### Estructuras condicionales
En JAVA existen tres tipos de condicionales:
* Condicional simple: if
* Condicional compuesto: switch
* Condicional in-line: `(a>b) ? "Caso verdadero": "Caso falso";`

#### Estructuras repetitivas
Son exactamente las mismas de en C++, while, do-while y for.

#### Definicion de contantes
Las constantes se definen como metodos de una clase con el modificador "final".
> Se recomienda definir constantes siempre en mayusculas.

```java
package libro.cap1;

public class constantes {
  
  public static final String NOMBRE = "Andres"; //Constante
  
  public static void main(String[] args){
    //Codigo
  }
}
```
#### Arrays
Los arrays son como en C++, son estaticos, es decir, una vez declarado el numero de elementos este no se puede aumentar y tienen tipo unico.<br>
Declaracion: `int miArray[] = new int[10];` <br>
Si se conocen los elementos que tiene se puede definir asi: `int miArray[] = {1,2}`<br>
> miArray.length devuelve el numero de datos de el array

#### Matrices
Son como los arrays bidimensionales de C++, se definen primero las filas y luego las columnas. <br>
Sintaxis: `int miMatriz [] [] = new int [f] [c];`

#### Tratamiento de Strings
Aqui aprenderemos mas a detalle el manejo de Strings.
* Acceso a un caracter de la cadena = `String.charAt(int posicion);`
* Busca si una cadena contine el caracter desde inicio = `String.indexOf("");`
* Busca si una cadena contine el caracter desde fin = `String.lastIndexOf("");`
* Obten porciones de una cadena = `String.substring(int inicio, int fin);`
* Verificar el inicio de una cadena = `String.startWith("");`
* Verificar el final de una cadena = `String.endWith("");`
* Concatenar cadenas:
  * Con el operador +
  * Con StringBuffer. Instancio una variable `StringBuffer sb = new StringBuffer();` y aniado datos con `.append()` al final se debe pasar el objeto a cadena con `.toString()`
* Conversiones:
  * `Integer.toString(int);`
  * `Integer.parseInt(String);`
  * `Float.toString(float);`
  * `Float.parseFloat(String);`
* Particionar Strings:
  * Dividir sin expresiones regulares. Devuelve un array. = `String.split("");`
  * Con expresiones regulares se usa StringTokenizer. Se define la variable `StringTokenizer st = new StringTokenizer(String, "");`
* Comparar cadenas = `String.equals(String);`

#### La maquina virtual y JDK
Los programas en JAVA se ejecutan sobre una maquina virtual normalmente llamada JVM (Java Virtual Machine) o JRE (Java Runtime Enviroment). Estos dos permiten ejecutar aplicaciones JAVA. <br><br>

Si ademas de ejecutarlas como usuario queremos compilarlas y realizar tareas de desarrollo vamos a nacesitar el paquete JDK (Java Development Kit).

## 2 - POO
Java es un enguaje fuertemente tipado, esto quiere decir que a todo recurso que se vaya a usar se le tiene que definir un tipo. <br>
En POO tenemos unos conceptos clave:
* Objetos = son variables cuyo tipo de dato es una clase
* Clase = estructura que agrupa datos y la manera de trabajar con ellos
* Atributos = son la variables dentro de la clase, suelen ser private
* Metodos = son las funciones que permiten trabajar estos datos

Se recomienda como buena practica de Java definir "getters" y "setters" para los atributos a los que queramos que el usuario tenga acceso. 

#### Metodo "toString()"
Este es un metodo de Java que se auto invoca al meter una clase en una salida por consola. El metodo se puede sobreescribir gracias a que Java lo soporta. Es util para elegir la manera en que se visualizan los datos.

#### Metodo "equals()"
Es un metodo que permite elegir la manera en la que se coparan dos elementos de la misma clase.

#### Definicion y creacion de objetos
Ejemplo de una clase y una definicion de objeto:
```java
import java.util.Scanner;

public class PC{
  //Atributos
  private int memoriaRAM;
  private int memoriaROM;
  
  //Constructor
  public PC(int ram, int rom){
    memoriaRAM = ram;
    memoriaROM = rom;
  }
  
  //Getters
  public int getRAM(){return memoriaRAM;}
  public int getROM(){return memoriaROM;}
  
  //Setters
  public void setRAM(int ram){memoriaRAM = ram;}
  public void setROM(int rom){memoriaROM = rom;}
  
  public String toString(){
  	return "RAM = "+memoriaRAM+" ROM = "+memoriaROM;
  }
  public boolean equals(Object o){
    PC obj = (PC)o; //Declaro un objeto tipo PC
    return (memoriaRAM >= obj.memoriaRAM) && (memoriaROM >= obj.memoriaROM);
  }
}
```
