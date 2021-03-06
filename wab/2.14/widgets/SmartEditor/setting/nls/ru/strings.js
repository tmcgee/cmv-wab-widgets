define({
  "layersPage": {
    "allLayers": "Все слои",
    "title": "Выберите шаблон для создания объектов",
    "generalSettings": "Общие параметры",
    "layerSettings": "Настройки слоя",
    "smartActionsTabTitle": "Умные действия",
    "attributeActionsTabTitle": "Действия атрибута",
    "geocoderSettingsText": "Настройки геокодера",
    "editDescription": "Введите текст, отображаемый на панели редактирования",
    "editDescriptionTip": "Этот текст будет отображаться над инструментом выбора шаблона, оставьте пустым, если текст не требуется.",
    "promptOnSave": "Запрос на сохранение изменений при закрытии формы или переключении к следующей записи.",
    "promptOnSaveTip": "Отображать запрос, когда пользователь закрывает окно или переходит к следующей редактируемой записи, если у текущего объекта имеются несохраненные изменения.",
    "promptOnDelete": "При удалении записи требуется подтверждение.",
    "promptOnDeleteTip": "Отображать запрос для подтверждения действия, когда пользователь выбирает удаление.",
    "removeOnSave": "Удалить объект из выборки при сохранении.",
    "removeOnSaveTip": "Опция для удаления объекта из выборки при сохранении записи. Если это единственная выбранная запись, панель переключается назад, на страницу шаблона.",
    "useFilterEditor": "Использовать фильтр шаблонов объектов",
    "useFilterEditorTip": "Опция для использования инструмента фильтрации шаблонов, позволяющего просматривать шаблоны слоев или находить их по имени.",
    "displayShapeSelector": "Показать опции рисования",
    "createNewFeaturesFromExisting": "Разрешить пользователю создавать новые пространственные объекты из существующих объектов",
    "createNewFeaturesFromExistingTip": "Опция разрешить пользователю копировать существующий объект для создания новых пространственных объектов",
    "copiedFeaturesOverrideDefaults": "Скопированные значения объектов переопределяют значения по умолчанию",
    "copiedFeaturesOverrideDefaultsTip": "Значения из скопированных объектов переопределят значения шаблона по умолчанию только для сопоставленных полей",
    "displayShapeSelectorTip": "Опция, показывающая список допустимых опций рисования для выбранного шаблона.",
    "displayPresetTop": "Показать вверху список предустановленных значений",
    "displayPresetTopTip": "Опция, показывающая список предустановленных значений над выбором шаблона.",
    "listenToGroupFilter": "Применить значения фильтра из виджета Фильтр группы к Предустановленным полям",
    "listenToGroupFilterTip": "Когда в виджете Групповой фильтр применяется фильтр, можно применить значение к соответствующему полю в списке Предустановленные значения.",
    "keepTemplateActive": "Поддерживать активность выбранного шаблона",
    "keepTemplateActiveTip": "При отображении инструмента выбора шаблона, если шаблон уже был выделен, происходит его повторное выделение.",
    "geometryEditDefault": "Включить редактирование геометрии по умолчанию",
    "autoSaveEdits": "Сохраняет новые объекты автоматически",
    "enableAttributeUpdates": "Показать кнопку обновления действий атрибута, когда активно редактирование геометрии",
    "enableAutomaticAttributeUpdates": "Автоматически вызывать действие Атрибут после обновления геометрии",
    "enableLockingMapNavigation": "Включить блокировку навигации по карте",
    "enableMovingSelectedFeatureToGPS": "Включить перемещение выбранного точечного объекта в GPS-местоположение",
    "enableMovingSelectedFeatureToXY": "Включить перемещение выбранного точечного объекта в XY-местоположение",
    "featureTemplateLegendLabel": "Настройки шаблона объектов и значений фильтра",
    "saveSettingsLegendLabel": "Сохранить параметры",
    "geometrySettingsLegendLabel": "Настройки геометрии",
    "buttonPositionsLabel": "Положение кнопок Сохранить, Удалить, Назад и Очистить",
    "belowEditLabel": "Ниже формы редактирования",
    "aboveEditLabel": "Выше формы редактирования",
    "switchToMultilineInput": "Перейти к многостроковому вводу при превышении длины поля",
    "layerSettingsTable": {
      "allowDelete": "Разрешить удаление",
      "allowDeleteTip": "Позволить удалять – Опция, разрешающая пользователю удалять объект; отключена, если слой не поддерживает удаление",
      "edit": "Редактируемый",
      "editTip": "Редактируемый – Опции для включения слоя в виджет",
      "label": "Слой",
      "labelTip": "Слой – Имя слоя, как определено на карте",
      "update": "Отключить Редактирование геометрии",
      "updateTip": "Редактирование геометрии отключено – Опция для отключения возможности перемещения геометрии после ее размещения или перемещения геометрии на существующий объект",
      "allowUpdateOnly": "Только обновление",
      "allowUpdateOnlyTip": "Только обновить – Опция, разрешающая только изменение имеющихся объектов, включена по умолчанию и отключена, если слой не поддерживает создание новых объектов",
      "fieldsTip": "Изменение редактируемых полей и задание Умных атрибутов",
      "actionsTip": "Действия – Опция для редактирования полей или доступа к связанным слоям/таблицам",
      "description": "Описание",
      "descriptionTip": "Описание – Опция ввода текста, который отображается вверху страницы атрибутов.",
      "relationTip": "Просмотреть связанные слои и таблицы"
    },
    "editFieldError": "Изменения полей и использование Умных атрибутов не доступно для слоев, не являющихся редактируемыми",
    "noConfigedLayersError": "Для Умного редактора требуется один или несколько редактируемых слоев",
    "toleranceErrorMsg": "Значение некорректного допуска пересечения по умолчанию",
    "invalidMaxCharacterErrorMsg": "Недопустимое значение для переключения к многостроковому вводу"
  },
  "editDescriptionPage": {
    "title": "Задать текст обзора атрибутов для <b>${layername}</b> "
  },
  "fieldsPage": {
    "title": "Настроить поля для <b>${layername}</b>",
    "copyActionTip": "Действия атрибута",
    "editActionTip": "Умные действия",
    "description": "Использовать кнопку редактирования Действий, чтобы активировать Умные атрибуты в слое. Умные атрибуты могут требовать, скрывать или отключать поля на основании значений в других полях. Используйте кнопку копирования Действий для активирования и задания источников значений поля пересечению, адресу, координатам и предустановкам.",
    "fieldsNotes": "* является обязательным полем. Если вы снимите отметку Отображать у этого поля, а шаблон редактирования не содержит значения для него, вы не сможете сохранить новую запись.",
    "smartAttachmentText": "Настроить действие умных вложений",
    "smartAttachmentPopupTitle": "Настроить умные вложения для <b>${layername}</b>",
    "fieldsSettingsTable": {
      "display": "Отображение",
      "displayTip": "Отобразить – Определяет, является ли поле не отображаемым",
      "edit": "Редактируемый",
      "editTip": "Редактируемое – Отметьте, если поле присутствует в атрибутивной форме",
      "fieldName": "Имя",
      "fieldNameTip": "Имя – Имя поля, определенное базой данных",
      "fieldAlias": "Псевдоним",
      "fieldAliasTip": "Псевдоним – Имя поля, определенное на карте",
      "canPresetValue": "Предустановленное",
      "canPresetValueTip": "Предустановка – Опция отображения поля в списке заранее заданных полей, позволяющая пользователю задать значение до редактирования",
      "actions": "Действия",
      "actionsTip": "Действия – Изменить порядок полей или настроить Умные атрибуты"
    },
    "smartAttSupport": "Умные атрибуты не поддерживаются для обязательных полей базы данных"
  },
  "actionPage": {
    "title": "Настроить действия атрибутов для<b>${fieldname}</b>",
    "smartActionTitle": "Настроить действия Умных атрибутов для <b>${fieldname}</b>",
    "description": "Действия всегда отключены, пока вы не зададите критерии, включающие их. Действия выполняются в заданном порядке и только одно действие может быть запущено для поля. Используйте кнопку Редактировать критерии, чтобы задать их.",
    "copyAttributesNote": "Отключение любого действия с именем группы будет таким же, как и независимое редактирование этого действия, и удалит действие для этого поля из соответствующей группы.",
    "searchPlaceHolder": "Поиск",
    "expandAllLabel": "Раскрыть все слои",
    "actionsSettingsTable": {
      "rule": "Действие",
      "ruleTip": "Действие – Действие, выполняемое при соблюдении критерия",
      "expression": "Выражение",
      "expressionTip": "Выражение – Итоговое выражение в формате SQL, полученное по заданным критериям",
      "groupName": "Имя группы",
      "groupNameTip": "Имя группы – отображает имя группы, к которой применено выражение",
      "actions": "Критерии",
      "actionsTip": "Критерии – Изменить порядок правил и задать условия запуска критерия"
    },
    "copyAction": {
      "description": "Источник значения поля обрабатывается, если активен, до переключения корректного критерия или завершения списка. Используйте кнопку Редактирования критерия, чтобы задать критерий.",
      "intersection": "Пересечение",
      "coordinates": "Координаты",
      "address": "Адрес",
      "preset": "Предустановленный",
      "actionText": "Действия",
      "criteriaText": "Критерии",
      "enableText": "Включено"
    },
    "actions": {
      "hide": "Скрыть",
      "required": "Необходимо",
      "disabled": "Отключено"
    },
    "editOptionsPopup": {
      "editAttributeGroupHint": "Предупреждение: Независимое редактирование удалит выбранное действие атрибута, связанное с этим полем, из группы",
      "editGroupHint": "Предупреждение: Независимое редактирование удалит выбранное умное действие, связанное с этим полем, из группы",
      "popupTitle": "Выберите опцию редактирования",
      "editAttributeGroup": "Выбранное действие атрибута определяется из группы. Выберите одну из следующих опций, чтобы редактировать действие атрибута:",
      "expression": "Выражение выбранного умного действия определяется из группы. Выберите одну из следующих опций, чтобы редактировать выражение умного действия:",
      "editGroupButton": "Изменить группу",
      "editIndependentlyButton": "Редактировать независимо"
    }
  },
  "filterPage": {
    "submitHidden": "Отправить атрибутивные данные в это поле, даже если оно скрыто?",
    "title": "Настройка выражения для правила ${action}",
    "filterBuilder": "Задать действие с полем, когда запись соответствует ${any_or_all} из следующих выражений",
    "noFilterTip": "Используя указанные ниже инструменты, задайте выражение для выполняющегося действия."
  },
  "geocoderPage": {
    "setGeocoderURL": "Задать URL геокодера",
    "hintMsg": "Примечание: Вы изменяете сервис геокодирования, проверьте, что обновили сопоставление полей геокодера, которое вы настроили.",
    "invalidUrlTip": "URL ${URL} является недопустимым или недостижимым."
  },
  "addressPage": {
    "popupTitle": "Адрес",
    "checkboxLabel": "Задать значение из геокодера",
    "selectFieldTitle": "Атрибуты",
    "geocoderHint": "Для изменения геокодера перейдите к кнопке \"Настройки геокодера\" в общих настройках",
    "prevConfigruedFieldChangedMsg": "Ранее настроенный атрибут не найден в текущих настройках геокодера. Атрибут был сброшен по умолчанию."
  },
  "coordinatesPage": {
    "popupTitle": "Координаты",
    "checkboxLabel": "Задать координаты",
    "coordinatesSelectTitle": "Система координат",
    "coordinatesAttributeTitle": "Атрибуты",
    "mapSpatialReference": "Пространственная привязка карты",
    "latlong": "Широта/Долгота",
    "allGroupsCreatedMsg": "Все возможные группы уже созданы"
  },
  "presetPage": {
    "popupTitle": "Предустановленный",
    "checkboxLabel": "Поле будет предустановленным",
    "showOnlyDomainFields": "Показывать только поля домена",
    "hideInPresetDisplay": "Скрыть в отображении заданных значений",
    "presetValueLabel": "Текущее предустановленное значение:",
    "changePresetValueHint": "Чтобы изменить это предустановленное значение перейдите к кнопке \"Задать предустановленные значения\" в общих настройках"
  },
  "intersectionPage": {
    "groupNameLabel": "Имя группы",
    "dataTypeLabel": "Тип данных",
    "ignoreLayerRankingCheckboxLabel": "Проигнорируйте ранжирование слоев и найдите ближайший объект во всех определенных слоях",
    "intersectingLayersLabel": "Слои для извлечения значения",
    "layerAndFieldsApplyLabel": "Слои и поля для применения извлеченного значения",
    "checkboxLabel": "Получить значение из поля слоя пересечения",
    "layerText": "Слои",
    "fieldText": "Поля",
    "actionsText": "Действия",
    "toleranceSettingText": "Настройки допуска",
    "addLayerLinkText": "Добавить слой",
    "useDefaultToleranceText": "Использовать допуск по умолчанию",
    "toleranceValueText": "Значение допуска",
    "toleranceUnitText": "Единицы допуска",
    "useLayerName": "- Использовать имя слоя -",
    "noLayersMessage": "Ни в одном слое карты не найдено полей, соответствующих выбранному типу данных."
  },
  "presetAll": {
    "popupTitle": "Задать предустановленные значения по умолчанию",
    "deleteTitle": "Задать предустановленное значение",
    "hintMsg": "Все уникальные имена предустановленных полей перечислены здесь. Удаление предустановленного поля отключит соответствующее поле как предустановленное во всех слоях /таблицах."
  },
  "intersectionTolerance": {
    "intersectionTitle": "Допуск пересечения умолчанию"
  },
  "smartActionsPage": {
    "smartActionLabel": "Настроить Умные действия",
    "addNewSmartActionLinkText": "Добавить новый",
    "definedActions": "Заданные действия",
    "priorityPopupTitle": "Приоритет установки умных действий",
    "priorityPopupColumnTitle": "Умные действия",
    "priorityOneText": "1",
    "priorityTwoText": "2",
    "priorityThreeText": "3",
    "groupNameLabel": "Имя группы",
    "layerForExpressionLabel": "Слой для выражения",
    "layerForExpressionNote": "Примечание: выбранные поля слоя будут использоваться для задания критерия",
    "expressionText": "Выражение",
    "editExpressionLabel": "Редактировать выражение",
    "layerAndFieldsApplyLabel": "Слои и поля для применения",
    "submitAttributeText": "Передать атрибутивные данные в выбранные скрытые поля?",
    "priorityColumnText": "Приоритет",
    "requiredGroupNameMsg": "Это значение является обязательным",
    "uniqueGroupNameMsg": "Введите уникальное имя группы, группа с таким именем уже существует.",
    "deleteGroupPopupTitle": "Удалить группу умного действия",
    "deleteGroupPopupMsg": "Удаление группы приведёт к удалению выражения из всех связанных действий полей.",
    "invalidExpression": "Выражение не может быть пустым",
    "warningMsgOnLayerChange": "Заданное выражение и поля, к которым оно применяется, будут очищены.",
    "smartActionsTable": {
      "name": "Имя",
      "expression": "Выражение",
      "definedFor": "Задано для"
    }
  },
  "attributeActionsPage": {
    "name": "Имя",
    "type": "Тип",
    "deleteGroupPopupTitle": "Удалить группу атрибутивного действия",
    "deleteGroupPopupMsg": "Удаление группы приведёт к удалению атрибутивного действия из всех связанных действий полей.",
    "alreadyAppliedActionMsg": "${action} – действие уже применено к данному полю."
  },
  "chooseFromLayer": {
    "fieldLabel": "Поле",
    "valueLabel": "Значение",
    "selectValueLabel": "Выберите значение"
  },
  "presetPopup": {
    "presetValueLAbel": "Заданное значение"
  },
  "dataType": {
    "esriFieldTypeString": "Строка",
    "esriFieldTypeInteger": "Числовые",
    "esriFieldTypeDate": "Дата",
    "esriFieldTypeGUID": "GUID"
  },
  "relativeDates": {
    "dateTypeLabel": "Тип даты",
    "valueLabel": "Значение",
    "fixed": "Фиксированный",
    "current": "Текущий",
    "past": "Прошедшие",
    "future": "Будущее",
    "popupTitle": "Выберите значение",
    "hintForFixedDateType": "Подсказка: указанные время и дата будут использованы как значения по умолчанию",
    "hintForCurrentDateType": "Подсказка: текущие время и дата будут использованы как значения по умолчанию",
    "hintForPastDateType": "Подсказка: указанное значение будет вычтено из текущего времени и даты для задания значения по умолчанию.",
    "hintForFutureDateType": "Подсказка: указанное значение будет добавлено к текущему времени и дате для задания значения по умолчанию.",
    "noDateDefinedTooltip": "Дата не задана"
  },
  "relativeDomains": {
    "fieldSetTitle": "Список",
    "valueText": "Значение",
    "defaultText": "По умолчанию",
    "selectDefaultDomainMsg": "Выберите домен значений по умолчанию или убедитесь, что опция домена по умолчанию включена"
  }
});