let pantallaBienvenida = document.getElementById("pantallaBienvenida");
let pantallaFormulario = document.getElementById("pantallaFormulario");
let pantallaListado = document.getElementById("pantallaListado");
let pantallaDetalle = document.getElementById("pantallaDetalle");
let agregarProducto = document.getElementById("agregarProducto");
let formDescription = document.getElementById("formDescription");
let formTitulo = document.getElementById("formTitulo");
let formCategoria = document.getElementById("formCategoria");
let formAgregar = document.getElementById("formAgregar");
let listado = document.getElementById("listado");
let detalleImg = document.getElementById("detalleImg"); 
let detalleTitulo = document.getElementById("detalleTitulo"); 
let detalleDescription = document.getElementById("detalleDescription");
let cerrarDetalle = document.getElementById("cerrarDetalle")


let agregame = () => {
    pantallaBienvenida.style.display = "none";
    pantallaListado.style.display = "none";
    pantallaFormulario.style.display = "block";
};

agregarProductoListado.addEventListener("click", agregame );
agregarProducto.addEventListener("click", agregame);

agregarProducto.addEventListener("click", () => {
    pantallaBienvenida.style.display= "none";
    pantallaFormulario.style.display = "block";
});

let mostrarListado = () => {
    pantallaFormulario.style.display = "none";
    pantallaListado.style.display = "block";
}

let mostrarDetalle = (titulo, categoria, descripcion) => {
    pantallaDetalle.style.display = "block";
    pantallaListado.style.display = "none";
    detalleTitulo.innerHTML = titulo ;
    detalleDescription.innerHTML = descripcion;
    detalleImg.setAttribute = ("src", `${categoria}`); 
}

cerrarDetalle.addEventListener('click',()=>{
    pantallaDetalle.style.display="none";
    pantallaListado.style.display="block";
})

formAgregar.addEventListener('click', () =>{
    let categoria = formCategoria.value;
    let titulo = formTitulo.value;
    let descripcion = formDescription.value;    
    let modelo =  `<li class="list-group-item">
    <img src='images/${categoria}' alt="${titulo}"/>
    <p>${titulo}</p>
    <button onclick ="mostrarDetalle('${titulo}', '${categoria}', '${descripcion}') ">
    <img src="images/arrow.png" width="20px">
    </button>
</li>`;
if(categoria != "Categoria" && titulo != "" && descripcion != ""){
    listado.innerHTML += modelo;
    formCategoria.value ="";
    formTitulo.value = "";
    formDescription.value= "";
    mostrarListado(); 
}else{
    alert("Hey! Tenes que cargar todo ;)");
}

});
    


