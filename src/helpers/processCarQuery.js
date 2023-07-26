export const processCarQuery = (q) => {
  const query = { where: {}, orderBy: {} };
  query.page = q.page || 1;
  query.limit = q.limit || 10;
  query.orderBy[q.sort || "price"] = q.order || "asc";
  q.id ? (query.where.id = parseInt(q.id)) : null;
  q.makeId ? (query.where.makeId = parseInt(q.makeId)) : null;
  q.modelId ? (query.where.modelId = parseInt(q.modelId)) : null;
  q.packageId ? (query.where.packageId = parseInt(q.packageId)) : null;
  q.price ? (query.where.price = parseInt(q.price)) : null;
  q.fuel ? (query.where.fuel = q.fuel) : null;
  q.category ? (query.where.category = q.category) : null;
  q.color ? (query.where.color = q.color) : null;
  q.status ? (query.where.status = q.status) : null;
  q.transmissionType? (query.where.transmissionType = q.transmissionType): null;
  q.steeringPosition? (query.where.steeringPosition = q.steeringPosition): null;
  q.location ? (query.where.location = q.location) : null;
  q.driveType ? (query.where.driveType = q.driveType) : null;
  q.engineCC ? (query.where.engineCC = parseInt(q.engineCC)) : null;
  q.year ? (query.where.year = parseInt(q.year)) : null;

  // for mileage min and max
  if (q.minMileage || q.maxMileage) {
    query.where.mileage = {};
    if (q.minMileage) {
      query.where.mileage.gte = parseInt(q.minMileage);
    }
    if (q.maxMileage) {
      query.where.mileage.lte = parseInt(q.maxMileage);
    }
  }

  // for engineCC min and max
  if (q.minEngineCC || q.maxEngineCC) {
    query.where.engineCC = {};
    if (q.minEngineCC) {
      query.where.engineCC.gte = parseInt(q.minEngineCC);
    }
    if (q.maxEngineCC) {
      query.where.engineCC.lte = parseInt(q.maxEngineCC);
    }
  }
  // minimum and maximum price
  if (q.minPrice || q.maxPrice) {
    query.where.price = {};
    if (q.minPrice) {
      query.where.price.gte = parseInt(q.minPrice);
    }
    if (q.maxPrice) {
      query.where.price.lte = parseInt(q.maxPrice);
    }
  }

  // for year min and max
  if (q.minYear || q.maxYear) {
    query.where.year = {};
    if (q.minYear) {
      query.where.year.gte = parseInt(q.minYear);
    }
    if (q.maxYear) {
      query.where.year.lte = parseInt(q.maxYear);
    }
  }

  return query;
};
