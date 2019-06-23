<center> <h1>  Tabler.js </h1> 

### The javascript library that helps you dirty render your data ! 
</center>


## Contents
- What is Tabler.js
- Features
- API
- Contribution
- Donate


### What is Tabler.js ?
Tabler.js is a small javascript library that enables you quickly render your data on a HTML5 table. It has support for which can give a quick overview of what your data looks like during development. All it takes it just a few lines of code and voila ! your data is ready for you to peruse.

```javascript
	const renderMyCoolTable = async () => {
     const data = await fetch(my_data_endpoint) // Asynchronously load the data
     const tabler = new tabler(data) //a new instance of tabler that get renders immediately
        
    }
```

### Features

- Column title inference if no title is supplied
- Render data in a beautiful HTML5 table


### API 
 When creating a  new instance of
