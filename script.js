
//function 1

function clearScreen()
{
    document.getElementById("result").value="";
}

//function 2

function display(value)
{
    document.getElementById("result").value+=value;
}

//function 3

function calculate()
{
    var p=document.getElementById("result").value;
    var ans=eval(p);
    document.getElementById("result").value=ans;
}