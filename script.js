'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */

var navbar = document.querySelector("[data-nav]"); var navOpenBtn = document.querySelector("[data-nav-open-btn]"); 
var  navCloseBtn = document.querySelector("[data-nav-close-btn var overlay = document.querySelector("[data-overlay]") ;
 var  navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  })

}



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})


// FOr Data TRasfer To Spreadsheet

// var sheetName = 'Sheet1'
// 		var scriptProp = PropertiesService.getScriptProperties();

// 		function intialSetup () {
// 		  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
// 		  scriptProp.setProperty('key', activeSpreadsheet.getId());
// 		}

// 		function doPost (e) {
// 		  var lock = LockService.getScriptLock();
// 		  lock.tryLock(10000);

// 		  try {
// 			var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
// 			var sheet = doc.getSheetByName(sheetName);

// 			var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
// 			var nextRow = sheet.getLastRow() + 1;

// 			var newRow = headers.map(function(header) {
// 			  return header === 'timestamp' ? new Date() : e.parameter[header];
// 			});

// 			sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

// 			return ContentService
// 			  .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
// 			  .setMimeType(ContentService.MimeType.JSON);
// 		  }

// 		  catch (e) {
// 			return ContentService
// 			  .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }));
// 			  .setMimeType(ContentService.MimeType.JSON);
// 		  };

// 		  finally {
// 			lock.releaseLock()
// 		  };
// 		};





      