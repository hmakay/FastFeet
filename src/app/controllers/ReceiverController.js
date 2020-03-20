import Receiver from '../models/receiver';

class ReceiverController {
  async store(req, res) {
    const { name, street, number, country, city, cep } = await Receiver.create(
      req.body
    );

    return res.json({
      name,
      street,
      number,
      country,
      city,
      cep,
    });
  }

  async update(req, res) {
    console.log(req.userId);
    return res.json({ msg: true });
  }
}

export default new ReceiverController();
