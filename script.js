 function calc(){
                 var start=document.getElementById("start").value;  
                 var end=document.getElementById("end").value;  

                 if(!start || !end){
                   document.getElementById("result").innerHTML = "⚠ Please select both dates!";
                   return;
                 }
                 var dob=new Date(start);
                 var today=new Date(end);

                var year=today.getFullYear()-dob.getFullYear();
                var month=today.getMonth()-dob.getMonth();
                var day=today.getDate()-dob.getDate();

                if(day < 0){
                     let prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                     day += prevMonthDays;
                    month -=1;
                }if(month < 0){
                    month +=12;
                    year -=1;
                }
                document.getElementById("result").innerText="Year "+year+" Month "+month+" Day "+day;
            } 
        function rest(){
            document.getElementById("start").value="";
            document.getElementById("end").value="";
            document.getElementById("result").innerText=""; 
        }