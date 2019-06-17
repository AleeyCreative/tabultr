function Tabultr (data, options) {
  	if(isDataAnArray(data)){
		var tb = initializer(options)
    var tb_headings = makeColumnsTitle(tb.titles)
    var tb_body = makeTableBody(data,tb.rows)
    var fulltable = `<table> ${tb_headings} ${tb_body} </table>`
    
    }
	}



function isDataAnArray(data){
  return typeof data === Array
}

  
function extractNumOfRowsFromTable(data,rows){
	const total = data.length
  const howmuch = Math.floor((total/rows) * 10)
  return howmuch
}  

//   Initialize the table
function initializer(data,options){
  const tb = {}
  tb.options = {
    theme : "white",
    unstyled : false,
    elem : null,
    rows : 10,
    titles : extractTitleFromFirstRow(data)
  }
 if(options){
   for(let key in options){
     if(tb.options[key]){
       tb.options[key] == options[key]
     }
   }
 }
  return tb
}

  
// Make the table title from the list of titles supplied
function makeColumnsTitle(titles){
  for(var title in titles){
    title+=`<td>${title}</td>`
  }
  title+="</tr> </head>"
}
  
// Extract the titles from the property name of the first column
function extractTitleFromFirstRow(data){
  const firstelement = data[0]
  var titles = []
  for(var key in firstelement){
    titles.push(key)
  }
}
  
// Make the table body
function makeTableBody(data,rows){
  			var contents = "<tbody>"
				for (let i = 0; i < extractNumOfRowsFromTable(data,rows); i ++) {
						let field = data[i] 
					contents += `<tr>`
					for(let infokey in field) {
						contents += `<td> ${field[infokey]} </td>`
					}
					contents += "</tr>"
				}
				contents += "</tbody>"
					return contents
  
}

function renderTableToDOM(table_string,elem){
  if(elem){
    elem.innerHTML= {table_string}
  }
  else {
    const tableContainer = document.createElement("div")
    tableContainer.innerHTML=table_string
    document.body.appendChild(tableContainer)
  }
}
