define({
  "taskUrl": "任務 URL",
  "setTask": "設定",
  "setTaskPopupTitle": "設定任務",
  "validate": "設定",
  "inValidGPService": "請輸入有效的地理處理服務。",
  "GPFeatureRecordSetLayerERR": "請輸入僅包含「GPFeatureRecordSetLayer」類型輸入的地理處理服務。",
  "invalidInputParameters": "輸入參數的數目少於 1 或大於 3。 請輸入有效的地理處理服務。",
  "projectSetting": {
    "title": "專案設定",
    "note": "附註: 專案設定是選用的，一旦配置的使用者可以在所需的 Web 地圖圖層 (具有網路中斷區域和輸入參數) 中儲存專案。 使用者即可從「輸入/輸出」頁籤的「輸出」群組中儲存其他輸出參數。",
    "projectPolygonLayer": "專案多邊形圖層",
    "outputParameterName": "輸出參數名稱",
    "projectPointLayer": "專案點圖層",
    "selectLabel": "選擇",
    "polygonLayerHelp": "<p>將顯示包含下列條件的多邊形圖層:<br/><ul><li>圖層必須具有名為「建立」、「刪除」和「更新」的編輯功能</li><li>圖層必須具有包含實際名稱和資料類型的 2 個欄位:</li><ul><li>name (字串類型欄位)</li><li>globalid (GlobalID 類型欄位)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>將顯示來自任務 URL 的輸出多邊形圖層<p/>",
    "pointLayerHelp": "<p>將顯示包含下列條件的點圖層: <br/><ul><li> 圖層必須具有名為「建立」、「刪除」和「更新」的編輯功能</li><li>圖層必須具有包含實際名稱和資料類型的 2 個欄位:</li><ul><li>inputtype (字串類型欄位)</li><li>projectid (GUID 類型欄位)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "標記",
    "barrier": "屏障",
    "skip": "跳過",
    "title": "輸入/輸出",
    "inputSettingsLabel": "輸入設定",
    "outputSettingsLabel": "輸出設定",
    "inputLabel": "標籤",
    "inputTooltip": "工具提示",
    "symbol": "符號",
    "typeText": "類型",
    "outputParametersText": "輸出參數",
    "saveToLayerText": "儲存至圖層 (選用)",
    "skipText": "可略過",
    "visibilityText": "可見",
    "exportToCsvText": "匯出至 CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "設定",
    "addFieldTitle": "增新增欄位",
    "enterDisplayText": "輸入顯示文字",
    "setScale": "設定比例",
    "outputDisplay": "顯示文字",
    "saveToLayerHelp": "<p>將顯示包含下列條件的圖層:<br/><ul><li>圖層必須具有名為「建立」、「刪除」和「更新」的編輯功能</li><li>圖層必須具有包含名稱和資料類型的 2 個欄位:</li><ul><li>parametername (字串類型欄位)</li><li>projectid (Guid 類型欄位)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "一般設定",
    "summaryFieldsetText": "摘要設定",
    "inputOutput": "輸入/輸出",
    "field": "欄位",
    "operator": "運算子",
    "inputOperatorCountOption": "計數",
    "outputOperatorCountOption": "計數",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "總和",
    "fieldOperatorMinOption": "最小值",
    "fieldOperatorMaxOption": "最大值",
    "fieldOperatorMeanOption": "平均值",
    "expressionAddButtonText": "新增",
    "expressionVerifyButtonText": "驗證",
    "summaryEditorText": "摘要文字",
    "autoZoomAfterTrace": "其他選項",
    "zoomText": "追蹤後自動縮放",
    "summarSettingTooltipText": "新增輸入/輸出計數"
  },
  "validationErrorMessage": {
    "webMapError": "Web 地圖中沒有可用的圖層。 請選擇有效的 Web 地圖。",
    "inputTypeFlagGreaterThanError": "類型標記的輸入不可超過一個。",
    "inputTypeFlagLessThanError": "至少需要一個類型標記輸入。",
    "inputTypeBarrierErr": "類型屏障的輸入不可超過一個。",
    "inputTypeSkipErr": "類型略過的輸入不可超過一個。",
    "displayTextForButtonError": "「執行」按鈕的顯示文字不可空白。",
    "UnableToLoadGeoprocessError": "無法載入地理處理服務。",
    "invalidSummaryExpression": "表達式無效。",
    "validSummaryExpression": "成功!",
    "invalidProjectSettings": "專案設定無效。<br/> 請在 '${projectSetting}’ 中選擇有效值。"
  },
  "hintText": {
    "labelTextHint": "提示: 提供輸出參數的結果面板的顯示標籤。",
    "displayTextHint": "提示: 這將顯示於此輸出參數的詳細資訊畫面中。",
    "inputTextHint": "提示: 選擇輸入、輸出和欄位名稱來建立上述的表達式。",
    "expressionHint": "提示: 選擇項目，再按一下「新增」以建立表達式。"
  }
});