var updateBtn = document.getElementsByClassName('update-cart');


// function delete_item(){
//     var update_X = document.getElementsByClassName('text-muted'); 
//     var todoList = document.getElementsByClassName([ 'text-muted']);
//     todoList.addEventListener('click', function(update_X){
//         todoList.remove(update_X);
    
//     })
   
// }

for(i=0; i<updateBtn.length; i++){
    updateBtn[i].addEventListener('click', function(){
        var productId =this.dataset.product
        var action = this.dataset.action
        console.log("productId", productId,"action", action)
        console.log('user', user)
        if(user === "Anonymous"  ){
            console.log("user not logged")
        }else{
            console.log('abcd');
            updateUserOder(productId, action)
        }
       })
}
function updateUserOder(productId,action){
    console.log("user logged in")
    var url = '/update_item/'
    fetch (url,{
        method:'POST',
        headers:{
            'Content-type': 'application/json',
            'X-CSRFToken':csrftoken
        },
        body: JSON.stringify({'productId':productId,'action':action})
    })
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        console.log('data',data)
        location.reload()
    })
}
