const { PetsModel } = require("../../models/pets.models");
const { UserModel } = require("../../models");
const { generateError } = require("../../helpers/utils");
const {
  RESPONSE_ERRORS,
  DEFAULT_UPDATE_OPTIONS,
} = require("../../helpers/constants");

const addPet = async (file = {}, body, user) => {
  const { path = null } = file;
  const { name, birthDay, breed, comments } = body;

  const { _id } = user;
  const newPet = await PetsModel.create({
    name,
    birthDay,
    breed,
    comments,
    avatarURL: path,
    owner: _id,
  });

  return {
    id: newPet._id,
    name: newPet.name,
    birthDay: newPet.birthDay,
    breed: newPet.breed,
    avatarURL: newPet.avatarURL,
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

const addPetAvatar = async (avatarURL, id) => {
  const avatar = await PetsModel.findByIdAndUpdate(
    id,
    {
      avatarURL,
    },
    DEFAULT_UPDATE_OPTIONS
  ).select({ owner: 0, __v: 0 });
  return avatar;
};

module.exports = {
  addPet,
  removePetById,
  currentPet,
  addPetAvatar,
};
