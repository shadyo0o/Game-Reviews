






export class game{
    constructor(){

        this.choose=Array.from(document.querySelectorAll(".chooseGame"))
        



        for(let i=0;i<this.choose.length;i++){
            this.choose[i].addEventListener("click",()=>{
                // this.choose[i].classList.add("active")
                console.log(this.choose[i].id);

                this.getGame(this.choose[i].id)

        
            })
            }



            
document.addEventListener("DOMContentLoaded",function(){

    setTimeout(function(){
        this.loader=document.querySelector("#load")
        this.content=document.querySelector("#home")
        this.loader.classList.add("d-none")
        this.content.classList.remove("d-none")
    },3000)
})



        }
        





    
        async getGame(x){
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'd146d05305mshbcce1a8df9fe065p1f1346jsn0c9f2b246647',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${x}`, options);
                const result = await response.json();
                console.log(result);

                this.getDisplay(result)
                
        




            
            } catch (error) {
                console.error(error);
            }

        }
        getDisplay(data){
            let cartona=``
            for (let i = 0; i < data.length; i++) {
                cartona+=`
                        <div class="content col-lg-3 col-md-4 col-sm-6">
            <div id="${data[i].id}" class="inner p-3 h-100 ">
<img class="w-100" src="${data[i].thumbnail}" alt="">
<div class="d-flex justify-content-between align-items-center p-3">
    <span id="title">${data[i].title}</span>
    <button class="btn btn-primary">free</button>
</div>
<p id="desc" class="text-center">${data[i].short_description}</p>
<div class=" border-top d-flex justify-content-between align-items-center p-3" >
    <button id="genre" class="btn btn-warning">${data[i].genre}</button>
    <button class="btn btn-warning">${data[i].platform}</button>

</div>

            </div> 


            </div>
                `

            }
            document.querySelector("#rowData").innerHTML=cartona
            
        }
        




    
    }








                