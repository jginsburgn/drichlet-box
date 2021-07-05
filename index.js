/**
 * Get the zero-based hole index of the pigeonhole in which a pigeon should
 * live.
 *
 * @param {{
 *   holesCount: number,
 *   pigeonsCount: number,
 *   pigeonIndex: number,
 * }} parameters
 * @return {number} The hole index.
 */
module.exports = (parameters) => {
  const {holesCount, pigeonsCount, pigeonIndex} =
    validateParameters(parameters);

  // Get the number of big holes.
  const bigHolesCount = pigeonsCount % holesCount;

  // The number of pigeons in each small hole.
  const smallHoleSize = Math.floor(pigeonsCount / holesCount);

  // The number of pigeons in each big hole.
  const bigHoleSize = smallHoleSize + Math.min(1, bigHolesCount);

  // The number of pigeons that live in big holes.
  const pigeonsInBigHoles = bigHolesCount * bigHoleSize;

  // Is the hole for the current pigeon a big one?
  const isCurrentHoleBig = pigeonIndex < pigeonsInBigHoles;

  if (isCurrentHoleBig) {
    const holeIndex = Math.floor(pigeonIndex / bigHoleSize);
    return holeIndex;
  } else {
    // Offset the pigeonIndex to be relative to the first pigeon of the first
    // small hole.
    const offsetPigeonIndex = pigeonIndex - pigeonsInBigHoles;

    // The hole index is the offset pigeon index divided by the small hole size
    // plus the big holes count to account for the offset.
    const holeIndex =
      bigHolesCount + Math.floor(offsetPigeonIndex / smallHoleSize);
    return holeIndex;
  }
};

/**
 * Validates that the expected keys exist and that the values are positive
 * integers. Throws when these expectations fail.
 *
 * @param {{
 *   holesCount: number,
 *   pigeonsCount: number,
 *   pigeonIndex: number,
 * }} parameters
 * @return {{
 *   holesCount: number,
 *   pigeonsCount: number,
 *   pigeonIndex: number,
 * }} The given `parameters` object.
 */
const validateParameters = (parameters) => {
  const {holesCount, pigeonsCount, pigeonIndex} = parameters;

  if (holesCount === undefined) {
    throw new Error(
        'parameters.holesCount is undefined and should be a positive integer',
    );
  }

  if (pigeonsCount === undefined) {
    throw new Error(
        'parameters.pigeonsCount is undefined and should be a positive integer',
    );
  }

  if (pigeonIndex === undefined) {
    throw new Error(
        'parameters.pigeonIndex is undefined and should be a positive ' +
      'integer or zero',
    );
  }

  if (!Number.isInteger(holesCount)) {
    throw new Error(
        `parameters.holesCount = ${holesCount}, but it should be a ` +
      `positive integer.`,
    );
  }

  if (!Number.isInteger(pigeonsCount)) {
    throw new Error(
        `parameters.pigeonsCount = ${pigeonsCount}, but it should be a ` +
      `positive integer.`,
    );
  }

  if (!Number.isInteger(pigeonIndex)) {
    throw new Error(
        `parameters.pigeonIndex = ${pigeonIndex}, but it should be an ` +
      `positive integer or zero.`,
    );
  }

  if (holesCount <= 0) {
    throw new Error(
        `parameters.holesCount = ${holesCount}, but it should be a ` +
      `positive integer.`,
    );
  }

  if (pigeonsCount <= 0) {
    throw new Error(
        `parameters.pigeonsCount = ${pigeonsCount}, but it should be a ` +
      `positive integer.`,
    );
  }

  if (pigeonIndex < 0) {
    throw new Error(
        `parameters.pigeonIndex = ${pigeonIndex}, but it should be a ` +
      `positive integer or zero.`,
    );
  }

  if (pigeonIndex >= pigeonsCount) {
    throw new Error(
        `parameters.pigeonIndex cannot be equal to or larger than ` +
      `parameters.pigeonsCount`,
    );
  }

  return parameters;
};
