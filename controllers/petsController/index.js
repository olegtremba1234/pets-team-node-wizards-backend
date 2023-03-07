const { petsService } = require("../../services");
const { currentPet } = require("../../services/petsService");
const { generateError } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");

const createPet = async (req, res) => {
  const pet = await petsService.addPet(req.file, req.body, req.user);
  res.status(201).json(pet);
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
  const avatarURL = req.file.path;
  const id = req.params.petId;
  const result = await petsService.addPetAvatar(avatarURL, id);
  if (!result) {
    throw generateError(RESPONSE_ERRORS.notImage);
  }

  res.status(201).json(result);
};

module.exports = {
  createPet,
  removePet,
  currentPetController,
  updatePetAvatar,
};
