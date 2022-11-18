function listele()
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json()) //parse json data promise
    .then(function(users)//başarılı ise
    {
        var row = "";
        users.forEach(user => {
            row +='<li class="list-group-item">Kullanıcı Adı:'+user.name+'/Email:'+user.email+'</li>';
          
        });
        document.getElementById("ulList").innerHTML+=row;

    })
   .catch((err)=>console.log(err));
}
function ekle()
{
    let payload={
        title:document.getElementById("formtitle").value,
        body:document.getElementById("formbody").value,
        userId:document.getElementById("formuserId").value,
     
    }
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{"Content-type":"application/json; charset=UTF-8"}
    })
    .then(response=>response.json())
    .then(json=>document.getElementById("addList").innerHTML='<li class="list-group-item">id : '+json.id+'title:'+json.title+'body:'+json.body+'kullaniciId:'+json.userId+'</li>')
    .catch(err=>console.log(err));

}