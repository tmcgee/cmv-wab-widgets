///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2018 Esri. All Rights Reserved.
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
    "feetUnit": "Kaki / Kaki Persegi",
    "milesUnit": "Mil / Acre",
    "metersUnit": "Meter / Meter Persegi",
    "kilometersUnit": "Kilometer / Kilometer Persegi",
    "hectaresUnit": "Kilometer / Hektar"
  },
  "analysisTab": {
    "analysisTabLabel": "Analisis",
    "selectAnalysisLayerLabel": "Pilih layer analisis",
    "addLayerLabel": "Tambahkan Layer",
    "noValidLayersForAnalysis": "Tidak ada layer valid yang ditemukan di web map yang dipilih.",
    "noValidFieldsForAnalysis": "Tidak ada kolom yang valid yang ditemukan di web map yang dipilih. Harap hapus layer yang dipilih.",
    "addLayersHintText": "Petunjuk: Pilih layer dan kolom untuk dianalisis dan ditampilkan dalam laporan",
    "addLayerNameTitle": "Nama Layer",
    "addFieldsLabel": "Tambahkan Kolom",
    "addFieldsPopupTitle": "Pilih Kolom",
    "addFieldsNameTitle": "Nama Kolom",
    "aoiToolsLegendLabel": "Alat AOI",
    "aoiToolsDescriptionLabel": "Aktifkan alat untuk membuat area pilihan dan tentukan labelnya",
    "placenameLabel": "Nama tempat",
    "drawToolsLabel": "Alat Gambar",
    "uploadShapeFileLabel": "Unggah Shapefile",
    "coordinatesLabel": "Koordinat",
    "coordinatesDrpDwnHintText": "Petunjuk: Pilih unit untuk menampilkan lintasan yang dimasukkan",
    "coordinatesBearingDrpDwnHintText": "Petunjuk: Pilih poros untuk menampilkan lintasan yang dimasukkan",
    "allowShapefilesUploadLabel": "Izinkan mengunggah shapefiles ke analisis",
    "allowShapefilesUploadLabelHintText": "Petunjuk: Tampilkan 'Unggah shapefile di Analisis' di Tab Laporan",
    "allowVisibleLayerAnalysisLabel": "Jangan menganalisis atau melaporkan hasil untuk layer yang tidak terlihat",
    "allowVisibleLayerAnalysisHintText": "Petunjuk: Layer yang sudah dimatikan atau tidak terlihat karena pengaturan visibilitas skala tidak akan dianalisis atau disertakan dalam hasil cetak atau unduhan.",
    "areaUnitsLabel": "Tampilkan hasil analisis dalam",
    "maxFeatureForAnalysisLabel": "Max fitur untuk analisis",
    "maxFeatureForAnalysisHintText": "Petunjuk: Atur jumlah maksimum fitur untuk analisis",
    "searchToleranceLabelText": "Cari toleransi",
    "searchToleranceHint": "Petunjuk: Toleransi pencarian hanya digunakan saat menganalisis input titik dan garis",
    "placenameButtonText": "Nama tempat",
    "drawToolsButtonText": "Gambar",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Koordinat",
    "invalidLayerErrorMsg": "Harap konfigurasikan kolom untuk",
    "drawToolSelectableLayersLabel": "Pilih layer yang dapat dipilih alat gambar",
    "drawToolSelectableLayersHint": "Petunjuk: Pilih layer yang akan tersedia sebagai pilihan pada daftar layer alat gambar"
  },
  "downloadTab": {
    "downloadLegend": "Pengaturan Unduhan",
    "reportLegend": "Pengaturan Laporan",
    "downloadTabLabel": "Unduh",
    "syncEnableOptionLabel": "Feature layer",
    "syncEnableOptionHint": "Petunjuk: Digunakan untuk mengunduh informasi fitur untuk fitur yang memotong area pilihan dalam format yang ditunjukkan.",
    "syncEnableOptionNote": "Catatan: Service fitur sinkronisasi diaktifkan untuk opsi File Geodatabase dan Shapefile. Format shapefile hanya didukung dengan feature layer ArcGIS Online yang di-host.",
    "extractDataTaskOptionLabel": "Ekstrak Data Tugas service geoprocessing",
    "extractDataTaskOptionHint": "Petunjuk: Gunakan ekstrak data tugas service geoprocessing yang dipublikasikan untuk mengunduh fitur yang memotong area pilihan dalam format File Geodatabase atau Shapefile.",
    "cannotDownloadOptionLabel": "Nonaktifkan pengunduhan",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nama layer",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "File Geodatabase",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Izinkan Pengunduhan"
    },
    "setButtonLabel": "Atur",
    "GPTaskLabel": "Tentukan url ke service geoprocessing",
    "printGPServiceLabel": "Cetak URL Service",
    "setGPTaskTitle": "Tentukan URL Service Geoprocessing yang diperlukan",
    "logoLabel": "Logo",
    "logoChooserHint": "Petunjuk: Klik pada ikon gambar untuk mengubah gambar",
    "footnoteLabel": "Catatan kaki",
    "columnTitleColorPickerLabel": "Warna untuk judul kolom",
    "reportTitleLabel": "Judul Laporan",
    "errorMessages": {
      "invalidGPTaskURL": "Service geoprocessing tidak valid. Harap pilih service geoprocessing yang berisi Ekstrak Data Tugas.",
      "noExtractDataTaskURL": "Harap pilih service geoprocessing yang berisi Ekstrak Data Tugas.",
      "duplicateCustomOption": "Entri duplikat untuk ${duplicateValueSizeName} sudah ada.",
      "invalidLayoutWidth": "Lebar tidak valid dimasukkan untuk ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Tinggi tidak valid dimasukkan untuk ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Unit halaman tidak valid dipilih untuk ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Kesalahan saat mengambil informasi dimensi tugas buddy. Silakan coba lagi.",
      "failtofetchbuddyTaskName": "Kesalahan saat mengambil nama tugas buddy. Silakan coba lagi.",
      "failtofetchChoiceList": "Kesalahan saat mengambil daftar pilihan dari layanan cetak. Silakan coba lagi.",
      "invalidWidth": "Lebar Tidak Valid.",
      "invalidHeight": "Tinggi Tidak Valid."
    },
    "addCustomLayoutTitle": "Tambahkan Tata Letak Kustom",
    "customLayoutOptionHint": "Petunjuk: Tambahkan opsi tata letak kustom dari layanan cetak Anda ke opsi pencetakan.",
    "reportDefaultOptionLabel": "Tata Letak Default",
    "pageSizeUnits": {
      "millimeters": "Milimeter",
      "points": "Titik"
    }
  },
  "generalTab": {
    "generalTabLabel": "Umum",
    "tabLabelsLegend": "Label Panel",
    "tabLabelsHint": "Petunjuk: Tentukan Label",
    "AOITabLabel": "Panel Area Pilihan",
    "ReportTabLabel": "Panel Laporan",
    "bufferSettingsLegend": "Pengaturan Buffer",
    "defaultBufferDistanceLabel": "Jarak Buffer Default",
    "defaultBufferUnitsLabel": "Unit Buffer",
    "generalBufferSymbologyHint": "Petunjuk: Atur simbologi yang akan digunakan untuk menampilkan buffer di sekitar area pilihan yang ditentukan",
    "aoiGraphicsSymbologyLegend": "Simbologi Grafik AOI",
    "aoiGraphicsSymbologyHint": "Petunjuk: Atur simbologi untuk digunakan saat menentukan titik, garis, dan poligon area pilihan",
    "pointSymbologyLabel": "Titik",
    "previewLabel": "Pratinjau",
    "lineSymbologyLabel": "Garis",
    "polygonSymbologyLabel": "Poligon",
    "aoiBufferSymbologyLabel": "Simbologi Buffer",
    "pointSymbolChooserPopupTitle": "Simbol alamat atau lokasi",
    "polygonSymbolChooserPopupTitle": "Pilih simbol untuk menyorot poligon",
    "lineSymbolChooserPopupTitle": "Pilih simbol untuk menyorot garis",
    "aoiSymbolChooserPopupTitle": "Atur simbol buffer",
    "aoiTabText": "AOI",
    "reportTabText": "Laporkan",
    "invalidSymbolValue": "Nilai simbol tidak valid."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Pengaturan Sumber Pencarian",
    "searchSourceSettingTitle": "Pengaturan Sumber Pencarian",
    "searchSourceSettingTitleHintText": "Tambah dan konfigurasikan service geocode atau feature layer sebagai sumber pencarian. Sumber yang ditentukan ini akan menentukan apa saja yang dapat dicari dalam kotak pencarian",
    "addSearchSourceLabel": "Tambahkan Sumber Pencarian",
    "featureLayerLabel": "Feature Layer",
    "geocoderLabel": "Geocoder",
    "generalSettingLabel": "Pengaturan Umum",
    "allPlaceholderLabel": "Teks placeholder untuk mencari semua:",
    "allPlaceholderHintText": "Petunjuk: Masukkan teks untuk ditampilkan sebagai placeholder ketika mencari semua layer dan geocoder",
    "generalSettingCheckboxLabel": "Tampilkan pop-up untuk fitur atau lokasi yang ditemukan",
    "countryCode": "Kode Negara atau Wilayah",
    "countryCodeEg": "misalnya ",
    "countryCodeHint": "Membiarkan nilai ini kosong berarti akan mencari semua negara dan wilayah",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Cari hanya dalam jangkauan peta saat ini",
    "zoomScale": "Skala Zoom",
    "locatorUrl": "URL Geocoder",
    "locatorName": "Nama Geocoder",
    "locatorExample": "Contoh",
    "locatorWarning": "Versi service geocode tidak didukung. Widget mendukung service geocode versi 10.0 dan lebih tinggi.",
    "locatorTips": "Saran tidak tersedia karena service geocode tidak mendukung kemampuan saran.",
    "layerSource": "Sumber Layer",
    "setLayerSource": "Atur Sumber Layer",
    "setGeocoderURL": "Atur URL Geocoder",
    "searchLayerTips": "Saran tidak tersedia karena feature service tidak mendukung kemampuan penomoran halaman.",
    "placeholder": "Teks Placeholder",
    "searchFields": "Kolom Pencarian",
    "displayField": "Kolom Tampilan",
    "exactMatch": "Persis",
    "maxSuggestions": "Saran Maksimum",
    "maxResults": "Hasil Maksimum",
    "enableLocalSearch": "Aktifkan pencarian lokal",
    "minScale": "Skala Min",
    "minScaleHint": "Apabila skala peta lebih besar daripada skala ini, pencarian lokal akan diterapkan",
    "radius": "Radius",
    "radiusHint": "Menentukan radius dari area di sekitar pusat peta saat ini yang digunakan untuk mendorong peringkat calon geocoding sehingga calon yang terdekat dengan lokasi akan dimunculkan terlebih dahulu",
    "setSearchFields": "Atur Kolom Pencarian",
    "set": "Atur",
    "invalidUrlTip": "URL ${URL} tidak valid atau tidak dapat diakses.",
    "invalidSearchSources": "Pengaturan sumber pencarian tidak valid"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Harap isi kolom yang diminta",
    "bufferDistanceFieldsErrorMsg": "Harap masukkan nilai yang valid",
    "invalidSearchToleranceErrorMsg": "Harap masukkan nilai yang valid untuk toleransi pencarian",
    "atLeastOneCheckboxCheckedErrorMsg": "Konfigurasi tidak valid: Paling tidak satu AOI Tool diperlukan.",
    "noLayerAvailableErrorMsg": "Tidak ada layer yang tersedia",
    "layerNotSupportedErrorMsg": "Tidak Didukung ",
    "noFieldSelected": "Harap gunakan tindakan edit untuk memilih kolom yang akan dianalisis.",
    "duplicateFieldsLabels": "Label duplikat \"${labelText}\" ditambahkan untuk: \"${itemNames}\"",
    "noLayerSelected": "Harap pilih setidaknya satu layer untuk analisis",
    "errorInSelectingLayer": "Tidak dapat menyelesaikan operasi pemilihan layer. Harap coba lagi.",
    "errorInMaxFeatureCount": "Harap masukkan jumlah fitur maks yang valid untuk analisis."
  }
});