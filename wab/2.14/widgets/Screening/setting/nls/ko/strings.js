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
    "areaSquareFeetUnit": "제곱피트",
    "areaAcresUnit": "에이커",
    "areaSquareMetersUnit": "제곱미터",
    "areaSquareKilometersUnit": "제곱킬로미터",
    "areaHectaresUnit": "헥타르",
    "lengthFeetUnit": "피트",
    "lengthMilesUnit": "마일",
    "lengthMetersUnit": "m",
    "lengthKilometersUnit": "킬로미터"
  },
  "analysisTab": {
    "analysisTabLabel": "분석",
    "selectAnalysisLayerLabel": "분석 레이어",
    "addLayerLabel": "레이어 추가",
    "noValidLayersForAnalysis": "선택한 웹맵에서 유효한 레이어를 찾을 수 없습니다.",
    "noValidFieldsForAnalysis": "선택한 웹맵에서 유효한 필드를 찾을 수 없습니다. 선택한 레이어를 제거하세요.",
    "allowGroupingLabel": "값이 동일한 필드를 기준으로 피처 그룹화",
    "groupingHintDescription": "힌트: 기본 설정에 따라 선택한 필드에 대해 값이 동일한 모든 피처가 그룹화되어 보고서에 단일 항목으로 나타납니다. 동일 속성별 그룹화를 비활성화하면 각 피처에 대한 항목이 대신 표시됩니다.",
    "addLayersHintText": "힌트: 분석과 보고서에 포함시킬 레이어와 필드를 선택합니다.",
    "addLayerNameTitle": "레이어 이름",
    "addFieldsLabel": "필드 추가",
    "addFieldsPopupTitle": "필드 선택",
    "addFieldsNameTitle": "필드 이름",
    "aoiToolsLegendLabel": "관심 영역 도구",
    "aoiToolsDescriptionLabel": "관심 영역을 생성하는 데 사용될 도구를 선택하고 레이블을 지정합니다.",
    "placenameLabel": "장소 이름",
    "drawToolsLabel": "그리기 도구 선택",
    "uploadShapeFileLabel": "쉐이프파일 업로드",
    "coordinatesLabel": "좌표",
    "coordinatesDrpDwnHintText": "힌트: 입력한 트래버스를 표시할 단위를 선택합니다.",
    "coordinatesBearingDrpDwnHintText": "힌트: 입력한 트래버스를 표시할 방위각을 선택합니다.",
    "allowShapefilesUploadLabel": "사용자가 분석에 포함시킬 쉐이프파일을 업로드할 수 있습니다.",
    "allowShapefilesUploadLabelHintText": "힌트: 사용자가 자신의 데이터를 쉐이프파일로 업로드하여 분석 보고서에 포함시킬 수 있는 보고서 탭에 옵션을 추가합니다.",
    "allowVisibleLayerAnalysisLabel": "보이지 않는 레이어에 대한 결과는 분석하거나 보고하지 않음",
    "allowVisibleLayerAnalysisHintText": "힌트: 꺼져 있는 레이어 또는 축척 가시성 설정으로 인해 보이지 않는 레이어는 분석되지 않으며 인쇄 또는 다운로드된 결과에 포함되지 않습니다.",
    "areaUnitsLabel": "분석 결과의 단위(영역)",
    "lengthUnitsLabel": "분석 결과의 단위(길이)",
    "maxFeatureForAnalysisLabel": "분석할 최대 피처 수",
    "maxFeatureForAnalysisHintText": "힌트: 분석에 포함될 최대 피처 수를 설정합니다.",
    "searchToleranceLabelText": "톨러런스 검색",
    "searchToleranceHint": "힌트: 허용오차 검색은 포인트 및 라인 입력을 분석할 때 사용됩니다.",
    "placenameButtonText": "장소 이름",
    "drawToolsButtonText": "그리기",
    "shapefileButtonText": "쉐이프파일",
    "coordinatesButtonText": "좌표",
    "invalidLayerErrorMsg": "다음에 대한 필드를 구성하세요.",
    "drawToolSelectableLayersLabel": "선택 가능한 레이어 선택",
    "drawToolSelectableLayersHint": "힌트: 그리기 도구 선택을 사용하여 선택할 수 있는 피처가 포함된 레이어를 선택합니다.",
    "drawToolsSettingsFieldsetLabel": "그리기 도구",
    "drawToolPointLabel": "포인트",
    "drawToolPolylineLabel": "폴리라인",
    "drawToolExtentLabel": "범위",
    "drawToolPolygonLabel": "폴리곤",
    "drawToolCircleLabel": "원",
    "selectDrawToolsText": "관심 영역을 생성하는 데 사용될 그리기 도구를 선택합니다.",
    "selectingDrawToolErrorMessage": "AOI 도구에 대해 그리기 도구 옵션을 사용하려면 그리기 도구 또는 선택 레이어를 하나 이상 선택하세요."
  },
  "downloadTab": {
    "downloadLegend": "다운로드 설정",
    "reportLegend": "보고서 설정",
    "downloadTabLabel": "다운로드",
    "syncEnableOptionLabel": "피처 레이어",
    "syncEnableOptionHint": "힌트: 다운로드할 수 있는 레이어를 선택하고 각 레이어가 제공될 때 사용되는 형식을 지정합니다. 다운로드한 데이터셋에는 관심 영역과 교차하는 피처가 포함됩니다.",
    "syncEnableOptionNote": "참고: 파일 지오데이터베이스 및 쉐이프파일 다운로드의 경우 동기화가 활성화된 피처 레이어가 필요합니다. 쉐이프파일 형식은 ArcGIS Online 호스팅 피처 레이어에만 지원됩니다.",
    "extractDataTaskOptionLabel": "데이터 추출 작업(Extract Data Task) 지오프로세싱 서비스",
    "extractDataTaskOptionHint": "힌트: 발행된 데이터 추출 작업(Extract Data Task) 지오프로세싱 서비스를 사용하여 파일 지오데이터베이스 또는 쉐이프파일 형식의 관심 영역을 교차하는 피처를 다운로드할 수 있습니다.",
    "cannotDownloadOptionLabel": "다운로드 비활성화",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "레이어 이름",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "파일 지오데이터베이스",
      "ShapefileFormatLabel": "쉐이프파일",
      "allowDownloadLabel": "다운로드 허용"
    },
    "setButtonLabel": "설정",
    "GPTaskLabel": "지오프로세싱 서비스의 URL 지정",
    "printGPServiceLabel": "인쇄 서비스 URL",
    "setGPTaskTitle": "필수 지오프로세싱 서비스 URL 지정",
    "logoLabel": "로고",
    "logoChooserHint": "힌트: 이미지 아이콘을 클릭하면 보고서 왼쪽 상단에 표시된 로고가 바뀝니다.",
    "footnoteLabel": "각주",
    "columnTitleColorPickerLabel": "보고서 열 제목 색상",
    "reportTitleLabel": "보고서 제목",
    "displaySummaryLabel": "요약 표시",
    "errorMessages": {
      "invalidGPTaskURL": "유효하지 않은 지오프로세싱 서비스입니다. 데이터 추출 작업(Extract Data Task)이 포함된 지오프로세싱 서비스를 선택하세요.",
      "noExtractDataTaskURL": "데이터 추출 작업(Extract Data Task)이 포함된 지오프로세싱 서비스를 선택하세요.",
      "duplicateCustomOption": "${duplicateValueSizeName}에 대한 중복 항목이 존재합니다.",
      "invalidLayoutWidth": "${customLayoutOptionValue}에 대해 입력된 너비가 올바르지 않습니다.",
      "invalidLayoutHeight": "${customLayoutOptionValue}에 대해 입력된 높이가 올바르지 않습니다.",
      "invalidLayoutPageUnits": "${customLayoutOptionValue}에 대해 선택된 페이지 단위가 올바르지 않습니다.",
      "failtofetchbuddyTaskDimension": "버디 작업 크기 정보를 가져오는 중 오류가 발생했습니다. 다시 시도하세요.",
      "failtofetchbuddyTaskName": "버디 작업 이름을 가져오는 중 오류가 발생했습니다. 다시 시도하세요.",
      "failtofetchChoiceList": "인쇄 서비스에서 선택 목록을 가져오는 중 오류가 발생했습니다. 다시 시도하세요.",
      "invalidWidth": "잘못된 너비입니다.",
      "invalidHeight": "잘못된 높이입니다."
    },
    "addCustomLayoutTitle": "사용자 정의 레이아웃 추가",
    "customLayoutOptionHint": "힌트: 인쇄 서비스의 레이아웃을 인쇄 옵션 목록에 추가합니다.",
    "reportDefaultOptionLabel": "기본 레이아웃",
    "pageSizeUnits": {
      "millimeters": "밀리미터",
      "points": "포인트"
    },
    "noDataTextRepresentation": "값 데이터 없음",
    "naTextRepresentation": "해당 값이 아님",
    "noDataDefaultText": "데이터 없음",
    "notApplicableDefaultText": "N/A"
  },
  "generalTab": {
    "generalTabLabel": "일반",
    "tabLabelsLegend": "패널 레이블",
    "tabLabelsHint": "힌트: 레이블을 지정합니다.",
    "AOITabLabel": "관심 영역 패널",
    "ReportTabLabel": "보고서 패널",
    "bufferSettingsLegend": "버퍼 설정",
    "defaultBufferDistanceLabel": "기본 버퍼 거리",
    "defaultBufferUnitsLabel": "버퍼 단위",
    "generalBufferSymbologyHint": "힌트: 정의된 관심 영역 주변의 버퍼 영역을 나타내는 데 사용되는 심볼입니다.",
    "aoiGraphicsSymbologyLegend": "관심 영역 심볼",
    "aoiGraphicsSymbologyHint": "힌트: 포인트, 라인, 폴리곤 관심 영역을 나타내는 데 사용되는 심볼입니다.",
    "pointSymbologyLabel": "포인트",
    "previewLabel": "미리 보기",
    "lineSymbologyLabel": "라인",
    "polygonSymbologyLabel": "폴리곤",
    "aoiBufferSymbologyLabel": "버퍼 심볼",
    "pointSymbolChooserPopupTitle": "주소 또는 포인트 위치 심볼",
    "polygonSymbolChooserPopupTitle": "폴리곤 심볼",
    "lineSymbolChooserPopupTitle": "라인 심볼",
    "aoiSymbolChooserPopupTitle": "버퍼 심볼",
    "aoiTabText": "AOI",
    "reportTabText": "보고서",
    "invalidSymbolValue": "잘못된 심볼 값입니다."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "원본 설정 검색",
    "searchSourceSettingTitle": "원본 설정 검색",
    "searchSourceSettingTitleHintText": "지오코드 서비스 또는 피처 레이어를 추가하여 검색 원본으로 구성합니다. 이와 같은 지정된 원본에 따라 검색 상자 내에서 검색 가능한 항목이 결정됩니다.",
    "addSearchSourceLabel": "검색 원본 추가",
    "featureLayerLabel": "피처 레이어",
    "geocoderLabel": "지오코더",
    "generalSettingLabel": "일반 설정",
    "allPlaceholderLabel": "모두 검색하기 위한 플레이스 홀더 텍스트:",
    "allPlaceholderHintText": "힌트: 모든 레이어와 지오코더를 검색하는 동안 플레이스 홀더로 나타낼 텍스트를 입력합니다.",
    "generalSettingCheckboxLabel": "발견한 피처 또는 위치에 대해 팝업 보기",
    "countryCode": "국가 또는 지역 코드",
    "countryCodeEg": "예시: ",
    "countryCodeHint": "이 값을 비워 두면 모든 국가와 지역이 검색됩니다.",
    "questionMark": "?",
    "searchInCurrentMapExtent": "현재 맵 범위에서만 검색",
    "locatorUrl": "지오코더 URL",
    "locatorName": "지오코더 이름",
    "locatorExample": "예시",
    "locatorWarning": "이 지오코딩 서비스 버전은 지원되지 않습니다. 위젯은 지오코딩 서비스 10.0 이상을 지원합니다.",
    "locatorTips": "지오코딩 서비스에서 추천 기능을 지원하지 않기 때문에 추천을 사용할 수 없습니다.",
    "layerSource": "레이어 원본",
    "setLayerSource": "레이어 원본 설정",
    "setGeocoderURL": "지오코더 URL 설정",
    "searchLayerTips": "피처 서비스에서 페이지 매김 기능을 지원하지 않기 때문에 제안 사항을 사용할 수 없습니다.",
    "placeholder": "플레이스 홀더 텍스트",
    "searchFields": "검색 필드",
    "displayField": "디스플레이 필드",
    "exactMatch": "정확히 일치",
    "maxSuggestions": "최대 추천 수",
    "maxResults": "최대 결과",
    "enableLocalSearch": "로컬 검색 사용",
    "minScale": "최소 축척",
    "minScaleHint": "맵 축척이 이 축척보다 큰 경우 로컬 검색이 적용됨",
    "radius": "반경",
    "radiusHint": "위치와 가장 가까운 후보가 제일 먼저 반환되도록 지오코딩 후보의 순위를 올리는 데 사용되는 현재 맵 중심 주변 영역의 반경을 지정함",
    "setSearchFields": "검색 필드 설정",
    "set": "설정",
    "invalidUrlTip": "${URL} URL이 잘못되었거나 접근할 수 없습니다.",
    "invalidSearchSources": "잘못된 원본 설정 검색"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "필수 필드를 입력하세요.",
    "bufferDistanceFieldsErrorMsg": "유효한 값을 입력하세요.",
    "invalidSearchToleranceErrorMsg": "톨러런스 검색에 유효한 값을 입력하세요.",
    "atLeastOneCheckboxCheckedErrorMsg": "잘못된 구성: 하나 이상의 관심 영역 도구가 필요합니다.",
    "noLayerAvailableErrorMsg": "레이어를 사용할 수 없음",
    "layerNotSupportedErrorMsg": "지원되지 않음 ",
    "noFieldSelected": "분석할 필드를 선택하려면 편집 작업을 사용하세요.",
    "duplicateFieldsLabels": "다음에 대해 중복 레이블 \"${labelText}\"이(가) 추가됨: \"${itemNames}\"",
    "noLayerSelected": "분석할 레이어를 하나 이상 선택하세요.",
    "errorInSelectingLayer": "레이어를 선택할 수 없습니다. 다시 시도하세요.",
    "errorInMaxFeatureCount": "분석할 유효한 최대 피처 수를 입력하세요."
  }
});