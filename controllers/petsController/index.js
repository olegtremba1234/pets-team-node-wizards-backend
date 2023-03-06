const { petsService } = require("../../services");
const { currentPet } = require("../../services/petsService");
const { PetsModel } = require("../../models/pets.models");
const { generateError } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");

const createPet = async (req, res) => {
  const newPet = await petsService.addPet(req.body, req.user._id);
  res.status(201).json(newPet);
};

const removePet = async (req, res) => {
  const { id } = req.params;
  const result = await petsService.removePetById(id, req.user._id);
  res.status(200).json(result);
};

const currentPetController = async (req, res) => {
  const { _id: userId } = req.user;

  const userWithPets = await currentPet(userId);

  res.status(200).json(userWithPets);
};

const updatePetAvatar = async (req, res, next) => {
  if (!req.file) {
    throw generateError(RESPONSE_ERRORS.notImage);
  }
  console.log(req.user);
  console.log(req.file.path);
  const { _id } = req.user;
  const avatarUrl = req.file.path;
  await PetsModel.findByIdAndUpdate(_id, { avatarUrl });
  res.status(201).json({ avatarUrl });
};

module.exports = {
  createPet,
  removePet,
  currentPetController,
  updatePetAvatar,
};
