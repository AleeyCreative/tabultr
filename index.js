function Tabler (data, options) {
			tabler = {}
		if('a' == 'a') {
			//check if the headings were passed
			if(options.heading) {
				tabler.heading = options.heading
				} else {
				//if headings were not passed, get the heading from the attr name of the 
				//first element in the data
					tabler.heading =	` <thead> <tr> `
					for(attr in data[0]) {
							tabler.heading += `<th> ${attr} </th>`
					}
					tabler.heading += "</tr> </thead>"
				}
				const content = "<tbody>"
				const num = options.num ? options.num : data.length 
				for (let i = 0; i < num; i ++) {
						const field = data[i] 
					content += `<tr>`
					for(let infokey in field) {
						content += `<td> ${field[infokey]} </td>`
					}
					content += "</tr>"
				}
				content += "</tbody>"
				tabler.data = data
				const together = `<table class='tabler'> ${tabler.heading} ${content} </table>`
				// if element supplied, then attach to the element else attach to the body 
				if(options.elem){
					elem.innerHTML = together
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

