var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var zero = document.querySelector("#zero");
var plus = document.querySelector("#plus");
var  minus= document.querySelector("#minus");
var divide = document.querySelector("#divide");
var multi = document.querySelector("#multi");
var c = document.querySelector("#c");
var equal = document.querySelector("#equal");
var p = document.querySelector("#dis");
let op1="";
let op2="";
let op;
let lhs="";
let flag=0;
let e=0;
one.addEventListener("click",onef);
two.addEventListener("click",twof);
three.addEventListener("click",threef);
four.addEventListener("click",fourf);
five.addEventListener("click",fivef);
six.addEventListener("click",sixf);
seven.addEventListener("click",sevenf);
eight.addEventListener("click",eightf);
nine.addEventListener("click",ninef);
zero.addEventListener("click",zerof);
plus.addEventListener("click",plusf);
minus.addEventListener("click",minusf);
divide.addEventListener("click",dividef);
multi.addEventListener("click",multif);
c.addEventListener("click",cf);
equal.addEventListener("click",equalf);

function onef()
{
    lhs+="1";
    if(flag==0)
    {
        op1+="1";
    }
    else
    {
        op2+="1";
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}

function twof()
{
    lhs+="2";
    if(flag==0)
    {
        op1+="2";
    }
    else
    {
        op2+="2";
    }
    p.innerHTML=" ";
    
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}

function threef()
{
    lhs+="3";
    if(flag==0)
    {
        op1+="3";
    }
    else
    {
        op2+="3";
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}

function fourf()
{
    lhs+="4";
    if(flag==0)
    {
        op1+="4";
    }
    else
    {
        op2+="4";
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}

function fivef()
{
    lhs+="5";
    if(flag==0)
    {
        op1+="5";
    }
    else
    {
        op2+="5";
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}

function sixf()
{
    lhs+="6";
    if(flag==0)
    {
        op1+="6";
    }
    else
    {
        op2+="6";
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}

function sevenf()
{
    lhs+="7";
    if(flag==0)
    {
        op1+="7";
    }
    else
    {
        op2+="7";
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}


function eightf()
{
    lhs+="8";
    if(flag==0)
    {
        op1+="8";
    }
    else
    {
        op2+="8";
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}

function ninef()
{
    lhs+="9";
    if(flag==0)
    {
        op1+="9";
    }
    else
    {
        op2+="9";
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}

function zerof()
{
    lhs+="0";
    if(flag==0)
    {
        op1+="0";
    }
    else
    {
        op2+="0";
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}

function plusf()
{
    lhs+="+";
    if(flag==1)
    {
        e=1;
    }
    else
    {
        op=1;
        flag=1;
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}
function minusf()
{
    lhs+="-";
    if(flag==1)
    {
        e=1;
    }
    else
    {
        op=2;
        flag=1;
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}
function dividef()
{
    lhs+="/";
    if(flag==1)
    {
        e=1;
    }
    else
    {
        op=3;
        flag=1;
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}
function multif()
{
    lhs+="x";
    if(flag==1)
    {
        e=1;
    }
    else
    {
        op=4;
        flag=1;
    }
    p.innerHTML=" ";
    let lhsn = document.createTextNode(lhs);
    p.appendChild(lhsn);
}
function equalf()
{
    let ans=0;
    if(e==1)
    {
        p.innerHTML="";
        let text="Syntax error";
        let textn=document.createTextNode(text);
        p.appendChild(textn);
    }
    else{
        console.log(op1);
        console.log(op2);
        if(op==1)
        {
            ans = parseFloat(op1)+parseFloat(op2);
        }
        else if(op==2)
        {
            ans = parseFloat(op1)-parseFloat(op2);
        }
        if(op==3)
        {
            ans = parseFloat(op1)/parseFloat(op2);
        }
        if(op==4)
        {
            ans = parseFloat(op1)*parseFloat(op2);
        }
        p.innerHTML=" ";
        let anst = ans.toString();
        let ansn = document.createTextNode(anst);
        p.appendChild(ansn);
        
    }
    op1="";
    op2="";
    lhs="";
    e=0;
    flag=0;
    op=0;
}
function cf()
{
    p.innerHTML=" ";
    op1="";
    op2="";
    lhs="";
    e=0;
    flag=0;
    op=0;
}




