document.getElementById('search-input').addEventListener('keyup', async (e) => {
     
     var xmlhttp = new XMLHttpRequest();
     var urlData;
     var filteredData;
    xmlhttp.onreadystatechange = function() {
            try {
               if (this.readyState == 4 && this.status == 200) {
               urlData=this.responseText.json()
               filteredData=urlDatas.filter(urlData=> urlData.name==='e')
           }
          catch(err) {
               console.log(err)
               }
      }
    };
    xmlhttp.open("GET", "/php/public/index.php", true);
    xmlhttp.send();
       
    const result = `<li>${filteredData.join('</li><li>')}</li>`
    document.getElementById('results').innerHTML = result

})