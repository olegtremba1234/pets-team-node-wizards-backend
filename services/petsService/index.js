const { PetsModel } = require("../../models/pets.models");
const { UserModel } = require("../../models");
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
    avatarUR: newPet.avatarURL,
    comments: newPet.comments,
  };
};

const removePetById = async (id, owner) => {
  const pet = await PetsModel.findOneAndRemove({
    _id: id,
    owner,
  });
  if (!pet) throw generateError(RESPONSE_ERRORS.notFound);
  return { message: "Pet is deleted" };
};

const currentPet = async (id) => {
  const user = await UserModel.findById(id, {
    accessToken: 0,
    __v: 0,
    password: 0,
  });
  const petUser = await PetsModel.find({ owner: id }, { owner: 0, __v: 0 });
  return { user, petUser };
};

module.exports = {
  addPet,
  removePetById,
  currentPet,
};
