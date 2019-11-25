define({
  "taskUrl": "URL de tarea",
  "setTask": "Definir",
  "setTaskPopupTitle": "Definir tarea",
  "validate": "Definir",
  "inValidGPService": "Introduzca un servicio de geoprocesamiento válido.",
  "GPFeatureRecordSetLayerERR": "Introduzca un servicio de geoprocesamiento únicamente con entradas de tipo 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "El número de parámetros de entrada es menor que 1 o mayor que 3. Introduzca un servicio de geoprocesamiento válido.",
  "projectSetting": {
    "title": "Configuración del proyecto",
    "note": "Nota: Configuración del proyecto es opcional; una vez configurado el proyecto, el usuario puede almacenarlo en las capas de mapas web que desee con los parámetros de entrada y área de interrupción. El usuario puede almacenar otros parámetros de salida desde el grupo “Salida” de la pestaña “Entrada/salida”.",
    "projectPolygonLayer": "Capa de polígonos del proyecto",
    "outputParameterName": "Nombre del parámetro de salida",
    "projectPointLayer": "Capa de puntos del proyecto",
    "selectLabel": "Seleccionar",
    "polygonLayerHelp": "<p>Se mostrarán las capas poligonales que reúnan las siguientes condiciones:<br/><ul><li>La capa debe presentar capacidades de edición, concretamente “Crear”, “Eliminar” y “Actualizar”</li><li>La capa debe tener dos campos con el nombre exacto y el tipo de datos:</li><ul><li>name (campo tipo cadena)</li><li>globalid (campo tipo GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Se mostrarán las capas poligonales de salida de la URL de la tarea<p/>",
    "pointLayerHelp": "<p>Se mostrarán las capas de puntos que reúnan las siguientes condiciones: <br/><ul><li>La capa debe presentar capacidades de edición, concretamente “Crear”, “Eliminar” y “Actualizar”</li><li>La capa debe tener dos campos con el nombre exacto y el tipo de datos:</li><ul><li>inputtype (campo tipo cadena)</li><li>projectid (campo tipo GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "Marcador",
    "barrier": "Barrera",
    "skip": "Omitir",
    "title": "Entrada/salida",
    "inputSettingsLabel": "Configuración de entrada",
    "outputSettingsLabel": "Configuración de salida",
    "inputLabel": "Etiqueta",
    "inputTooltip": "Información sobre herramientas",
    "symbol": "Símbolo",
    "typeText": "Tipo",
    "outputParametersText": "Parámetros de salida",
    "saveToLayerText": "Guardar en capa (opcional)",
    "skipText": "Puede omitirse",
    "visibilityText": "Visible",
    "exportToCsvText": "Exportar a CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Ajustes",
    "addFieldTitle": "Agregar campo",
    "enterDisplayText": "Introducir texto de visualización",
    "setScale": "Establecer escala",
    "outputDisplay": "Texto de visualización",
    "saveToLayerHelp": "<p>Se mostrará la capa que reúna las siguientes condiciones:<br/><ul><li>La capa debe presentar capacidades de edición, concretamente “Crear”, “Eliminar” y “Actualizar”</li><li>La capa debe tener dos campos con el nombre y el tipo de datos:</li><ul><li>parametername (campo tipo cadena)</li><li>projectid (campo tipo GUID)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Configuración general",
    "summaryFieldsetText": "Configuración del resumen",
    "inputOutput": "Entrada/salida",
    "field": "Campo",
    "operator": "Operador",
    "inputOperatorCountOption": "Recuento",
    "outputOperatorCountOption": "Recuento",
    "outputOperatorSkipCountOption": "Recuento de omisiones",
    "fieldOperatorSumOption": "Suma",
    "fieldOperatorMinOption": "Mín.",
    "fieldOperatorMaxOption": "Máx.",
    "fieldOperatorMeanOption": "Valor medio",
    "expressionAddButtonText": "Agregar",
    "expressionVerifyButtonText": "Verificar",
    "summaryEditorText": "Texto de resumen",
    "autoZoomAfterTrace": "Opciones adicionales",
    "zoomText": "Aplicar zoom automáticamente después del seguimiento",
    "summarSettingTooltipText": "Agregar recuento de entradas/salidas"
  },
  "validationErrorMessage": {
    "webMapError": "No hay capas disponibles en el mapa web. Seleccione un mapa web válido.",
    "inputTypeFlagGreaterThanError": "La entrada de tipo marcador no puede ser más de una.",
    "inputTypeFlagLessThanError": "Se requiere al menos una entrada de tipo marcador.",
    "inputTypeBarrierErr": "La entrada de tipo barrera no puede ser más de una.",
    "inputTypeSkipErr": "La entrada de tipo omisión no puede ser más de una.",
    "displayTextForButtonError": "El texto de visualización del botón 'Ejecutar' no puede estar en blanco.",
    "UnableToLoadGeoprocessError": "No se puede cargar el servicio de geoprocesamiento.",
    "invalidSummaryExpression": "Expresión no válida.",
    "validSummaryExpression": "¡Bien!",
    "invalidProjectSettings": "Configuración del proyecto no válida.<br/> Seleccione un valor válido en '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Sugerencia: Proporcione una etiqueta de visualización para el panel de resultados del parámetro de salida.",
    "displayTextHint": "Sugerencia: Se mostrará en el panel de detalles de este parámetro de salida.",
    "inputTextHint": "Sugerencia: Cree su expresión arriba seleccionado nombres de entrada, salida y campos.",
    "expressionHint": "Sugerencia: Seleccione elementos y haga clic en Agregar para construir la expresión."
  }
});