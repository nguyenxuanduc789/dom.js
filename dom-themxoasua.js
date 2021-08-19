<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
   <thead id="duc">
       <th>
            id
       </th>
       <th>
            name
        </th>
        <th>
            diachi
        </th>
        <th>
            anh
        </th>
        <th>
        <button class="btn btn-sm btn-success">them moi</button>
        </th>
    </thead>
    <tbody>

    </tbody>
</table>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script >
            //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ XOA TREN GIAO DIEN
var t=document.querySelector('tbody')
var url="https://611567e18f38520017a384cd.mockapi.io/hotel"
fetch (url,{
    method:"GET"
})
.then((resurt)=> resurt.json())

.then((data)=>{
    t.innerHTML=``;
    console.log(data)
    var content=` `
    data.forEach(function(element) {
        content =content+`<tr id="row-${element.id}">
         <td>${element.id} .</td>
         <td>${element.name}</td>
         <td>${element.address}</td>
         <td>
            <img src="${element.logo}" with="70"/>
        </td>
        <td>
            <button class="btn btn-sm btn-primasy" >sua</button> 
            <button class="btn btn-sm btn-danger" onclick="removeElenment(${element.id})">xoa</button> 
        </td>
       </tr>`
    })
    t.innerHTML=content;
})
                function removeElenment(removeId){
                            Swal.fire({
                                    title: 'Are you sure?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, delete it!'
                                    })
                                    .then((result) => {
                                    if (result.value) 
                                    {
                             
                                             var chid=document.querySelector('#row-'+removeId)
                                             chid.parentNode.removeChild(chid)
                                         
                                   
                                }
                                })
                }
        </script>
</body>
</html>
//css html xoa dinh su dung thi vien    (https://sweetalert2.github.io/#download)=>sweetalert2  XOA API 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
   <thead id="duc">
       <th>
            id
       </th>
       <th>
            name
        </th>
        <th>
            diachi
        </th>
        <th>
            anh
        </th>
        <th>
        <button class="btn btn-sm btn-success">them moi</button>
        </th>
    </thead>
    <tbody>

    </tbody>
</table>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script >
            //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ XOA TREN GIAO DIEN
var t=document.querySelector('tbody')
var url="https://611567e18f38520017a384cd.mockapi.io/hotel"
fetch (url,{
    method:"GET"
})
.then((resurt)=> resurt.json())

.then((data)=>{
    t.innerHTML=``;
    console.log(data)
    var content=` `
    data.forEach(function(element) {
        content =content+`<tr id="row-${element.id}">
         <td>${element.id} .</td>
         <td>${element.name}</td>
         <td>${element.address}</td>
         <td>
            <img src="${element.logo}" with="70"/>
        </td>
        <td>
            <button class="btn btn-sm btn-primasy" >sua</button> 
            <button class="btn btn-sm btn-danger" onclick="removeElenment(${element.id})">xoa</button> 
        </td>
       </tr>`
    })
    t.innerHTML=content;
})
                function removeElenment(removeId){
                            Swal.fire({
                                    title: 'Are you sure?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, delete it!'
                                    })
                                    .then((result) => {
                                    if (result.value) 
                                    {
                                        var deleters=document.getElementById("row-"+removeId)
                                        deleters.remove()
                                            urldeleter=url +"/"+ removeId
                                            fetch(urldeleter,{
                                                method:"DELETE"
                                            })
                                            .then(rl=>rl.json())
                                            .then(data=>{
                                                Swal.fire({
                                                position: 'top-end',
                                                icon: 'success',
                                                title: 'Your work has been saved',
                                                showConfirmButton: false,
                                                timer: 1500
                                                })
                                            })
                                }
                                })
                }
        </script>
</body>
</html>



