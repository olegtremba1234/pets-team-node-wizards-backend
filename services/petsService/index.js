const { PetsModel } = require("../../models/pets.models");
const { generateError } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");

const addPet = async (
  { name, birthDay, breed, avatarURL, comments },
  owner
) => {
  const newPet = await PetsModel.create({
    name,
    birthDay,
    breed,
    avatarURL,
    comments,
    owner,
  });
  return {
    id: newPet._id,
    name: newPet.name,
    birthDay: newPet.birthDay,
    breed: newPet.breed,
    avatarUR: newPet.avatarUR,
    comments: newPet.comments,
  };
};

const removePetById = async (id, owner) => {
  const pet = await PetsModel.findOneAndRemove({
    _id: id,
    owner,
  });
  if (!pet) throw generateError(RESPONSE_ERRORS.notFound);
  return { message: "Contact deleted" };
};

module.exports = {
  addPet,
  removePetById,
};
