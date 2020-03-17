import Sequelize,{Model} from 'sequelize';

class Receiver extends Model{
  static init(Sequelize){
    status.init({
      name:Sequelize.STRING,
      street:Sequelize.STRING,
      number:Sequelize.STRING,
      country:Sequelize.STRING,
      city:Sequelize.STRING,
      cep:Sequelize.STRING,

    },
    {
      Sequelize,
    }
    );

  }

}
export default Receiver;
