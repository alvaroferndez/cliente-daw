class ListaLibros{

        constructor(){
            this.libros = []
            this.librosLeidos=0
            this.librosNoLeidos=0
            this.siguienteLibroLeer=this.siguienteLeer()
            this.libroActual = undefined
            this.ultimoLibro = undefined
        }

        añadirLibro(libro){
            this.libros.push(libro)
            if (!libro.leido){
                this.libroActual = libro
            }else{
                this.ultimoLibro = libro
            }
        }

        siguienteLeer(){
            for (let libro of this.libros){
                if(!libro.leido)
                    return libro
            }
        }

        contadorLibros(){
            if (this.libros!=[]){
                for (let libro of this.libros){
                    if (libro.leido)
                        this.librosLeidos++
                    else  
                        this.librosNoLeidos++  
                }
            }

        }

        finalizarLectura(){
            this.libroActual.leido = true
            this.libroActual.fecha = new Date()
            this.ultimoLibro = this.libroActual
            this.libroActual = this.siguienteLibroLeer
            this.siguienteLibroLeer = this.siguienteLeer(this.libros)
        }
}

class Libro{

        constructor(titulo,genero,autor) {
            this.titulo=titulo;
            this.genero=genero;
            this.autor=autor;
            this.leido = false
            this.fecha = undefined
        }

        setleido(){
            this.leido = true
        }

        setfecha(){
            this.fecha = new Date( )
        }
}

libro1 = new Libro("el frio","comedia","pepe")
libro2 = new Libro("el caliente","comedia","pepe")
lista1 = new ListaLibros()
lista1.añadirLibro(libro1)
lista1.añadirLibro(libro2)