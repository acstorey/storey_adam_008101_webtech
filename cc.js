function encode(){ 

    var original_text = document.getElementById("input").value; 
    var coded_text = [];
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    
    for(var idx =0; idx<original_text.length; idx++ ){
        
        
        input = alphabet.indexOf(original_text[idx]); 
        if(input == -1){
            coded_text.push(original_text[idx]);
            
     
        }
        
        else {
            
            var coded = (input+13)%26;
            var letter = alphabet[coded]; 
            coded_text.push(letter);
        }
    }
document.getElementById("output").innerHTML = coded_text.join("");

}