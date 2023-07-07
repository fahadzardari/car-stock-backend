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
  q.transmissionType
    ? (query.where.transmissionType = q.transmissionType)
    : null;
  q.steeringPosition
    ? (query.where.steeringPosition = q.steeringPosition)
    : null;
  q.location ? (query.where.location = q.location) : null;
  q.driveType ? (query.where.driveType = q.driveType) : null;
  q.engineCC ? (query.where.engineCC = parseInt(q.engineCC)) : null;
  q.manufactureDate
    ? (query.where.manufactureDate = new Date(q.manufactureDate))
    : null;
  setDates(query, q);


  
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

  if (q.minPrice || q.maxPrice) {
    query.where.price = {};
    if (q.minPrice) {
      query.where.price.gte = parseInt(q.minPrice);
    }
    if (q.maxPrice) {
      query.where.price.lte = parseInt(q.maxPrice);
    }
  }

  return query;
};

const setDates = (query, q) => {
  if (q.registrationDate) {
    const dateParts = q.registrationDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; 
    const day = parseInt(dateParts[2]);

    const startDate = new Date(year, month, day);
    const endDate = new Date(year, month, day + 1); // Assuming you want to search within the specified date only

    query.where.registrationDate = { gte: startDate, lt: endDate };
  }
  if (q.minRegistrationDate || q.maxRegistrationDate) {
    query.where.registrationDate = {};
    if (q.minRegistrationDate) {
      const minDateParts = q.minRegistrationDate.split("-");
      const minYear = parseInt(minDateParts[0]);
      const minMonth = parseInt(minDateParts[1]) - 1;
      const minDay = parseInt(minDateParts[2]);
      const minDate = new Date(minYear, minMonth, minDay);
      query.where.registrationDate.gte = minDate;
    }
    if (q.maxRegistrationDate) {
      const maxDateParts = q.maxRegistrationDate.split("-");
      const maxYear = parseInt(maxDateParts[0]);
      const maxMonth = parseInt(maxDateParts[1]) - 1;
      const maxDay = parseInt(maxDateParts[2]);
      const maxDate = new Date(maxYear, maxMonth, maxDay + 1);
      query.where.registrationDate.lt = maxDate;
    }
  }

  if (q.manufactureDate) {
    const dateParts = q.manufactureDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; 
    const day = parseInt(dateParts[2]);

    const startDate = new Date(year, month, day);
    const endDate = new Date(year, month, day + 1); // Assuming you want to search within the specified date only

    query.where.manufactureDate = { gte: startDate, lt: endDate };
  }

  if (q.minManufactureDate || q.maxManufactureDate) {
    query.where.manufactureDate = {};

    if (q.minManufactureDate) {
      const minDateParts = q.minManufactureDate.split("-");
      const minYear = parseInt(minDateParts[0]);
      const minMonth = parseInt(minDateParts[1]) - 1;
      const minDay = parseInt(minDateParts[2]);
      const minDate = new Date(minYear, minMonth, minDay);
      query.where.manufactureDate.gte = minDate;
    }

    if (q.maxManufactureDate) {
      const maxDateParts = q.maxManufactureDate.split("-");
      const maxYear = parseInt(maxDateParts[0]);
      const maxMonth = parseInt(maxDateParts[1]) - 1;
      const maxDay = parseInt(maxDateParts[2]);
      const maxDate = new Date(maxYear, maxMonth, maxDay + 1);
      query.where.manufactureDate.lt = maxDate;
    }
  }
};
