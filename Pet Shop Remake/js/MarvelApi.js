$.getJSON("https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateDescriptor=thisWeek&orderBy=title&limit=10&apikey=24fca3259c7b64a61bee9bf15396bd55", function(data){
    var input = data.data;
    let result = input.results;
    for (let key in result){
      let series = result[key].title;
      let img = result[key].thumbnail.path.replace(/http/g, 'https') + '/portrait_xlarge' + '.' + result[key].thumbnail.extension;
      let link = result[key].urls[0].url;  
      $("#comicsDisplay").append(
        `<a href="${link}">
           <div class="result">
             <div><img src="${img}"></div>
           </div>
         </a>`)
    }
  
    });