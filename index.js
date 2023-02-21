const characters = 
["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
"`","!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let genBtn = document.getElementById('gen--btn');
let password = document.getElementById('pass-output');
const copyBtn = document.getElementById('copy--btn')


function mySlider(val) {
   document.getElementById("rangeValue").innerHTML = val;

    genBtn.addEventListener("click", function(){
        
        let newPassword = []
        let j = ""
        
        for(let i = 0; i < val; i++){
            
        j = Math.floor(Math.random()* characters.length);
        newPassword.push(characters[j]);
    
        
        }
        newPassword = newPassword.toString().replaceAll(',','')
        password.innerHTML = newPassword
        console.log(typeof newPassword)
    })

}


let text = document.getElementById('pass-output').innerHTML;
    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Content copied to clipboard');
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
        }




