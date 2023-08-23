function changeHeading() {
    let heading = document.getElementById('heading');
    console.log(heading)
    console.log(heading.innerText)
    heading.innerHTML = "Hi..!! Aditi";
}
let n = 1;
document.getElementById('n').innerText = 'ADD';


function plus() {
    if (n <= 12) {
        document.getElementById('n').innerText = n;
    }
    else{
        alert('You cannot add more items')
        
    }

    n++;
}



function minus() {
    if(n<<0){
    document.getElementById('n').innerText = n;
    }
    else{
        document.getElementById('n').innerText = 'ADD';
    }
    
    n--;
}