///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "areaSquareFeetUnit": "Квадратные футы",
    "areaAcresUnit": "Акры",
    "areaSquareMetersUnit": "Квадратные метры",
    "areaSquareKilometersUnit": "Квадратные километры",
    "areaHectaresUnit": "Гектары",
    "lengthFeetUnit": "Футы",
    "lengthMilesUnit": "Мили",
    "lengthMetersUnit": "Метры",
    "lengthKilometersUnit": "Километры"
  },
  "analysisTab": {
    "analysisTabLabel": "Анализ",
    "selectAnalysisLayerLabel": "Слои анализа",
    "addLayerLabel": "Добавить слои",
    "noValidLayersForAnalysis": "В выбранной веб-карте отсутствуют корректные слои.",
    "noValidFieldsForAnalysis": "В выбранной веб-карте отсутствуют корректные поля. Удалите выбранный слой.",
    "allowGroupingLabel": "Группировать объекты по полю с одинаковым значением",
    "groupingHintDescription": "Подсказка: по умолчанию, все объекты с одинаковыми значениями в указанных полях будут сгруппированы и отображены в отчете одной строкой. Отключите группировку по сходным атрибутам, чтобы отобразить строку для каждого объекта.",
    "addLayersHintText": "Подсказка: выберите слои и поля для включения в анализ и отчет",
    "addLayerNameTitle": "Имя слоя",
    "addFieldsLabel": "Добавить поле",
    "addFieldsPopupTitle": "Выбрать поля",
    "addFieldsNameTitle": "Имена полей",
    "aoiToolsLegendLabel": "Инструменты Область интереса",
    "aoiToolsDescriptionLabel": "Выберите и подпишите инструменты, доступные для создания области интереса.",
    "placenameLabel": "Название места",
    "drawToolsLabel": "Выберите инструменты рисования",
    "uploadShapeFileLabel": "Загрузить шейп-файл",
    "coordinatesLabel": "Координаты",
    "coordinatesDrpDwnHintText": "Подсказка: выберите единицы для отображения теодолитных ходов",
    "coordinatesBearingDrpDwnHintText": "Подсказка: выберите направление для отображения теодолитных ходов",
    "allowShapefilesUploadLabel": "Разрешить пользователям загружать шейп-файлы для включения в анализ",
    "allowShapefilesUploadLabelHintText": "Подсказка: добавьте параметр на вкладку Отчет, где пользователи могут загружать свои собственные данные в формате шейп-файла для включения в отчет анализа.",
    "allowVisibleLayerAnalysisLabel": "Не анализировать и не делать отчеты о результатах для не видимых слоев",
    "allowVisibleLayerAnalysisHintText": "Подсказка: Слои, которые выключены или не видимы из-за настроек масштаба видимости, не будут анализироваться или включаться в печатные или загружаемые результаты.",
    "areaUnitsLabel": "Единицы результатов анализа (Площадь)",
    "lengthUnitsLabel": "Единицы результатов анализа (Длина)",
    "maxFeatureForAnalysisLabel": "Максимальное число объектов для анализа",
    "maxFeatureForAnalysisHintText": "Подсказка: установите максимальное количество объектов, которые будут включены в анализ",
    "searchToleranceLabelText": "Допуск поиска",
    "searchToleranceHint": "Подсказка: допуск поиска используется при анализе точек и линий.",
    "placenameButtonText": "Название места",
    "drawToolsButtonText": "Нарисовать",
    "shapefileButtonText": "Шейп-файл",
    "coordinatesButtonText": "Координаты",
    "invalidLayerErrorMsg": "Настройте поля для",
    "drawToolSelectableLayersLabel": "Выбрать слои, доступные для выборки",
    "drawToolSelectableLayersHint": "Подсказка: выберите слои, содержащие объекты, которые можно выбрать с помощью инструмента рисования Выделить.",
    "drawToolsSettingsFieldsetLabel": "Инструменты рисования",
    "drawToolPointLabel": "Точка",
    "drawToolPolylineLabel": "Полилиния",
    "drawToolExtentLabel": "Экстент",
    "drawToolPolygonLabel": "Полигон",
    "drawToolCircleLabel": "Окружность",
    "selectDrawToolsText": "Выберите инструменты рисования, доступные для создания области интереса",
    "selectingDrawToolErrorMessage": "Выберите хотя бы один инструмент рисования или слой выборки, чтобы использовать параметр Инструменты рисования для инструментов AOI."
  },
  "downloadTab": {
    "downloadLegend": "Настройки загрузки",
    "reportLegend": "Настройки отчета",
    "downloadTabLabel": "Загрузка",
    "syncEnableOptionLabel": "Векторные слои",
    "syncEnableOptionHint": "Подсказка: выберите слои, которые можно загрузить, и укажите форматы, в которых доступен каждый слой. Загруженные наборы данных будут включать те объекты, которые пересекают область интереса.",
    "syncEnableOptionNote": "Примечание: для загрузки файловой базы геоданных и шейп-файлов требуются векторные слои с включенной синхронизацией. Формат шейп-файла поддерживается только с размещенными в ArcGIS Online векторными слоями.",
    "extractDataTaskOptionLabel": "Сервис геообработки Extract Data Task",
    "extractDataTaskOptionHint": "Подсказка: используйте опубликованный сервис геообработки Extract Data Task для загрузки объектов в области интереса в форматах шейп-файл или файловая база геоданных.",
    "cannotDownloadOptionLabel": "Отключить загрузку",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Имя слоя",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Файловая база геоданных",
      "ShapefileFormatLabel": "Шейп-файл",
      "allowDownloadLabel": "Разрешить загрузку"
    },
    "setButtonLabel": "Установить",
    "GPTaskLabel": "Указать URL для сервиса геообработки",
    "printGPServiceLabel": "URL-адрес сервиса печати",
    "setGPTaskTitle": "Указать требуемый URL для сервиса геообработки",
    "logoLabel": "Логотип",
    "logoChooserHint": "Подсказка: щелкните значок изображения, чтобы изменить логотип, показанный в левом верхнем углу отчета.",
    "footnoteLabel": "Сноска",
    "columnTitleColorPickerLabel": "Цвет заголовка столбца отчета",
    "reportTitleLabel": "Заголовок отчета",
    "displaySummaryLabel": "Показать сводку",
    "errorMessages": {
      "invalidGPTaskURL": "Неверный сервис геообработки. Выберите сервис геообработки, содержащий Extract Data Task.",
      "noExtractDataTaskURL": "Выберите сервис геообработки, содержащий Extract Data Task.",
      "duplicateCustomOption": "Существует дублирование записи для  ${duplicateValueSizeName}.",
      "invalidLayoutWidth": "Недопустимая ширина введена для ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Недопустимая высота введена для${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Недопустимые единицы страницы выбраны для ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Ошибка при вызове информации о размере задачи-близнеца. Попробуйте еще раз.",
      "failtofetchbuddyTaskName": "Ошибка при вызове имени задачи-близнеца. Попробуйте еще раз.",
      "failtofetchChoiceList": "Ошибка при вызове списка выбора из сервиса печати. Попробуйте еще раз.",
      "invalidWidth": "Некорректная ширина.",
      "invalidHeight": "Некорректная высота."
    },
    "addCustomLayoutTitle": "Добавить пользовательскую компоновку",
    "customLayoutOptionHint": "Подсказка: Добавить компоновку из сервиса печати в список опций печати.",
    "reportDefaultOptionLabel": "Компоновка по умолчанию",
    "pageSizeUnits": {
      "millimeters": "Миллиметры",
      "points": "Точки"
    },
    "noDataTextRepresentation": "Нет значения данных",
    "naTextRepresentation": "Неприменимое значение",
    "noDataDefaultText": "Нет данных",
    "notApplicableDefaultText": "Н/Д"
  },
  "generalTab": {
    "generalTabLabel": "Общие",
    "tabLabelsLegend": "Подписи панели",
    "tabLabelsHint": "Подсказка: укажите подписи",
    "AOITabLabel": "Панель Область интереса",
    "ReportTabLabel": "Панель отчета",
    "bufferSettingsLegend": "Параметры буфера",
    "defaultBufferDistanceLabel": "Буферное расстояние по умолчанию",
    "defaultBufferUnitsLabel": "Единицы измерения буфера",
    "generalBufferSymbologyHint": "Подсказка: символика, которая будет использоваться для области буфера вокруг заданной области интереса",
    "aoiGraphicsSymbologyLegend": "Символы Области интереса",
    "aoiGraphicsSymbologyHint": "Подсказка: символы, используемые при указании точечных, линейных или полигональных областей интереса",
    "pointSymbologyLabel": "Точка",
    "previewLabel": "Просмотр",
    "lineSymbologyLabel": "Линия",
    "polygonSymbologyLabel": "Полигон",
    "aoiBufferSymbologyLabel": "Символы буферов",
    "pointSymbolChooserPopupTitle": "Символ адреса или точечного местоположения",
    "polygonSymbolChooserPopupTitle": "Полигональный символ",
    "lineSymbolChooserPopupTitle": "Линейный символ",
    "aoiSymbolChooserPopupTitle": "Символ буфера",
    "aoiTabText": "AOI",
    "reportTabText": "Отчет",
    "invalidSymbolValue": "Недопустимое значение символа."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Параметры источника поиска",
    "searchSourceSettingTitle": "Параметры источника поиска",
    "searchSourceSettingTitleHintText": "Добавить и настроить сервисы геокодирования или векторные слои в качестве источников для поиска. Эти указанные источники определяют, что будет доступно для поиска в соответствующем диалоговом окне",
    "addSearchSourceLabel": "Добавить источник поиска",
    "featureLayerLabel": "Векторный слой",
    "geocoderLabel": "Геокодер",
    "generalSettingLabel": "Общие параметры",
    "allPlaceholderLabel": "Замещающий текст для поиска всего:",
    "allPlaceholderHintText": "Подсказка: Введите текст, который будет показан как текст-заполнитель во время поиска по всем слоям и геокодерам.",
    "generalSettingCheckboxLabel": "Показать всплывающее окно для найденного объекта или местоположения",
    "countryCode": "Коды стран или регионов",
    "countryCodeEg": "например ",
    "countryCodeHint": "Не заполняйте, чтобы искать по всем странам и регионам",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Искать только в пределах текущего экстента карты",
    "locatorUrl": "URL-адрес геокодера",
    "locatorName": "Имя геокодера",
    "locatorExample": "Пример:",
    "locatorWarning": "Эта версия сервиса геокодирования не поддерживается. Виджет поддерживает сервис геокодирования версии 10.0 и более новые.",
    "locatorTips": "Нет предположений, так как сервис геокодирования не поддерживает возможность предположений.",
    "layerSource": "Источник слоя",
    "setLayerSource": "Установить источник слоя",
    "setGeocoderURL": "Задать URL геокодера",
    "searchLayerTips": "Нет предположений, так как сервис пространственных объектов не поддерживает возможность пагинации.",
    "placeholder": "Замещающий текст",
    "searchFields": "Поля поиска",
    "displayField": "Показать поле",
    "exactMatch": "Точное совпадение",
    "maxSuggestions": "Максимум предложений",
    "maxResults": "Максимум результатов",
    "enableLocalSearch": "Включить локальный поиск",
    "minScale": "Мин. масштаб",
    "minScaleHint": "Когда масштаб карты крупнее данного масштаба, применяется локальный поиск",
    "radius": "Радиус",
    "radiusHint": "Укажите радиус области вокруг текущего центра карты. Он будет использоваться для повышения ранга кандидатов геокодирования так, чтобы первыми возвращались кандидаты, расположенные ближе всего",
    "setSearchFields": "Установить поля для поиска",
    "set": "Установить",
    "invalidUrlTip": "URL ${URL} является недопустимым или недостижимым.",
    "invalidSearchSources": "Некорректные параметры поиска источника"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Заполните все обязательные поля",
    "bufferDistanceFieldsErrorMsg": "Введите корректные значения",
    "invalidSearchToleranceErrorMsg": "Введите корректное значение допуска поиска",
    "atLeastOneCheckboxCheckedErrorMsg": "Некорректная конфигурация: Необходим хотя бы один инструмент Область интереса.",
    "noLayerAvailableErrorMsg": "Нет доступных слоев",
    "layerNotSupportedErrorMsg": "Не поддерживается ",
    "noFieldSelected": "Используйте действие Редактирование для выбора поля анализа.",
    "duplicateFieldsLabels": "Дублировать подпись \"${labelText}\" добавленную для : \"${itemNames}\"",
    "noLayerSelected": "Выберите хотя бы один слой для анализа.",
    "errorInSelectingLayer": "Невозможно выделить слой. Повторите попытку еще раз.",
    "errorInMaxFeatureCount": "Введите корректное значение максимального числа объектов для анализа."
  }
});