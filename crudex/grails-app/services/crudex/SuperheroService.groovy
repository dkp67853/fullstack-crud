package crudex

import grails.gorm.transactions.Transactional

@Transactional
class SuperheroService {

    def get(id){
        Superhero.get(id)
    }

    def list(){
        Superhero.list()
    }

    def save(params){
        Superhero s = new Superhero(name:params.name, power:params.power)
        s.save(flush: true)
        //redirect(action: index)
    }

    def update(params) {
        def superhero = Superhero.get(params.id)
        superhero.properties = params
        superhero.save flush: true, failOnError: true
    }

    def delete(id){
        Superhero.get(id).delete()
        //redirect(action: index)
    }

}
