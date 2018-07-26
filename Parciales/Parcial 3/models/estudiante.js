"use strict";
const mongoose = require('mongoose');


 var estudianteSchema = new mongoose.Schema({
    nombre: { type: String, unique: true, required: true, trim: true },
    apellido: { type: String, unique: false, required: true, trim: true },
    edad: { type: Number, unique: false, required: true, trim: true },
    correo: { type: String, unique: false, required: true, trim: true },

},{collection:'estudiantes'});


estudianteSchema.statics.findAll = function(callback){
    Estudiante.find({},function(err,users) {
        if(err)
            return callback(err);
        else if(!users)
            return callback();
        return callback(null,users);
    })
}

estudianteSchema.statics.insert = function(nombre,apellido,edad,correo,callback){
    Estudiante.findOne({correo:correo},'correo',function(err,user){
        if(err){
            return callback(err)
        }
        else if(user){
            return callback(user);
        }
        else{
            var data={
                nombre:nombre,
                apellido:apellido,
                edad:edad,
                correo:correo,};
            Estudiante.create(data,function(err){
                if(err)
                    return callback(err);
                return callback();
            })}
    })   
}
estudianteSchema.statics.update = function(nombre,apellido,edad,correo,callback){
    Estudiante.findOne({correo:correo},'nombre apellido edad correo',function(err,user){
        if(err)
            return callback(err);
        else if(!user){
            console.log(user);
            return callback();
        }
        else{
                if(nombre)
                    user.nombre = nombre;
                if(apellido)
                    user.apellido = apellido;
                if(edad)
                    user.edad = edad;               

                user.save(function(err){
                    if(err)
                        return callback(err);
                    return callback(null,true);
                });
            }
    })   
}


estudianteSchema.statics.delete = function(correo,callback){
    Estudiante.findOne({correo:correo},'correo',function(err,users){
        if(err)
            return callback(err);
        else if(!users)
            return callback(null,'cedula no existe');
        Estudiante.deleteOne({correo:correo}, function(err){
                if(err)
                    return callback(err);
                return callback();//Success
            });
    })   
}

let Estudiante = mongoose.model('Estudiante',estudianteSchema);

module.exports = Estudiante;

