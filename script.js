function clearScn(){
		document.getElementById("d").value = "";
	  }
      function c(val){
	
          document.getElementById("d").value = val;
        }

      function v(calculator)
        {
          var val = calculator.getAttribute('data-value');
          
          document.getElementById("d").value+=val;
        }
      function op(calculator){
          var operation = calculator.getAttribute('data-op');
          document.getElementById("d").value += operation;
        }
      function e() 
        { 
        try 
        { 
          c(eval(document.getElementById("d").value)) 
        } 
        catch(e) 
        {
          c('Error') 
        } 
      }
    