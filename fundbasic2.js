//1
var arr=[-2,-1,0,1,2,3,-5];
function big(){
    for(var i = 0; i < arr.length ; i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    return arr;
}
console.log(big());

//2
var arr=[2,5,1,14,8,9];
var mayor=-Infinity;
var menor=Infinity;
function print(){
    for(var i = 0; i < arr.length ; i++){
        if(arr[i]>mayor){
            mayor = arr[i];
        }
        if(arr[i]<menor){
            menor = arr[i];
        }
        
    }
    console.log(menor);
    return mayor;
}
print();

//3
var arr=[2,4,4,6,5,7,8];
var penultimo = arr.length -2;
function odd(){
    console.log(arr[penultimo]);
    for(var i = 0; i < arr.length ; i ++){
        if(arr[i]%2 !=0){
            return arr[i];
            i = arr.length;
        }
    }
    
}
odd();

//4
var arr=[1,3,5,7,9];
var arr2=[];
function doble(){
    for(var i = 0; i < arr.length ; i++)
    {
        arr2.push(arr[i]*2);
    }
    return arr2;
}
console.log(doble());

//5
var arr=[-1,-1,2,-4,4,-5,-6];
var cont=0;
function contPos(){
    for(var i = 0; i < arr.length ; i++){
        if(arr[i]>0){
            cont +=1;
        }
    }
    arr[arr.length-1]=cont;
    return arr;
}
console.log(contPos());

//6
var arr=[1,2,1,2,2,2,1,1,1,2,2,2];
var imp=0;
var par=0;
function parImpar(arreglo){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 != 0){
            imp +=1;
            if(imp==3){
                console.log("¡Qué imparcial!")
                imp=0;
            }
        }
        if(arr[i]%2==0){
            par +=1;
            if(par==3){
                console.log("¡Es para bien!")
                par=0;
            }
        }
    }
}
parImpar(arr);

//7
var arr=[1,2,3,4,5,6,7];
function segundos(){
    for(var i = 0; i < arr.length ; i++){
        if(i%2!=0){
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
        
    }
}
segundos();

//8
var arr=["Hola","Como","Estas","Tu"];
function longitudesPrevias(){
    for(var i = arr.length-1; i > 0; i--){
    arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(longitudesPrevias());

//9
var arr=[1,1,1,1,1,1,1];
var newarr=[];
function agregaSiete(arreglo){
    for(var i = 0; i < arr.length; i++)
    {
        newarr.push(arr[i]+7);
    }
    return newarr;
}
console.log(agregaSiete(arr));

//10
var arr=[1,2,3,4,5,6];
var len=arr.length-1;
var temp=0;
function invertir(arreglo){
    for(var i = 0; i < arr.length/2 ; i++){
        if(i==0){
            temp = arr[i];
            arr [i] = arr[arr.length-1];
            arr[arr.length-1] = temp;
        }
        else{
            temp = arr[i];
            arr[i] = arr[len-i];
            arr[len-i] = temp;
        }
    }
    return arr;
}
console.log(invertir(arr));

//11
var arr=[-1,1,-2,2,-3,3];
function  negativos(){
    for(var i = 0; i < arr.length ; i++){
        if(arr[i]>0){
            arr[i] = arr[i]*-1;
        }
    }
    return arr;
}
console.log(negativos());

//12
var arr=["carne","papa","arroz"];
var cont=0;
function hambre(arreglo){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]!="comida"){
            cont +=1;
            if(cont==arr.length-1){
                console.log("Tengo Hambre");
            }            
        }if(arr[i]==="comida"){
            console.log("Yummy");
        }
    }
}
hambre(arr);

//13
var arr=[1,2,3,4,5,6];
var temp=0;
var temp2=0;
function cambios(){
        if(arr.length%2!=0){
            temp = arr[0];
            arr[0] = arr[arr.length-1];
            arr[arr.length-1] = temp;
        }else{
            temp = arr[0];
            arr[0] = arr[arr.length-1];
            arr[arr.length-1] = temp;
            temp2 = arr[arr.length/2];
            arr[arr.length/2] = arr[arr.length/2-1];
            arr[arr.length/2-1] = temp2;
        }
        return arr;
}
console.log(cambios());

//14
var arr=[1,2,3,4,5];
var num=6;
function escala(arrelgo,numero){
    for(var i = 0 ; i < arr.length ; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(escala(arr,num));