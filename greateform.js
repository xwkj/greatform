// JavaScript Document

(function(){
var t=document.getElementsByTagName("input");
 for(var i =0; i<t.length;i++){
	 (function(n){
		 
		 if(t[n].type=="checkbox"){
		
		 var s=document.createElement("div");
		 s.setAttribute("has",0)
		 s.style.width="16px";
		 s.style.height="16px";
		 s.style.display="inline-block";
		 s.style.backgroundColor="#ccc";
		 s.style.border="2px solid transparent"
		 s.style.cursor="pointer"
		 var q=t[n]
		 q.parentNode.appendChild(s);
		 t[n].style.display="none";
		 s.onclick=function(){
			 	if(s.getAttribute("has")==0){
				
				
				
				
				
			     s.style.backgroundColor="#f00";
				 s.style.border="2px solid #f0f";           s.setAttribute("has",1)
				t[n].setAttribute("checked","checked") 
				
				
				
				
					 }
				 else{
					 s.style.backgroundColor="#ccc";
				 s.style.border="2px solid transparent"; 
					 s.setAttribute("has",0)
					
					t[n].removeAttribute("checked") 
					 }
			 
			 
			 
			 
			 }
		 
		 
		 }
		 
		 })(i)
	 
	 
	 
	 }	
	
	})();
