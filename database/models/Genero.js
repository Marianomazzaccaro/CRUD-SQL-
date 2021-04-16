
//LOS MODELOS EXPORTAN FUNCIONES

module.exports= function(sequelize,dataTypes) {

    let alias= 'Genero';

    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name:{
            type:dataTypes.STRING
        }
    }
   
    let config= {
        tableName:'genres',
        timestamps: false
    }

    let Genero= sequelize.define(alias,cols,config);

    //DEFINO ASOCIACIONES DESPUES DEL DEFINE
    Genero.associate= function(models){
        Genero.hasMany(models.Pelicula,{

            as:'peliculas',
            foreignKey:'genre_id'

        })
    }

    return Genero


}