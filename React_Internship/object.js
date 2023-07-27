//values: newCases recovered death
var cases = {
    "ahmedabad": [1500, 1600, 2],
    "gandhinagar": [500, 200, 1],
    "bhavnagar": [700, 350, 2]
}



//  document.write("hello");
var tbody=document.getElementById('tbody');
for(var i in cases){
    var tr="<tr>";
    tr+="<td>"+i+"</td>";
    for(var j=0;j<cases[i].length;j++){
        tr+="<td>"+cases[i][j]+"</td>"+"<nobr>";
    }
    tbody.innerHTML+=tr;
}
