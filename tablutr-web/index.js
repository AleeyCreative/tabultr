function Tabultr (data, options) {
     let tb = CreateTabltr(data,options)
     renderTableToDOM(tb.table)
     return tb
	}


function CreateTabltr(data,options)
{
  	let tb = initializer(data,options)
    let tb_headings = makeColumnsTitle(tb.options.titles)
    console.log(tb_headings)
    let tb_body = makeTableBody(data,tb.rows)
    let fulltable = `<table> ${tb_headings} ${tb_body} </table>`
    tb.data = data
    tb.table = fulltable
  	return tb
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
  let alltitle = "<thead>"
  for(let title of titles){
    alltitle+=`<th>${title.toUpperCase()}</th>`
  }
  alltitle+="</tr> </thead>"
  return alltitle
}
  
// Extract the titles from the property name of the first column
function extractTitleFromFirstRow(data){
  const firstelement = data[0]
  let titles = []
  for(let key in firstelement){
    titles.push(key)
  }
  return titles
}
  
// Make the table body
function makeTableBody(data,rows){
  			let contents = "<tbody>"
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
  			console.log(contents)
  
}

function renderTableToDOM(table_string,elem)
{
  if(elem){
    elem.innerHTML= {table_string}
  }
  else {
    const tableContainer = document.createElement("div")
    tableContainer.innerHTML=table_string
    document.body.appendChild(tableContainer)
  }
}

function configure(tb,attr,val)
{
  tb.options[attr] = val
  tb = CreateTabltr(tb.data,tb.options)
  renderTableToDOM(tb.table )
}
