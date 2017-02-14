#GIT
Cuaderno de referencia rapida sobre git. No recomendable usar como guia de inicio. <br>

##Vocabulario
* **Commit**: versionado, check point, (Recomiendo: commit al día o al acabar)
* **Branch**: ramas que no afectan a el proyecto pero que luego se pueden integrar.
* **Push**: subir los cambios
* **Pull**: recuperar código de internet (sincronizar el código de github al pc)
* **Fork**: copiar un  repo de otra persona
  <br>
##CLI
* Diff (ver cambios)
* Status (ver cambios detectados automáticamente)
* Add *< file >* (añadir cambios)
* Reset HEAD *< file >* (quitar cambios)
* Rm *< file >* (borrar el archivo de github)
* Commit -m “Cambios en commit” (meter cambios)
* Push origin *< branch >* (subir cambios)
* Pull origin *< branch >* (descargar cambios)
* Log (registro de cambios)
  * --decorate
  * --graph
  * --all
* Branch (crea rama) (-d *< branch >* quitar ramas)
* Checkout *< branch >* (cambiar entre ramas)
  * -b (crear y cambiar)
* Merge *< branch >* (mezcla la rama actual con *< branch >*)
  <br>
##Flujo de trabajo
* Iniciar git
* Hacer pull
* Code!
* Añadir cambios
* Commit
* Push