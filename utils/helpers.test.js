const BmiCategory = require("../db/models/bmi");
const HealthRisk = require("../db/models/risk");
const helpers = require("./helpers");


// Initialize variables to hold fetched data from database
var risks 
var cats

// Fetch data from database before running tests if they dont exists
beforeAll(async () => {
  if(!risks) {
    risks = await HealthRisk.findAll();
  }
  if(!cats) {
    cats = await BmiCategory.findAll();
  }
});

// Test cases for risk_extractor function
describe("risk_extractor", () => {
  it("returns the correct risk for a BMI less than 18.5", () => {
    const bmi = 17;
    const expectedRisk = risks.find(
      (o) => o.type === helpers.risk_enum.malnutrition
    );

    const result = helpers.risk_extractor(bmi, risks);

    expect(result).toEqual(expectedRisk);
  });

  it("returns the correct risk for a BMI between 18.5 and 25", () => {
    const bmi = 20;
    const expectedRisk = risks.find((o) => o.type === helpers.risk_enum.low);

    const result = helpers.risk_extractor(bmi, risks);

    expect(result).toEqual(expectedRisk);
  });

  it("returns the correct risk for a BMI between 25 and 30", () => {
    const bmi = 27;
    const expectedRisk = risks.find(
      (o) => o.type === helpers.risk_enum.enhances
    );

    const result = helpers.risk_extractor(bmi, risks);

    expect(result).toEqual(expectedRisk);
  });

  it("returns the correct risk for a BMI between 30 and 35", () => {
    const bmi = 32;
    const expectedRisk = risks.find((o) => o.type === helpers.risk_enum.medium);

    const result = helpers.risk_extractor(bmi, risks);

    expect(result).toEqual(expectedRisk);
  });

  it("returns the correct risk for a BMI between 35 and 40", () => {
    const bmi = 37;
    const expectedRisk = risks.find((o) => o.type === helpers.risk_enum.high);

    const result = helpers.risk_extractor(bmi, risks);

    expect(result).toEqual(expectedRisk);
  });

  it("returns the correct risk for a BMI greater than or equal to 40", () => {
    const bmi = 42;
    const expectedRisk = risks.find(
      (o) => o.type === helpers.risk_enum.veryHigh
    );

    const result = helpers.risk_extractor(bmi, risks);

    expect(result).toEqual(expectedRisk);
  });
});


// Test cases for bmi_category_extractor function
describe('bmi_category_extractor', () => {

  it('returns the correct category for underweight BMI', () => {
    const bmi = 16;
    const expectedCategory = cats.find((o) => o.type == helpers.bmi_category_enum.underweight);
    expect(helpers.bmi_category_extractor(bmi, cats)).toEqual(expectedCategory);
  });

  it('returns the correct category for normal BMI', () => {
    const bmi = 22;
    const expectedCategory = cats.find((o) => o.type == helpers.bmi_category_enum.normal);
    expect(helpers.bmi_category_extractor(bmi, cats)).toEqual(expectedCategory);
  });

  it('returns the correct category for overweight BMI', () => {
    const bmi = 28;
    const expectedCategory = cats.find((o) => o.type == helpers.bmi_category_enum.overweight);
    expect(helpers.bmi_category_extractor(bmi, cats)).toEqual(expectedCategory);
  });

  it('returns the correct category for moderately obese BMI', () => {
    const bmi = 32;
    const expectedCategory = cats.find((o) => o.type == helpers.bmi_category_enum.moderate);
    expect(helpers.bmi_category_extractor(bmi, cats)).toEqual(expectedCategory);
  });

  it('returns the correct category for severely obese BMI', () => {
    const bmi = 38;
    const expectedCategory = cats.find((o) => o.type == helpers.bmi_category_enum.severel);
    expect(helpers.bmi_category_extractor(bmi, cats)).toEqual(expectedCategory);
  });

  it('returns the correct category for very severely obese BMI', () => {
    const bmi = 42;
    const expectedCategory = cats.find((o) => o.type == helpers.bmi_category_enum.verySeverel);
    expect(helpers.bmi_category_extractor(bmi, cats)).toEqual(expectedCategory);
  });
});

