

const factory = document.querySelector('.factory');
const package = document.querySelector('.package');
const things = document.querySelectorAll('.things');

const prevBtn = document.getElementById('demo');
prevBtn.addEventListener('click', () => {
    package.appendChild(package.firstElementChild);
});
const nextBtn = document.getElementById('demo2')
nextBtn.addEventListener('click', () => {
    package.insertBefore(package.lastElementChild, package.firstElementChild);
});

function validform() {
    const usernameInput = document.getElementById('username');
    const eventInput = document.getElementById('event');
    const legeInput = document.getElementById('quantity');

    if (usernameInput.value.trim() === '' || eventInput.value.trim() === '' || legeInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return false; // Prevent form submission
    }
}

//form validation

function validate(){
    let var1=document.getElementById("i1").value;
    let var2=document.getElementById("i2").value;
    let var3=document.getElementById("i3").value;

    if(var1==""){
       document.write("please fill the form");
       alert("please enter the name");
    }
    else if(var2==""){
       document.write("please enter the password");
       alert("please enter the password");
    }
    else if(var3==""){
       document.write("Please Enter the Email");
       alert("please enter the email");
    }
    else{
       document.write("submitted successfully");
    }
       }

       const slider = document.querySelector('.slider');

       function activate(e) {
         const items = document.querySelectorAll('.item');
         e.target.matches('.next') && slider.append(items[0])
         e.target.matches('.prev') && slider.prepend(items[items.length-1]);
       }
       
       document.addEventListener('click',activate,false);   

       document.getElementById('prevButton').addEventListener('click', () => {
        currentImage = (currentImage - 1 + images.length) % images.length;
        showImage(currentImage);
    });
    
    document.getElementById('nextButton').addEventListener('click', () => {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    });
    
    // Show the initial image
    showImage(currentImage);
    
    function myfunction(){
        let roll = prompt("Enter the your id number here:")
        document.write("You id number is:"+ roll)
    }
    var x=10;
    var x="shiju";

    document.write(x);
    
    let x =10;
    let x ="shiju";
     document.write(x);
