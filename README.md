# FOREST FIRES ON JUPYTER Notebooks-geemap
<img src='./IMG/head_a.png' alt='Logo Head' align='center' width='99%'></img>
<br>
<img src='./IMG/header_1.png' alt='Logo UNSPIDER' align='left' width='50%'></img>
<br>. 
<hr> 

 Ejecicicos en español sobre Jupyter Notebook y geemap para el monitoreo de incendios forestales
# Incendios Forestales en GEE mediante el paquete geemap
Aplicaciones en Google Earth Engine para el monitoreo y manejo de Incendios Forestales.
# 1. Descripción
La siguiente es una colección de scripts básicos, explicados en **español** para el procesamiento digital de imágenes en [**Google Earth Engine (GGE)**](https://earthengine.google.com/), con el fin de poder trabajar con datos de forma masiva en la nube mediante software de código abierto, como alternativa alos software propietarios de escritorio.
Todos los desarrollos descritos a continuación son parte del trabajo desarrollado dentro de la estancia científica 
en [UNSPIDER](https://www.un-spider.org) (oficina de Bonn -Alemania), Febrero de 2020.
Este repositorio es una colección de ejemplos earthengine en Jupyter Notebook en Python. Tambien se pueden ver las capas de datos de Earth Engine de forma interactiva en las notebooks Jupyter sin tener que instalar QGIS. En estos ejemplos se están utilizando varios paquetes de Python, incluidos Earth Engine Python API, folium, ipyleaflet y geemap. El paquete geemap Python se basa en los paquetes folium e ipyleaflet e implementa varios métodos para interactuar con las capas de datos de Earth Engine, como `Map.addLayer`, `Map.setCenter`, `Map.centerObject` y `Map.setOptions`. 

# Ejercicios básicos de procesamiento digital en Jupyter Notebook

Esta colección se basa en cuadernos Jupyter o [**Jupyter Notebook**](https://jupyter.org/), que permiten un alto nivel de aprendizaje interactivo, ya que el código, su descripción y la visualización se combinan en un solo lugar. Si no ha trabajado antes con los Cuadernos Jupyter, puede consultar el módulo [Introducción a Python y Project Jupyter](./01_INTRODUCCIÓN.ipynb) para obtener una breve introducción a los cuadernos Jupyter y sus beneficios.

Material organizado por el [**Alexander Ariza**](https://www.researchgate.net/profile/Alexander_Ariza2), como apoyo al portal de conocimiento de la oficina de [**UNSPIDER**](https://www.un-spider.org), 2020.

# ÍNDICE GENERAL
A continuación podrá encontrar los siguientes contenidos: 

**I - INTRODUCCIÓN**

* [1 - Introducción a Python y Project Jupyter](./01_INTRODUCCIÓN.ipynb) *(opcional)*

**II - INSTALACIÓN DE PAQUETES Y LIBRERÍAS**

* [2 - Instalación del paquete geemap](./02_INSTALACIÓN_DEL_PAQUETE_GEEMAP.ipynb)

* [3 - Uso del paquete geemap](./03_USO_DEL_PAQUETE_GEEMAP.ipynb)

**II - PROCESOS Y HERRAMIENTAS BÁSICAS**

* [4 - Convertir JavaScripts de GEE a Python3 y cuadernos NB](./04_GEE_JavaScripts_2_Python_NB.ipynb)
* [5 - Mapa Interactivo Usando la API geemap en Python3](./05_MAPEO_INTERACTIVO_USANDO_API_PYTHON_DE_GEE_GEEMAP.ipynb)


**III - CASOS DE ESTUDIO**

* [6 - Índice de Área Quemada (NBR) de MODIS en Australia](./06_ÍNDICE_DE_QUEMA_NBR_EN_AUSTRALIA.ipynb)

**NOTA:** El contenido de estos cuadernos esta orientado a definir algunas funciones generales para cargar, explorar, procesar y visualizar los conjuntos de datos.

Material organizado por el [**Alexander Ariza**](https://www.researchgate.net/profile/Alexander_Ariza2), como apoyo al portal de conocimiento de la oficina de [**UNSPIDER**](https://www.un-spider.org), 2020.

<img src='./IMG/head_b.png' alt='Logo Head' align='center' width='99%'></img>
<br>
# 1. INTRODUCCIÓN

## **¿Que es Jupyter?**

El Proyecto Jupyter es una organización sin ánimo de lucro creado por [Fernando Pérez](https://es.wikipedia.org/wiki/Fernando_P%C3%A9rez_(programador)) , [Brian Granger](https://blog.jupyter.org/@ellisonbg) para "desarrollar software de código abierto, mediante estándares abiertos y servicios para computación interactiva en docenas de lenguajes de programación".

<img src='https://i.ytimg.com/vi/5johhf8DnLI/maxresdefault.jpg' align="left" width="30%"></img>
<div class="alert alert-block alert-success" align="left">
<b><i>"El nombre del **proyecto Jupyter o Project Jupyter** es una referencia a los tres lenguajes de programación principales soportados por Jupyter, que son `Julia`, `Python` y `R`".</div>
 
A continuación, veremos una breve descripción del entorno de Jupyter, con énfasis en **Jupyter Notebook**, para el desarrollo de ejercicios de PDI en **GEE** y el paquete **geemap**.

## Project Jupyter
Project Jupyter ofrece diferentes herramientas para facilitar la informática interactiva, ya sea con una aplicación basada en la web (`Jupyter Notebooks`), un entorno de desarrollo interactivo (`JupyterLab`) o mediante un `JupyterHub` que lleva la informática interactiva a grupos de usuarios.
<img src='./IMG/jupyter_comp.png' align='center' width='25%'>
<div class="alert alert-block alert-success" align="center">
<b><i>  "Project Jupyter es una plataforma web que permite desarrollar software de código abierto, estándares abiertos y servicios para computación interactiva en docenas de lenguajes de programación."</i></b>
</div>



## Creditos
Las descripciones están basadas en las colaboraciones de proyecto **giswqs** de github creado por el [Profesor Wu, Q](https://wetlands.io/), del [Departamento de Geografía](https://geography.utk.edu/) de la [Universidad de Tennessee](https://www.utk.edu/), 2020. Asi como las capacitaciones del programa [Copuernicus](https://www.copernicus.eu/en) de la [ESA](https://www.esa.int/), a traves del programa de capacitacion de [EUMETSAT](https://training.eumetsat.int/).
<span style="float:right;"><a href="./01_INTRODUCCIÓN.ipynb"> **01 - INTRODUCCIÓN - >>**</a>
 <img src='./IMG/UNicon.png' alt='Logo down' align='right' width='8%'></img>
<i><p style="text-align:right;">Material organizado por el [**Alexander Ariza**](https://www.researchgate.net/profile/Alexander_Ariza2), como apoyo al portal de conocimiento de la oficina de [**UNSPIDER**](https://www.un-spider.org), (2020)  .     
