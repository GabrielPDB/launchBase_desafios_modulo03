// Chamar o Express
const express = require('express')
// Chamar o Nunjucks
const nunjucks = require('nunjucks')

// Criar o servidor
const server = express()
const courses = require('./data')

// Arquivos estáticos da pasta public
server.use(express.static('public'))

// Setar a view engine
server.set('view engine', 'njk')

// Configurar alguma coisa
nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

// Criar a rota do about
server.get('/', function (req, res) {
    return res.render('courses', { items: courses })
})

// Criar a rota para /courses/:id
server.get("/courses/:id", function (req, res) {
    const id = req.params.id;

    const course = courses.find(function (course) {
        return course.id == id
    })

    if (!course) {
        return res.render('not-found')
    }

    return res.render('course', {item: course});
});

// Criar a rota do portfolio
server.get('/about', function (req, res) {
    const about = {
        image_url: "https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactnative/3.0.1/1588456740326/Microsoft.VisualStudio.Services.Icons.Default",
        name: "Rocketseat",
        slogan: "Embarque nesse foguete e comece a avançar agora mesmo na direção dos seus objetivos",
        courses: [
            {
                image_url: "https://xesque.rocketseat.dev/platform/1566444110414.png",
                name: "Javascript"
            },
            {
                image_url: "https://xesque.rocketseat.dev/platform/1566444881250.png",
                name: "ES6"
            },
            {
                image_url: "https://xesque.rocketseat.dev/platform/1564681946529.svg",
                name: "NodeJS"
            },
            {
                image_url: "https://xesque.rocketseat.dev/platform/1564682281422.svg",
                name: "ReactJS"
            },
            {
                image_url: "https://xesque.rocketseat.dev/platform/1564682425906.svg",
                name: "React Native"
            }
        ],
        links: [
            {
                name: "Github",
                url: "https://github.com/Rocketseat"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/rocketseat"
            }
        ]
    }

    return res.render('about', { about })
})

server.use(function (req, res) {
    res.status(404).render("not-found");
});



// Iniciar o servidor, que passa a escutar a porta definida
// A função callback é executada assim que a conexão é estabelecida
server.listen(5500, function () {
    console.log('server is running')
})