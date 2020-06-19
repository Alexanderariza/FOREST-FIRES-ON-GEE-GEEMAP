//===========================================================================================
//  MAPEO DE SEVERIDAD EN INCENDIOS UTILIZANDO EL INDICE NORMALIZADO DE ÁREA QUEMADA (NBR)
//===========================================================================================
// El índice Normalizado de Area Quemada o (NBR) se aplica en imágenes de antes y después de 
// un incendio. Para calcular su valor diferencial o (dNBR) se deriva la severidad, mostrando 
// el area afectada por el incendio. Las imágenes utilizadas en este proceso provienen de las
// plataformas Sentinel-2 o Landsat 8.
//===========================================================================================

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//                                    EJECUTA UN DEMO (opcional)

// Si desea ejecutar un ejemplo de mapeo de la severidad del fuego, puede usar la geometría 
// predefinida a continuación, así como las otras configuraciones de parámetros predefinidos.
// El código te llevará a la zona de Empedrado - Chile, donde los incendios forestales  
// devastaron grandes áreas forestales en enero y febrero de 2017. 
// --> Eliminar el símbolo (//) del comentario a continuación, para que Earth Engine reconozca 
// el polígono:

var geometry = ee.Geometry.Polygon([ [ [ -72.435883, -35.540058 ], [ -72.431499, -35.544763 ], [ -72.426375, -35.544077 ], [ -72.424671, -35.539961 ], [ -72.423897, -35.533738 ], [ -72.427985, -35.534038 ], [ -72.431896, -35.530179 ], [ -72.437491, -35.53002 ], [ -72.440437, -35.527437 ], [ -72.444927, -35.525227 ], [ -72.444293, -35.522331 ], [ -72.433256, -35.514318 ], [ -72.424906, -35.509559 ], [ -72.414699, -35.509016 ], [ -72.407876, -35.504213 ], [ -72.402089, -35.499796 ], [ -72.394356, -35.497516 ], [ -72.389394, -35.488496 ], [ -72.382101, -35.484537 ], [ -72.376473, -35.483862 ], [ -72.370793, -35.481939 ], [ -72.365708, -35.482081 ], [ -72.353893, -35.479495 ], [ -72.344741, -35.47975 ], [ -72.341638, -35.478587 ], [ -72.332675, -35.483415 ], [ -72.320215, -35.477513 ], [ -72.316775, -35.480522 ], [ -72.306029, -35.479152 ], [ -72.301453, -35.479277 ], [ -72.293792, -35.478654 ], [ -72.251728, -35.508528 ], [ -72.248369, -35.513615 ], [ -72.247737, -35.523209 ], [ -72.248498, -35.529435 ], [ -72.246188, -35.535326 ], [ -72.245506, -35.543673 ], [ -72.243163, -35.548733 ], [ -72.231825, -35.558198 ], [ -72.23094, -35.561553 ], [ -72.226918, -35.56291 ], [ -72.227561, -35.566224 ], [ -72.223113, -35.569674 ], [ -72.22323, -35.572586 ], [ -72.22343, -35.577577 ], [ -72.226209, -35.583332 ], [ -72.221184, -35.585133 ], [ -72.214532, -35.584478 ], [ -72.209506, -35.586277 ], [ -72.209606, -35.588773 ], [ -72.203545, -35.590184 ], [ -72.200097, -35.59319 ], [ -72.194214, -35.586267 ], [ -72.193014, -35.581719 ], [ -72.18613, -35.575239 ], [ -72.17897, -35.574595 ], [ -72.16969, -35.584834 ], [ -72.173583, -35.593059 ], [ -72.176048, -35.60382 ], [ -72.18497, -35.610247 ], [ -72.187715, -35.615171 ], [ -72.184774, -35.618164 ], [ -72.181208, -35.618258 ], [ -72.175342, -35.624659 ], [ -72.169229, -35.62482 ], [ -72.167881, -35.629436 ], [ -72.159844, -35.632562 ], [ -72.153286, -35.6344 ], [ -72.150229, -35.63448 ], [ -72.146939, -35.641645 ], [ -72.146132, -35.647079 ], [ -72.141742, -35.652191 ], [ -72.138321, -35.656028 ], [ -72.13812, -35.663945 ], [ -72.126176, -35.645517 ], [ -72.092, -35.645568 ], [ -72.085535, -35.649898 ], [ -72.084659, -35.653668 ], [ -72.084836, -35.658244 ], [ -72.078497, -35.665902 ], [ -72.081174, -35.669165 ], [ -72.083835, -35.672011 ], [ -72.033842, -35.67245 ], [ -72.037521, -35.675272 ], [ -72.039224, -35.679809 ], [ -72.038951, -35.686062 ], [ -72.041117, -35.689339 ], [ -72.042773, -35.692628 ], [ -72.0429, -35.695957 ], [ -72.047138, -35.700013 ], [ -72.050309, -35.702848 ], [ -72.055409, -35.702718 ], [ -72.058533, -35.704305 ], [ -72.061147, -35.705904 ], [ -72.059218, -35.708868 ], [ -72.065651, -35.711351 ], [ -72.067506, -35.712413 ], [ -72.071994, -35.711189 ], [ -72.073439, -35.713371 ], [ -72.077573, -35.714745 ], [ -72.079938, -35.717273 ], [ -72.082713, -35.718682 ], [ -72.087216, -35.717826 ], [ -72.091747, -35.71771 ], [ -72.095061, -35.721323 ], [ -72.099053, -35.719001 ], [ -72.101843, -35.720779 ], [ -72.103117, -35.718527 ], [ -72.108935, -35.716527 ], [ -72.112603, -35.717542 ], [ -72.114314, -35.714908 ], [ -72.118672, -35.710357 ], [ -72.122224, -35.708415 ], [ -72.128817, -35.703066 ], [ -72.133713, -35.700719 ], [ -72.138228, -35.700231 ], [ -72.141939, -35.702354 ], [ -72.143005, -35.706394 ], [ -72.146219, -35.70742 ], [ -72.145853, -35.709649 ], [ -72.150909, -35.711366 ], [ -72.155965, -35.713082 ], [ -72.161898, -35.714036 ], [ -72.166531, -35.716503 ], [ -72.175577, -35.715895 ], [ -72.183909, -35.720113 ], [ -72.191113, -35.718812 ], [ -72.197382, -35.716796 ], [ -72.201459, -35.716688 ], [ -72.204267, -35.718832 ], [ -72.202543, -35.721097 ], [ -72.204414, -35.722527 ], [ -72.222641, -35.724629 ], [ -72.227261, -35.726724 ], [ -72.235083, -35.729473 ], [ -72.238932, -35.734917 ], [ -72.24067, -35.733021 ], [ -72.245489, -35.728822 ], [ -72.249357, -35.72354 ], [ -72.25428, -35.721927 ], [ -72.252846, -35.720117 ], [ -72.253193, -35.717518 ], [ -72.253028, -35.713454 ], [ -72.254297, -35.711201 ], [ -72.259189, -35.708849 ], [ -72.260352, -35.704009 ], [ -72.26704, -35.701239 ], [ -72.269079, -35.695636 ], [ -72.272158, -35.693333 ], [ -72.276672, -35.69284 ], [ -72.281246, -35.693825 ], [ -72.286258, -35.694428 ], [ -72.289096, -35.697309 ], [ -72.296826, -35.697837 ], [ -72.299889, -35.695164 ], [ -72.303904, -35.693574 ], [ -72.30712, -35.694595 ], [ -72.310712, -35.693757 ], [ -72.314619, -35.689581 ], [ -72.31495, -35.686613 ], [ -72.317015, -35.681748 ], [ -72.32, -35.677227 ], [ -72.322548, -35.673089 ], [ -72.32735, -35.674682 ], [ -72.33262, -35.6787 ], [ -72.339437, -35.683091 ], [ -72.34615, -35.684986 ], [ -72.349331, -35.687812 ], [ -72.355587, -35.690969 ], [ -72.362742, -35.691185 ], [ -72.366785, -35.69024 ], [ -72.371548, -35.69427 ], [ -72.375996, -35.690814 ], [ -72.383994, -35.686842 ], [ -72.391534, -35.684131 ], [ -72.394996, -35.681535 ], [ -72.398494, -35.679771 ], [ -72.403081, -35.679641 ], [ -72.409038, -35.675725 ], [ -72.411586, -35.675653 ], [ -72.418087, -35.672554 ], [ -72.421583, -35.670789 ], [ -72.426063, -35.668163 ], [ -72.428451, -35.664348 ], [ -72.435916, -35.659971 ], [ -72.437177, -35.65369 ], [ -72.438983, -35.648225 ], [ -72.444623, -35.648897 ], [ -72.45003, -35.644162 ], [ -72.453614, -35.644475 ], [ -72.458199, -35.644344 ], [ -72.460111, -35.641374 ], [ -72.45944, -35.637646 ], [ -72.454293, -35.636545 ], [ -72.450834, -35.639142 ], [ -72.447617, -35.635487 ], [ -72.444069, -35.636005 ], [ -72.44247, -35.634386 ], [ -72.446366, -35.63011 ], [ -72.443712, -35.627688 ], [ -72.450503, -35.619583 ], [ -72.450413, -35.617503 ], [ -72.437995, -35.613279 ], [ -72.43729, -35.608719 ], [ -72.432582, -35.605939 ], [ -72.441554, -35.57737 ], [ -72.437778, -35.572481 ], [ -72.437582, -35.567907 ], [ -72.436315, -35.562114 ], [ -72.437558, -35.555416 ], [ -72.437362, -35.550842 ], [ -72.435007, -35.543414 ], [ -72.435883, -35.540058 ] ] ]);

// Ahora haga clic en Run para empezar el demo! 
// No olvides eliminar el simbolo / para descomentar esta geometría antes de crear una nueva!
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//*******************************************************************************************
//                             SELECCIONA TU PROPIA ÁREA DE ESTUDIO   

// Use la herramienta de polígono en la esquina superior izquierda del panel del mapa para 
// dibujar la forma de su  Área de estudio. Los clics simples agregan vértices, al hacer doble 
// clic se completa el polígono. ** CUIDADO **: en 'Importaciones de geometría' (arriba a la 
// izquierda en el panel del mapa), desmarque cuadro de geometría, para evitar que se bloquee 
// la vista en las imágenes más adelante.

//*******************************************************************************************
//                               CONFIGURA UN INTERVALO DE TIEMPO

// Establezca las fechas de inicio y fin de un período ANTES del incendio. Asegúrese de que sea 
// lo suficientemente amplio para adquirir una imagen Sentinel-2 (Revisita = 5 días). Ajuste 
// estos parámetros, si tus colleciones o ImageCollections (ver Consola) no contienen ningún 
// elemento.
var prefire_start = '2016-12-20';   
var prefire_end = '2017-01-18';

// Ahora establezca los mismos parámetros para DESPUÉS del incendio.
var postfire_start = '2017-02-20';
var postfire_end = '2017-03-28';

//*******************************************************************************************
//                            SELECCIONA UNA PLATAFORMA DE SATELITE

// Puede seleccionar imágenes de dos sensores satelitales que estan disponibles. 
// Considere los detalles de cada misión a continuación para elegir los datos adecuados para
//  sus necesidades.

// LANSAT 8                                |  SENTINEL-2 (A & B)
//-------------------------------------------------------------------------------------------
// Lanzado:       Febrero 11th, 2015       |  Junio 23rd, 2015 & Marzo 7th, 2017
// Revisita:      16 días                  |  5 días (desde 2017)
// Resolución:    30 metros                |  10 metros 
// Ventajas:      Largas series de tiempo  |  9 series de alto detalle espacial 
//       Exporta archivos archivo pequeños |  Mayor probabilidad de imágenes sin nubes

// SELECT uno de los siguientes:   'L8'  o 'S2' 

var platform = 'L8';               // <--- asigne su elección a la variable de plataforma

//*******************************************************************************************
//---> ¡NO EDITE EL SCRIT A PARTIR DE ESTE PUNTO! (a menos que sepa lo que está haciendo) <--
//------------->>> YA PUEDE CORRER EL SCRIT EN LA PARTE SUPERIOR (RUN)! <<<----------------
//----> EL PRODUCTO DE SEVERIDAD FINAL ESTA LISTO PARA DESCARGAR A LA DERECHA (TASKS) <------

//*******************************************************************************************


//------------------------- Traduciendo las entradas del Usuario ----------------------------

// Imprimir plataforma satelital y fechas para la consola
if (platform == 'S2' | platform == 's2') {
  var ImCol = 'COPERNICUS/S2';
  var pl = 'Sentinel-2';
} else {
  var ImCol = 'LANDSAT/LC08/C01/T1_SR';
  var pl = 'Landsat 8';
}
print(ee.String('Datos seleccionados para el análisis: ').cat(pl));
print(ee.String('Incendio ocurrido entre ').cat(prefire_end).cat(' y ').cat(postfire_start));

// Localización
var area = ee.FeatureCollection(geometry);

// Selecciona el area de estudio como centro del mapa.
Map.centerObject(area);

//------------------- Selecciona imágenes Landsat por tiempo y ubicación --------------------

var imagery = ee.ImageCollection(ImCol);

// En las siguientes líneas, las imágenes se recopilarán en una ImageCollection, dependiendo de
// la ubicación de nuestra área de estudio, un marco de tiempo determinado y la proporción de 
// cobertura de nubes.
var prefireImCol = ee.ImageCollection(imagery
    // Filtrar por fechas.
    .filterDate(prefire_start, prefire_end)
    // Filtrar por localizacion.
    .filterBounds(area));
    
// Selecciona todas las imágenes que se superponen con el área de estudio en el período de tiempo  
// determinado, como estado posterior al incendio, seleccionamos del 25 de febrero de 2017
var postfireImCol = ee.ImageCollection(imagery
    // Filtrar por fechas.
    .filterDate(postfire_start, postfire_end)
    // Filtrar por localizacion.
    .filterBounds(area));

// Agregua las imágenes recortadas a la consola da la derecha
print("Colección de imágenes pre-incendio: ", prefireImCol); 
print("Colección de imágenes post-incendio: ", postfireImCol);

//--------------------------- Aplicar una máscara de nubes y nieve --------------------------

// Función para enmascarar nubes a partir de la banda de calidad de píxeles de los datos de 
// la plataforma Sentinel-2 SR.
function maskS2sr(image) {
  // Los bits 10 y 11 son nubes y cirros, respectivamente.
  var cloudBitMask = ee.Number(2).pow(10).int();
  var cirrusBitMask = ee.Number(2).pow(11).int();
  // Obtenga la banda QA de control de calidad de píxeles.
  var qa = image.select('QA60');
  // Todos los indicadores deben establecerse en cero, lo que indica condiciones limpias o 
  // libres de nubes.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));
  // Devuelve la imagen enmascarada y escalada a la reflectancia TOA, sin las bandas de QA.
  return image.updateMask(mask)
      .copyProperties(image, ["system:time_start"]);
}

// Función para enmascarar nubes de la banda de calidad de píxeles de los datos de la 
// plataforma Landsat 8 SR.
function maskL8sr(image) {
  // Los bits 3 y 5 son nubes y sombras de nubes, respectivamente.
  var cloudShadowBitMask = 1 << 3;
  var cloudsBitMask = 1 << 5;
  var snowBitMask = 1 << 4;
  // Obtenga la banda de control de calidad de píxeles.
  var qa = image.select('pixel_qa');
  // Todos los indicadores deben establecerse en cero, lo que indica condiciones claras o
  // libres de nubes.
  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudsBitMask).eq(0))
      .and(qa.bitwiseAnd(snowBitMask).eq(0));
  // Devuelva la imagen enmascarada y escalada a la reflectancia TOA, sin las bandas de QA.
  return image.updateMask(mask)
      .select("B[0-9]*")
      .copyProperties(image, ["system:time_start"]);
}

// Aplicar máscara de nube específica de la plataforma
if (platform == 'S2' | platform == 's2') {
  var prefire_CM_ImCol = prefireImCol.map(maskS2sr);
  var postfire_CM_ImCol = postfireImCol.map(maskS2sr);
} else {
  var prefire_CM_ImCol = prefireImCol.map(maskL8sr);
  var postfire_CM_ImCol = postfireImCol.map(maskL8sr);
}

//---------------- Mosaico y recorte de imágenes para el área de estudio --------------------

// Esto es especialmente importante si las colecciones creadas anteriormente contienen más de 
// una imagen (si es solo una, el mosaico () no afecta a las imágenes).

var pre_mos = prefireImCol.mosaic().clip(area);
var post_mos = postfireImCol.mosaic().clip(area);

var pre_cm_mos = prefire_CM_ImCol.mosaic().clip(area);
var post_cm_mos = postfire_CM_ImCol.mosaic().clip(area);

// Agregue las imágenes recortadas a la consola de la derecha
print("Imagen en color verdadero previa al incendio: ", pre_mos); 
print("Imagen en color verdadero posterior al incendio: ", post_mos);

//------------ Calcular el NBR para imágenes previas y posteriores al incendio --------------

// Aplicar a la plataforma específica el NBR = (NIR-SWIR2) / (NIR+SWIR2)
if (platform == 'S2' | platform == 's2') {
  var preNBR = pre_cm_mos.normalizedDifference(['B8', 'B12']);
  var postNBR = post_cm_mos.normalizedDifference(['B8', 'B12']);
} else {
  var preNBR = pre_cm_mos.normalizedDifference(['B5', 'B7']);
  var postNBR = post_cm_mos.normalizedDifference(['B5', 'B7']);
}

// Agregua las imágenes NBR a la consola a la derecha
// Imprime ("Índice de Área Quemada previa al fuego:", preNBR);
// Imprime ("Índice de Área Quemada posterior al incendio:", postNBR);

//---------- Calcular la diferencia entre imágenes previas y posteriores al incendio --------

// El resultado se llama diferencial NBR o dNBR
var dNBR_unscaled = preNBR.subtract(postNBR);

// Escale el producto a los estándares del USGS (FIREMON)
var dNBR = dNBR_unscaled.multiply(1000);

// Agregue la imagen del dNBR a la consola de la derecha
print("Índice diferencial de área quemada: ", dNBR);

//==========================================================================================
//                                 AGREGAR CAPAS AL MAPA

// Añadir el límite.
Map.addLayer(area.draw({color: 'ffffff', strokeWidth: 5}), {},'Área de estudio');

//----------------------------- Imágenes en color verdadero --------------------------------

// Aplicar parámetros de visualización específicos de la plataforma para imágenes en color 
// verdadero.
if (platform == 'S2' | platform == 's2') {
  var vis = {bands: ['B4', 'B3', 'B2'], max: 2000, gamma: 1.5};
} else {
  var vis = {bands: ['B4', 'B3', 'B2'], min: 0, max: 4000, gamma: 1.5};
}

// Agregua las imágenes en color verdadero al mapa.
Map.addLayer(pre_mos, vis,'Imagen previa al incendio');
Map.addLayer(post_mos, vis,'Imagen posterior al incendio');

// Agregua las imágenes en color verdadero al mapa.
Map.addLayer(pre_cm_mos, vis,'Imagen previa al incendio: con mascara de nubes');
Map.addLayer(post_cm_mos, vis,'Imagen posterior al incendio: con mascara de nubes');

//------------------- Producto de area quemada - En escala de grises ------------------------

var grey = ['white', 'black'];

// Elimine los símbolos de comentario (//) a continuación para mostrar antes de la visualización 
// el NBR previo y posterior por separado.
//Map.addLayer(preNBR, {min: -1, max: 1, palette: grey}, 'Prefire Normalized Burn Ratio');
//Map.addLayer(postNBR, {min: -1, max: 1, palette: grey}, 'Postfire Normalized Burn Ratio');

Map.addLayer(dNBR, {min: -1000, max: 1000, palette: grey}, 'dNBR en escala de grises');

//----------------- Producto de severidad del incendio - Clasificación ----------------------

// Define un estilo SLD de intervalos discretos para aplicar a la imagen (paleta de color).
var sld_intervals =
  '<RasterSymbolizer>' +
    '<ColorMap type="intervals" extended="false" >' +
      '<ColorMapEntry color="#ffffff" quantity="-500" label="-500"/>' +
      '<ColorMapEntry color="#7a8737" quantity="-250" label="-250" />' +
      '<ColorMapEntry color="#acbe4d" quantity="-100" label="-100" />' +
      '<ColorMapEntry color="#0ae042" quantity="100" label="100" />' +
      '<ColorMapEntry color="#fff70b" quantity="270" label="270" />' +
      '<ColorMapEntry color="#ffaf38" quantity="440" label="440" />' +
      '<ColorMapEntry color="#ff641b" quantity="660" label="660" />' +
      '<ColorMapEntry color="#FF0000" quantity="2000" label="2000" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';

// Agregua la imagen al mapa utilizando la rampa de color como los intervalo definidos.
Map.addLayer(dNBR.sldStyle(sld_intervals), {}, 'dNBR clasificado');

// Separa el resultado en 8 clases de severidad del incendio.
var thresholds = ee.Image([-1000, -251, -101, 99, 269, 439, 659, 2000]);
var classified = dNBR.lt(thresholds).reduce('sum').toInt();

//==========================================================================================
//                          AGREGAR ESTADÍSTICAS DE ÁREA QUEMADA

// cunta el número de píxeles en toda la capa.
var allpix =  classified.updateMask(classified);  // enmascara toda la capa
var pixstats = allpix.reduceRegion({
  reducer: ee.Reducer.count(),               // cuenta píxeles en una sola clase
  geometry: area,
  scale: 30
  });
var allpixels = ee.Number(pixstats.get('sum')); // extrae el recuento de píxeles como un número


// crea una lista vacía para almacenar los valores en área
var arealist = [];

// crea una función para derivar el alcance de una clase de severidad del incendio
// los argumentos son número de clase y nombre de clase
var areacount = function(cnr, name) {
 var singleMask =  classified.updateMask(classified.eq(cnr));  // enmascara una sola clase
 var stats = singleMask.reduceRegion({
  reducer: ee.Reducer.count(),               // cuenta los píxeles en una sola clase
  geometry: area,
  scale: 30
  });
var pix =  ee.Number(stats.get('sum'));
var hect = pix.multiply(900).divide(10000);                // Pixel Landsat = 30m x 30m -> 900 m2
var perc = pix.divide(allpixels).multiply(10000).round().divide(100);   // obtiene el % de área por clase y redondea a 2 decimales
arealist.push({Class: name, Pixels: pix, Hectares: hect, Percentage: perc});
};

// clases de severidad en orden ascendente.
var names2 = ['NA', 'Alta Severidad', 'Moderada/alta Severidad',
'Moderada/baja Severidad', 'Baja Severidad','No quemado', 'Nuevo rebrote, Bajo', 'Nuevo rebrote, Alto'];

// ejecuta la función para cada clase
for (var i = 0; i < 8; i++) {
  areacount(i, names2[i]);
  }

print('Área quemada por clase de Severidad', arealist, '--> haga clic en la lista de objetos para ver las clases individuales');

//==========================================================================================
//                                    AGREGAR UNA LEYENDA

// establece la posición del recuadro de leyenda.
var legend = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '8px 15px'
  }});
 
// Crea un título de leyenda.
var legendTitle = ui.Label({
  value: 'Clases del dNBR',
  style: {fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 0 4px 0',
    padding: '0'
    }});
 
// Agregua el título al recuadro.
legend.add(legendTitle);
 
// Crea y estiliza 1 fila de la leyenda.
var makeRow = function(color, name) {
 
      // Crea la etiqueta que en realidad es el cuadro de color.
      var colorBox = ui.Label({
        style: {
          backgroundColor: '#' + color,
          // Usa (padding) para rellenoar y dar la altura y el ancho de la caja.
          padding: '8px',
          margin: '0 0 4px 0'
        }});
 
      // Crea la etiqueta llena con el texto descriptivo.
      var description = ui.Label({
        value: name,
        style: {margin: '0 0 4px 6px'}
      });
 
      // devuelve el panel
      return ui.Panel({
        widgets: [colorBox, description],
        layout: ui.Panel.Layout.Flow('horizontal')
      })};
 
//  Paleta de colores
var palette =['7a8737', 'acbe4d', '0ae042', 'fff70b', 'ffaf38', 'ff641b', 'FF0000', 'ffffff'];
 
// Nombre de la leyenda
var names = ['Nuevo rebrote, Alto','Nuevo rebrote, Bajo','No quemado', 'Baja Severidad',
'Moderda-Baja Severidad', 'Moderada-Alta Severidad', 'Alta Severidad', 'NA'];
 
// Agregua color y nombres
for (var i = 0; i < 8; i++) {
  legend.add(makeRow(palette[i], names[i]));
  }  
 
// Agrega la leyenda al mapa (también se puede imprimir la leyenda en la consola)
Map.add(legend);

//==========================================================================================
//                                PREPARAR EL ARCHIVO A EXPORTAR

var id = dNBR.id().getInfo();
      
Export.image.toDrive({image: dNBR, scale: 30, description: id, fileNamePrefix: 'dNBR',
  region: area, maxPixels: 1e10});


// Las descargas estarán disponibles a la derecha en la pestaña de tareas o (Tasks). 
//Fin