// 8 kyu String cleaning

function stringClean(s){
    s = s.split()
   for(let i = 0; i <= s.length; i++){
       console.log(i)
   }
   return s.join()
  }

  console.log(stringClean('E3a2323t m222332dfd23e2!!'))