function Tabultr (data, options) {
			tb = {}
  		tb.options = {
        	theme:"white",
      		rows:data.length,
      		unstyled:false,
      		elem:null
      		}
  		if(options){
        for(key in options)
      }
		if('a' == 'a') {
			//check if the headings were passed

				// if element supplied, then attach to the element else attach to the body 
				if(options.elem){
					options.elem.innerHTML = together
				} else {
					document.body.innerHTML += together
				}
				// get reference to the element for further customization
				tabler.reference = document.querySelector(".tabler")
				return tabler
				if(options.colorScheme)
					tabler.reference.class= option.colorScheme
		} else {
			console.log("data not an array !!")
			tabler.table = null
		}
	}



function isDataArray(data){
  return typeof data === Array
}

function makeTable(data,rows,title){
  			if(title) {
				
				} else {
				//if headings were not passed, get the heading from the attr name of the 
				//first element in the data
					tabler.heading =	` <thead> <tr> `
					for(attr in data[0]) {
							tabler.heading += `<th> ${attr} </th>`
					}
					tabler.heading += "</tr> </thead>"
				}
				var content = "<tbody>"
				var num = options.num ? options.num : data.length 
				for (let i = 0; i < num; i ++) {
						let field = data[i] 
					content += `<tr>`
					for(let infokey in field) {
						content += `<td> ${field[infokey]} </td>`
					}
					content += "</tr>"
				}
				content += "</tbody>"
				tabler.data = data
				var together = `<table class='tabler'> ${tabler.heading} ${content} </table>`
}
  
function initializer(tb){
  
}
  
function makeTableTitle(titles){
  for(var title in titles){
    title+=`<td>${title}</td>`
  }
  title+="</tr> </head>"
}
  
function extractTitleFromFirstRow(data){
  const firstelement = data[0]
  var title = "<thead> <tr>"
  for(var key in firstelement){
    title+=`<td>${key}</td>`
  }
  title+="</tr> </head>"
}
function makeTableBody