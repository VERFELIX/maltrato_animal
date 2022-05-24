require = ('dotenv')
const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;

app.set ('view engine','ejs');

app.set('views',__dirname + '/views');

app.use(express.static(__dirname + "/Public"));

app.get('/',(req,res) =>{
 res.render("index",{titulo:" CONOCE MÁS SOBRE EL MALTRATO ANIMAL"})
})


app.get ('/Quienessomos' ,(req, res) => {
    res.render("Quienessomos",{tituloQuienessomos:" ¿Quiénes somos?"})

})


app.get ('/Formulario' ,(req, res) => {
    res.render("Formulario",{tituloFormulario:" FORMULARIO"})

})

app.get ('/AnimaNaturalis' ,(req, res) => {
    res.render("AnimaNaturalis",{tituloAnimaNaturalis:" ANIMANATURALIS"})

})

app.get ('/violencia' ,(req, res) => {
    res.render("violencia",{tituloviolencia:" VIOLENCIA"})

})

app.get ('/Causas' ,(req, res) => {
    res.render("Causas",{tituloCausas:" CAUSAS"})

})



app.get ('/Formulario' ,(req, res) => {
    res.render('PAGINA DEL FORMULARIO')

})

app.get ('/curso' ,(req, res) => {
    res.render('PAGINA DE CURSO')

})


app.get ('/AnimaNaturalis' ,(req, res) => {
    res.render('PAGINA DEL AnimaNAturalis')

})


app.get ('/Quienessomos' ,(req, res) => {
    res.render('QUIENES SOMOS')
  
})

app.get ('/violencia' ,(req, res) => {
    res.render('PAGINA VIOLENCIA')

})

app.get ('/Causas' ,(req, res) => {
    res.render('PAGINA CAUSAS')

})


app.listen (port, () =>{

    console.log ('servidor a su servicio en el puerto',port)
})

