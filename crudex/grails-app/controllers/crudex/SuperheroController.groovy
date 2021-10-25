package crudex

import com.mongodb.client.FindIterable

class SuperheroController {

    static responseFormats = ['json', 'html']

    def superheroService

    def index() {
        respond superheroService.list()
    }

    def create(){
        respond new Superhero(params)
    }

    def save(){
        superheroService.save(params)
        respond superheroService.list()
        //superheroService.save()
        //superheroService.save(response)
        //redirect(action: index)
    }

    def show(Long id){
        respond superheroService.get(id)
        //Superhero.getByName()
    }

    def update = {
        superheroService.update(params)
        respond superheroService.list()
//        def superhero = Superhero.get(params.id)
//        superhero.properties = params
//        superhero.save flush: true, failOnError: true
//        respond superheroService.list()
        //redirect action: "show", id: params.id
    }

    def delete(Long id){
        //console.log(id)
        //Superhero.get(id).delete()
        superheroService.get(id).delete()
        respond superheroService.list()
        //redirect(action: index)
    }


/**
    def show(){
        def s = Superhero.findByName("Solo Leveling")
        try {
            render s["power"]
        }catch(Exception e){
            render "not found"
        }
    }

    def list(){

        def s = Superhero.getAll()
        def l = findAll(){
            Superhero.where{}.findAll()
        }
        for(i in s.name){
            render i+'\t'
        }
        for(i in s.power){
            render i
        }
        for(i in s.id){
            render i
        }
        def l = findAll(){
            Superhero.where{}.findAll()
        }
        render l**/


}
