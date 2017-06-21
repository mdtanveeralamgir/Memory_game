<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>

<style>
body{
padding: 100px;
background-color:#666666;
}

.table, tr, td{
height: 80px;
width: 80px;

}

.table, tr, td, img{
height: 80px;
width: 80px;
cursor:pointer;
}

#st{
padding-left:535px;
padding-top:20px;

}

#offf{
padding-left:1100px;
padding-top:80px;
float:left;
}



</style>

<script language="javascript" type="application/javascript">

var audio, pl;
var f = 0;
var n = 1;
var s = 0;
var sco = 0;
var r = 0;

var fi = "pic/graphics-wow-476404.gif";
var img = [];
img[0] = "pic/animal-graphics-aardvark-092403.gif";
img[1] = "pic/animal-graphics-donkey-706682.gif";
img[2] = "pic/baby-graphics-funny-640210.gif";
img[3] = "pic/baby-graphics-funny-657895.gif";
img[4] = "pic/graphics-angels-580182.gif";
img[5] = "pic/graphics-ants-238127.gif";
img[6] = "pic/graphics-asia-829364.gif";
img[7] = "pic/graphics-athletics-854566.gif";
img[8] = "pic/graphics-atoms-019414.gif";
img[9] = "pic/graphics-atoms-868378.gif";

var flagr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var flagi = [0,0,0,0,0,0,0,0,0,0];
var flag = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var boxf = [];
boxf[0] = "box_0";
boxf[1] = "box_1";
boxf[2] = "box_2";
boxf[3] = "box_3";
boxf[4] = "box_4";
boxf[5] = "box_5";
boxf[6] = "box_6";
boxf[7] = "box_7";
boxf[8] = "box_8";
boxf[9] = "box_9";
boxf[10] = "box_10";
boxf[11] = "box_11";
boxf[12] = "box_12";
boxf[13] = "box_13";
boxf[14] = "box_14";
boxf[15] = "box_15";
boxf[16] = "box_16";
boxf[17] = "box_17";
boxf[18] = "box_18";
boxf[19] = "box_19";

function again(){
f = 0;
n = 1;
s = 0;
sco = 0;
r = 0;

document.getElementById("sc").value = 0;

for(k=0;k<20;k++){
flag[k]=0;
flagr[k]=0;
document.getElementById(boxf[k]).src="pic/red_button.jpg";
}

for(g=0;g<9;g++){
flagi[g]=0;
}

ranpic();
}


window.addEventListener("load", noice);

// sound
function noice(){
audio = new Audio();
audio.src = "google.mp3";
audio.loop = true;
audio.play();
}
function mut(){
if(audio.muted){
audio.muted = false;
document.getElementById("p").value = "Mute";
}
else{
audio.muted = true;
document.getElementById("p").value = "Unmute";
}
}
// sound end


function score(){

sco++;

document.getElementById("sc").value = sco;
}

function ranpic(){
if(r==0){
for(i=0;i<20;i++){
if(flagr[i]==0){
for(x=0;x<9;x++){
f = (Math.ceil(Math.random()*10));
if(flagi[f]<2){
flagr[i]=f;
//document.getElementById(boxf[0]).src=img[f];
flagi[f]++;
break;
}
}
}//x
}
}
r=1;
}



// button
function change0(){
if(flag[0]!=2){
ranpic();
n = flagr[0];
document.getElementById(boxf[0]).src=img[n];
flag[0]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=0 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();

//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=0){
if(flagr[h]==n){
document.getElementById(boxf[0]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[0] = 2;
}
}
}
}
}

function change1(){
if(flag[1]!=2){
ranpic();
n = flagr[1];
document.getElementById(boxf[1]).src=img[n];
flag[1]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=1 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();

//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=1){
if(flagr[h]==n){
document.getElementById(boxf[1]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[1] = 2;
}
}
}
}
}

function change2(){
if(flag[2]!=2){
ranpic();
n = flagr[2];
document.getElementById(boxf[2]).src=img[n];
flag[2]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=2 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();

for(h=0;h<20;h++){
if(flag[h]==1 && h!=2){
if(flagr[h]==n){
document.getElementById(boxf[2]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[2] = 2;
}
}
}
}
}

function change3(){
if(flag[3]!=2){
ranpic();
n = flagr[3];
document.getElementById(boxf[3]).src=img[n];
flag[3]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=3 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();

for(h=0;h<20;h++){
if(flag[h]==1 && h!=3){
if(flagr[h]==n){
document.getElementById(boxf[3]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[3] = 2;
}
}
}
}
}

function change4(){
if(flag[4]!=2){
ranpic();
n = flagr[4];
document.getElementById(boxf[4]).src=img[n];
flag[4]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=4 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}

score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=4){
if(flagr[h]==n){
document.getElementById(boxf[4]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[4] = 2;
}
}
}//check ends
}
}

function change5(){
if(flag[5]!=2){
ranpic();

n = flagr[5];
document.getElementById(boxf[5]).src=img[n];
flag[5]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=5 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}

score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=5){
if(flagr[h]==n){
document.getElementById(boxf[5]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[5] = 2;
}
}
}//check ends
}
}

function change6(){
if(flag[6]!=2){
ranpic();

n = flagr[6];
document.getElementById(boxf[6]).src=img[n];
flag[6]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=6 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=6){
if(flagr[h]==n){
document.getElementById(boxf[6]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[6] = 2;
}
}
}//check ends
}
}

function change7(){
if(flag[7]!=2){
ranpic();

n = flagr[7];
document.getElementById(boxf[7]).src=img[n];
flag[7]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=7 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=7){
if(flagr[h]==n){
document.getElementById(boxf[7]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[7] = 2;
}
}
}//check ends
}
}

function change8(){
if(flag[8]!=2){
ranpic();

n = flagr[8];
document.getElementById(boxf[8]).src=img[n];
flag[8]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=8 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]==0;
}
s=1;
}
}
}

score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=8){
if(flagr[h]==n){
document.getElementById(boxf[8]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[8] = 2;
}
}
}//check ends
}
}

function change9(){
if(flag[9]!=2){
ranpic();

n = flagr[9];
document.getElementById(boxf[9]).src=img[n];
flag[9]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=9 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}

score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=9){
if(flagr[h]==n){
document.getElementById(boxf[9]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[9] = 2;
}
}
}//check ends
}
}

function change10(){
if(flag[10]!=2){
ranpic();

n = flagr[10];
document.getElementById(boxf[10]).src=img[n];
flag[10]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=10 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}

score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=10){
if(flagr[h]==n){
document.getElementById(boxf[10]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[10] = 2;
}
}
}//check ends
}
}

function change11(){
if(flag[11]!=2){
ranpic();

n = flagr[11];
document.getElementById(boxf[11]).src=img[n];
flag[11]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=11 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}

score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=11){
if(flagr[h]==n){
document.getElementById(boxf[11]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[11] = 2;
}
}
}//check ends
}
}

function change12(){
if(flag[12]!=2){
ranpic();

n = flagr[12];
document.getElementById(boxf[12]).src=img[n];
flag[12]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(flag[y]!=2 && y!=12){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=12){
if(flagr[h]==n){
document.getElementById(boxf[12]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[12] = 2;
}
}
}//check ends
}
}

function change13(){
if(flag[13]!=2){
ranpic();

n = flagr[13];
document.getElementById(boxf[13]).src=img[n];
flag[13]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=13 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=13){
if(flagr[h]==n){
document.getElementById(boxf[13]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[13] = 2;
}
}
}//check ends
}
}

function change14(){
if(flag[14]!=2){
ranpic();

n = flagr[14];
document.getElementById(boxf[14]).src=img[n];
flag[14]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=14 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=14){
if(flagr[h]==n){
document.getElementById(boxf[14]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[14] = 2;
}
}
}//check ends
}
}

function change15(){
if(flag[15]!=2){
ranpic();

n = flagr[15];
document.getElementById(boxf[15]).src=img[n];
flag[15]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=15 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=15){
if(flagr[h]==n){
document.getElementById(boxf[15]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[15] = 2;
}
}
}//check ends
}
}

function change16(){
if(flag[16]!=2){
ranpic();

n = flagr[16];
document.getElementById(boxf[16]).src=img[n];
flag[16]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=16 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=16){
if(flagr[h]==n){
document.getElementById(boxf[16]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[16] = 2;
}
}
}//check ends
}
}

function change17(){
if(flag[17]!=2){
ranpic();

n = flagr[17];
document.getElementById(boxf[17]).src=img[n];
flag[17]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=17 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=17){
if(flagr[h]==n){
document.getElementById(boxf[17]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[17] = 2;
}
}
}//check ends
}
}

function change18(){
if(flag[18]!=2){
ranpic();

n = flagr[18];
document.getElementById(boxf[18]).src=img[n];
flag[18]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=18 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=18){
if(flagr[h]==n){
document.getElementById(boxf[18]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[18] = 2;
}
}
}//check ends
}
}

function change19(){
if(flag[19]!=2){
ranpic();

n = flagr[19];
document.getElementById(boxf[19]).src=img[n];
flag[19]=1;
s++;
if(s>2){
for(y=0;y<20;y++){
if(y!=19 && flag[y]!=2){
document.getElementById(boxf[y]).src="pic/red_button.jpg";
if(flag[y]==1){
flag[y]=0;
}
s=1;
}
}
}
score();
//check
for(h=0;h<20;h++){
if(flag[h]==1 && h!=19){
if(flagr[h]==n){
document.getElementById(boxf[19]).src=fi;
document.getElementById(boxf[h]).src=fi;
flag[h] = 2;
flag[19] = 2;
}
}
}//check ends
}
}




</script>

</head>

<body>

<span style="padding-bottom:200px">
<input name="button" type="button" id="sc" value="0"  />
</span>
<table align="center" border="1" cellpadding="0" cellspacing="0">

<tr>
<td align="center" >
<img id="box_0" src= "pic/red_button.jpg" onclick="change0()" />
</td>
<td align="center" >
<img id="box_1"  src="pic/red_button.jpg" onclick="change1()" />
</td>
<td align="center" >
<img id="box_2"  src="pic/red_button.jpg" onclick="change2()" />
</td>
<td align="center" >
<img id="box_3"  src="pic/red_button.jpg" onclick="change3()" />
</td>
<td align="center" >
<img id="box_4"  src="pic/red_button.jpg" onclick="change4()" />
</td>
</tr>


<tr>
<td align="center" >
<img id="box_5"  src="pic/red_button.jpg" onclick="change5()" />
</td>
<td align="center" >
<img id="box_6"  src="pic/red_button.jpg" onclick="change6()" />
</td>
<td align="center" >
<img id="box_7"  src="pic/red_button.jpg" onclick="change7()" />
</td>
<td align="center" >
<img id="box_8"  src="pic/red_button.jpg" onclick="change8()" />
<td align="center" >
<img id="box_9"  src="pic/red_button.jpg" onclick="change9()" />
</td>
</td>
</tr>


<tr>
<td align="center" >
<img id="box_10"  src="pic/red_button.jpg" onclick="change10()" />
</td>
<td align="center" >
<img id="box_11"  src="pic/red_button.jpg" onclick="change11()" />
</td>
<td align="center" >
<img id="box_12"  src="pic/red_button.jpg" onclick="change12()" />
</td>
<td align="center" >
<img id="box_13"  src="pic/red_button.jpg" onclick="change13()" />
<td align="center" >
<img id="box_14"  src="pic/red_button.jpg" onclick="change14()" />
</td>
</td>
</tr>


<tr>
<td align="center" >
<img id="box_15"  src="pic/red_button.jpg" onclick="change15()" />
</td>
<td align="center" >
<img id="box_16"  src="pic/red_button.jpg" onclick="change16()" />
</td>
<td align="center" >
<img id="box_17"  src="pic/red_button.jpg" onclick="change17()" />
</td>
<td align="center" >
<img id="box_18"  src="pic/red_button.jpg" onclick="change18()" />
<td align="center" >
<img id="box_19"  src="pic/red_button.jpg" onclick="change19()" />
</td>
</td>
</tr>


</table>
<div id="st">
<input type="button" id="s" value="start Again" onclick="again()" />
</div>
<div id="offf">
  <input type="button" id="p" value="Mute" onclick="mut()" />
</div>


</body>
</html>
