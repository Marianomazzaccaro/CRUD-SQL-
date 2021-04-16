
//LOS MODELOS EXPORTAN FUNCIONES

module.exports= function(sequelize,dataTypes) {

    let alias= 'Actor'

    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        first_name:{
            type:dataTypes.STRING
        },
        last_name:{
            type: dataTypes.INTEGER
        }
    }
   
    let config= {
        tableName: 'actors',
        timestamps: false
    }
    
    let Actor= sequelize.define(alias,cols,config);
    //DEFINO ASOCIACIONES DESPUES DEL DEFINE
    Actor.associate= function(models){
        //SE USA BELONGSTOMANY PORQUE ES UNA RELACION DE MUCHOS A MUCHOS
        Actor.belongsToMany(models.Pelicula,{

            as:'peliculas',
            through:'actor_movie',
            foreignKey:'actor_id',
            otherKey:'movie_id',
            timestamps: false
        })
    }
    return Actor


}